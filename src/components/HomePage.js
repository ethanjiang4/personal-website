import React from 'react';
import styled from 'styled-components';
import { fade, delayFade } from './fades';

const HomePage = () => {
    return(
        <Wrapper>
            <MainTitle>Hey, I'm Ethan!</MainTitle>
            <Subtitle>Welcome to my site. I'm a third year UWaterloo Computer Science student.</Subtitle>
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
    font-size: 100px;
    color: #fff1e0;

    text-align: center;

    position: relative;
    margin-top: 15%;

    animation: 1.5s ${fade};

    @media (max-width: 700px) {
        font-size: 60px;
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
`;

export default HomePage;