import React, { useContext } from "react";
import * as S from "./style";
import * as Constant from "constant";
import Text from "components/common/Text";
import { LabelsContext, ThemeContext } from "helpers/context";

function ScoreBoardHeader() {
  const { scoreBoard } = useContext(LabelsContext);
  const { colors } = useContext(ThemeContext);
  return (
    <S.ScoreBoardHeaderContainer>
      <S.ScoreBoardHeaderColumnContainer>
        <Text size={Constant.SIZE.medium} color={colors.gray.gray600}>
          {scoreBoard.nameColumn}
        </Text>
      </S.ScoreBoardHeaderColumnContainer>
      <S.ScoreBoardHeaderColumnContainer>
        <Text size={Constant.SIZE.medium} color={colors.gray.gray600}>
          {scoreBoard.phoneNumberColumn}
        </Text>
      </S.ScoreBoardHeaderColumnContainer>
      <S.ScoreBoardHeaderColumnContainer>
        <Text size={Constant.SIZE.medium} color={colors.gray.gray600}>
          {scoreBoard.score}
        </Text>
      </S.ScoreBoardHeaderColumnContainer>
    </S.ScoreBoardHeaderContainer>
  );
}

export default ScoreBoardHeader;
