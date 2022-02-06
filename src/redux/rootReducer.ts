import { combineReducers } from "redux";
import storage from "./storage";
import settingReducer from "./slices/setting";

// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
};

const rootReducer = combineReducers({
  setting: settingReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export { rootPersistConfig, rootReducer };
