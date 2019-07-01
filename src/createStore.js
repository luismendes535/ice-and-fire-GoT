import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import rootReducer from "./store/reducers";

export const middlewares = [ReduxThunk];

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);
