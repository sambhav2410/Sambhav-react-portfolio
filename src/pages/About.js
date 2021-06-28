import React from 'react';
import styled from 'styled-components';
import Ptext from '../components/Ptext';
import AboutImg from '../assets/images/about-page-img.png';
import Aboutinfoitem from '../components/Aboutinfoitem';
import ContactBanner from '../components/ContactBanner';

const AboutsectionStyle = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-content: center;
    justify-content: center;
    gap: 2rem;
  }
  .button {
    font-size: 2.2rem;
    background-color: ${(props) =>
      props.outline ? 'transperant' : 'var(--gray-1)'};
    padding: 0.7em 2em;
    border: 2px solid var(--gray-1);
    border-radius: 8px;
    display: inline-block;
    color: ${(props) => (props.outline ? 'var(--gary-1)' : 'black')};
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about_subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about_heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about_info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .about_info_items {
    margin-top: 15rem;
  }
  .about_info_item {
    margin-bottom: 10rem;
  }
  .about_info_heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about_subheading {
      font-size: 1.8rem;
    }
    .about_heading {
      font-size: 2.8rem;
    }
    .c {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <AboutsectionStyle>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about_subheading">
              Hi, I am <span>Sambhav Jain</span>
            </p>
            <h2 className="about_heading">Web Developer</h2>
            <div className="about_info">
              <Ptext>
                I am a second year student pursuing Computer Science Engineering
                @OP Jindal University.I am always ready to have new experiences,
                meet new people and learn new things. I find the idea of
                creating value for people and impacting the world through my
                work gratifying.
                <br /> <br />
                I started coding since I was in high school. Coding is also an
                art for me. I love it and now I have the opportunity to design
                along with the coding. I find it really interesting and I
                enjoyed the process a lot.
                <br />
                <br />
                Also, I am working with multiple businesses to grow their social
                media platforms and get leads using content and I also love
                video editing and graphic designing .My vision is to learn new
                skils and to become prefect in my domian and then i will want to
                be place at one settled company.
              </Ptext>
            </div>
            <a href="./sambhavjain.pdf" className="button" download>
              Download CV
            </a>
          </div>
          <div className="right">
            <img src={AboutImg} alt="me" />
          </div>
        </div>
        <div className="about_info_items">
          <div className="about_info_item">
            <h1 className="about_info_heading">Education</h1>
            <Aboutinfoitem
              title="School"
              items={['Gayatri Vidya Peeth, Rajnandgaon']}
            />
            <Aboutinfoitem
              title="College"
              items={['OP Jindal University, Raigarh']}
            />
          </div>
          <div className="about_info_item">
            <h1 className="about_info_heading">My Skills</h1>

            <Aboutinfoitem
              title="FrontEnd"
              items={['HTML', 'CSS', 'JavaScript', 'Reactjs']}
            />
            <Aboutinfoitem
              title="Lang"
              items={['JAVA', 'C', 'Python', 'SQl']}
            />
            <Aboutinfoitem
              title="Designing"
              items={['Adobexd', 'Photoshop', 'Canva', 'illustrator']}
            />
            <Aboutinfoitem
              title="Domain"
              items={[
                'Web/UI Desgining',
                'Web development',
                'Graphic Desgining',
              ]}
            />
          </div>
          <div className="about_info_item">
            <h1 className="about_info_heading">Experiences</h1>

            <Aboutinfoitem
              title="2020-2020"
              items={['Web Designer Intern at Springfield Olympiad']}
            />
            <Aboutinfoitem title="2021-" items={['Freelancer']} />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutsectionStyle>
  );
}
