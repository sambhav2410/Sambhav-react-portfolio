import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Ptext from './Ptext';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';

const HeroStyles = styled.div`
  .hero {
    height: 100px;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero_all {
    margin-top: -25rem;
  }
  .hero_info {
    margin-top: 4rem;
    width: 100%;
  }

  .hero_info_desc {
    margin-bottom: 4rem;
    text-align: center;
  }
  .hero_heading {
    font-size: 2rem;
    margin-top: 0rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero_name {
      font-size: 7rem;
      font-family: 'Montserrat SemiBold';
      color: var(--white);
    }
  }

  .hero_social,
  .hero_scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 45rem;
    width: 50px;
  }
  .hero_social {
    left: 50px;
  }
  .hero_scrollDown {
    right: 50px;
  }
  .hero_social_indicator,
  .hero_scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero_scrollDown {
    max-height: 70px;
  }
  .hero_social_text {
    ul {
      li {
        margin-bottom: 1rem;
      }
      a {
        display: inline-block;
        font-size: 1.6rem;
        transform: rotate(-90deg);
        letter-spacing: 5px;
        margin-bottom: 2rem;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
      text-align: center;
      align-items: center;
      justify-content: center;
    }
    .hero_heading {
      font-size: 1.4rem;
      margin-top: 10rem;
      text-align: left;
      .hero_name {
        font-size: 4.5rem;
      }
    }

    .hero_info {
      margin-top: 3rem;
    }
    .hero_info_desc {
      text-align: left;
    }
    .hero_social {
      display: none;
      left: 0rem;
      bottom: 2%;
      width: 20px;
      .hero_social_indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero_social_text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero_scrollDown {
      display: none;
      right: 0;
      width: 20px;
      bottom: 15%;
      gap: 1rem;
      p {
        font-size: 1.2rem;
      }
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <div className="hero_all">
            <h1 className="hero_heading">
              <span>Hello, This is </span>
              <span className="hero_name">Sambhav Jain</span>
            </h1>
            <div className="hero_info">
              <div className="hero_info_desc">
                <Ptext>
                  I am second year computer science student who is exploring in
                  the field of front-end developement (Web desgining, Web
                  Development, Graphic Desigining) and learning everyday
                  something new to improve my skills. Currently working as a
                  freelancer in Web designer and development from past 2-3
                  months.Looking for a Internship role in a reputable
                  organization to utilize my technical, database, and management
                  skills for the growth of the organization as well as to ensure
                  my personal and professional growth
                </Ptext>
              </div>
              <Button btnLink="/project" btnText="See My Work" />
            </div>
          </div>
          <div className="hero_social">
            <div className="hero_social_indicator">
              <p>Follow</p>
              <img src={SocialMediaArrow} alt="" />
            </div>
            <div className="hero_social_text">
              <ul>
                <li>
                  <a
                    href="https://instagram.com/sam_bhav.jain13/"
                    target="_new"
                    rel="noreferrer"
                  >
                    IG
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/sambhav2410"
                    target="_new"
                    rel="noreferrer"
                  >
                    GI
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/sambhav-jain-a3a9351b4/"
                    target="_new"
                    rel="noreferrer"
                  >
                    LI
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hero_scrollDown">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
