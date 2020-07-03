import React, { useState } from "react";
import styled from "styled-components";

const App = styled.div`
    width: 100%;
    display: block;
`;

const Title = styled.h1`
    text-align: center;
`;

const Main = styled.section`
    display: flex;
    justify-content: center;
`;

const Input = styled.input`
    padding: 5px 0;
    box-sizing: border-box;
`;

const Div = styled.div`
    margin: 5px 0;
    box-sizing: border-box;
`;

export default function CateAge() {
    const [data, setData] = useState({ cat: 0, result: 0 });

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const result =
            Number(data.cat) === 1
                ? 15
                : Number(data.cat) === 2
                ? 24
                : data.cat >= 3 && 24 + (data.cat - 2) * 4;

        setData({
            ...data,
            result: result,
        });
    };
    return (
        <App>
            <section>
                <Title>Cate Age Convertion</Title>
            </section>
            <Main>
                <form onKeyUp={handleSubmit}>
                    <Div as="div">
                        <Input
                            type="number"
                            placeholder="Cat Age"
                            name="cat"
                            onChange={handleChange}
                            value={data.cat}
                        />
                    </Div>
                </form>
            </Main>
            <Main>
                <p>
                    When Cat Age {data.cat} Years, Human Age is {data.result}{" "}
                    Years
                </p>
            </Main>
        </App>
    );
}
