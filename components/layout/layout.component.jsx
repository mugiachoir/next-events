import { Fragment } from "react";
import MainHeader from "./main-header.component";

const Layout = (props) => (
  <Fragment>
    <MainHeader />
    <main>{props.children}</main>
  </Fragment>
);

export default Layout;
