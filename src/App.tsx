import { Route, Switch } from "react-router-dom";

import { ArticlePage } from "./features/Article/ArticlePage";
import { HomePage } from "./features/Home/HomePage";
import { ProfilePage } from "./features/Profile/ProfilePage";
import { SignInPage } from "./features/SignIn/SignInPage";

import { Layout } from "components";
import { UrlPaths } from "utils";

import "./app.css";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path={UrlPaths.SIGN_IN} exact component={SignInPage} />
        <Route path={`${UrlPaths.PROFILE}/:username`} exact component={ProfilePage} />
        <Route path={`${UrlPaths.HOME}/:slug`} exact component={ArticlePage} />
        <Route path={UrlPaths.HOME} component={HomePage} />
      </Switch>
    </Layout>
  );
}

export default App;
