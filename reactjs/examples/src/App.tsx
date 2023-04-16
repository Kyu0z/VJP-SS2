import React from "react";
import Menu from "./components/Menu";
// import FormSignIn from "./components/Form/FormSignIn";
// import { Sidebarr } from "./components/SideBar";
import DashboardMain from "./components/Dashboard/DashboardMain";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";

const App: React.FC = () => {
  return (
    // <Sidebarr />;
    // <Menu></Menu>
    // <Form></Form>
    // <FormSignIn />
    <ErrorBoundary>
      <DashboardMain />
    </ErrorBoundary>
  );
};

export default App;
