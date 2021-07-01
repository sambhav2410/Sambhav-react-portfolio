import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import SectionTitle from './SectionTitle';

const ContactBannerStyle = styled.div`
  padding: 10rem 0;
  .contact_banner {
    background-color: var(--deep-dark);
    border-radius: 12px;
    padding: 5rem 0rem;
    text-align: center;
  }
  .VAexD h2 {
    font-size: 4rem;
    font-family: 'Montserrat SemiBold';
    text-transform: lowercase;
  }
  @media only screen and (max-width: 768px) {
    .container {
      margin-top: -7rem;
    }
    .VAexD h2 {
      font-size: 2.8rem;
    }
  }
`;

export default function ContactBanner() {
  return (
    <ContactBannerStyle>
      <div className="container">
        <div className="contact_banner">
          <SectionTitle
            subheading="Have a project in mind"
            heading="Let me help you"
          />
          <Button btnText="Contact Now" btnLink="./contact" />
        </div>
      </div>
    </ContactBannerStyle>
  );
}
