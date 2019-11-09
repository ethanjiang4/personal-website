import React, { useState } from 'react';
import styled from 'styled-components';

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
    color: #ffeccf;

    text-align: center;

    position: relative;
    margin-top: 15%;
`;

const Subtitle = styled.div`
    font-family: Airbnb Cereal App Medium;
    font-size: 30px;
    color: #ffeccf;

    text-align: center;

    position: relative;
    margin-top: 30px;
    padding-left: 10%;
    padding-right: 10%;
`;

export default HomePage;