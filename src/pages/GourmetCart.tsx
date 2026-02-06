import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { services } from '../data/services';

const PageContainer = styled.div`
  min-height: 100vh;
  padding: 120px 0 4rem;
  background: white;
`;



const PackagesSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 1400px) {
    max-width: 1400px;
  }
`;


const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: #2D1A33;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #444;
  text-align: center;
  max-width: 900px;
  margin: 0 auto 3rem;
  font-family: ${({ theme }) => theme.fonts.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1rem;
    margin-bottom: 2rem;
    padding: 0 1rem;
  }
`;

const SubHeading = styled.h3`
  text-align: center;
  margin: 2rem 0 2rem;
  font-size: 1.8rem;
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: #2D1A33;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`;

const PlaceholderImage = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 400px;
  margin: 0 auto 3rem;
  background: linear-gradient(135deg, #f5f0f6 0%, #e8dfe9 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: #786a7d;
  font-style: italic;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 300px;
    margin-bottom: 2rem;
  }
`;

const CartImage = styled.img`
  width: 100%;
  max-width: 1000px;
  height: auto;
  max-height: 400px;
  object-fit: cover;
  margin: 0 auto 3rem;
  display: block;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-height: 300px;
    margin-bottom: 2rem;
  }
`;

const PackageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  align-items: stretch;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const PackageCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
`;

const PackageImage = styled.div`
  width: 100%;
  height: 300px;
  min-height: 300px;
  background-size: cover;
  background-position: center;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

const PackageContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const PackageTitleSection = styled.div<{ $tier?: number }>`
  padding: 0.75rem;
<<<<<<< HEAD
  min-height: 140px;
=======
  min-height: 100px;
>>>>>>> 065eb3ef8a57b012ab19f2f1b377fe88c44dbeda
  border: 3px solid ${({ $tier }) =>
    $tier === 0 ? '#C0C0C0' : // Silver
      $tier === 1 ? '#c7ae20' : // Gold
        $tier === 2 ? '#C0AAD8' : // Purple brand color
          'transparent'
  };
  border-radius: 8px;
`;

const PackageTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: #2D1A33;
`;

const PackageSubtitle = styled.h4`
  font-size: 0.95rem;
  color: #666;
  font-weight: normal;
  font-style: italic;
  min-height: 2.8em;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
  text-align: left;
`;

const Feature = styled.li`
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: #444;
`;

const Note = styled.p`
  font-size: 0.85rem;
  color: #888;
  font-style: italic;
  margin-top: 0.5rem;
  margin-bottom: 0;
  min-height: 1.2em;
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
  margin-top: 2rem;

  &:hover {
    background: #3D2A43;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(45, 26, 51, 0.4);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1rem 2rem;
    font-size: 1rem;
    margin-top: 1rem;
  }
`;

const CTASection = styled.div`
  text-align: center;
  margin-top: 4rem;
`;

const Divider = styled.hr`
  border: none;
  border-top: 2px solid #E5E5E5;
  margin: 4rem auto;
  max-width: 80%;
`;

const CommonFeaturesSection = styled.div`
  background: #C0AAD8;
  border-radius: 12px;
  padding: 0.75rem 1.5rem;
  text-align: center;
  margin: 0 auto 2rem;
  width: fit-content;
  max-width: 100%;

  h3 {
    color: white;
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0;
    display: inline;
    margin-right: 1rem;

    &:before {
      content: '☁';
      font-size: 1.1rem;
      margin-right: 0.5rem;
    }
  }
`;

const CommonFeaturesList = styled.div`
  display: inline-flex;
  flex-wrap: nowrap;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-wrap: wrap;
  }
`;

const CommonFeature = styled.div`
  color: white;
  font-size: 0.95rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  white-space: nowrap;

  &:before {
    content: '✓';
    font-weight: bold;
  }
`;



const GourmetCart = () => {
  useEffect(() => {
    document.title = 'Très Petite LLC | Gourmèt Cart';
  }, []);

  const gourmetCartService = services.find(service => service.id === 'gourmet-cart');
  const seasonalService = services.find(service => service.id === 'seasonal');

  return (
    <PageContainer>
      <PackagesSection>
        <SectionTitle>Gourmèt Cart</SectionTitle>
        <Description>
          Our curated gourmet cart is designed to bring a touch of elegance to any special event. Fully tailored to your needs and vision, it offers endless possibilities for customization — ensuring every detail reflects your unique style. It features up to 12 delectable selections of premium fruits, artisanal cheeses, fine meats, and more. Whether you're hosting an intimate gathering or a grand celebration, our gourmet cart experience transforms your occasion into something truly unforgettable.
        </Description>

        <CartImage
          src={`${process.env.PUBLIC_URL}/cart-3.jpg`}
          alt="Gourmet Cart Showcase"
        />
        <Divider />
        <SubHeading>Charcuterie Cart</SubHeading>
        <Description>
          Impress your guests with our Gourmet Cart experience! Featuring a refined two-hour service, complete with 2 or more attendants, to help make every moment memorable from start to finish.
        </Description>

        <PackageGrid>
          {gourmetCartService?.packages.map((pkg, index) => (
            <PackageCard key={index}>
              <PackageContent>
                <PackageTitleSection $tier={index}>
                  <PackageTitle>{pkg.title}</PackageTitle>
                  <PackageSubtitle>{pkg.subtitle}</PackageSubtitle>
                </PackageTitleSection>
              </PackageContent>
            </PackageCard>
          ))}
        </PackageGrid>

        <CTASection>
          <CTAButton to="/contact">Start Your Custom Quote</CTAButton>
        </CTASection>

        <Divider />

        <SubHeading>Seasonal Features</SubHeading>
        <Description>
          Impress your guests with our Seasonal Features experience! Featuring a refined two-hour service, complete with 2 or more attendants, to help make every moment memorable from start to finish.
        </Description>

        <PackageGrid>
          {seasonalService?.packages
            .map((pkg, index) => (
              <PackageCard key={`seasonal-${index}`}>
                <PackageImage style={{ backgroundImage: `url(${process.env.PUBLIC_URL}${seasonalService?.image})` }} />
                <PackageContent>
                  <PackageTitleSection>
                    <PackageTitle>{pkg.title}</PackageTitle>
                    <PackageSubtitle>{pkg.subtitle}</PackageSubtitle>
                    <Note style={{ visibility: pkg.note && pkg.note.trim() && pkg.note !== '&nbsp;' ? 'visible' : 'hidden' }}>
                      {pkg.note || '&nbsp;'}
                    </Note>
                  </PackageTitleSection>
                </PackageContent>
              </PackageCard>
            ))}
        </PackageGrid>

        <CTASection>
          <CTAButton to="/contact">Start Your Custom Quote</CTAButton>
        </CTASection>
      </PackagesSection>
    </PageContainer>
  );
};

export default GourmetCart;
