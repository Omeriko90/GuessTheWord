import React, { useContext, useState } from "react";
import * as S from "./style";
import * as Constant from "constant";
import Text from "components/common/Text";
import { LabelsContext } from "helpers/context";
import TextInput from "components/common/TextInput";
import ScoreBoard from "components/features/ScoreBoard";
import Button from "components/common/Button";

function GameOver(props) {
  const { gameOver } = useContext(LabelsContext);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const score = 100;
  const scoreText = `${gameOver.yourScore}: ${score}`;

  const handleNameChange = (value) => {
    setName(value);
  };

  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);
  };

  const handleSubmitScore = () => {
    alert(`Score Submitted.\nname: ${name} \nphone number: ${phoneNumber}`);
  };

  return (
    <S.GameOverContainer>
      <S.HeadlineContainer>
        <Text size={Constant.SIZE.xl} bold>
          {gameOver.headline}
        </Text>
        <Text size={Constant.SIZE.large}>{scoreText}</Text>
      </S.HeadlineContainer>
      <S.FormContainer>
        <S.InputsContainer>
          <S.InputContainer>
            <TextInput
              placeholder={gameOver.name}
              value={name}
              onChange={handleNameChange}
              rounded
            />
          </S.InputContainer>
          <S.InputContainer>
            <TextInput
              placeholder={gameOver.phoneNumber}
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              rounded
            />
          </S.InputContainer>
        </S.InputsContainer>
        <S.ButtonContainer>
          <Button
            text={gameOver.submitButton}
            color={Constant.COLOR.primary}
            rounded
            onClick={handleSubmitScore}
          />
        </S.ButtonContainer>
      </S.FormContainer>
      <S.ScoreBoardContainer>
        <S.ScoreBoardHeadlineContainer>
          <Text size={Constant.SIZE.large} bold>
            {gameOver.scoreBoardHeadline}
          </Text>
        </S.ScoreBoardHeadlineContainer>
        <ScoreBoard />
      </S.ScoreBoardContainer>
    </S.GameOverContainer>
  );
}

export default GameOver;
