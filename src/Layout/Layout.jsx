import { OuterDiv } from "./LayoutStyle";

import { FixedWidthContainer } from "../Styles/containers";
import Navbar from "../Components/Navbar/Navbar";
import InputBar from "../Components/InputBar/InputBar";
import { Outlet } from "react-router-dom";
import CompeletedTasks from "../Components/TaskList/CompletedTasks/CompeletedTasks";
function Layout() {
  return (
    <FixedWidthContainer>
      <Navbar />
      <OuterDiv>
        <InputBar />
      </OuterDiv>
      <OuterDiv>
        <Outlet />
      </OuterDiv>
    </FixedWidthContainer>
  );
}

export default Layout;
