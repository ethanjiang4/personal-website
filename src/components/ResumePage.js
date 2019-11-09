import React from 'react';
import styled from 'styled-components';
import { fade, delayFade } from './fades';

const ResumePage = () => {
    return(
        <Wrapper>
            <MainTitle>Resume</MainTitle>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: absolute;
    height: 100vh;
    width: 100vw;
`;

const MainTitle = styled.div`
    font-family: Airbnb Cereal App Extra Bold;
    font-size: 70px;
    color: #ffeccf;

    text-align: center;

    position: relative;
    margin-top: 10%;

    animation: 1.5s ${fade};
`;

export default ResumePage;