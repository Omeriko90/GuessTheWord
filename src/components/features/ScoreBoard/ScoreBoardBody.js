import React from "react";
import * as S from "./style";
import ScoreBoardItem from "./ScoreBoardItem";
import { useSelector } from "react-redux";
import { selectScoreBoard } from "store/selectors";
import NoDataMessage from "../NoDataMessage";

function ScoreBoardBody() {
  const scoreBoard = useSelector(selectScoreBoard);

  return (
    <S.ScoreBoardBodyContainer>
      {scoreBoard?.length > 0 ? (
        scoreBoard?.map((item, index) => {
          return (
            <S.ScoreBoardRowWrapper key={`score-${index}`}>
              <ScoreBoardItem label={item.name} />
              <ScoreBoardItem label={item.phoneNumber} />
              <ScoreBoardItem label={item.score} />
            </S.ScoreBoardRowWrapper>
          );
        })
      ) : (
        <NoDataMessage />
      )}
    </S.ScoreBoardBodyContainer>
  );
}

export default ScoreBoardBody;
