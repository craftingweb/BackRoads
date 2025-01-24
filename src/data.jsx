import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.instagram.com", icon: "fab fa-instagram" },
];

export const services = [
  {
    id: 1,
    title: "saving money",
    icon: "fas fa-wallet fa-fw",
    text: "We provide affordable options to ensure you enjoy your adventure without breaking the bank",
  },
  {
    id: 2,
    title: "endless hiking",
    icon: "fas fa-tree fa-fw",
    text: "Explore breathtaking trails with endless opportunities to connect with nature and discover hidden gems",
  },
  {
    id: 3,
    title: "amazing comfort",
    icon: "fas fa-socks fa-fw",
    text: "Relax and recharge with our thoughtfully designed services that prioritize your comfort every step of the way",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    data: "august 26th, 2025",
    title: "Tibet Adventure",
    text: " Discover the heart of the Himalayas as you explore breathtaking landscapes and immerse yourself in the spiritual essence of Tibet",
    country: "China",
    duration: "6 days",
    price: "from $2100",
  },
  {
    id: 2,
    image: tour2,
    data: "october 2nd, 2025",
    title: "best of java",
    text: " Discover the best of Java, where lush jungles, stunning beaches, ancient temples, and vibrant culture come together for an unforgettable adventure",
    country: "indonesia",
    duration: "11 days",
    price: "from $1400",
  },
  {
    id: 3,
    image: tour3,
    data: "november 15th, 2025",
    title: "explore hong kong",
    text: " Immerse yourself in the vibrant energy of Hong Kong, where towering skyscrapers meet serene temples, bustling markets, and breathtaking harbor views",
    country: "hong kong",
    duration: "8 days",
    price: "from $5000",
  },
  {
    id: 4,
    image: tour4,
    data: "december 5th, 2025",
    title: "kenya highlights",
    text: " Kenya offers breathtaking highlights, from the vast savannahs of the Maasai Mara and Amboseli National Park to the stunning coastline",
    country: "kenya",
    duration: "20 days",
    price: "from $3300",
  },
];
