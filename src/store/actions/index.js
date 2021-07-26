import { REDUCER_LABEL as Labels } from "constant";

const header = {
  "X-Mashape-Key": "",
  "Content-Type": "application/json",
};

export function getNewWord() {
  return apiAction({
    url: `https://wordsapiv1.p.rapidapi.com/words/?random=true`,
    onSuccess: function (word) {
      return {
        type: Labels.setWord,
        payload: word,
      };
    },
    onFailure: apiErr,
    headers: header,
  });
}

export function addPointsToScore(numberOfPoints) {
  return {
    type: Labels.setScore,
    payload: numberOfPoints,
  };
}

export function resetScore() {
  return {
    type: Labels.setResetScore,
    payload: 0,
  };
}

export function addScoreToScoreBoard(score) {
  return {
    type: Labels.setScoreBoard,
    payload: score,
  };
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
