import { Fragment } from "react";
import MainHeader from "./Main-header";

// function Layout(props) {
const Layout: React.FC<{ children: JSX.Element }> = (props) => {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
