import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";

import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import LoginScreen from "./screens/loginScreen/LoginScreen";
import WatchScreen from "./screens/watchScreen/WatchScreen";

import "./_app.scss";

const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false);

  const handleToggleSidebar = () => {
    toggleSidebar((value) => !value);
  };

  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />

      <div className="app__container">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />

        <Container fluid className="app__main">
          {children}
        </Container>
      </div>
    </>
  );
};

const App = () => {
  const { accessToken, loading } = useSelector((state) => state.auth);

  const history = useHistory();

  useEffect(() => {
    if (!loading && !accessToken) {
      history.push("/auth");
    }
  }, [accessToken, loading, history]);

  return (
    <Switch>
      {/* Homescreen Route */}
      <Route path="/" exact>
        <Layout>
          <HomeScreen />
        </Layout>
      </Route>

      {/* Authentication Route */}
      <Route path="/auth">
        <LoginScreen />
      </Route>

      {/* Search Result Route */}
      <Route path="/search">
        <Layout>
          <h1>Search Results</h1>
        </Layout>
      </Route>

      {/* Watch Screen Route */}
      <Route path="/watch/:id">
        <Layout>
          <WatchScreen/>
        </Layout>
      </Route>

      {/* Default Route for Invalid Routes */}
      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

export default App;
