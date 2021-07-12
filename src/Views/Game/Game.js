import React, { useContext, useState } from "react";
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

function Game(props) {
  const history = useHistory();
  const { game } = useContext(LabelsContext);
  const [lives, setLives] = useState(3);
  const [usersGuess, setUsersGuess] = useState("");
  const [score, setScore] = useState(0);
  const [isInstructionDialogOpen, setIsInstructionDialogOpen] = useState(true);

  const handleInputChange = (value) => {
    setUsersGuess(value);
  };

  const handleStartButtonClick = () => {
    setIsInstructionDialogOpen(false);
  };

  const test = () => {
    history.push("/gameover");
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
        <Text size={Constant.SIZE.large} bold>
          word
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
          />
        </S.InputContainer>
        <S.ButtonContainer>
          <Button
            color={Constant.COLOR.blue}
            text={game.guessButton}
            size={Constant.SIZE.xl}
            rounded
            onClick={test}
          />
        </S.ButtonContainer>
      </S.GuessContainer>
    </S.GameContainer>
  );
}

export default Game;
