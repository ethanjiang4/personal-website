import React from 'react';
import styled from 'styled-components';
import { fade, delayFade } from './fades';
import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const ContactPage = () => {
    const emailUrl = 'mailto:ethanjiang4@gmail.com'
    const githubUrl = 'https://github.com/ethanjiang4'
    const linkedinUrl = 'https://linkedin.com/in/ethanjiang4'
    return(
        <Wrapper>
            <MainTitle>Contact</MainTitle>
            <ContactColumn>
                <ContactButton onClick={() => {window.open(emailUrl, "_blank")}}>
                    <StyledEmailIcon/>
                    ethanjiang4@gmail.com
                </ContactButton>
                <ContactButton onClick={() => {window.open(githubUrl, "_blank")}}>
                    <StyledGithubIcon/>
                    github.com/ethanjiang4
                </ContactButton>
                <ContactButton onClick={() => {window.open(linkedinUrl, "_blank")}}>
                    <StyledLinkedInIcon/>
                    linkedin.com/in/ethanjiang4
                </ContactButton>
            </ContactColumn>
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

const ContactColumn = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    margin-top: 15px;
    justify-content: center;
    align-items: center;
    animation: 1.5s ${delayFade};
`;

const ContactButton = styled(Button)`
    font-family: Airbnb Cereal App Medium !important;
    font-size: 22px !important;
    color: #fff1e0 !important;
    margin-left: 15px !important;
    margin-bottom: 15px !important;
    width: 50% !important;
    @media (max-width: 700px) {
        margin-left: 0px !important;
        width: 100vw !important;
        font-size: 18px !important;
    }
    height: 80px !important;
`;

const StyledEmailIcon = styled(EmailIcon)`
    margin-right: 10px !important;
`;

const StyledLinkedInIcon = styled(LinkedInIcon)`
    margin-right: 10px !important;
`;

const StyledGithubIcon = styled(GitHubIcon)`
    margin-right: 10px !important;
`;

export default ContactPage