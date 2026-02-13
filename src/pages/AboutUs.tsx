import React, { useEffect } from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  min-height: 100vh;
  padding: 130px 0 0;
  background: white;
`;



const SectionTitle = styled.h1`
  text-align: center;
  margin-top: 0;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: #2D1A33;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (min-width: 1400px) {
    max-width: 1400px;
  }
`;

const StorySection = styled.div`
  max-width: 900px;
  margin: 0 auto 4rem;

  @media (min-width: 1400px) {
    max-width: 1000px;
  }
`;

const Photo = styled.img<{ $position: 'left' | 'right' }>`
  width: 350px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  float: ${({ $position }) => $position};
  margin: ${({ $position }) => $position === 'left' ? '0 2rem 1.5rem 0' : '0 0 1.5rem 2rem'};
  shape-outside: margin-box;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    float: none;
    margin: 0 0 1.5rem 0;
  }
`;

const ContentWrapper = styled.div`
  overflow: auto;
  
  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #444;
    margin-bottom: 1.5rem;
    text-align: justify;
  }
`;

const ContactSection = styled.div`
  background: ${({ theme }) => theme.colors.background};
  padding: 4rem 0;
  text-align: center;

  h2 {
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 2rem;
    color: #2D1A33;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #444;
    margin-bottom: 0.5rem;
  }

  a {
    color: #2D1A33;
    text-decoration: none;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.8;
    }
  }
`;

const ContactInfo = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const AboutUs: React.FC = () => {
  useEffect(() => {
    document.title = 'Très Petite LLC | About Us';
  }, []);

  return (
    <PageContainer>
      <SectionTitle>About Us</SectionTitle>

      <ContentContainer>
        <StorySection>
          <ContentWrapper>
            <p>
              At Très Petite LLC, we believe in creating extraordinary moments through
              exceptional food and beverage experiences. Our passion lies in crafting
              beautiful, delicious displays that transform ordinary gatherings into
              unforgettable celebrations.
            </p>

            <p>
              We take pride in our attention to detail, commitment to quality, and
              dedication to outstanding hospitality. Every event is an opportunity for
              us to showcase our creativity and bring joy to our clients and their
              guests through our carefully curated selections and impeccable service.
            </p>

            <Photo $position="left" src={`${process.env.PUBLIC_URL}/about-us-one.jpg`} alt="Très Petite LLC" />

            <p>
              Whether you're planning a corporate event, wedding celebration, or intimate
              gathering, we bring the same level of care and excellence to every occasion.
              Our team works closely with you to understand your vision and bring it to life
              with thoughtful touches that make your event truly special.
            </p>

            <Photo $position="right" src={`${process.env.PUBLIC_URL}/about-us-two.jpg`} alt="Très Petite LLC" />

            <p>
              From intimate gatherings to grand celebrations, we specialize in
              elevating your event with our mobile cart services, artisanal beverage
              bars, and expertly crafted bites. Each offering is designed to delight
              your guests and create those memorable moments that last long after the
              event ends. Our passion for hospitality drives us to exceed expectations,
              ensuring that every detail reflects your unique style and preferences.
              Let us help you create memories that will be cherished for years to come.
            </p>
          </ContentWrapper>
        </StorySection>

        <ContactSection>
          <ContactInfo>
            <h2>Get in Touch</h2>
            <p>
              <a href="mailto:trespetitellc@gmail.com">trespetitellc@gmail.com</a>
            </p>
          </ContactInfo>
        </ContactSection>
      </ContentContainer>
    </PageContainer>
  );
};
