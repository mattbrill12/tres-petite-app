import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background: white;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.05);
  width: 100%;
  position: relative;
  z-index: 10;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

const IconLink = styled.a<{ as?: any }>`
  color: #2D1A33;
  text-decoration: none;
  transition: color 0.2s ease;
  display: flex;
  align-items: center;
  font-size: 1.5rem;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <SocialLinks>
                <IconLink
                    href="https://www.instagram.com/trespetitellc"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit our Instagram"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                </IconLink>
                <IconLink
                    href="https://www.facebook.com/profile.php?id=61582772068447"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit our Facebook"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                </IconLink>

                <IconLink
                    as={Link}
                    to="/contact"
                    aria-label="Contact Us"
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                    </svg>
                </IconLink>
            </SocialLinks>
        </FooterContainer>
    );
};