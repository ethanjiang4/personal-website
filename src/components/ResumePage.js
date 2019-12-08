import React from 'react';
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
    min-height: 100vh;
    width: 100vw;
    padding-bottom: 15px;
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
    width: 75%;
    @media (max-width: 700px) {
        width: 90%;
    }
`;

const DownloadButton = styled(Button)`
    font-family: Airbnb Cereal App Book !important;
    font-size: 20px !important;
    color: #fff1e0 !important   ;
    height: 60px !important;
    margin-bottom: 20px !important;
`;

const DownloadIcon = styled(GetAppIcon)`
    margin-right: 10px !important;
`;

export default ResumePage;