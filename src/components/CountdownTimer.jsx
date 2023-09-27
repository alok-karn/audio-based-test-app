import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const CountdownContainer = styled.div`
    position: relative;
    margin: auto;
    margin-top: 100px;
    height: 100px;
    width: 100px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CountdownNumber = styled.div`
    color: black;
    /* display: inline-block; */
    line-height: 40px;
`;

const CountdownSvg = styled.svg`
    /* position: absolute;
    top: 0;
    right: 0; */
    width: 100px;
    height: 100px;
    transform: rotateY(-180deg) rotateZ(-90deg);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CountdownCircle = styled.circle`
    stroke-dasharray: 113px;
    stroke-dashoffset: ${({ dashOffset }) => dashOffset};
    stroke-linecap: round;
    stroke-width: 12px;
    stroke: #be1f1f;
    fill: none;
    animation: ${keyframes`
    from {
      stroke-dashoffset: 0px;
    }
    to {
      stroke-dashoffset: ${({ dashOffset }) => dashOffset};
    }
  `} 10s linear infinite forwards;
`;

const CountdownTimer = () => {
    const [countdown, setCountdown] = useState(60);

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown((prevCountdown) =>
                prevCountdown <= 1 ? 60 : prevCountdown - 1
            );
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const circleDashOffset = ((60 - countdown) / 60) * 113 + "px";

    return (
        <CountdownContainer>
            {/* <CountdownNumber>{countdown}</CountdownNumber> */}

            <CountdownSvg>
                <CountdownCircle
                    dashOffset={circleDashOffset}
                    r="30"
                    cx="100"
                    cy="100"></CountdownCircle>
            </CountdownSvg>
        </CountdownContainer>
    );
};

export default CountdownTimer;
