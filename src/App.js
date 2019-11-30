import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ExperiencePage from './components/ExperiencePage';
import ResumePage from './components/ResumePage';
import ContactPage from './components/ContactPage';
import Button from '@material-ui/core/Button';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import MenuIcon from '@material-ui/icons/Menu';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles({
  paper: {
    backgroundColor: "#212121",
  },
  list: {
    width: 200,
    backgroundColor: "#212121",
  },
  fullList: {
    width: 'auto',
  },
});

const StyledDrawer = withStyles({
  paper: {
    background: '#212121',
  },
})(Drawer);

const StyledItem = withStyles({
  root: {
    paddingLeft: '0px',
  }
})(ListItem);

const App = () => {
  useEffect(() => {
    document.title = `Ethan Jiang`;
  }, []);
  document.body.style.backgroundColor = "#212121"
  const [page, setPage] = useState(0);
  const small = useMediaQuery('(max-width:700px)');

  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    > 
      <List>
          <StyledItem>
            <StyledButton onClick={() => {setPage(0)}}>Home</StyledButton>
          </StyledItem>
          <StyledItem>
            <StyledButton onClick={() => {setPage(1)}}>About</StyledButton>
          </StyledItem>
          <StyledItem>
            <StyledButton onClick={() => {setPage(2)}}>Experience</StyledButton>
          </StyledItem>
          <StyledItem>
            <StyledButton onClick={() => {setPage(3)}}>Resume</StyledButton>
          </StyledItem>
          <StyledItem>
            <StyledButton onClick={() => {setPage(4)}}>Contact</StyledButton>
          </StyledItem>
      </List>
    </div>
  );

  return (
    <Background>
      <StyledDrawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
        {sideList('right')}
      </StyledDrawer>
      <ButtonRow>
        {small && <MenuButton onClick={toggleDrawer('right', true)}>
          <MenuIcon fontSize="large"/>
        </MenuButton>}
        {!small && 
        <>
          <StyledButton onClick={() => {setPage(0)}}>Home</StyledButton>
          <StyledButton onClick={() => {setPage(1)}}>About</StyledButton>
          <StyledButton onClick={() => {setPage(2)}}>Experience</StyledButton>
          <StyledButton onClick={() => {setPage(3)}}>Resume</StyledButton>
          <StyledButton onClick={() => {setPage(4)}}>Contact</StyledButton>
        </>}
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
  top: 30px;
  right: 30px;
  z-index: 30;

  @media (max-width: 700px) {
    top: 10px;
    right: 10px;
  }
`;

const StyledButton = styled(Button)`
  font-family: Airbnb Cereal App Book !important;
  font-size: 20px !important;
  border-color: #fff1e0 !important;
  border-width: 1px !important;
  margin-left: 10px !important;
  color: #ffeccf !important;
  :hover {
    color: #ffbb73 !important;
  }
`;

const MenuButton = styled(StyledButton)`
  border-color: #fff1e0 !important;
  border-width: 1px !important;
  margin-left: 10px !important;
  color: #ffeccf !important;
`;

export default App;
