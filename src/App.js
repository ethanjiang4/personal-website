import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ExperiencePage from './components/ExperiencePage';
import ResumePage from './components/ResumePage';
import ContactPage from './components/ContactPage';
import Button from '@material-ui/core/Button';

const App = () => {
  useEffect(() => {
    document.title = `Ethan Jiang`;
  }, [true]);
  document.body.style.backgroundColor = "#212121"
  const [page, setPage] = useState(0);
  return (
    <Background>
      <ButtonRow>
        <StyledButton onClick={() => {setPage(0)}}>Home</StyledButton>
        <StyledButton onClick={() => {setPage(1)}}>About</StyledButton>
        <StyledButton onClick={() => {setPage(2)}}>Experience</StyledButton>
        <StyledButton onClick={() => {setPage(3)}}>Resume</StyledButton>
        <StyledButton onClick={() => {setPage(4)}}>Contact</StyledButton>
      </ButtonRow>
      {page === 0 && <HomePage/>}
      {page === 1 && <AboutPage/>}
      {page === 2 && <ExperiencePage/>}
      {page === 3 && <ResumePage/>}
      {page === 4 && <ContactPage/>}
    </Background>
  );
}

const Background = styled.div`
`;

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 5%;
  right: 5%;
  z-index: 30;
`;

const StyledButton = styled(Button)`
  font-family: Airbnb Cereal App Book !important;
  font-size: 20px !important;
  border-color: #e6f4f5 !important;
  border-width: 1px !important;
  margin-left: 10px !important;
  color: #ffeccf !important;
  :hover {
    color: #ffbb73 !important;
  }
`;

export default App;
