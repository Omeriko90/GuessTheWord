import { createBrowserHistory } from "history";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import score from "store/reducers/score";
import scoreBoard from "store/reducers/scoreBoard";
import words from "store/reducers/words";
import apiMiddleware from "./middleware/api";

export const history = createBrowserHistory();
export default function configureStore(initialState) {
  const reducers = {
    score,
    scoreBoard,
    words,
  };

  const rootReducer = combineReducers({
    ...reducers,
    router: connectRouter(history),
  });

  const middleware = [apiMiddleware, routerMiddleware(history)].filter(Boolean);

  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware))
  );
}
