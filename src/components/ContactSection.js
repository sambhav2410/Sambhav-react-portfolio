import React from 'react';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import styled from 'styled-components';
import Contactinfo from './Contactinfo';
import SectionTitle from './SectionTitle';
import ContactForm from './ContactForm';

const ContactSecStyle = styled.div`
  padding: 10rem 0;
  .consec_wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }
  .consec_wrapper::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    max-width: 500px;
  }
  .right {
    max-width: 500px;
    width: 100%;
    border-radius: 12px;
    /* padding-left: 3rem; */
  }
  @media only screen and (max-width: 768px) {
    .consec_wrapper {
      flex-direction: column;
    }
    .consec_wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;

export default function ContactSection() {
  return (
    <ContactSecStyle>
      <div className="container">
        <SectionTitle subheading="Get in touch" heading="Contact" />
        <div className="consec_wrapper">
          <div className="left">
            <Contactinfo icon={<MdLocalPhone />} text="+919685338171" />
            <Contactinfo icon={<MdEmail />} text="Sambhavjsj2000@gmail.com" />
            <Contactinfo text="Chhattisgarh" />
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactSecStyle>
  );
}
