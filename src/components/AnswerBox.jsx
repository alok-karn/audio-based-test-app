import React, { useEffect, useState } from "react";
import { PiTimerBold } from "react-icons/pi";
import styled from "styled-components";
import MicIcon from "./MicIcon";

const AnswerContainer = styled.div`
    background-color: ${({ startAnswerBox, remainingTime }) =>
        !startAnswerBox || remainingTime === 0
            ? "white"
            : remainingTime < 10
            ? "#ebac72"
            : "#b7d5f7"};
    padding: 20px;
    border-radius: 5px;
    width: 70%;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const TopBox = styled.div``;
const BottomBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    column-gap: 10px;
`;

const Badge = styled.div`
    background-color: white;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 5px;
    border-radius: 25px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
`;

const ParaText = styled.p`
    font-weight: 700;
    font-size: 14px;
    color: #161616;
    margin-right: 5px;
`;

const RemainingTime = styled.span`
    font-weight: bold;
    font-size: 14px;
    color: #7878fd;
`;

const TimeLeft = styled.span`
    font-weight: bold;
    font-size: 14px;
    color: #b6b6b6;
`;

const MicContainer = styled.div`
    /* background-color: #f5f5f5; */
    padding: 20px;
    border-radius: 5px;
    width: 500px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const WarningContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    padding: 10px;
    /* border: 2px solid black; */
    width: 400px;
`;
const Warning = styled.span`
    font-weight: 700;
    font-size: 14px;
    color: #e42f2f;
`;

const AnswerBox = ({ startAnswerBox, setIsAnswerBoxComplete }) => {
    const [remainingTime, setRemainingTime] = useState(60);

    useEffect(() => {
        const countdownInterval = setInterval(() => {
            if (remainingTime > 0 && startAnswerBox) {
                setRemainingTime(remainingTime - 1);
            }
        }, 1000);

        return () => {
            clearInterval(countdownInterval);
        };
    }, [remainingTime, startAnswerBox]);

    // useEffect(() => {
    //     if (remainingTime === 0) {
    //         isAnswerBoxCompleted(true)
    //     }
    // })
    useEffect(() => {
        if (remainingTime === 0 && startAnswerBox) setIsAnswerBoxComplete(true);
    }, [remainingTime, startAnswerBox]);

    return (
        <AnswerContainer
            startAnswerBox={startAnswerBox}
            remainingTime={remainingTime}>
            <TopBox>
                <MicContainer>
                    <MicIcon />
                </MicContainer>
            </TopBox>
            <BottomBox>
                <ParaText>Answering Time: </ParaText>
                <Badge>
                    <PiTimerBold />
                    {startAnswerBox ? (
                        <RemainingTime>{remainingTime} seconds</RemainingTime>
                    ) : (
                        <RemainingTime>60 seconds</RemainingTime>
                    )}
                    <TimeLeft> left</TimeLeft>
                </Badge>
            </BottomBox>
            <WarningContainer>
                {startAnswerBox && remainingTime < 10 && (
                    <Warning>Please start concluding your answer !</Warning>
                )}
            </WarningContainer>
        </AnswerContainer>
    );
};

export default AnswerBox;
