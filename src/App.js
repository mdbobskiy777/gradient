import New from "./components/new/New";
import Edit from "./components/edit/Edit";
import Home from "./components/home/Home";
import {Switch} from "react-router"
import {Route} from "react-router"

function App() {
    return (
        <div>
            <Switch>
                <Route exact path={"/"} render={() => <Home/>}/>
                <Route exact path={"/new"} render={() => <New/>}/>
                <Route path={"/edit/:id?"} render={() =>
                    <Edit/>
                }/>
                <Route path={'*'} render={() => <div>404 NOT FOUND</div>}/>
            </Switch>
        </div>
    );
}

export default App;
