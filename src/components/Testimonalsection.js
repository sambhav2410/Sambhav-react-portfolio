import React, { useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import styled from 'styled-components';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import SectionTitle from './SectionTitle';
import Ptext from './Ptext';
import testimonials from '../assets/data/testimonials';

const TestimonalsectionStyle = styled.div`
  overflow-x: hidden;
  padding: 10rem 0;
  text-align: center;
  .testimonal_wrapper {
    position: relative;
    max-width: 900px;
    margin: 0 auto;
  }
  .testimonal_info {
    width: 100%;
    height: fit-content;
    padding: 3rem;
    background-color: var(--deep-dark);
    border-radius: 12px;
    margin-top: 5rem;
  }
  .testimonal_desc {
    .para {
      text-align: center;
      font-weight: 500;
      letter-spacing: 0.2rem;
    }
  }
  .testimonal_name {
    margin-top: 4rem;
    font-family: 'Monteserrat Bold';
    font-size: 2.2rem;
  }
  .testimonal_title {
    font-size: 1.7rem;
    margin-top: 0.3rem;
  }
  .arrows {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 30px;
      pointer-events: none;
    }
    .next,
    .prev {
      margin: 0 0.5rem;
      width: fit-content;
      background-color: var(--deep-dark);
      padding: 0.5rem 2rem;
      border-radius: 8px;
      cursor: pointer;
    }
  }
  .fade-enter {
    opacity: 0;
    transform: scale(0.96);
    z-index: 1;
  }
  .fade-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: 250ms ease-in;
    transition-property: transform, opacity;
    z-index: 1;
  }
  .fade-exit {
    transform: scale(1);
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transform: scale(0.96);
    transition: 200ms ease-in;
    transition-property: transform, opacity;
  }
  @media only screen and (max-width: 768px) {
    .container {
      margin-top: -7rem;
    }
    .testimonal_info {
      width: 100%;
      height: 240px;
      padding: 3rem;
      background-color: var(--deep-dark);
      border-radius: 12px;
      margin-top: 5rem;
    }
    .testimonal_desc {
      .para {
        text-align: center;
        font-size: 8px;
      }
    }
    .testimonal_name {
      margin-top: 2rem;
      font-family: 'Monteserrat Bold';
      font-size: 12px;
    }
    .testimonal_title {
      font-size: 11px;
      margin-top: 0.3rem;
    }
  }
`;

export default function Testimonalsection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = testimonials[activeIndex];

  function handlePrev() {
    if (activeIndex <= 0) {
      setActiveIndex(testimonials.length - 1);
    } else {
      setActiveIndex((oldIndex) => oldIndex - 1);
    }
  }
  function handleNext() {
    if (activeIndex >= testimonials.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex((oldIndex) => oldIndex + 1);
    }
  }
  return (
    <TestimonalsectionStyle>
      <div className="container">
        <SectionTitle
          subheading="See what clients say about us"
          heading="Testimonals"
        />
        <div className="testimonal_wrapper">
          <SwitchTransition>
            <CSSTransition key={activeSlide.id} timeout={300} classNames="fade">
              <div className="testimonal_info">
                <div className="testimonal_desc">
                  <Ptext>{activeSlide.desc}</Ptext>
                </div>
                <h2 className="testimonal_name">{activeSlide.name}</h2>
                <p className="testimonal_title">
                  {activeSlide.title}, <br />
                  {activeSlide.org}
                </p>
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
        <div className="arrows">
          <div
            className="prev"
            onClick={handlePrev}
            role="button"
            tabIndex={0}
            onKeyDown={handlePrev}
          >
            <MdArrowBack />
          </div>
          <div
            className="next"
            onClick={handleNext}
            role="button"
            tabIndex={0}
            onKeyDown={handleNext}
          >
            <MdArrowForward />
          </div>
        </div>
      </div>
    </TestimonalsectionStyle>
  );
}
