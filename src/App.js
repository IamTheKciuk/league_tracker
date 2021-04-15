import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// redux stuff
import { createStore } from "redux";
import { Provider } from "react-redux";

// reducer import
import liveStatsReducer from "./reducers/liveStatsReducer";

// pages
import { Home, LiveDashboard } from "./pages/index";

// components
import { Navbar } from "./components/index";

const store = createStore(
    liveStatsReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
    return (
        <Router>
            <Provider store={store}>
                <Navbar></Navbar>
                <Switch>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route exact path="/livetrack">
                        <LiveDashboard></LiveDashboard>
                    </Route>
                    <Route exact path="/champions">
                        <LiveDashboard></LiveDashboard>
                    </Route>
                    <Route exact path="/items">
                        <LiveDashboard></LiveDashboard>
                    </Route>
                </Switch>
            </Provider>
        </Router>
    );
}

export default App;
