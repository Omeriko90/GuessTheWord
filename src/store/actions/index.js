import { REDUCER_LABEL as Labels } from "constant";

const header = { berear: "" };

export function logIn(username, password) {
  return apiAction({
    url: `https://private-052d6-testapi4528.apiary-mock.com/authenticate`,
    method: "POST",
    data: { username, password },
    onSuccess: function (user) {
      return {
        type: Labels.setUser,
        payload: user,
      };
    },
    onFailure: apiErr,
  });
}

export function getUserProjects(userToken) {
  header.berear = userToken;
  return apiAction({
    url: `https://private-052d6-testapi4528.apiary-mock.com/info?`,
    onSuccess: function (projects) {
      return {
        type: Labels.setProject,
        payload: projects,
      };
    },
    onFailure: apiErr,
    headers: header,
  });
}

function apiErr(err, callback) {
  callback && callback();
  console.log(err.message);
  return {
    type: "API_ERR",
    payload: err,
  };
}

function apiAction({
  url = "",
  method = "GET",
  data = null,
  accessToken = null,
  onSuccess = () => {},
  onFailure = () => {},
  label = "",
  headers = null,
  payload = null,
  type = "API",
}) {
  return {
    type,
    payload,
    metaData: {
      api: {
        url,
        method,
        data,
        accessToken,
        onSuccess,
        onFailure,
        label,
        headers,
      },
    },
  };
}
