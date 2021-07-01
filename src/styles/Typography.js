import { createGlobalStyle } from 'styled-components';
import PoppinsRegular from '../assets/fonts/poppins.regular.ttf';

import MontserratSemiBold from '../assets/fonts/Montserrat-SemiBold.ttf';
import MontserratBold from '../assets/fonts/Montserrat-Bold.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Poppins Regular';
    src: url(${PoppinsRegular});
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat SemiBold';
    src: url(${MontserratSemiBold});
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat Bold';
    src: url(${MontserratBold});
    font-style: normal;
  }
  html{
    font-family: 'Poppins Regular';
    color: var(--gray-1);
  }
  *{
    font-family: 'Poppins Regular';
    color: var(--gray-1);
  }
   
  h1,h2,h3,h4,h5,h6{
    font-family: 'Montserrat SemiBold'
  }
`;

export default Typography;
