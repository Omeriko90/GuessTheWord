import React, { useContext, useState } from "react";
import * as S from "./style";
import * as Constant from "constant";
import Text from "components/common/Text";
import { LabelsContext } from "helpers/context";
import TextInput from "components/common/TextInput";
import ScoreBoard from "components/features/ScoreBoard";
import Button from "components/common/Button";
import { useDispatch, useSelector } from "react-redux";
import { selectScore } from "store/selectors";
import { addScoreToScoreBoard } from "store/actions";
import { useHistory } from "react-router-dom";

function GameOver(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { gameOver } = useContext(LabelsContext);
  const score = useSelector(selectScore);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [phoneNumberErr, setPhoneNumberErr] = useState("");
  const scoreText = `${gameOver.yourScore}: ${score}`;

  const resetNameErr = () => {
    setNameErr("");
  };

  const resetPhoneNumberErr = () => {
    setPhoneNumberErr("");
  };

  const resetInputsError = () => {
    resetNameErr();
    resetPhoneNumberErr();
  };

  const handleNameChange = (value) => {
    setName(value);
    resetNameErr();
  };

  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);
    resetPhoneNumberErr();
  };

  const handleSubmitScore = () => {
    const numbers = /^[0-9]+$/;
    const phoneNumberContainsOnlyNumbers = phoneNumber.match(numbers);
    if (
      name.length > 1 &&
      phoneNumber.length > 0 &&
      phoneNumberContainsOnlyNumbers
    ) {
      dispatch(addScoreToScoreBoard({ name, phoneNumber, score }));
      resetInputsError();
    } else {
      if (name.length < 2) {
        setNameErr(gameOver.nameErr);
      } else {
      }
      if (phoneNumber.length === 0) {
        setPhoneNumberErr(gameOver.phoneNumberErr);
      } else if (!phoneNumberContainsOnlyNumbers) {
        setPhoneNumberErr(gameOver.onlyNumbersErr);
      }
    }
  };

  const goToUrl = (url) => {
    history.push(url);
  };

  const handleBackToHomePageClick = () => {
    goToUrl("/");
  };

  const handleNewGameClick = () => {
    goToUrl("/game");
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
              errorMsg={nameErr}
              size={Constant.SIZE.large}
            />
          </S.InputContainer>
          <S.InputContainer>
            <TextInput
              placeholder={gameOver.phoneNumber}
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              rounded
              errorMsg={phoneNumberErr}
              size={Constant.SIZE.large}
            />
          </S.InputContainer>
        </S.InputsContainer>
        <S.ButtonsContainer>
          <S.ButtonContainer>
            <Button
              text={gameOver.submitButton}
              color={Constant.COLOR.primary}
              rounded
              onClick={handleSubmitScore}
            />
          </S.ButtonContainer>
          <S.ButtonContainer>
            <Button
              text={gameOver.newGame}
              color={Constant.COLOR.primary}
              rounded
              onClick={handleNewGameClick}
            />
          </S.ButtonContainer>
          <S.ButtonContainer>
            <Button
              text={gameOver.backToHome}
              color={Constant.COLOR.primary}
              rounded
              onClick={handleBackToHomePageClick}
            />
          </S.ButtonContainer>
        </S.ButtonsContainer>
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
