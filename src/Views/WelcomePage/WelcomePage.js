import React, { useContext } from "react";
import * as S from "./style";
import * as Constant from "constant";
import Text from "components/common/Text";
import Button from "components/common/Button";
import { LabelsContext } from "helpers/context";
import { useHistory } from "react-router-dom";

function WelcomePage() {
  const { welcomePage } = useContext(LabelsContext);
  const history = useHistory();

  const handleStartGameClick = () => {
    history.push("/game");
  };

  return (
    <S.WelcomePageContainer>
      <S.ContentContainer>
        <S.HeadlineContainer>
          <Text size={Constant.SIZE.xxl} bold color={"white"}>
            {welcomePage.headline}
          </Text>
        </S.HeadlineContainer>
        <S.ButtonContainer>
          <Button
            text={welcomePage.startGame}
            size={Constant.SIZE.xxl}
            color={Constant.COLOR.primary}
            onClick={handleStartGameClick}
          />
        </S.ButtonContainer>
        <S.HighScoreContainer>
          <Text size={Constant.SIZE.xl} color={"white"}>
            {welcomePage.highestScore}
          </Text>
          <Text size={Constant.SIZE.xl} color={"white"}>
            1000
          </Text>
        </S.HighScoreContainer>
      </S.ContentContainer>
    </S.WelcomePageContainer>
  );
}

export default WelcomePage;
