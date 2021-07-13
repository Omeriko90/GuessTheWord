import React, { useContext, useEffect, useState } from "react";
import * as S from "./style";
import * as Constant from "constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Text from "components/common/Text";
import TextInput from "components/common/TextInput";
import Button from "components/common/Button";
import { LabelsContext, ThemeContext } from "helpers/context";
import GameInstructions from "components/features/GameInstructions/GameInstructions";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectScore, selectWord } from "store/selectors";
import { addPointsToScore, getNewWord, resetScore } from "store/actions";
import { isMobile } from "constant";

function Game() {
  const history = useHistory();
  const dispatch = useDispatch();
  const isMobileMode = isMobile();
  const { game } = useContext(LabelsContext);
  const { colors } = useContext(ThemeContext);
  const wordObject = useSelector(selectWord);
  const score = useSelector(selectScore);
  const [lives, setLives] = useState(3);
  const [usersGuess, setUsersGuess] = useState("");
  const [wordToGuess, setWordToGuess] = useState("");
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [difficulty, setDifficulty] = useState(1);
  const [isInstructionDialogOpen, setIsInstructionDialogOpen] = useState(true);
  const [inputErr, setInputErr] = useState("");
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const textInputSize = isMobileMode ? Constant.SIZE.large : Constant.SIZE.xl;
  const guessButtonSize = isMobileMode ? Constant.SIZE.xl : Constant.SIZE.xxl;
  const wordToGuessSize = isMobileMode ? Constant.SIZE.xl : Constant.SIZE.xxl;
  const textSize = isMobileMode ? Constant.SIZE.large : Constant.SIZE.xl;
  const heartIconSize = isMobileMode ? "lg" : "2x";
  console.log(wordObject);
  console.log(wordToGuess);
  useEffect(() => {
    if (!wordObject) {
      dispatch(getNewWord());
    }
    dispatch(resetScore());
  }, []);

  useEffect(() => {
    if (wordObject && !wordToGuess) {
      const wordToDisplay = getWordToDisplay();
      setWordToGuess(wordToDisplay);
      setCorrectAnswers(false);
    }
  }, [wordObject]);

  const getLetter = (letter) => {
    if (letter !== " " && Math.random() > 0.5) {
      return "_";
    }
    return letter;
  };

  const getWordToDisplay = () => {
    let lettersToShow = Math.ceil(wordObject.word?.length / (1 + difficulty));
    let wordWithMissingLetters = "";
    let ranOnTheEntireWord = false;

    while (lettersToShow > 0) {
      for (let i = 0; i < wordObject.word?.length; i++) {
        const letter = getLetter(wordObject.word?.charAt(i));
        if (!ranOnTheEntireWord) {
          wordWithMissingLetters += letter;
          if (!["_", " "].includes(letter)) {
            lettersToShow -= 1;
          }
        } else {
          if (letter !== "_" && wordWithMissingLetters[i] === "_") {
            lettersToShow -= 1;
          } else if (letter === "_" && wordWithMissingLetters[i] !== "_") {
            lettersToShow += 1;
          }
          wordWithMissingLetters = `${wordWithMissingLetters.substring(
            0,
            i
          )}${letter}${wordWithMissingLetters.substring(i + 1)}`;
        }
      }
      ranOnTheEntireWord = true;
    }
    return wordWithMissingLetters;
  };

  const handleInputChange = (value) => {
    setUsersGuess(value);
    inputErr && setInputErr("");
  };

  const handleStartButtonClick = () => {
    setIsInstructionDialogOpen(false);
  };

  const handleGuessClick = () => {
    if (usersGuess?.length === 0) {
      setInputErr(game.inputErr);
    } else if (usersGuess.toLowerCase() === wordObject.word.toLowerCase()) {
      setWordToGuess("");
      setUsersGuess("");
      setCorrectAnswers(true);
      setCorrectAnswers((prevState) => prevState + 1);
      if (correctAnswers > 1 && correctAnswers % 5 === 0 && difficulty < 5) {
        setDifficulty((prevDifficulty) => prevDifficulty + 1);
      }
      dispatch(addPointsToScore(difficulty));
      dispatch(getNewWord());
    } else {
      setInputErr(game.wrongGuess);

      if (lives === 1) {
        history.push("/gameover");
      } else {
        setLives((prevLives) => prevLives - 1);
      }
    }
  };

  return isInstructionDialogOpen ? (
    <GameInstructions onStartButtonClick={handleStartButtonClick} />
  ) : (
    <S.GameContainer>
      <S.GameStateContainer>
        <S.StatsContainer>
          <Text size={textSize}>{game.score}:</Text>
          <Text size={textSize}>{score}</Text>
        </S.StatsContainer>
        <S.StatsContainer>
          <Text size={textSize}>{game.level}:</Text>
          <Text size={textSize}>{difficulty}</Text>
        </S.StatsContainer>
        <S.LifePointsContainer>
          <FontAwesomeIcon
            icon={faHeart}
            color={colors.red.mojo}
            size={heartIconSize}
          />
          <Text size={textSize}>{lives}</Text>
        </S.LifePointsContainer>
      </S.GameStateContainer>
      <S.WordContainer>
        {showCorrectAnswer ? (
          <Text size={wordToGuessSize} bold>
            {game.correctGuess}
          </Text>
        ) : (
          <Text size={wordToGuessSize} bold>
            {wordToGuess}
          </Text>
        )}
      </S.WordContainer>
      <S.GuessContainer>
        <S.InputContainer>
          <TextInput
            size={textInputSize}
            placeholder={game.inputPlaceholder}
            onChange={handleInputChange}
            value={usersGuess}
            rounded
            errorMsg={inputErr}
          />
        </S.InputContainer>
        <S.ButtonContainer>
          <Button
            color={Constant.COLOR.blue}
            text={game.guessButton}
            size={guessButtonSize}
            rounded
            onClick={handleGuessClick}
          />
        </S.ButtonContainer>
      </S.GuessContainer>
    </S.GameContainer>
  );
}

export default Game;
