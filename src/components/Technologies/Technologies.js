import React from 'react';
import { DiCode, DiCodeigniter, DiCss3, DiDatabase, DiFirebase, DiGit, DiGitCommit, DiHtml5, DiJava, DiJavascript, DiPython, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <br />
    <SectionDivider />
    <br /><br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've Worked with a range of technologies in the web development world.  
    </SectionText>
    <List>
      <ListItem>
        
        <ListContainer>
          <DiCode size='3rem' />
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            Python <br />
            Java <br />
            HTML, CSS, JavaScript <br />
            TypeScript <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size='3rem' />
        <ListContainer>
          <ListTitle>Frameworks & Libraries</ListTitle>
          <ListParagraph>
            React.js <br />
            BootStrap <br />
            jQuery <br />
            SpringBoot <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiGitCommit size='3rem' />
        <ListContainer>
          <ListTitle>Others</ListTitle>
          <ListParagraph>
            Git <br />
            Competitive Programming <br />
            DataStructures and Algorithms <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
