import React from 'react';
import styled from 'styled-components';
import { fade, delayFade } from './fades';

const AboutPage = () => {
    return(
        <Wrapper>
            <MainTitle>About</MainTitle>
            <Subtitle>I'm Ethan Jiang, a final year Computer Science student at UWaterloo graduating in Spring 2022. I have experience with Docker + Kubernetes pipelines, building APIs from scratch, full stack web apps, native iOS apps, and websites. I'm an all-around software generalist who loves picking up new things.</Subtitle>
            <Subtitle2>Aside from software engineering, I have over 5 years of experience with competitive public speaking, debate, and Model United Nations. I've also been performing magic and cardistry for over 8 years, and I'm the President of the UWaterloo Magic & Cardistry Club!</Subtitle2>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: absolute;
    min-height: 100vh;
`;

const MainTitle = styled.div`
    font-family: Airbnb Cereal App Extra Bold;
    font-size: 70px;
    color: #fff1e0;

    text-align: center;

    position: relative;
    margin-top: 100px;

    animation: 1.5s ${fade};

    @media (max-width: 700px) {
        font-size: 50px;
        margin-top: 50px;
    }
`;

const Subtitle = styled.div`
    font-family: Airbnb Cereal App Medium;
    font-size: 25px;
    color: #fff1e0;

    text-align: center;

    position: relative;
    margin-top: 15px;
    padding-left: 15%;
    padding-right: 15%;

    animation: 1.5s ${delayFade};
    
    @media (max-width: 700px) {
        font-family: Airbnb Cereal App Book;
        font-size: 22px;
        padding-left: 10%;
        padding-right: 10%;
        margin-bottom: 15px;
    }
`;

const Subtitle2 = styled(Subtitle)`
    @media (max-width: 700px) {
        padding-bottom: 30px;
    }
`;

export default AboutPage;