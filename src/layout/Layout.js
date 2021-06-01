import React from "react";

import "./Layout.css";
import Toolbar from "../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../components/Navigation/SideDrawer/SideDrawer";

const layout = (props) => (
  <>
    <Toolbar />
    <SideDrawer />
    <main className="content">{props.children}</main>
  </>
);

export default layout;
