import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.header`
    display: flex;
    justify-content: center;
`;

const NavLink = styled.span`
    padding: 0 10px;
    & a {
        text-decoration: none;
        color: black;
    }

    & a:hover {
        border: dashed black 2px;
        padding: 5px;
        box-sizing: border-box;
    }
`;

export default function index() {
    return (
        <Header>
            <NavLink>
                <Link to="/bmi">BMI Application</Link>
            </NavLink>
            <NavLink>
                <Link to="/cate-age">Cate Age Convertion</Link>
            </NavLink>
            <NavLink>
                <Link to="/text-transform">Text Transform</Link>
            </NavLink>
        </Header>
    );
}
