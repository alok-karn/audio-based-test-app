import React from "react";
import styled, { keyframes } from "styled-components";
import { IoMicOutline } from "react-icons/io5";

const rippleAnimation = keyframes`
  0% {
    transform: scale(0);
    /* background: radial-gradient(circle, #77b9f7 20%, transparent 5%); */
    background: #0780f1;
    opacity: 1;
  }
  100% {
    transform: scale(3);
    /* background: radial-gradient(circle, #0077e5 20%, transparent 5%); */
    background: #1271cac0;
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
    /* background-color: #77b9f7; */

    .ripple {
        position: absolute;
        width: 40px;
        height: 40px;
        background: radial-gradient(circle, white 20%, transparent 2%);
        border-radius: 50%;
        animation: ${rippleAnimation} 2s linear infinite;
        /* z-index: ; */
    }

    .ripple:nth-child(2) {
        animation-delay: 1.5s;
    }

    .ripple:nth-child(3) {
        animation-delay: 1s;
    }
`;

const Circle = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    /* animation: ${rippleAnimation} 2s linear infinite; */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    background-color: #77b9f7;
`;

const MicIcon = () => {
    return (
        <MicIconContainer>
            <Circle>
                <IoMicOutline
                    size={40}
                    color="white"
                    style={{
                        // width: "50px",
                        // height: "50px",
                        zIndex: 999,
                        borderRadius: "50%",
                        background: "#77b9f7",
                    }}
                />
            </Circle>
            <span className="ripple"></span>
            <span className="ripple"></span>
            <span className="ripple"></span>
        </MicIconContainer>
    );
};

export default MicIcon;
