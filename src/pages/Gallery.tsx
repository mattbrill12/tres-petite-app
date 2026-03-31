import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  min-height: 100vh;
  padding: 130px 0 0;
  background: #ffffff;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 100px 0 0;
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

const SectionSubtitle = styled.p`
  text-align: center;
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 3rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const GalleryItem = styled.div`
  position: relative;
  aspect-ratio: 1;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${GalleryItem}:hover & {
    transform: scale(1.05);
  }
`;

const LightboxOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.95);
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1rem;
  }
`;

const LightboxImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
  border-radius: 8px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #2c2c2c;
  transition: background 0.2s ease;
  z-index: 1001;

  &:hover {
    background: white;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    top: 1rem;
    right: 1rem;
    width: 40px;
    height: 40px;
  }
`;

const NavButton = styled.button<{ $direction: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  ${({ $direction }) => $direction}: 2rem;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  border: none;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #2c2c2c;
  transition: background 0.2s ease;
  z-index: 1001;

  &:hover {
    background: white;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    ${({ $direction }) => $direction}: 0.5rem;
    width: 40px;
    height: 40px;
  }
`;

export const Gallery: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Très Petite LLC | Gallery';
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;

      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowLeft') {
        navigateLightbox('prev');
      } else if (e.key === 'ArrowRight') {
        navigateLightbox('next');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  const galleryImages = [
    { src: 'about-us-one.jpg', alt: 'Event setup' },
    { src: 'about-us-two.jpg', alt: 'Food display' },
    { src: 'cart-3.jpg', alt: 'Mobile cart' },
    { src: 'cart.jpg', alt: 'Charcuterie cart' },
    { src: 'cart-landscape.png', alt: 'Cart landscape view' },
    { src: 'croffle.png', alt: 'Croffle dessert' },
    { src: 'curated-bites-cup-cuterie.jpg', alt: 'Cup cuterie' },
    { src: 'curated-bites-grazette.png', alt: 'Grazette board' },
    { src: 'curated-bites-petite-feast.png', alt: 'Petite feast' },
    { src: 'beverage-bar-1.png', alt: 'Beverage bar setup' },
    { src: 'beverage-bar-2.png', alt: 'Beverage service' },
    { src: 'beverage-bar-3.png', alt: 'Drink display' },
    { src: 'hot-chocolate-bar-1.png', alt: 'Hot chocolate bar' },
    { src: 'hot-chocolate-bar-2.png', alt: 'Hot chocolate setup' },
    { src: 'hot-chocolate-bar-3.png', alt: 'Chocolate beverages' },
    { src: 'mobile-charcuterie-cart-1.png', alt: 'Mobile charcuterie' },
    { src: 'mobile-charcuterie-cart-2.png', alt: 'Charcuterie display' },
    { src: 'mobile-charcuterie-cart-3.png', alt: 'Cart details' },
    { src: 'petite-scoops.png', alt: 'Ice cream scoops' },
    { src: 'sweet-sips.png', alt: 'Sweet beverages' },
  ];

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (lightboxIndex === null) return;

    if (direction === 'prev') {
      setLightboxIndex(lightboxIndex === 0 ? galleryImages.length - 1 : lightboxIndex - 1);
    } else {
      setLightboxIndex(lightboxIndex === galleryImages.length - 1 ? 0 : lightboxIndex + 1);
    }
  };

  return (
    <PageContainer>
      <ContentContainer>
        <SectionTitle>Gallery</SectionTitle>
        <SectionSubtitle>
          Explore our beautiful events, delicious displays, and memorable moments.
        </SectionSubtitle>

        <GalleryGrid>
          {galleryImages.map((image, index) => (
            <GalleryItem key={index} onClick={() => setLightboxIndex(index)}>
              <GalleryImage
                src={`${process.env.PUBLIC_URL}/${image.src}`}
                alt={image.alt}
                loading="lazy"
              />
            </GalleryItem>
          ))}
        </GalleryGrid>
      </ContentContainer>

      <LightboxOverlay $isOpen={lightboxIndex !== null} onClick={() => setLightboxIndex(null)}>
        {lightboxIndex !== null && (
          <>
            <CloseButton onClick={() => setLightboxIndex(null)} aria-label="Close">
              ✕
            </CloseButton>
            <NavButton
              $direction="left"
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox('prev');
              }}
              aria-label="Previous image"
            >
              ‹
            </NavButton>
            <LightboxImage
              src={`${process.env.PUBLIC_URL}/${galleryImages[lightboxIndex].src}`}
              alt={galleryImages[lightboxIndex].alt}
              onClick={(e) => e.stopPropagation()}
            />
            <NavButton
              $direction="right"
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox('next');
              }}
              aria-label="Next image"
            >
              ›
            </NavButton>
          </>
        )}
      </LightboxOverlay>
    </PageContainer>
  );
};
