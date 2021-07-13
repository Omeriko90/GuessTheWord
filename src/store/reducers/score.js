import { REDUCER_LABEL as Labels } from "constant";

const score = (state = 0, action) => {
  switch (action.type) {
    case Labels.setScore:
      return setScore(state, action.payload);
    case Labels.getScore:
      return state;
    case Labels.setResetScore:
      return resetScore(state, action.payload);
    default:
      return state;
  }
};

function setScore(state, score) {
  if (state) {
    state += score;
  } else {
    state = score;
  }
  return state;
}

function resetScore(state, score) {
  state = score;

  return state;
}

export default score;
