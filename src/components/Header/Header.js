import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillGitlab, AiFillHome, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCodepen, DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <div>
    <Container>
      <Div1>
        <Link href='/'>
          <a style={{display: 'flex', color: 'white', alignItems: 'center', marginBottom: '20px'}}>
            <DiCodepen size='3rem' /><Span>Portfolio</Span>
            
            {/* <AiFillHome size='1.8rem' style={{marginRight: '5px'}}/> 
            <div style={{marginTop: '3px'}}>Portfolio</div> */}
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href='#projects'>
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href='#tech'>
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
        <li>
          <Link href='#about'>
            <NavLink>About</NavLink>
          </Link>
        </li>
        {/* <li>
          <Link href='#about'>
            <NavLink>Contact</NavLink>
          </Link>
        </li> */}
      </Div2>
      <Div3>
        <SocialIcons href='https://github.com/divyanshugupta14' target='_blank'>
          <AiFillGithub size='3rem' />
        </SocialIcons>
        <SocialIcons href='https://www.linkedin.com/in/divyanshu-gupta-14052000/' target='_blank'>
          <AiFillLinkedin size='3rem' />
        </SocialIcons>
        <SocialIcons href='https://gitlab.com/divyanshugupta14' target='_blank'>
          <AiFillGitlab size='3rem' />
        </SocialIcons>
      </Div3>
    </Container>
  </div>
);

export default Header;
