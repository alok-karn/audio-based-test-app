import React from "react";
import styled, { keyframes } from "styled-components";
import { IoMicOutline } from "react-icons/io5";

const rippleAnimation = keyframes`
  0% {
    transform: scale(0);
    /* background: radial-gradient(circle, #77b9f7 20%, transparent 5%); */
    background: #0780f1;
    background: ${({ startAnswerBox }) =>
        startAnswerBox ? "#0780f1" : "#272727"};
   
    opacity: 1;
  }
  100% {
    transform: scale(3);
    /* background: radial-gradient(circle, #0077e5 20%, transparent 5%); */
    /* background: #1271cac0; */
    background: ${({ startAnswerBox }) =>
        startAnswerBox ? "#1271cac0" : "#393c3f"};
    opacity: 0;
  }
`;

const MicIconContainer = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    overflow: hidden;
    z-index: 999;
    /* background-color: #77b9f7; */

    .ripple {
        position: absolute;
        width: 40px;
        height: 40px;
        background: radial-gradient(circle, white 20%, transparent 2%);
        border-radius: 50%;
        animation: ${rippleAnimation} 2s linear infinite;
    }

    .ripple:nth-child(2) {
        animation-delay: 1.5s;
    }

    .ripple:nth-child(3) {
        animation-delay: 1s;
    }
`;

const disabledColor = "#747474";

const Circle = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    /* animation: ${rippleAnimation} 2s linear infinite; */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    /* background-color: ${({ startAnswerBox }) =>
        startAnswerBox && startAnswerBox ? "#77b9f7" : disabledColor}; */
`;

const MicIcon = ({ startAnswerBox }) => {
    return (
        <MicIconContainer>
            <Circle
                style={{
                    background: startAnswerBox ? "#77b9f7" : disabledColor,
                }}>
                <IoMicOutline
                    size={40}
                    color="white"
                    style={{
                        // width: "50px",
                        // height: "50px",
                        zIndex: 999,
                        borderRadius: "50%",
                        background: startAnswerBox ? "#77b9f7" : disabledColor,
                    }}
                />
            </Circle>
            <span
                className="ripple"
                style={{
                    background: startAnswerBox ? "#1271cac0" : "#393c3f",
                }}></span>
            <span
                className="ripple"
                style={{
                    background: startAnswerBox ? "#1271cac0" : "#393c3f",
                }}></span>
            <span
                className="ripple"
                style={{
                    background: startAnswerBox ? "#1271cac0" : "#393c3f",
                }}></span>
        </MicIconContainer>
    );
};

export default MicIcon;
