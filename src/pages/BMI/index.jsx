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

export default function BMI() {
    const [data, setData] = useState({ height: 0, weight: 0, result: 0 });

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const result = Number(data.weight) / (Number(data.height) / 100) ** 2;

        setData({
            ...data,
            result: result,
        });
    };
    return (
        <App>
            <section>
                <Title>BMI App</Title>
            </section>
            <Main>
                <form onSubmit={handleSubmit}>
                    <Div as="div">
                        <Input
                            type="number"
                            placeholder="Height"
                            name="height"
                            onChange={handleChange}
                            value={data.height}
                        />
                    </Div>
                    <Div as="div">
                        <Input
                            type="number"
                            placeholder="Weight"
                            name="weight"
                            onChange={handleChange}
                            value={data.weight}
                        />
                    </Div>
                    <Title as="div">
                        <input type="submit" value="Calculate" />
                    </Title>
                </form>
            </Main>
            <Main>
                <p>
                    Your BMI is{" "}
                    {data.result < 17
                        ? "Too Skinny"
                        : data.result >= 17 && data.result <= 18.4
                        ? "Skinny"
                        : data.result >= 18.5 && data.result <= 25
                        ? "Normal"
                        : data.result >= 25.1 && data.result <= 27
                        ? "Fat"
                        : "Too Fat"}
                </p>
            </Main>
        </App>
    );
}
