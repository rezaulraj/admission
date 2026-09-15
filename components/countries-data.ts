export type Office = {
  slug: string;
  name: string;
  address: string;
  phone: string;
};

export type CountryData = {
  slug: string;
  name: string;
  offices: Office[];
};

export const countriesData: Record<string, CountryData> = {
  bangladesh: {
    slug: "bangladesh",
    name: "Bangladesh",
    offices: [
      {
        slug: "dhaka",
        name: "Dhaka Office",
        address:
          "Zebun Arcade, House-4 (5th floor), Road-16 (Old-27), Sheikh Kamal Sarani, Dhanmondi, Dhaka-1209, Bangladesh",
        phone: "+880 1812 713814",
      },
      {
        slug: "sylhet-center-point",
        name: "Sylhet Office (Center Point)",
        address: "Level 2, Center Point, Kumarpara Road, Sylhet, Bangladesh",
        phone: "+880 1812 713814",
      },
      {
        slug: "sylhet-jail-road",
        name: "Sylhet Office (Jail Road)",
        address: "Ananda Tower, 8th floor, Jail Road, Sylhet 3100, Bangladesh",
        phone: "+880 1812 713814",
      },
    ],
  },
  ghana: {
    slug: "ghana",
    name: "Ghana",
    offices: [
      {
        slug: "accra",
        name: "Accra Office",
        address: "3rd Floor, Silver Star Tower, Airport City, Accra, Ghana",
        phone: "+233 20 123 4567",
      },
    ],
  },
  india: {
    slug: "india",
    name: "India",
    offices: [
      {
        slug: "delhi",
        name: "New Delhi Office",
        address: "2nd Floor, DLF Cyber City, Gurugram, Delhi NCR, India",
        phone: "+91 98100 12345",
      },
      {
        slug: "mumbai",
        name: "Mumbai Office",
        address: "5th Floor, Nariman Point, Mumbai 400021, India",
        phone: "+91 98200 54321",
      },
    ],
  },
  kenya: {
    slug: "kenya",
    name: "Kenya",
    offices: [
      {
        slug: "nairobi",
        name: "Nairobi Office",
        address: "4th Floor, Westlands Road, Nairobi, Kenya",
        phone: "+254 700 123456",
      },
    ],
  },
  nepal: {
    slug: "nepal",
    name: "Nepal",
    offices: [
      {
        slug: "kathmandu",
        name: "Kathmandu Office",
        address: "Putalisadak, Kathmandu 44600, Nepal",
        phone: "+977 1 4123456",
      },
    ],
  },
  nigeria: {
    slug: "nigeria",
    name: "Nigeria",
    offices: [
      {
        slug: "lagos",
        name: "Lagos Office",
        address: "12th Floor, Victoria Island, Lagos, Nigeria",
        phone: "+234 801 234 5678",
      },
    ],
  },
  pakistan: {
    slug: "pakistan",
    name: "Pakistan",
    offices: [
      {
        slug: "lahore",
        name: "Lahore Office",
        address: "3rd Floor, Gulberg III, Lahore, Pakistan",
        phone: "+92 300 1234567",
      },
      {
        slug: "karachi",
        name: "Karachi Office",
        address: "6th Floor, Clifton Block 5, Karachi, Pakistan",
        phone: "+92 301 7654321",
      },
    ],
  },
  "sri-lanka": {
    slug: "sri-lanka",
    name: "Sri Lanka",
    offices: [
      {
        slug: "colombo",
        name: "Colombo Office",
        address: "4th Floor, Duplication Road, Colombo 04, Sri Lanka",
        phone: "+94 77 123 4567",
      },
    ],
  },
  "united-kingdom": {
    slug: "united-kingdom",
    name: "United Kingdom",
    offices: [
      {
        slug: "london",
        name: "London Office",
        address: "Suite 4, Fenchurch Street, London EC3M, United Kingdom",
        phone: "+44 20 7946 0958",
      },
    ],
  },
};

export const allCountries: CountryData[] = Object.values(countriesData);
