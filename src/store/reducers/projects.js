import { REDUCER_LABEL as Labels } from "constant";

const projects = (state = [], action) => {
  switch (action.type) {
    case Labels.setProject:
      return setProjects(state, action.payload);
    default:
      return state;
  }
};

function setProjects(state, projects) {
  state = projects;
  return [...state];
}

export default projects;
