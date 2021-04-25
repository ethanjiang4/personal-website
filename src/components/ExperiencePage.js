import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button'
import Chip from '@material-ui/core/Chip';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Paper from '@material-ui/core/Paper';
import { fade, delayFade } from './fades';

const ExperiencePage = () => {
    const [showExp1, setExp1] = useState(false);
    const [showExp2, setExp2] = useState(false);
    const [showExp3, setExp3] = useState(false);
    const [showExp4, setExp4] = useState(false);

    return (
        <Wrapper>
            <MainTitle>Experience</MainTitle>
            <ExpCards>
                <ExpCard>
                    <OpenNewButton onClick={() => { window.open('https://joinhoney.com', '_blank') }}>
                        <OpenNewIcon />
                    </OpenNewButton>
                    <ExpCardTitle>Honey/Paypal</ExpCardTitle>
                    <ExpCardSubtitle>Software Engineering Intern, Core Architecture</ExpCardSubtitle>
                    <ExpCardDesc>Remote</ExpCardDesc>
                    <ExpCardDesc>Los Angeles, CA, USA</ExpCardDesc>
                    <ExpCardDesc>Jan - Apr 2021</ExpCardDesc>
                    {showExp4 && <MoreExpCardDesc>
                        • Built internal incident analysis tool to query, filter, and display over 50,000 Datadog events a day with React and Node.js. {"\n"}
                        • Developed internal Node.js package to trigger integration tests from CircleCI and retrieve results from Google Cloud Storage, used by Honey's GraphQL Federation and users API. {"\n"}
                        • Upgraded Honey's testing infrastructure with customizable Kubernetes environment variables, customizable Spinnaker pipelines for direct load balancer testing, and a UI overhaul for Honey's internal testing dashboard with React.{"\n"}
                    </MoreExpCardDesc>}
                    {showExp4 && <StackRow>
                        <TechChip variant="outlined" label="GraphQL" />
                        <TechChip variant="outlined" label="Kubernetes" />
                        <TechChip variant="outlined" label="Node.js" />
                        <TechChip variant="outlined" label="React" />
                        <TechChip variant="outlined" label="Spinnaker" />
                    </StackRow>}
                    <ShowMoreButton onClick={() => { showExp4 ? setExp4(false) : setExp4(true) }}>
                        {!showExp4 && <ExpandMoreIcon />}
                        {showExp4 && <ExpandLessIcon />}
                    </ShowMoreButton>
                </ExpCard>
                <ExpCard>
                    <OpenNewButton onClick={() => { window.open('https://hyperpad.com', '_blank') }}>
                        <OpenNewIcon />
                    </OpenNewButton>
                    <ExpCardTitle>hyperPad</ExpCardTitle>
                    <ExpCardSubtitle>Full Stack Software Engineering Intern</ExpCardSubtitle>
                    <ExpCardDesc>London, ON, Canada</ExpCardDesc>
                    <ExpCardDesc>Sept - Dec 2019</ExpCardDesc>
                    {showExp3 && <MoreExpCardDesc>
                        • Architected commenting and user API for hyperPad’s game sharing native hub
                        of 10,000 users with Objective-C and Ruby on Rails. {"\n"}
                        • Optimized and deployed child healthcare application for UC Irvine’s medical
                        research team on iOS and Android with React/React Native and Apollo GraphQL. {"\n"}
                        • Built front-end for youth job board progressive web application for Sony
                        with React and React Redux.{"\n"}
                    </MoreExpCardDesc>}
                    {showExp3 && <StackRow>
                        <TechChip variant="outlined" label="GraphQL" />
                        <TechChip variant="outlined" label="Objective-C" />
                        <TechChip variant="outlined" label="PostgreS" />
                        <TechChip variant="outlined" label="Rails" />
                        <TechChip variant="outlined" label="React" />
                        <TechChip variant="outlined" label="Redux" />
                    </StackRow>}
                    <ShowMoreButton onClick={() => { showExp3 ? setExp3(false) : setExp3(true) }}>
                        {!showExp3 && <ExpandMoreIcon />}
                        {showExp3 && <ExpandLessIcon />}
                    </ShowMoreButton>
                </ExpCard>
                <ExpCard>
                    <OpenNewButton onClick={() => { window.open('https://cooperators.ca', '_blank') }}>
                        <OpenNewIcon />
                    </OpenNewButton>
                    <ExpCardTitle>The <span style={{whiteSpace: 'nowrap'}}>Co-operators</span></ExpCardTitle>
                    <ExpCardSubtitle>Software Developer Intern</ExpCardSubtitle>
                    <ExpCardDesc>Kitchener, ON, Canada</ExpCardDesc>
                    <ExpCardDesc>Jan - Apr 2019</ExpCardDesc>
                    {showExp2 && <MoreExpCardDesc>
                        • Team lead for cross-platform enterprise web app reaching 2000 employees.{"\n"}
                        • Replaced legacy software; sped up insurance prospecting process by 50%.{"\n"}
                        • Designed and implemented UI/UX with Angular and Ionic.{"\n"}
                        • Developed RESTful API backend with Node.js, Express, and PostgreS.{"\n"}
                    </MoreExpCardDesc>}
                    {showExp2 && <StackRow>
                        <TechChip variant="outlined" label="Angular" />
                        <TechChip variant="outlined" label="Express" />
                        <TechChip variant="outlined" label="Ionic" />
                        <TechChip variant="outlined" label="Node.js" />
                        <TechChip variant="outlined" label="PostgreS" />
                    </StackRow>}
                    <ShowMoreButton onClick={() => { showExp2 ? setExp2(false) : setExp2(true) }}>
                        {!showExp2 && <ExpandMoreIcon />}
                        {showExp2 && <ExpandLessIcon />}
                    </ShowMoreButton>
                </ExpCard>
                <ExpCard>
                    <OpenNewButton onClick={() => { window.open('https://procom.ca', '_blank') }}>
                        <OpenNewIcon />
                    </OpenNewButton>
                    <ExpCardTitle>Procom</ExpCardTitle>
                    <ExpCardSubtitle>Jr. Network Administrator</ExpCardSubtitle>
                    <ExpCardDesc>Toronto, ON, Canada</ExpCardDesc>
                    <ExpCardDesc>May - Aug 2018</ExpCardDesc>
                    {showExp1 && <MoreExpCardDesc>
                        • Automated unlocking computers, performing status checks, and Active Directory
                        administration by developing Powershell scripts. {"\n"}
                        • Worked with over 400 clients to troubleshoot and repair hardware and software.{"\n"}
                    </MoreExpCardDesc>}
                    {showExp1 && <StackRow>
                        <TechChip variant="outlined" label="Active Directory" />
                        <TechChip variant="outlined" label="Powershell" />
                    </StackRow>}
                    <ShowMoreButton onClick={() => { showExp1 ? setExp1(false) : setExp1(true) }}>
                        {!showExp1 && <ExpandMoreIcon />}
                        {showExp1 && <ExpandLessIcon />}
                    </ShowMoreButton>
                </ExpCard>
            </ExpCards>

            <SecondaryTitle>Projects</SecondaryTitle>
            <ExpCards>
                <ExpCard>
                    <OpenNewButton onClick={() => { window.open('https://github.com/ethanjiang4/iMagic', '_blank') }}>
                        <OpenNewIcon />
                    </OpenNewButton>
                    <ExpCardTitle>iMagic</ExpCardTitle>
                    <ExpCardSubtitle>iOS App for Performing Magic</ExpCardSubtitle>
                    <ExpCardDesc>
                        • iOS app to assist magicians in a variety of prediction and mind-reading illusions
                    with custom preferences.{"\n"}
                        • Used in over 15 private magic shows with 400+ audience members.{"\n"}
                        • Built with Swift with ARKit integration in progress.{"\n"}
                    </ExpCardDesc>
                    <ProjectRow>
                        <TechChip variant="outlined" label="ARKit" />
                        <TechChip variant="outlined" label="Swift" />
                    </ProjectRow>
                </ExpCard>
                <ExpCard>
                    <OpenNewButton onClick={() => { window.open('https://github.com/chronovise/Chronovise', '_blank') }}>
                        <OpenNewIcon />
                    </OpenNewButton>
                    <ExpCardTitle>Chronovise</ExpCardTitle>
                    <ExpCardSubtitle>Productivity Chrome Extension</ExpCardSubtitle>
                    <ExpCardDesc>Hack The North 2018</ExpCardDesc>
                    <ExpCardDesc>
                        • Productivity Chrome extension designed to organize and edit sets of websites.{"\n"}
                        • Synced user data to Google account for cross-platform support.{"\n"}
                        • Designed UI/UX, logo, and developed product website.{"\n"}
                        • Built with HTML/CSS/JS, Bootstrap, Google Chrome API, Google Cloud Storage.{"\n"}
                    </ExpCardDesc>
                    <ProjectRow>
                        <TechChip variant="outlined" label="Bootstrap" />
                        <TechChip variant="outlined" label="Google Chrome API" />
                        <TechChip variant="outlined" label="Google Cloud Storage" />
                        <TechChip variant="outlined" label="Photoshop" />
                    </ProjectRow>
                </ExpCard>
            </ExpCards>

            <SecondaryTitle>Education</SecondaryTitle>
            <ExpCards>
                <ExpCard>
                    <OpenNewButton onClick={() => { window.open('https://uwaterloo.ca/', '_blank') }}>
                        <OpenNewIcon />
                    </OpenNewButton>
                    <ExpCardTitle>University of Waterloo</ExpCardTitle>
                    <ExpCardSubtitle>Bachelor of Honours Computer Science</ExpCardSubtitle>
                    <ExpCardDesc>
                        2017 - 2022 (exp.)
                    </ExpCardDesc>
                    <ProjectRow/>
                </ExpCard>
            </ExpCards>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: absolute;
    min-height: 100vh;
    min-width: 100%;
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

const SecondaryTitle = styled.div`
    font-family: Airbnb Cereal App Extra Bold;
    font-size: 55px;
    color: #fff1e0;

    text-align: center;

    position: relative;

    animation: 1.5s ${fade};

    @media (max-width: 700px) {
        font-size: 40px;
        font-family: Airbnb Cereal App Bold;
    }
`;

const ExpCards = styled.div`
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    margin-left: 5px;
    margin-right: 5px;
    margin-bottom: 30px;

    animation: 1.5s ${delayFade};
`;

const ExpCard = styled(Paper)`
    position: relative;
    max-width: 700px !important;
    width: fill-available;
    text-align: center !important;
    margin-top: 30px !important;
    padding: 15px 30px 0px 30px !important;
    background-color: #303030 !important;
`;

const ExpCardTitle = styled.div`
    font-family: Airbnb Cereal App Bold;
    font-size: 40px;
    margin-right: 15px;
    color: #fff1e0;
    text-align: left;

    @media (max-width: 700px) {
        font-size: 35px;
    }
`;

const ExpCardSubtitle = styled.div`
    font-family: Airbnb Cereal App Medium;
    font-size: 25px;
    color: #fff1e0;
    margin-top: 5px;
    text-align: left;
`;

const ExpCardDesc = styled.div`
    font-family: Airbnb Cereal App Book;
    font-size: 20px;
    color: #fff1e0;
    margin-top: 5px;
    text-align: left;
    white-space: pre-wrap;
`;

const MoreExpCardDesc = styled(ExpCardDesc)`
    animation: 1s ${fade};
`;

const ShowMoreButton = styled(Button)`
    color: #fff1e0 !important;
    width: 20%;
`;

const StackRow = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    flex-wrap: wrap;
    animation: 1s ${fade};
`;

const ProjectRow = styled(StackRow)`
    margin-bottom: 15px;
`;

const TechChip = styled(Chip)`
    color: #fff1e0 !important;
    border-color: #fff1e0 !important;
    font-family: Airbnb Cereal App Medium !important;
    font-size: 15px !important;
    padding-bottom: 1px !important;
    margin-right: 10px !important;
    margin-top: 5px !important;
`;

const OpenNewIcon = styled(OpenInNewIcon)`
    color: #fff1e0 !important;
`;

const OpenNewButton = styled(Button)`
    color: #fff1e0 !important;
    position: absolute !important;
    top: 0px !important;
    right: 0px !important;
    height: 55px !important;
`;

export default ExperiencePage;