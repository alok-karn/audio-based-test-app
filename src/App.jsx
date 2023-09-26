// import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";
import AnswerBox from "./components/AnswerBox";
import QuestionBox from "./components/QuestionBox";

function App() {
    const [startAnswerBox, setStartAnswerBox] = useState(false);
    return (
        <div className="App">
            <QuestionBox
                questionNo={2}
                questionText={
                    "What is your inspiration behind choosing teaching Quantum physics as your career?"
                }
                setStartAnswerBox={setStartAnswerBox}
            />
            {startAnswerBox && <AnswerBox />}
        </div>
    );
}

export default App;
