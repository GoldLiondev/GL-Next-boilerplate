import { useContext } from "react";
// component
import { SideBar, TopBar } from "components/Sidebar";
// type
import { SideBarContextType } from "types/components/SideBar";
import { TopBarContextType } from "types/components/TopBar";

// -----------------------------------------------------------------

const useSideBar = () => {
  const { sideBarState, sideBarDispatch } = useContext<SideBarContextType>(
    SideBar.Context
  );
  const { topBarState, topBarDispatch } = useContext<TopBarContextType>(
    TopBar.Context
  );
  const openBar = (type = "", payload = "") => {
    sideBarState.opened === type
      ? closeBar()
      : sideBarDispatch({ type, payload });
  };
  const closeBar = () => {
    sideBarDispatch({ type: "" });
  };
  const openTopBar = (type = "", payload = "") => {
    topBarState.opened === type
      ? closeTopBar()
      : topBarDispatch({ type, payload });
  };
  const closeTopBar = () => {
    topBarDispatch({ type: "" });
  };
  return {
    currentBar: sideBarState.opened,
    currentTopBar: topBarState.opened,
    openBar,
    closeBar,
    openTopBar,
    closeTopBar,
  };
};
export default useSideBar;
