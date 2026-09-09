import heroVideo from "../assets/bg-hero.mp4";
import heroVideoOne from "../assets/bg-hero1.mp4";
import heroVideoTwo from "../assets/bg-hero2.mp4";
import heroVideoThree from "../assets/bg-hero3.mp4";
import heroVideoBakery from "../assets/bg-hero5.mp4";
import bakrieOne from "../assets/products/bakrie-.jpg";
import bakrieTwo from "../assets/products/bakrie-2.jpg";
import bakrieThree from "../assets/products/bakrie1.jpg";
import bakrieFour from "../assets/products/bakrie3.jpg";
import bakrieFive from "../assets/products/bakrie4.jpg";

export const images = {
  hero: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80",
  heroVideo,
  heroVideos: [heroVideoTwo, heroVideo, heroVideoOne, heroVideoThree, heroVideoBakery],
  coffeeItems: [
    "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=500&q=80",
    "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=500&q=80",
    "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&q=80",
    "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500&q=80",
  ],
  dessertItems: [bakrieOne, bakrieTwo, bakrieThree, bakrieFour, bakrieFive],
  beansBanner: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1200&q=80",
  avatar: "https://i.pravatar.cc/80?img=12",
  footerBeans: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1200&q=80",
};

export const navLinks = ["Home", "Coffee", "Bakery", "Shop", "About", "Login"];

const createProducts = (productImages, name, price) =>
  productImages.map((image) => ({
    image,
    name,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,",
    price,
  }));

export const productSections = [
  {
    title: "Our Special Coffee",
    items: createProducts(images.coffeeItems, "Lungo Coffee", "Rs. 200"),
  },
  {
    title: "Our Special Dessert",
    items: createProducts(images.dessertItems, "Lungo Coffee", "Rs. 200"),
  },
];

export const categories = [
  { icon: "coffee", label: "Hot Coffee" },
  { icon: "cup", label: "Cold Coffee" },
  { icon: "glass", label: "Cup Coffee" },
  { icon: "cake", label: "Dessert" },
];

export const testimonials = [
  { name: "James Smith", role: "Entrepreneur", stars: 4 },
  { name: "James Smith", role: "Entrepreneur", stars: 5 },
  { name: "James Smith", role: "Entrepreneur", stars: 3 },
];

export const footerColumns = [
  { title: "Privacy", links: ["Terms of use", "Privacy policy", "Cookies"] },
  { title: "Services", links: ["Shop", "Order ahead", "Menu"] },
  { title: "About us", links: ["Find a location", "About us", "Our story"] },
  { title: "Information", links: ["Plans & pricing", "Sell your products", "Jobs"] },
];