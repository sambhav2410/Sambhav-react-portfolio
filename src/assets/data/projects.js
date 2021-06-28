import { v4 as uuidv4 } from 'uuid';
import GImg from '../images/graphic.png';
import CompressImg from '../images/compressimage.png';
import EkslateImg from '../images/Ekslate.png';
import EImg from '../images/ecommerce.png';
import WebImg from '../images/web.png';

const projects = [
  {
    id: uuidv4(),
    name: 'AllImageCompress',
    desc:
      'An application to compress any image fast with high compression ratio. I developed this website using Reactjs',
    img: CompressImg,
    link: 'https://allcompressimage.com/',
  },
  {
    id: uuidv4(),
    name: 'Ekslate',
    desc:
      'A learning platform which enhance learning experiences through counseling, mentoring and tutoring. ',
    img: EkslateImg,
    link: 'https://www.ekslate.com/',
  },
  {
    id: uuidv4(),
    name: 'Atyourdoor',
    desc: 'Ecommerce website developed using wordpress',
    img: EImg,
    link: 'http://atyourdoor.rf.gd/',
  },
  {
    id: uuidv4(),
    name: 'Web/UI designing work',
    desc: 'Website and App designs using Adobexd',
    img: WebImg,
    link:
      'https://drive.google.com/drive/folders/1C1zxXGdsXU7JEoXIPObtpopKtLgeIYrO?usp=sharing',
  },
  {
    id: uuidv4(),
    name: 'Graphic Designing work',
    desc: 'Banners, logo, Poster & thumbnail designs ',
    img: GImg,
    link:
      'https://drive.google.com/drive/folders/1RfKtNVBpd1kQokceGHiS7G5eTlWMr_Rb?usp=sharing',
  },
];

export default projects;
