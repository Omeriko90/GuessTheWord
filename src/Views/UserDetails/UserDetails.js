import React from "react";
import PropTypes from "prop-types";
import Card from "components/common/Card";
import { useUser } from "hooks";

function UserDetails(props) {
  const {
    getUserDetails,
    getUserToken,
    getProjects,
    getNotOverDueProjectsPercent,
    getAverageProjectsScore,
    user,
    projects,
  } = useUser();
  console.log(user, projects);
  return <Card></Card>;
}

export default UserDetails;
