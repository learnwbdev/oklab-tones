import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { router } from "../..";
import store from "../../store/store.ts";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles["app"]}>
      <RouterProvider router={router} />
    </div>
  );
};

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default AppWrapper;
