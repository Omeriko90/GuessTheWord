import { createSelector } from "reselect";

const getProjects = (state) => state.projects;

export const selectProjects = createSelector(
  getProjects,
  (projects) => projects
);
