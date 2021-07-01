import React from 'react';
import styled from 'styled-components';
import Footercol from './Footercol';
import Ptext from './Ptext';

const FootercolStyles = styled.div`
  padding: 10rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer_col1 {
    flex: 2;
  }
  .footer_col2,
  .footer_col3,
  .footer_col4 {
    flex: 1;
  }
  .footer_col1_title {
    font-size: 3.5rem;
    margin-bottom: 3rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer_col1_title {
      text-align: left;
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FootercolStyles>
      <div className="container">
        <div className="footer_col1">
          <h1 className="footer_col1_title">Sambhav Jain</h1>
          <Ptext>
            A second year computer science student who also work as a freelance
            web designer and developer from past 2-3 months and still learning
            new things and who is seeking for a good internship.
          </Ptext>
        </div>
        <div className="footer_col2">
          <Footercol
            heading="Important Links"
            Links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                title: 'About',
                path: '/about',
                type: 'Link',
              },
              {
                title: 'Project',
                path: '/project',
                type: 'Link',
              },
              {
                title: 'Contact',
                path: '/Contact',
                type: 'Link',
              },
            ]}
          />
        </div>
        <div className="footer_col3">
          <Footercol
            heading="Contact Info"
            links={[
              {
                title: '9685338171',
              },
              {
                title: 'sambhavjsj2000@gmail.com',
                path: 'mailto:sambhavjsj2000@gmail.',
              },
            ]}
          />
        </div>
        <div className="footer_col4">
          <Footercol
            heading="social Links"
            links={[
              {
                title: 'Linkedin',
                path: 'https://www.linkedin.com/in/sambhav-jain-a3a9351b4/',
              },
              {
                title: 'Github',
                path: 'https://github.com/sambhav2410',
              },
              {
                title: 'Instagram',
                path: 'https://www.instagram.com/sam_bhav.jain13/',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <Ptext>© 2021 - Sambhav Jain</Ptext>
        </div>
      </div>
    </FootercolStyles>
  );
}
