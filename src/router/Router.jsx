import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Top } from "../component/pages/Top";
import { Users } from "../component/pages/Users";
import { DefaultLayout } from "../component/templetes/DefaultLayout";
import { HeaderOnly } from "../component/templetes/HeaderOnly";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DefaultLayout>
            <Top />
          </DefaultLayout>
        </Route>
        <Route path="/users">
          <HeaderOnly>
            <Users />
          </HeaderOnly>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
