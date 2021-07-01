import React from 'react';
import { MdCode, MdDesktopMac, MdPalette } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServiceSecItems from './ServiceSecItems';

const ServicesStyle = styled.div`
  padding: 10rem 0;
  .Services_items {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 8rem;
  }
  @media only screen and (max-width: 768px) {
    .container {
      margin-top: -10rem;
    }
    .Services_items {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServiceSection() {
  return (
    <ServicesStyle>
      <div className="container">
        <SectionTitle subheading="What I will do for you" heading="Services" />

        <div className="Services_items">
          <ServiceSecItems
            icon={<MdDesktopMac />}
            title="Website Design"
            desc="I do ui/ux design for the website that helps website to get a unique look."
          />
          <ServiceSecItems
            icon={<MdCode />}
            title="Website Development"
            desc="I also develop the websites. I create high performance website with blazing fast speed."
          />
          <ServiceSecItems
            icon={<MdPalette />}
            title="Graphic Design"
            desc="I do ui/ux design for the website that helps website to get a unique look."
          />
        </div>
      </div>
    </ServicesStyle>
  );
}
