import { createSelector } from "reselect";

const getWords = (state) => state.words;

export const selectWord = createSelector(getWords, (words) => {
  if (words) {
    return words[words.length - 1];
  } else {
    return "";
  }
});
