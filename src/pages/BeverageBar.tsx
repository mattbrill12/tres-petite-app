import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  margin-top: 0;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: #2D1A33;
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
  padding: 2rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const PackageTitleSection = styled.div<{ $tier?: number }>`
  padding: 0.75rem;
  min-height: 200px;
  border: 3px solid ${({ $tier }) =>
    $tier === 0 ? '#C0C0C0' : // Silver
      $tier === 1 ? '#FFD700' : // Gold
        $tier === 2 ? '#C0AAD8' : // Purple brand color
          'transparent'
  };
  border-radius: 8px;
  margin-bottom: 1.5rem;
`;

const PackageCard = styled.div<{ isComingSoon?: boolean }>`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  opacity: ${({ isComingSoon }) => isComingSoon ? 0.7 : 1};
  display: flex;
  flex-direction: column;
  height: 100%;

  ${({ isComingSoon }) => !isComingSoon && `
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    }
  `}
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
  margin-bottom: 1.5rem;
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
  font-size: 0.9rem;
  color: #666;
  font-style: italic;
  margin-top: 1rem;
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

const ComingSoonBadge = styled.span`
  display: inline-block;
  background: linear-gradient(135deg, #C0AAD8 0%, #8B7BA8 100%);
  color: white;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-left: 1rem;
  vertical-align: middle;
`;

const CTASection = styled.div`
  text-align: center;
  margin-top: 4rem;
`;

const BeverageBar = () => {
  const packages = [
    {
      title: "Graze-tini",
      subtitle: "Perfect for intimate gatherings or budget-friendly events",
      features: [
        "1 Signature Custom Cocktail or Mocktail",
        "Simple cart setup",
        "Up to 2 hours of service"
      ],
      note: "*alcohol must be provided by the client"
    },
    {
      title: "Perfect Pairing",
      subtitle: "Great for birthdays, baby showers, and holiday parties",
      features: [
        "2 Signature Custom Cocktail or Mocktail",
        "Simple cart setup",
        "Up to 2 hours of service"
      ],
      note: "*alcohol must be provided by the client"
    },
    {
      title: "Boba Bliss",
      subtitle: "Perfect for any event!",
      features: [
        "Choice of 2 Boba flavor drinks",
        "Personalized signage (logo or event name)",
        "Simple cart setup",
        "Up to 2 hours of service"
      ]
    }
  ];

  useEffect(() => {
    document.title = 'Très Petite LLC | Beverage Bar';
  }, []);

  return (
    <PageContainer>
      <PackagesSection>
        <SectionTitle>
          Beverage Bar
          <ComingSoonBadge>Coming Soon</ComingSoonBadge>
        </SectionTitle>

        <PackageGrid>
          {packages.map((pkg, index) => (
            <PackageCard key={index}>
              <PackageImage style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/beverage-bar-${index + 1}.png)` }} />
              <PackageContent>
                <PackageTitleSection $tier={index}>
                  <PackageTitle>{pkg.title}</PackageTitle>
                  <PackageSubtitle>{pkg.subtitle}</PackageSubtitle>
                </PackageTitleSection>
                <FeatureList>
                  {pkg.features.map((feature, i) => (
                    <Feature key={i}>{feature}</Feature>
                  ))}
                </FeatureList>
                {pkg.note && <Note>{pkg.note}</Note>}
              </PackageContent>
            </PackageCard>
          ))}
        </PackageGrid>

        <CTASection>
          <CTAButton to="/contact">Start Your Custom Quote</CTAButton>
        </CTASection>
      </PackagesSection>
    </PageContainer >
  );
};

export default BeverageBar;
