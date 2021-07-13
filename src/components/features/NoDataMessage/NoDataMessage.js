import React, { useContext } from "react";
import * as S from "./style";
import * as Constant from "constant";
import Text from "components/common/Text";
import { LabelsContext, ThemeContext } from "helpers/context";

function NoDataMessage() {
  const { colors } = useContext(ThemeContext);
  const { global } = useContext(LabelsContext);
  return (
    <S.NoDataMessageWrapper>
      <Text size={Constant.SIZE.medium} color={colors.gray.gray500}>
        {global.noData}
      </Text>
    </S.NoDataMessageWrapper>
  );
}

export default NoDataMessage;
