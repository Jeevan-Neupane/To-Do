import Layout from "./Layout/Layout";

import GlobalStyle from "./Styles/globalStyle";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "./Styles/theme";
import useGlobalState from "./Hooks/useGlobalState";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import CompeletedTasks from "./Components/TaskList/CompletedTasks/CompeletedTasks";
import AllTasks from "./Components/TaskList/AllTasks/AllTasks";
import PendingTasks from "./Components/TaskList/PendingTasks/PendingTasks";

function App() {
  const { state } = useGlobalState();
  const { darkTheme } = state;

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />} path="/">
        <Route path="tasks/completed" element={<CompeletedTasks />} />
        <Route path="tasks/pending" element={<PendingTasks />} />
        <Route path="/" element={<AllTasks />} />
      </Route>
    )
  );

  return (
    <ThemeProvider theme={darkTheme ? DarkTheme : LightTheme}>
      <RouterProvider router={router} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
