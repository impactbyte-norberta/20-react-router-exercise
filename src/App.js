import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BMI, CateAge, TextTransform, Home } from "./pages";
import { Header } from "./components";

const Main = styled.div`
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    font-family: "MuseoModerno", cursive;
`;

function App() {
    return (
        <Main>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/bmi">
                        <BMI />
                    </Route>
                    <Route exact path="/cate-age">
                        <CateAge />
                    </Route>
                    <Route exact path="/text-transform">
                        <TextTransform />
                    </Route>
                </Switch>
            </Router>
        </Main>
    );
}

export default App;
