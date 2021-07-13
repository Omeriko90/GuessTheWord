import { REDUCER_LABEL as Labels } from "constant";

const scoreBoard = (state = [], action) => {
  switch (action.type) {
    case Labels.setScoreBoard:
      return addScore(state, action.payload);
    case Labels.getScoreBoard:
      return state;
    default:
      return state;
  }
};

function addScore(state, newScore) {
  if (state) {
    state = [...state, newScore];
  } else {
    state = [newScore];
  }
  return state;
}

export default scoreBoard;
