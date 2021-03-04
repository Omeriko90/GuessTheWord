import { REDUCER_LABEL as Labels } from "constant";

const user = (state = {}, action) => {
  switch (action.type) {
    case Labels.setUser:
      return setUser(state, action.payload);
    default:
      return state;
  }
};

function setUser(state, user) {
  if (user.length > 0) {
    state = user[0];
  }
  return { ...state };
}

export default user;
