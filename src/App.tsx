import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { Navigation } from './components/Navigation/Navigation';
import { Modal } from './components/Modal/Modal';
import { PackageCard } from './components/PackageCard/PackageCard';
import { Footer } from './components/Footer/Footer';
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import { Package } from './types';
import { AboutUs } from './pages/AboutUs';
import { Home } from './pages/Home';
import Services from './pages/Services';
import GourmetCart from './pages/GourmetCart';
import CuratedBites from './pages/CuratedBites';
import Contact from './pages/Contact';
import { PackageGrid } from './styles/shared';

const beveragePackages: Package[] = [
  {
    title: '"Graze-tini" Package - Basic',
    subtitle: 'Perfect for intimate gatherings or budget-friendly events.',
    features: [
      '1 Signature Custom Cocktail or Mocktail',
      'Simple cart setup',
      'Up to 2 hours of service'
    ],
    note: '*alcohol must be provided by the client'
  },
  {
    title: '"Perfect Pairing" Package - Standard',
    subtitle: 'Great for birthdays, baby showers, and holiday parties',
    features: [
      '2 Signature Custom Cocktail or Mocktail',
      'Simple cart setup',
      'Up to 2 hours of service'
    ],
    note: '*alcohol must be provided by the client'
  },
  {
    title: '"Boba Bliss" Package - Fan Favorite',
    subtitle: 'Perfect for any event!',
    features: [
      'Choice of 2 Boba flavor drinks',
      'Personalized signage (logo or event name)',
      'Simple cart setup',
      'Up to 2 hours of service'
    ]
  }
];

const seasonalPackages: Package[] = [
  {
    title: '"Cozy Cart" Package - Basic',
    subtitle: 'Perfect for intimate gatherings or budget-friendly events.',
    features: [
      'Classic hot chocolate (1 flavor)',
      'Basic topping (mini marshmallows, whipped cream)',
      'Simple cart setup',
      'Up to 2 hours of service'
    ]
  },
  {
    title: '"Sweet Sips" Package - Standard',
    subtitle: 'Great for birthdays, baby showers, and holiday parties',
    features: [
      '2 flavor options (Classic + Peppermint or Salted Caramel)',
      'Additional toppings (candy canes, chocolate chips, caramel drizzle)',
      'Themed decor (seasonal or event-inspired)',
      'Customized menu board'
    ]
  },
  {
    title: '"ChocoLuxe" Package - Premium',
    subtitle: 'Perfect for weddings, large parties, or corporate events',
    features: [
      'Up to 3 hot chocolate flavors (Classic, White Chocolate, Peppermint, Salted Caramel)',
      'Gourmet toppings bar: crushed cookies, sprinkles, chocolate shavings',
      'Upgraded decor',
      'Personalized signage (logo or event name)',
      'Event time up to 4 hours',
      '2 attendants'
    ]
  }
];

const foodPackages: Package[] = [
  {
    title: '"Mini Graze" Package - Basic',
    subtitle: 'Perfect for intimate celebrations, small parties, or showers.',
    features: [
      'Classic charcuterie cart setup',
      '2 cheese varieties',
      '2 cured meats',
      'Gourmet crackers',
      'Fresh & dried fruits',
      'Assorted olives and nuts',
      'Honey & Jam',
      'Up to 2 hours of service'
    ]
  },
  {
    title: '"Graze & Gather" Package - Standard',
    subtitle: 'Ideal for birthdays, engagements, or medium-sized gatherings.',
    features: [
      '4 cheese varieties',
      '3 meat selections',
      'Fresh and dried fruits',
      'Gourmet bread & crackers selections',
      'Assorted Olives and nuts',
      'Chocolate',
      'Honey & Jams',
      'Decorative greenery & custom signage',
      'Up to 2 hours of service'
    ]
  },
  {
    title: '"Luxe Graze" Package - Premium',
    subtitle: 'Perfect for weddings, corporate events, and upscale parties.',
    features: [
      '5 premium cheeses',
      '4 meat selections',
      'Gourmet crackers and breads',
      'Fresh and dried fruit',
      'Assorted olives and nuts',
      'Specialty accompaniments: honeycomb, fig jam, tapenade, spreads',
      'Personalized signage (event name or logo)',
      'Upgrade decor (base on event theme/color)',
      'Up to 4 hours of service'
    ]
  }
];


const Splash = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #C0AAD8;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeOut 0.5s ease-in-out forwards;
  animation-delay: 2s;
`;

const SplashLogo = styled.div`
  width: 700px;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: scaleIn 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;

  @media (max-width: 768px) {
    width: 450px;
    height: 450px;
  }

  @media (max-width: 480px) {
    width: 350px;
    height: 350px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;


const AppWrapper = styled.div`
  min-height: 100vh;
  position: relative;
`;

const MainContent = styled.main`
  position: relative;
`;

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AppWrapper>
          {!isLoaded && (
            <Splash>
              <SplashLogo>
                <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Très Petite LLC" />
              </SplashLogo>
            </Splash>
          )}
          <ScrollToTop />
          <Navigation setActiveModal={setActiveModal} />
          <MainContent>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/gourmet-cart" element={<GourmetCart />} />
              <Route path="/services/curated-bites" element={<CuratedBites />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>

            {/* Modals */}
            <Modal
              id="food"
              title="Food"
              isOpen={activeModal === 'food'}
              onClose={() => setActiveModal(null)}
            >
              <PackageGrid>
                {foodPackages.map((pkg, index) => (
                  <PackageCard key={index} package={pkg} />
                ))}
              </PackageGrid>
            </Modal>

            <Modal
              id="beverage"
              title="Beverage"
              isOpen={activeModal === 'beverage'}
              onClose={() => setActiveModal(null)}
            >
              <PackageGrid>
                {beveragePackages.map((pkg, index) => (
                  <PackageCard key={index} package={pkg} />
                ))}
              </PackageGrid>
            </Modal>

            <Modal
              id="seasonal"
              title="Seasonal"
              isOpen={activeModal === 'seasonal'}
              onClose={() => setActiveModal(null)}
            >
              <PackageGrid>
                {seasonalPackages.map((pkg, index) => (
                  <PackageCard key={index} package={pkg} />
                ))}
              </PackageGrid>
            </Modal>
          </MainContent>
          <Footer />
        </AppWrapper>
      </ThemeProvider>
    </Router>
  );
}

export default App;