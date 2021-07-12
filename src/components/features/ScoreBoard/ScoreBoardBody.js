import React, { useContext } from "react";
import * as S from "./style";
import * as Constant from "constant";
import ScoreBoardItem from "./ScoreBoardItem";
import { ThemeContext } from "helpers/context";

function ScoreBoardBody() {
  return (
    <S.ScoreBoardBodyContainer>
      {temp.map((item) => {
        return (
          <S.ScoreBoardRowWrapper>
            <ScoreBoardItem label={item.name} />
            <ScoreBoardItem label={item.phoneNumber} />
          </S.ScoreBoardRowWrapper>
        );
      })}
    </S.ScoreBoardBodyContainer>
  );
}

export default ScoreBoardBody;

const temp = [
  { name: "omer", phoneNumber: "0544893629" },
  { name: "omer", phoneNumber: "0544893629" },
  { name: "omer", phoneNumber: "0544893629" },
  { name: "omer", phoneNumber: "0544893629" },
  { name: "omer", phoneNumber: "0544893629" },
];
