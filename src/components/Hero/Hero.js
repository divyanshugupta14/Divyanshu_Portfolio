import React from 'react';
import Typical from 'react-typical'

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <div>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle>
          Welcome to <br />
          My Crazy World
        </SectionTitle>
        <SectionText>
          Hello, I'm Divyanshu Gupta <br /> 
          <h2 style={{color: 'hsl(204,23.8%,95.9%)'}}>
            <Typical loop = {Infinity} steps = {['FullStack Developer', 2000, 'Coding Enthusiast', 2000]}/>
          </h2>
          Explore this portfolio and my other projects and let me know what you think about it!
          {/* <br /> <br />
          Mobile: +91 9680105330 <br />
          Email: divyanshu14may@gmail.com      */}
        </SectionText>
        <a href='resume.pdf' download='resume.pdf'>
          <Button>Get Resume</Button>
        </a>
        
      </LeftSection>
    </Section>
  </div>  
);

export default Hero;