import React, { useContext } from "react";
import * as S from "./style";
import * as Constant from "constant";
import Dialog from "components/common/Dialog";
import { LabelsContext } from "helpers/context";
import Text from "components/common/Text";
import Button from "components/common/Button";

function GameInstructions({ onStartButtonClick }) {
  const { gameInstructions } = useContext(LabelsContext);

  const handleLetsBeginClick = () => {
    onStartButtonClick && onStartButtonClick();
  };

  return (
    <Dialog isOpen>
      <S.InstructionContainer>
        <S.TextWrapper withSpacesInside>
          <Text size={Constant.SIZE.medium} preWrap>
            {gameInstructions.howToPlay}
          </Text>
          <Text size={Constant.SIZE.medium} preWrap bold>
            {gameInstructions.pleaseNote}
          </Text>
        </S.TextWrapper>
        <S.TextWrapper>
          <Text size={Constant.SIZE.medium} preWrap>
            {gameInstructions.levels}
          </Text>
        </S.TextWrapper>
        <S.TextWrapper>
          <Text size={Constant.SIZE.medium} bold preWrap>
            {gameInstructions.haveFun}
          </Text>
        </S.TextWrapper>
        <S.ButtonWrapper>
          <Button
            text={gameInstructions.letsBegin}
            color={Constant.COLOR.blue}
            onClick={handleLetsBeginClick}
          />
        </S.ButtonWrapper>
      </S.InstructionContainer>
    </Dialog>
  );
}

export default GameInstructions;
