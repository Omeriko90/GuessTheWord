import React, { useContext } from "react";
import * as S from "./style";
import ScoreBoardHeader from "./ScoreBoardHeader";
import ScoreBoardBody from "./ScoreBoardBody";
import { ThemeContext } from "helpers/context";

function ScoreBoard() {
  const { colors } = useContext(ThemeContext);
  return (
    <S.ScoreBoardContainer bgColor={colors.white}>
      <ScoreBoardHeader />
      <ScoreBoardBody />
    </S.ScoreBoardContainer>
  );
}

export default ScoreBoard;
