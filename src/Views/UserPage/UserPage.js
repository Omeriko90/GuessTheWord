import React from "react";
import PropTypes from "prop-types";
import UserProjects from "components/features/UserProjects";
import { Container } from "./style";
import UserDetails from "components/features/UserDetails";
import Card from "components/common/Card";

function UserPage(props) {
  return (
    <Container>
      <UserDetails />
      <UserProjects />
    </Container>
  );
}

export default UserPage;
