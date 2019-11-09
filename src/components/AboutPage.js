import React from 'react';
import styled, { keyframes } from 'styled-components';
import { fade, delayFade } from './fades';

const AboutPage = () => {
    return(
        <Wrapper>
            <MainTitle>About</MainTitle>
            <Subtitle>I'm Ethan Jiang, a third year Computer Science student at UWaterloo graduating in 2022. I have experience building REST APIs, full stack web apps, native iOS apps, and websites. I'm an all-around software generalist who loves picking up new things.</Subtitle>
            <Subtitle>Aside from software engineering, I have over 5 years of experience with competitive public speaking, debate, and Model United Nations. I've also been performing magic and cardistry for over 6 years, and I'm the President of the UWaterloo Magic & Cardistry Club!</Subtitle>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: absolute;
    height: 100vh;
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

const Subtitle = styled.div`
    font-family: Airbnb Cereal App Medium;
    font-size: 25px;
    color: #ffeccf;

    text-align: center;

    position: relative;
    margin-top: 15px;
    padding-left: 15%;
    padding-right: 15%;

    animation: 2s ${delayFade};
`;

export default AboutPage;