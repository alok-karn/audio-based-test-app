// import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";
import AnswerBox from "./components/AnswerBox";
import QuestionBox from "./components/QuestionBox";
import styled from "styled-components";

const Navigation = styled.div`
    background-color: #285fb3;
    padding: 20px;
    width: 100%;
    height: 10px;
    margin-bottom: 20px;
`;

function App() {
    const [startAnswerBox, setStartAnswerBox] = useState(false);
    // const [isAnswerBoxCompleted, setIsAnswerBoxCompleted] = useState(false);
    const [isAnswerBoxComplete, setIsAnswerBoxComplete] = useState(false);
    return (
        <div className="App">
            <Navigation />
            <QuestionBox
                questionNo={2}
                questionText={
                    "What is your inspiration behind choosing teaching Quantum physics as your career?"
                }
                setStartAnswerBox={setStartAnswerBox}
                isAnswerBoxComplete={isAnswerBoxComplete}
            />
            <AnswerBox
                startAnswerBox={startAnswerBox}
                setIsAnswerBoxComplete={setIsAnswerBoxComplete}
            />
            {/* {startAnswerBox ? <AnswerBox /> : <AnswerBox />}
             */}
            {/* <AnswerBox startAnswerBox={startAnswerBox} /> */}
        </div>
    );
}

export default App;
