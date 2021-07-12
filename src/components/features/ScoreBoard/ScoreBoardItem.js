import React, { useContext } from "react";
import * as S from "./style";
import * as Constant from "constant";
import Text from "components/common/Text";
import { ThemeContext } from "helpers/context";

function ScoreBoardItem({ label }) {
  const { colors } = useContext(ThemeContext);

  return (
    <S.ScoreBoardItemContainer>
      <Text size={Constant.SIZE.medium} color={colors.gray.gray600}>
        {label}
      </Text>
    </S.ScoreBoardItemContainer>
  );
}

export default ScoreBoardItem;
