import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, selectProjects } from "store/selectors";
import { SORT_TYPE } from "constant";
import { getUserProjects } from "store/actions";

const useUser = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const projects = useSelector(selectProjects);

  useEffect(() => {
    if (user && user.token) {
      localStorage.setItem("user_token", user.token);
      dispatch(getUserProjects(user.token));
    }
  }, [user]);

  useEffect(() => {
    debugger;
  }, [projects]);

  const getUserDetails = () => {
    return user;
  };

  const getUserToken = () => {
    const token = localStorage.getItem("user_token");
    return token ? token : "";
  };

  const getProjects = (sortType, sortColumn) => {
    if (sortType === SORT_TYPE.asc) {
      return projects?.sort((projectA, projectB) =>
        projectA[sortColumn] > projectB[sortColumn] ? 1 : -1
      );
    }

    return projects?.sort((projectA, projectB) =>
      projectA[sortColumn] > projectB[sortColumn] ? -1 : 1
    );
  };

  const getNumberOfSuccessfulProjects = () => {
    return projects?.map((project) => project.madeDadeline).length;
  };

  const getNotOverDueProjectsPercent = () => {
    const numberOfSuccessfulProjects = getNumberOfSuccessfulProjects();

    return (numberOfSuccessfulProjects / projects?.length) * 100;
  };

  const getTotalProjectsScore = () => {
    return projects?.reduce(
      (projectA, projectB) =>
        parseFloat(projectA.score) + parseFloat(projectB.score),
      0
    );
  };

  const getAverageProjectsScore = () => {
    const numberOfSuccessfulProjects = getTotalProjectsScore();

    return numberOfSuccessfulProjects / projects?.length;
  };

  return {
    getUserDetails,
    getUserToken,
    getProjects,
    getNotOverDueProjectsPrecent: getNotOverDueProjectsPercent,
    getAverageProjectsScore,
    user,
    projects,
  };
};

export default useUser;
