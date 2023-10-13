import { MainDiv, RightDiv, LeftDiv, Logo, Lists, Links } from "./NavbarStyle";
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import { NavLink } from "react-router-dom";
import useGlobalState from "../../Hooks/useGlobalState";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MenuIcons, MobileLists, MobileLink } from "./NavbarStyle";
function Navbar() {
  const location = useLocation();

  const [showNav, setShowNav] = useState(false);

  const { state } = useGlobalState();
  const { darkTheme } = state;

  useEffect(() => {
    setShowNav(false);
  }, [location.pathname]);

  const linkStyle = ({ isActive }) => {
    return {
      color: !darkTheme ? "#0F1419" : "#ffffff",
      borderBottom: isActive
        ? `1px solid ${!darkTheme ? "#0F1419" : "#ffffff"}`
        : " ",
      transition: "none",
    };
  };

  const onMenuIconClick = () => {
    setShowNav(!showNav);
  };
  const MobileNavbar = (
    <MobileLists>
      <NavLink style={linkStyle} to={"/"}>
        <MobileLink>All</MobileLink>
      </NavLink>
      <NavLink style={linkStyle} to={"tasks/completed"}>
        <MobileLink>Completed</MobileLink>
      </NavLink>
      <NavLink style={linkStyle} to={"tasks/pending"}>
        <MobileLink>Pending</MobileLink>
      </NavLink>
    </MobileLists>
  );
  return (
    <MainDiv>
      <LeftDiv>
        <Logo>To-Do</Logo>
      </LeftDiv>

      <RightDiv>
        {showNav && MobileNavbar}
        <Lists>
          <NavLink style={linkStyle} to={"/"}>
            <Links>All</Links>
          </NavLink>
          <NavLink style={linkStyle} to={"tasks/completed"}>
            <Links>Completed</Links>
          </NavLink>
          <NavLink style={linkStyle} to={"tasks/pending"}>
            <Links>Pending</Links>
          </NavLink>
        </Lists>
        <ThemeToggler />
        <MenuIcons onClick={onMenuIconClick} />
      </RightDiv>
    </MainDiv>
  );
}

export default Navbar;
