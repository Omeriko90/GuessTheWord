import { createSelector } from "reselect";

const getScore = (state) => state.score;

export const selectScore = createSelector(getScore, (score) => score);
