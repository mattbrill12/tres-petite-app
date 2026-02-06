import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { services } from '../data/services';

const PageContainer = styled.div`
  min-height: 100vh;
  padding: 120px 0 4rem;
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 1400px) {
    max-width: 1400px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled(Link)`
  position: relative;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-decoration: none;
  color: inherit;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
`;

const ServiceImage = styled.div<{ image: string; $isCuratedBites?: boolean }>`
  width: 100%;
  height: 250px;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const ServiceContent = styled.div`
  padding: 1.5rem;
  text-align: center;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: #2D1A33;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 1.5rem;
`;

const ComingSoonOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(251, 239, 250, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 600;
  color: #2D1A33;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  backdrop-filter: blur(2px);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: rgba(251, 239, 250, 0.3);
    backdrop-filter: blur(0.5px);
    opacity: 0;
  }
`;

const CTASection = styled.div`
  text-align: center;
  margin-top: 4rem;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background: #2D1A33;
  color: white;
  padding: 1.2rem 3rem;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  font-family: ${({ theme }) => theme.fonts.secondary};
  text-transform: uppercase;
  letter-spacing: 0.05em;

  &:hover {
    background: #3D2A43;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(45, 26, 51, 0.4);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1rem 2rem;
    font-size: 1rem;
  }
`;

const Services = () => {
  useEffect(() => {
    document.title = 'Très Petite LLC | Our Services';
  }, []);

  return (
    <PageContainer>
      <SectionTitle>Our Services</SectionTitle>

      <ServicesGrid>
        {services.filter(service => service.id !== 'seasonal').map((service) => (
          <ServiceCard
            key={service.id}
            to={service.id === 'beverage-bar' ? '#' : `/services/${service.id}`}
            onClick={(e: React.MouseEvent) => {
              if (service.id === 'beverage-bar') {
                e.preventDefault();
              }
            }}
            style={{ cursor: service.id === 'beverage-bar' ? 'default' : 'pointer' }}
          >
            <ServiceImage image={`${process.env.PUBLIC_URL}${service.image}`} $isCuratedBites={service.id === 'curated-bites'} />
            <ServiceContent>
              <ServiceTitle>{service.name}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceContent>
            {service.id === 'beverage-bar' && (
              <ComingSoonOverlay>Coming Soon</ComingSoonOverlay>
            )}
          </ServiceCard>
        ))}
      </ServicesGrid>

      <CTASection>
        <CTAButton to="/contact">Start Your Custom Quote</CTAButton>
      </CTASection>
    </PageContainer>
  );
};

export default Services;