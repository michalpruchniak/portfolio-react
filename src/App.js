import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Main from './Main'
import Projects from './components/more/projects/index'


function App () {
    return (
        <Router>
            <Switch>

                <Route path="/projects">
                    <Projects />
                </Route>
                <Route path="/">
                    <Main />
                </Route>
            </Switch>
        </Router >

    );
}

export default App;