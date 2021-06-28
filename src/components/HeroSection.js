import React from 'react';
import styled from 'styled-components';
import HeroImg from '../assets/images/hero.png';
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

  .hero_heading {
    font-size: 2rem;
    margin-bottom: 4rem;
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
  .hero_img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }
  .hero_info {
    margin-top: -18rem;
    margin-left: 2 rem;
  }
  .hero_info_desc p {
    color: black;
    font-weight: bold;
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
  }
  .hero_social,
  .hero_scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
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
    }
    .hero_heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero_name {
        font-size: 4.5rem;
      }
    }
    .hero_img {
      height: 300px;
    }
    .hero_info {
      margin-top: 3rem;
    }
    .hero_social {
      left: 0;
      bottom: 15px;
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
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero_heading">
            <span>Hello, This is </span>
            <span className="hero_name">Sambhav Jain</span>
          </h1>
          <div className="hero_img">
            <img src={HeroImg} alt="" />
            <div className="hero_info">
              <div className="hero_info_desc">
                <Ptext>
                  I am second year computer science student who also work as a
                  freelance web designer and developer from past 2-3 months. I
                  love to design and develope and make new web experiences for
                  the people.
                </Ptext>
              </div>
              <Button btnLink="/project" btnText="See My Work" />
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
                      href="https://www.instagram.com/sam_bhav.jain13/"
                      target="_new"
                      rel="noreferrer"
                    >
                      IG
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
                  <li>
                    <a
                      href="https://github.com/sambhav2410"
                      target="_new"
                      rel="noreferrer"
                    >
                      GH
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
      </div>
    </HeroStyles>
  );
}
