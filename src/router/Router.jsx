import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Top } from "../component/pages/Top";
import { Users } from "../component/pages/Users";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Top />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
