import React from 'react';

import styled from 'styled-components';
import CompressImg from '../assets/images/compressimage.png';

const ProjectItemStyle = styled.div`
  .ProjectItem_img {
    width: 100%;
    height: 200px;
    overflow: hidden;
    border-radius: 12px;
    display: inline-block;
    border: 1px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .ProjectItem_info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .ProjectItem_title {
    font-size: 2.2rem;
    text-align: center;
  }
  .ProjectItem_desc {
    font-size: 1.6rem;
    font-family: 'Poppins Regular';
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .ProjectItem_img {
      width: 98%;
      height: 210px;
    }
    .ProjectItem_info {
      width: 98%;
      height: 30px;
      font-size: 15px;
    }
    .ProjectItem_title {
      font-size: 20px;
      margin-top: -1rem;
      text-align: center;
    }
    .ProjectItem_desc {
      font-size: 12px;
    }
  }
`;

export default function ProjectItem({
  img = CompressImg,
  title = 'Project Name',
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  link = 'https://allcompressimage.com',
}) {
  return (
    <ProjectItemStyle>
      <a href={link} target="_new" className="ProjectItem_img">
        <img src={img} alt="" />;
      </a>
      <div className="ProjectItem_info">
        <a href={link} target="_new">
          <h1 className="ProjectItem_title">{title}</h1>
        </a>
      </div>
      <p className="ProjectItem_desc">{desc}</p>
    </ProjectItemStyle>
  );
}
