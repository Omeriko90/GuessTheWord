import { createBrowserHistory } from "history";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import user from "./reducers/user";
import projects from "./reducers/projects";
import apiMiddleware from "./middleware/api";

export const history = createBrowserHistory();
export default function configureStore(initialState) {
  const reducers = {
    projects,
    user,
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
