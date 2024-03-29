import React from 'react';
import styled from 'styled-components';
import { fade, delayFade } from './fades';

const HomePage = () => {
    return(
        <Wrapper>
            <MainTitle>Hey, I'm Ethan!</MainTitle>
            <Subtitle>Welcome to my site. I'm a UWaterloo Computer Science student, graduating in Spring 2022.</Subtitle>
            <Subtitle>Currently seeking full time work!</Subtitle>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: absolute;
    min-height: 100vh;
    min-width: 100vw;
`;

const MainTitle = styled.div`
    font-family: Airbnb Cereal App Extra Bold;
    font-size: 90px;
    color: #fff1e0;

    text-align: center;

    position: relative;
    margin-top: 15%;

    animation: 1.5s ${fade};

    @media (max-width: 700px) {
        font-family: Airbnb Cereal App Bold;
        font-size: 60px;
        margin-right: 10px;
        margin-left: 10px;
    }
`;

const Subtitle = styled.div`
    font-family: Airbnb Cereal App Medium;
    font-size: 30px;
    color: #fff1e0;

    text-align: center;

    position: relative;
    margin-top: 30px;
    padding-left: 10%;
    padding-right: 10%;

    animation: 1.5s ${delayFade};

    @media (max-width: 700px) {
        font-family: Airbnb Cereal App Book;
        font-size: 25px;
    }
`;

export default HomePage;