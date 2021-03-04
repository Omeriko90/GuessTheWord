import React, { useState } from "react";
import PropTypes from "prop-types";
import Card from "components/common/Card";
import {
  Container,
  HeaderContainer,
  InputContainer,
  InputsContainer,
  ButtonContainer,
  Content,
  ErrorContainer,
} from "./style";
import Text from "components/common/Text";
import TextInput from "components/common/TextInput";
import {
  COLOR,
  SIZE,
  EMAIL_ADDRESS_REGEX,
  VALID_PASSWORD_LENGTH,
  PASSWORD_LETTER_VALIDATION,
  PASSWORD_NUMBER_VALIDATION,
} from "constant";
import { TEXT_INPUT_TYPE } from "constant";
import { useDispatch } from "react-redux";
import Button from "components/common/Button";
import { logIn } from "store/actions";
import { useHistory } from "react-router";

function Login(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [usernameErr, setUsernameErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const shouldShowUsernameErr = usernameErr.length > 0;
  const shouldShowPasswordErr = passwordErr.length > 0;

  const validateUsername = () => {
    let isValid = username.length > 0;
    isValid =
      isValid && EMAIL_ADDRESS_REGEX.test(String(username).toLowerCase());
    !isValid && setUsernameErr("Invalid Username");

    return isValid;
  };

  const isValidPasswordLength = () => {
    const isValid = password.length >= VALID_PASSWORD_LENGTH;
    isValid && setPasswordErr("Password must be at least 8 characters long");
    return password.length >= VALID_PASSWORD_LENGTH;
  };

  const hasAtLeastOneCapitalLetter = () => {
    const isValid = PASSWORD_LETTER_VALIDATION.test(password);
    isValid &&
      setPasswordErr((prevState) =>
        prevState.length > 0
          ? `${prevState} \n\r Password must contain at least one capital letter`
          : prevState
      );
    return isValid;
  };

  const hasAtLeastOneNumber = () => {
    const isValid = PASSWORD_NUMBER_VALIDATION.test(password);
    isValid &&
      setPasswordErr((prevState) =>
        prevState.length > 0
          ? `${prevState} \n\r Password must contain at least one number`
          : prevState
      );
    return isValid;
  };

  const validatePassword = () => {
    let isValid = isValidPasswordLength();
    isValid = isValid && hasAtLeastOneCapitalLetter();
    isValid = isValid && hasAtLeastOneNumber();

    return isValid;
  };
  const validateCredentials = () => {
    return validateUsername() && validatePassword();
  };

  const handleUsernameChange = (value) => {
    setUserName(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleSubmit = () => {
    const isValid = validateCredentials();

    if (isValid) {
      dispatch(logIn(username, password));
      history.push("/userdetails");
    }
  };
  return (
    <Container>
      <Card height={"500px"}>
        <HeaderContainer>
          <Text size={SIZE.xxl}>Welcome To Omer App</Text>
        </HeaderContainer>
        <Content>
          <InputsContainer>
            <InputContainer>
              <TextInput
                width={"100%"}
                size={SIZE.large}
                rounded
                type={TEXT_INPUT_TYPE.email}
                value={username}
                onChange={handleUsernameChange}
              />
              {shouldShowUsernameErr && (
                <ErrorContainer>
                  <Text size={SIZE.medium} color={"#FA6D6D"}>
                    {usernameErr}
                  </Text>
                </ErrorContainer>
              )}
            </InputContainer>
            <InputContainer>
              <TextInput
                width={"100%"}
                size={SIZE.large}
                rounded
                type={TEXT_INPUT_TYPE.password}
                value={password}
                onChange={handlePasswordChange}
              />
              {shouldShowPasswordErr && (
                <ErrorContainer>
                  <Text size={SIZE.medium} color={"#FA6D6D"}>
                    {passwordErr}
                  </Text>
                </ErrorContainer>
              )}
            </InputContainer>
          </InputsContainer>
          <ButtonContainer>
            <Button
              iconName={"spin"}
              size={SIZE.large}
              color={COLOR.primary}
              width={"100%"}
              text={"Log In"}
              rounded
              onClick={handleSubmit}
            />
          </ButtonContainer>
        </Content>
      </Card>
    </Container>
  );
}

export default Login;
