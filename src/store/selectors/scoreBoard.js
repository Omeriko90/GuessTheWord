import { createSelector } from "reselect";

const getScoreBoard = (state) => state.scoreBoard;

export const selectScoreBoard = createSelector(
  getScoreBoard,
  (scoreBoard) => scoreBoard
);

export const getHighestScore = createSelector(getScoreBoard, (scoreBoard) => {
  const scores = scoreBoard.map((currScore) => currScore.score);
  return Math.max(scores);
});
