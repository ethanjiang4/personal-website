import React, { setState } from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { fade, delayFade } from './fades';
import resume from '../assets/EthanJiang_Resume.png';
import resumePdf from '../assets/EthanJiang_Resume.pdf'
import GetAppIcon from '@material-ui/icons/GetApp';

const ResumePage = () => {
    return(
        <Wrapper>
            <MainTitle>Resume</MainTitle>
            <ResumeContainer>
                <DownloadButton
                    href={resumePdf}
                    target="_blank"
                    download
                >
                    <DownloadIcon/>
                    Download PDF
                </DownloadButton>
                <Resume src={resume}/>
            </ResumeContainer>  
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
    margin-top: 8%;

    animation: 1.5s ${fade};
`;

const ResumeContainer = styled.div`
    margin-top: 15px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    animation: 1.5s ${delayFade};
`;

const Resume = styled.img`
    width: 60%;
`;

const DownloadButton = styled(Button)`
    font-family: Airbnb Cereal App Book !important;
    font-size: 20px !important;
    color: #ffeccf !important   ;
    height: 60px !important;
    margin-bottom: 20px !important;
`;

const DownloadIcon = styled(GetAppIcon)`
    margin-right: 10px !important;
`;

export default ResumePage;