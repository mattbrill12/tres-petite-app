export interface ServicePackage {
    title: string;
    subtitle: string;
    features: string[];
    isComingSoon?: boolean;
    note?: string;
}

export interface ServiceCategory {
    id: string;
    name: string;
    packages: ServicePackage[];
    image: string;
    description: string;
    commonFeatures?: string[];
}

export const services: ServiceCategory[] = [
    {
        id: 'gourmet-cart',
        name: 'Gourmet Cart',
        description: 'Experience our signature personalized cart service, perfect for any occasion.',
        image: '/cart-landscape.png',
        commonFeatures: [
            'Gourmet crackers & breads',
            'Fresh & dried fruit',
            'Olives & nuts',
            'Honey & jam'
        ],
        packages: []
    },
    {
        id: 'charcuterie-cart',
        name: 'Charcuterie Cart',
        description: 'Impress your guests with our Gourmet Cart experience! Featuring a refined two-hour service, complete with 2 or more attendants.',
        image: '/cart-landscape.png',
        commonFeatures: [
            'Gourmet crackers & breads',
            'Fresh & dried fruit',
            'Olives & nuts',
            'Honey & jam'
        ],
        packages: [
            {
                title: 'Mini Graze',
                subtitle: 'Perfect for small gatherings and intimate parties, our charcuterie cups deliver artisanal flavors in stylish individual servings',
                features: [
                    '2 artisan cheeses & cured meats',
                    'Classic charcuterie cart styling',
                    'Up to 2 hours of service'
                ]
            },
            {
                title: 'Graze and Gather',
                subtitle: 'Ideal for birthdays, engagements, or medium-sized celebrations, select your favorites and build a box that fits your taste and style',
                features: [
                    '4 artisan cheeses & 3 cured meats',
                    'Elevated accompaniments & spreads',
                    'Decorative greenery & custom signage',
                    'Up to 2 hours of service'
                ]
            },
            {
                title: 'Luxe Graze',
                subtitle: 'Elevate weddings, corporate events, and upscale parties! Try premium customizable charcuterie boards for each of your guests',
                features: [
                    '5 premium cheeses & 4 curated meats',
                    'Elevated accompaniments: honeycomb, fig jam, spreads',
                    'Custom décor styled to your theme',
                    'Personalized event signage',
                    'Up to 4 hours of service'
                ]
            }
        ]
    },
    {
        id: 'seasonal',
        name: 'Seasonal Features',
        description: 'Special seasonal offerings for your events.',
        image: '/hot-chocolate-bar-2.png',
        packages: [
            {
                title: 'Cozy Cart',
                subtitle: 'Perfect for intimate gatherings or budget-friendly events',
                note: '&nbsp;',
                features: [
                    'Classic hot chocolate (1 flavor)',
                    'Basic topping (mini marshmallows, whipped cream)',
                    'Simple cart setup',
                    'Up to 2 hours of service'
                ]
            },
            {
                title: 'Sweet Sips',
                subtitle: 'Great for birthdays, baby showers, and holiday parties',
                note: '',
                features: [
                    '2 flavor options (Classic + Peppermint or Salted Caramel)',
                    'Additional toppings (candy canes, chocolate chips, caramel drizzle)',
                    'Themed decor (seasonal or event-inspired)',
                    'Customized menu board',
                    'Up to 2 hours of service'
                ]
            },
            {
                title: 'Chocoluxe',
                subtitle: 'Perfect for weddings, large parties, or corporate events',
                note: '',
                features: [
                    'Up to 3 hot chocolate flavors (Classic, White Chocolate, Peppermint, Salted Caramel)',
                    'Gourmet toppings bar: crushed cookies, sprinkles, chocolate shavings',
                    'Personalized event signage',
                    'Upgraded decor',
                    'Event time up to 4 hours',
                    '2 attendants'
                ]
            }
        ]
    },
    {
        id: 'curated-bites',
        name: 'Curated Bites',
        description: 'Indulge in our handpicked selection of refined bites.',
        image: '/curated-bites-cup-cuterie.jpg',
        packages: [
            {
                title: 'Cup-cuteries',
                subtitle: 'Our modern twist on traditional charcuterie, beautifully arranged with a balance of sweet and savory ingredients!',
                features: [
                    'Individually portioned charcuterie cups',
                    '2 cheese varieties',
                    '2 cured meats',
                    'Fresh and dried fruits',
                    'Nuts and olives',
                    'Gourmet crackers',
                    'Honey drizzle',
                    'Eco-friendly packaging'
                ]
            },
            {
                title: 'Grazette',
                subtitle: 'Our Grazette delivers a personal charcuterie experience — 4"x4" beautifully boxed and ready to enjoy!',
                features: [
                    'Mini charcuterie boards',
                    '3 cheese varieties',
                    '3 cured meats',
                    'Fresh and dried fruits',
                    'Premium nuts and olives',
                    'Artisanal crackers',
                    'Honey and jam',
                    'Decorative garnish'
                ]
            },
            {
                title: 'Petite Feast',
                subtitle: 'A perfect 5"x7" gourmet charcuterie box, thoughtfully curated with premium meats, cheeses, and perfect pairings.',
                features: [
                    'Luxury individual portions',
                    '4 premium cheeses',
                    '4 specialty meats',
                    'Seasonal fresh fruits',
                    'Gourmet dried fruits',
                    'Premium nuts and olives',
                    'Artisanal crackers and bread',
                    'Specialty honey and preserves',
                    'Custom garnish and presentation'
                ]
            }
        ]
    },
    {
        id: 'beverage-bar',
        name: 'Beverage Bar',
        description: 'Sip, celebrate, and shine with our made-for-you beverage bar.',
        image: '/beverage-bar-1.png',
        packages: [
            {
                title: 'Graze-tini',
                subtitle: 'Perfect for intimate gatherings or budget-friendly events',
                features: [
                    '1 Signature Custom Cocktail or Mocktail',
                    'Simple cart setup',
                    'Up to 2 hours of service'
                ],
                note: '*alcohol must be provided by the client'
            },
            {
                title: 'Perfect Pairing',
                subtitle: 'Great for birthdays, baby showers, and holiday parties',
                features: [
                    '2 Signature Custom Cocktail or Mocktail',
                    'Simple cart setup',
                    'Up to 2 hours of service'
                ],
                note: '*alcohol must be provided by the client'
            },
            {
                title: 'Boba Bliss',
                subtitle: 'Perfect for any event!',
                features: [
                    'Choice of 2 Boba flavor drinks',
                    'Personalized event signage',
                    'Simple cart setup',
                    'Up to 2 hours of service'
                ]
            }
        ]
    }
];
