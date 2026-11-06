export interface TourPackage {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  tag: string;
  badge: string;
  dates: string;
  durationLabel: string;
  destinationBreakdown: string;
  heroImage: string;
  overviewDescription: string;
  pricing: {
    standardRate: number;
    standardFormatted: string;
    occupancyTerms: string;
    hasSingleSupplement: boolean;
    singleRate?: number;
    singleFormatted?: string;
  };
  inclusions: string[];
  dohaActivities: string[];
  destinationActivities: string[];
  itinerary: {
    partNumber: string;
    location: string;
    nights: string;
    theme: string;
    highlights: { title: string; desc: string }[];
  }[];
}

export const tourPackagesData: Record<string, TourPackage> = {
  'doha-zanzibar': {
    id: 'doha-zanzibar',
    slug: 'doha-zanzibar',
    title: 'Doha + Zanzibar',
    subtitle: 'Dual Destination Itinerary · 7 Nights Luxury Escape',
    tag: '#1 Flagship Dual Escape',
    badge: 'December 12–19, 2026 · 7 Nights',
    dates: 'December 12–19, 2026',
    durationLabel: '7 Nights',
    destinationBreakdown: '4 Nights Doha · 3 Nights Zanzibar',
    heroImage: '/assets/images/zanzibar-beach.jpg',
    overviewDescription:
      "A seven-night escape curated to seamlessly bridge two distinct worlds. Begin amidst the bold geometric architecture and rich Arabian desert of Qatar, then fly south with Qatar Airways to unwind along the white sand reefs and spice heritage of Zanzibar.",
    pricing: {
      standardRate: 4350000,
      standardFormatted: '₦4,350,000',
      occupancyTerms: 'per person sharing (Double Occupancy)',
      hasSingleSupplement: false
    },
    inclusions: [
      'Return Flights with Qatar Airways',
      '5-Star Luxury Accommodation in Doha (4 Nights with daily breakfast)',
      '5-Star All-Inclusive Beachfront Resort in Zanzibar (3 Nights with all meals and drinks)',
      'Qatar Tourist Visa Processing Included',
      'Tanzania & Zanzibar Tourist Visa Processing Included',
      'Official Zanzibar Mandatory Travel Insurance',
      'Private Airport Pick-up & Drop-off Transfers in Doha & Zanzibar',
      'Professional English-speaking Tour Guide Throughout',
      'All Activity Entry Fees & Park Admission Permits'
    ],
    dohaActivities: [
      'Doha Panoramic City Tour (West Bay, The Pearl & Corniche)',
      'National Museum of Qatar (Jean Nouvel Architectural Masterpiece)',
      'Villaggio Mall with Italianate Gondola Canal Cruise',
      '4x4 Desert Dune Safari with Sunset Camel Ride'
    ],
    destinationActivities: [
      'Mnemba Island Sandbank & Dolphin Snorkelling Expedition',
      'UNESCO World Heritage Stone Town Walking Tour & Spice Market',
      'Baraka Natural Aquarium Swim with Rescued Green Sea Turtles',
      'Kendwa Sunset Beach & Coastal Ocean Kayaking'
    ],
    itinerary: [
      {
        partNumber: 'Part One',
        location: 'Doha, Qatar',
        nights: '4 Nights',
        theme: 'Urban Exploration & Arabian Heritage',
        highlights: [
          {
            title: '5-Star Doha Luxury Hotel',
            desc: 'Premium stay in the heart of Qatar with gourmet daily morning breakfast buffet.'
          },
          {
            title: 'Doha City Guided Tour',
            desc: 'Journey through West Bay modern skyline, the Corniche promenade, and Katara Cultural Village.'
          },
          {
            title: 'National Museum of Qatar',
            desc: 'Explore the iconic desert rose architecture showcasing Qatar’s rich maritime and bedouin heritage.'
          },
          {
            title: 'Villaggio Gondola Experience',
            desc: 'Glide through indoor Venetian canals in Doha’s most glamorous shopping destination.'
          },
          {
            title: 'Desert Dune Safari & Camel Trek',
            desc: '4x4 thrilling rollercoaster ride across golden desert dunes where sand meets the inland sea.'
          }
        ]
      },
      {
        partNumber: 'Part Two',
        location: 'Zanzibar, Tanzania',
        nights: '3 Nights',
        theme: 'Tropical Reefs & Historic Stone Town',
        highlights: [
          {
            title: 'All-Inclusive Coastal Resort',
            desc: '5-star beachfront hospitality with all meals, tropical beverages, and private beach access.'
          },
          {
            title: 'Mnemba Island Marine Atoll',
            desc: 'Private boat excursion to pristine coral reefs with dolphin encounters and crystal snorkelling.'
          },
          {
            title: 'Stone Town Cultural Tour',
            desc: 'Wander through winding coral-stone alleys, historic Sultan palaces, and carved Zanzibari brass doors.'
          },
          {
            title: 'Natural Sea Turtle Sanctuary',
            desc: 'Unique opportunity to feed and swim alongside rescued green sea turtles in their tidal lagoon.'
          },
          {
            title: 'Kendwa Beach & Kayaking',
            desc: 'Relax on powder-white sand, enjoy vibrant Swahili sunsets, and paddle along turquoise waters.'
          }
        ]
      }
    ]
  },

  'doha-grand-prix': {
    id: 'doha-grand-prix',
    slug: 'doha-grand-prix',
    title: 'Doha Grand Prix Experience',
    subtitle: 'Formula 1 Qatar Airways Qatar Grand Prix 2026 Weekend',
    tag: 'Formula 1 Grand Prix',
    badge: 'Nov 25 – Dec 1, 2026 · 6 Nights',
    dates: 'November 25 – December 1, 2026',
    durationLabel: '6 Nights',
    destinationBreakdown: '6 Nights Doha · Formula 1 Race Weekend',
    heroImage: '/assets/images/doha-f1-grand-prix.jpg',
    overviewDescription:
      "Witness high-octane Formula 1 night racing at Lusail International Circuit, combined with a 6-night 5-star Doha luxury stay, cultural museum immersion, and thrilling desert dune adventures.",
    pricing: {
      standardRate: 3400000,
      standardFormatted: '₦3,400,000',
      occupancyTerms: 'per person sharing (Double Occupancy)',
      hasSingleSupplement: true,
      singleRate: 4150000,
      singleFormatted: '₦4,150,000 (Single Occupancy Solo Room)'
    },
    inclusions: [
      'Return International Flight Tickets',
      '6 Nights at a Luxury 5-Star Hotel in Doha',
      'Daily Gourmet Morning Breakfast Buffet',
      '3-Day Formula 1 Qatar Grand Prix Weekend Circuit Admission',
      'Qatar Tourist Visa Processing Included',
      'Return Airport Transfers from Hamad International Airport',
      'Lusail International Circuit Event Transport Coordination',
      'Comprehensive Doha City Tour & Cultural Discovery',
      'National Museum of Qatar Admission',
      '4x4 Desert Safari & Inland Sea Excursion'
    ],
    dohaActivities: [
      '3-Day Lusail Circuit F1 Practice, Qualifying & Night Grand Prix',
      'Doha Modern Skyline & Katara Cultural Village Tour',
      'National Museum of Qatar & Museum of Islamic Art',
      'Desert Dune Bashing to the Inland Sea (Khor Al Adaid)'
    ],
    destinationActivities: [
      'Souq Waqif Night Market, Falcon Souq & Traditional Spices',
      'Pearl-Qatar Luxury Marina Promenade & Fine Dining',
      'Doha Corniche Evening Dhow Cruise with Skyline Panorama'
    ],
    itinerary: [
      {
        partNumber: 'Event Experience',
        location: 'Lusail & Doha, Qatar',
        nights: '6 Nights',
        theme: 'Formula 1 High-Speed Racing & Desert Luxury',
        highlights: [
          {
            title: '5-Star Doha Luxury Hotel Stay',
            desc: '6 nights in premium 5-star hospitality with daily international breakfast and premier wellness amenities.'
          },
          {
            title: '3-Day Formula 1 Grand Prix Weekend',
            desc: 'Experience practice sessions, Saturday sprint/qualifying, and the breathtaking Sunday night Grand Prix under the floodlights at Lusail.'
          },
          {
            title: 'Qatar Tourist Visa Included',
            desc: 'Complete documentation and fast-track electronic visa processing handled end-to-end.'
          },
          {
            title: 'Inland Sea 4x4 Desert Safari',
            desc: 'Venture out into Qatar’s UNESCO-recognized desert dunes where pristine sand dunes cascade directly into the sea.'
          },
          {
            title: 'Doha City & National Museum Tour',
            desc: 'Discover Qatar’s rapid rise from a pearl-diving community to a global metropolis with guided private transport.'
          }
        ]
      }
    ]
  }
};
