import { OuterDiv } from "./ThemeTogglerStyle";
import { BiSolidSun } from "react-icons/bi";
import { BiSolidMoon } from "react-icons/bi";
import useGlobalState from "../../Hooks/useGlobalState";
function ThemeToggler() {
  const { ThemeToggler, state } = useGlobalState();
  const { darkTheme } = state;

  return (
    <OuterDiv
      onClick={() => {
        ThemeToggler(!darkTheme);
      }}
    >
      {darkTheme ? <BiSolidSun /> : <BiSolidMoon />}
    </OuterDiv>
  );
}

export default ThemeToggler;
