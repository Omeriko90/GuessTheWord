import { REDUCER_LABEL as Labels } from "constant";

const words = (state = [], action) => {
  switch (action.type) {
    case Labels.setWord:
      return addWord(state, action.payload);
    default:
      return state;
  }
};

function addWord(state, newWord) {
  if (state) {
    state = [...state, newWord];
  } else {
    state = [newWord];
  }

  return state;
}

export default words;
