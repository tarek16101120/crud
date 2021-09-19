import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import home from "./components/home/home";
import read from "./components/read/read";
import notfound from "./components/notfound/notfound";
import create from "./components/create/create";
import { UserProvider } from "./components/usercontext/usercontext";
import delete from "./components/delete/delete";
import update from "./components/update/update";

function App() {
  return (
    <UserProvider> 
      <div className="app">
        <Router>
          <Switch>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/read/:id">
              <Read />
            </Route>
            <Route path="/update/:id">
              <Update />
            </Route>
            <Route path="/delete/:id">
              <Delete />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </div>
    </UserProvider>
  );
}

export default App;
