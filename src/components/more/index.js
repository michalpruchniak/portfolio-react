import React from "react";
import Projects from './projects'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function More () {
    return (
        <Switch>
            <Route path="/projects">
                <Projects />
            </Route>
        </Switch>
    )
}

export default More;