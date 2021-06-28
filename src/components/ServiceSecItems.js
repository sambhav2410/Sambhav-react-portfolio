import React from 'react';
import { MdDesktopMac } from 'react-icons/md';
import styled from 'styled-components';
import PText from './Ptext';

const ItemStyle = styled.div`
  text-align: center;

  .Services_icon {
    svg {
      width: 4rem;
    }
  }
  .Services_title {
    font-size: 3rem;
    font-family: 'Monteserrat SemiBold';
    margin-top: 2rem;
  }
  .para {
    margin-top: 2rem;
  }
`;

export default function ServiceSecItems({
  icon = <MdDesktopMac />,
  title = 'Web Design',
  desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ok",
}) {
  return (
    <ItemStyle>
      <div className="Services_icon">{icon}</div>
      <div className="Services_title">{title}</div>
      <PText>{desc}</PText>
    </ItemStyle>
  );
}
