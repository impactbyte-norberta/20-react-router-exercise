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
    const [data, setData] = useState({ text: "", result: "" });

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const split = data.text.split("");
        const result = split
            .map((item) => {
                if (item.match(/[A-Z]/)) {
                    item = item.toLowerCase();
                } else {
                    item = item.toUpperCase();
                }

                return item;
            })
            .join("");

        setData({
            ...data,
            result: result,
        });
    };
    return (
        <App>
            <section>
                <Title>Text Transform</Title>
            </section>
            <Main>
                <form onKeyUp={handleSubmit}>
                    <Div as="div">
                        <Input
                            type="text"
                            placeholder="Text"
                            name="text"
                            onChange={handleChange}
                            value={data.text}
                        />
                    </Div>
                </form>
            </Main>
            <Main>
                <p>
                    Transform text {data.text} is {data.result}
                </p>
            </Main>
        </App>
    );
}
