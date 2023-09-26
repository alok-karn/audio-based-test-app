import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { PiTimerBold } from "react-icons/pi";

const QuestionContainer = styled.div`
    background-color: ${({ isSpeakNow }) => (isSpeakNow ? "white" : "#76b1f3")};
    padding: 20px;
    /* border: 1px solid #ddd; */
    /* border-radius: 5px; */
    width: 70%;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
`;

const QuestionNumber = styled.div`
    font-size: 14px;
    font-weight: medium;
`;

const QuestionText = styled.h2`
    font-size: 18px;
    margin-top: 10px;
`;

const BadgeContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
`;

const Badge = styled.div`
    background-color: white;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    border: ${({ isSpeakNow }) => (isSpeakNow ? "3px solid #51d61c" : "none")};
`;

const ClockIcon = styled.span`
    /* font-size: 20px; */
    /* margin-top: auto; */
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
`;

const StartSpeakingText = styled.span`
    font-weight: 500;
    font-size: 14px;
    color: #b3b3b3;
    margin-right: 5px;
`;

const RemainingTime = styled.span`
    font-weight: bold;
    font-size: 14px;
    color: #7878fd;
`;

const Text = styled.span`
    font-weight: 600;
    font-size: 12px;
`;

const QuestionBox = ({
    questionNo,
    questionText,
    setStartAnswerBox,
    isAnswerBoxComplete,
}) => {
    const [remainingTime, setRemainingTime] = useState(20);

    useEffect(() => {
        if (isAnswerBoxComplete) {
            setRemainingTime(20);
            setStartAnswerBox(false);
        }
    }, [isAnswerBoxComplete]);

    useEffect(() => {
        const countdownInterval = setInterval(() => {
            if (remainingTime > 0) {
                setRemainingTime(remainingTime - 1);
            } else {
                setStartAnswerBox(true);
                clearInterval(countdownInterval);
            }
        }, 1000);

        return () => {
            clearInterval(countdownInterval);
        };
    }, [remainingTime]);

    return (
        <QuestionContainer isSpeakNow={remainingTime === 0}>
            <QuestionNumber>Question {questionNo}</QuestionNumber>
            <QuestionText>{questionText}</QuestionText>
            <BadgeContainer>
                <Badge isSpeakNow={remainingTime === 0}>
                    {remainingTime === 0 ? (
                        <Text>Speak Now</Text>
                    ) : (
                        <>
                            <ClockIcon>
                                <PiTimerBold />
                            </ClockIcon>
                            <StartSpeakingText>
                                Start speaking in
                            </StartSpeakingText>
                            <RemainingTime>
                                {remainingTime} seconds
                            </RemainingTime>
                        </>
                    )}
                </Badge>
            </BadgeContainer>
        </QuestionContainer>
    );
};

export default QuestionBox;
