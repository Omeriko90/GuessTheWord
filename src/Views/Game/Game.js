import React, { useContext, useEffect, useState } from "react";
import * as S from "./style";
import * as Constant from "constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Text from "components/common/Text";
import TextInput from "components/common/TextInput";
import Button from "components/common/Button";
import { LabelsContext } from "helpers/context";
import GameInstructions from "components/features/GameInstructions/GameInstructions";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectScore, selectWord } from "store/selectors";
import { addPointsToScore, getNewWord, resetScore } from "store/actions";

function Game() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { game } = useContext(LabelsContext);
  const wordObject = { word: "right away" }; //useSelector(selectWord);
  const score = useSelector(selectScore);
  const [lives, setLives] = useState(3);
  const [usersGuess, setUsersGuess] = useState("");
  const [wordToGuess, setWordToGuess] = useState("");
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [difficulty, setDifficulty] = useState(1);
  const [isInstructionDialogOpen, setIsInstructionDialogOpen] = useState(true);
  const [inputErr, setInputErr] = useState("");

  useEffect(() => {
    if (!wordObject) {
      // dispatch(getNewWord());
    }
    dispatch(resetScore());
  }, []);

  useEffect(() => {
    if (wordObject && !wordToGuess) {
      const wordToDisplay = getWordToDisplay();
      setWordToGuess(wordToDisplay);
    }
  }, [wordObject, wordToGuess]);

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
      setCorrectAnswers((prevState) => prevState + 1);
      if (correctAnswers === 4 && difficulty < 5) {
        setDifficulty((prevDifficulty) => prevDifficulty + 1);
      }
      dispatch(addPointsToScore(difficulty));
      // dispatch(getNewWord());
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
        <S.ScoreContainer>
          <Text size={Constant.SIZE.large}>{game.score}</Text>
          <Text size={Constant.SIZE.large}>{score}</Text>
        </S.ScoreContainer>
        <S.LifePointsContainer>
          <FontAwesomeIcon icon={faHeart} color={"#C44536"} size={"lg"} />
          <Text size={Constant.SIZE.large}>{lives}</Text>
        </S.LifePointsContainer>
      </S.GameStateContainer>
      <S.WordContainer>
        <Text size={Constant.SIZE.xl} bold>
          {wordToGuess}
        </Text>
      </S.WordContainer>
      <S.GuessContainer>
        <S.InputContainer>
          <TextInput
            size={Constant.SIZE.large}
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
            size={Constant.SIZE.xl}
            rounded
            onClick={handleGuessClick}
          />
        </S.ButtonContainer>
      </S.GuessContainer>
    </S.GameContainer>
  );
}

export default Game;
