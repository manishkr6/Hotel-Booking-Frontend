import logo from "./logo.png";
import owner from "./owner.jpg";
import searchIcon from "./searchIcon.svg";
import userIcon from "./userIcon.svg";
import calenderIcon from "./calenderIcon.svg";
import locationIcon from "./locationIcon.svg";
import starIconFilled from "./starIconFilled.svg";
import arrowIcon from "./arrowIcon.svg";
import starIconOutlined from "./starIconOutlined.svg";
import instagramIcon from "./instagramIcon.svg";
import facebookIcon from "./facebookIcon.svg";
import twitterIcon from "./twitterIcon.svg";
import linkendinIcon from "./linkendinIcon.svg";
import freeWifiIcon from "./freeWifiIcon.svg";
import freeBreakfastIcon from "./freeBreakfastIcon.svg";
import roomServiceIcon from "./roomServiceIcon.svg";
import mountainIcon from "./mountainIcon.svg";
import poolIcon from "./poolIcon.svg";
import homeIcon from "./homeIcon.svg";
import closeIcon from "./closeIcon.svg";
import locationFilledIcon from "./locationFilledIcon.svg";
import heartIcon from "./heartIcon.svg";
import badgeIcon from "./badgeIcon.svg";
import menuIcon from "./menuIcon.svg";
import closeMenu from "./closeMenu.svg";
import guestsIcon from "./guestsIcon.svg";
import roomImg1 from "./roomImg1.png";
import roomImg2 from "./roomImg2.png";
import roomImg3 from "./roomImg3.png";
import roomImg4 from "./roomImg4.png";
import regImage from "./regImage.png";
import exclusiveOfferCardImg1 from "./exclusiveOfferCardImg1.png";
import exclusiveOfferCardImg2 from "./exclusiveOfferCardImg2.png";
import exclusiveOfferCardImg3 from "./exclusiveOfferCardImg3.png";
import addIcon from "./addIcon.svg";
import dashboardIcon from "./dashboardIcon.svg";
import listIcon from "./listIcon.svg";
import uploadArea from "./uploadArea.svg";
import totalBookingIcon from "./totalBookingIcon.svg";
import totalRevenueIcon from "./totalRevenueIcon.svg";
import eastSikkim from "./east-sikkim.jpg";
import manish from "./manish.jpg";
import guidHiking from "./guid-hiking.jpg";
import sunriseHiking from "./sunrise-hiking.jpg";
import yogaSession from "./yoga-session.jpg";
import cookingClass from "./cooking-class.jpg";
import birdWatching from "./bird-watching.jpg";
import photoWalk from "./photo-walk.jpg";
import contactImg from "./contact.jpg";

export const assets = {
  logo,
  eastSikkim,
  searchIcon,
  userIcon,
  calenderIcon,
  locationIcon,
  starIconFilled,
  arrowIcon,
  starIconOutlined,
  instagramIcon,
  facebookIcon,
  twitterIcon,
  linkendinIcon,
  freeWifiIcon,
  freeBreakfastIcon,
  roomServiceIcon,
  mountainIcon,
  poolIcon,
  closeIcon,
  homeIcon,
  locationFilledIcon,
  heartIcon,
  badgeIcon,
  menuIcon,
  closeMenu,
  guestsIcon,
  regImage,
  addIcon,
  dashboardIcon,
  listIcon,
  uploadArea,
  totalBookingIcon,
  totalRevenueIcon,
  guidHiking,
  sunriseHiking,
  yogaSession,
  cookingClass,
  birdWatching,
  photoWalk,
  contactImg
};

export const districts = [
  "East Sikkim",
  "West Sikkim",
  "North Sikkim",
  "South Sikkim",
];

// Exclusive Offers Dummy Data
export const exclusiveOffers = [
  {
    _id: 1,
    title: "Summer Escape Package",
    description: "Enjoy a complimentary night and daily breakfast",
    priceOff: 25,
    expiryDate: "Aug 31",
    image: exclusiveOfferCardImg1,
  },
  {
    _id: 2,
    title: "Romantic Getaway",
    description: "Special couples package including spa treatment",
    priceOff: 20,
    expiryDate: "Sep 20",
    image: exclusiveOfferCardImg2,
  },
  {
    _id: 3,
    title: "Luxury Retreat",
    description:
      "Book 60 days in advance and save on your stay at any of our luxury properties worldwide.",
    priceOff: 30,
    expiryDate: "Sep 25",
    image: exclusiveOfferCardImg3,
  },
];

// Testimonials Dummy Data
export const testimonials = [
  {
    id: 1,
    name: "Manish Kumar",
    address: "Sikkim, India",
    image: manish,
    rating: 5,
    review:
      "I've used many booking platforms before, but none compare to the personalized experience and attention to detail that LuxLodge provides.",
  },
  {
    id: 2,
    name: "Rohit Singh",
    address: "Delhi, India",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    rating: 4,
    review:
      "LuxLodge exceeded my expectations. The booking process was seamless, and the hotels were absolutely top-notch. Highly recommended!",
  },
  {
    id: 3,
    name: "Amit Kumar",
    address: "Mumbai, India",
    image:
      "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=200",
    rating: 5,
    review:
      "Amazing service! I always find the best luxury accommodations through LuxLodge. Their recommendations never disappoint!",
  },
];

// Facility Icon
export const facilityIcons = {
  "Free WiFi": assets.freeWifiIcon,
  "Free Breakfast": assets.freeBreakfastIcon,
  "Room Service": assets.roomServiceIcon,
  "Mountain View": assets.mountainIcon,
  "Pool Access": assets.poolIcon,
};

// For Room Details Page
export const roomCommonData = [
  {
    icon: assets.homeIcon,
    title: "Clean & Safe Stay",
    description: "A well-maintained and hygienic space just for you.",
  },
  {
    icon: assets.badgeIcon,
    title: "Enhanced Cleaning",
    description: "This host follows Staybnb's strict cleaning standards.",
  },
  {
    icon: assets.locationFilledIcon,
    title: "Excellent Location",
    description: "90% of guests rated the location 5 stars.",
  },
  {
    icon: assets.heartIcon,
    title: "Smooth Check-In",
    description: "100% of guests gave check-in a 5-star rating.",
  },
];

// User Dummy Data
export const userDummyData = {
  _id: "user_2unqyL4diJFP1E3pIBnasc7w8hP",
  username: "Manish Kumar",
  email: "user.manishkr@gmail.com",
  image: owner,
  role: "hotelOwner",
  createdAt: "2025-03-25T09:29:16.367Z",
  updatedAt: "2025-04-10T06:34:48.719Z",
  __v: 1,
  recentSearchedCities: ["New York"],
};

// Hotel Dummy Data (Base)
export const hotelDummyData = {
  _id: "67f76393197ac559e4089b72",
  name: "Urbanza Suites",
  address: "Main Road  123 Street , 23 Colony",
  contact: "+0123456789",
  owner: userDummyData,
  city: "Gangtok, Sikkim",
  createdAt: "2025-04-10T06:22:11.663Z",
  updatedAt: "2025-04-10T06:22:11.663Z",
  __v: 0,
};

// Rooms Dummy Data
export const roomsDummyData = [
  {
    _id: "67f7647c197ac559e4089b96",
    hotel: {
      ...hotelDummyData,
      name: "The Orchid Retreat, Gangtok",
      city: "East Sikkim",
      address: "Tadong, Gangtok, East Sikkim",
    },
    roomType: "Double Bed",
    pricePerNight: 4200,
    amenities: ["Room Service", "Mountain View", "Pool Access"],
    images: [roomImg1, roomImg2, roomImg3, roomImg4],
    isAvailable: true,
    createdAt: "2025-04-10T06:26:04.013Z",
    updatedAt: "2025-04-10T06:26:04.013Z",
    __v: 0,
  },
  {
    _id: "67f76452197ac559e4089b8e",
    hotel: {
      ...hotelDummyData,
      name: "Ravangla Valley Resort",
      city: "South Sikkim",
      address: "Ravangla, South Sikkim",
    },
    roomType: "Double Bed",
    pricePerNight: 3800,
    amenities: ["Room Service", "Mountain View", "Pool Access"],
    images: [roomImg2, roomImg3, roomImg4, roomImg1],
    isAvailable: true,
    createdAt: "2025-04-10T06:25:22.593Z",
    updatedAt: "2025-04-10T06:25:22.593Z",
    __v: 0,
  },
  {
    _id: "67f76406197ac559e4089b82",
    hotel: {
      ...hotelDummyData,
      name: "Pelling Heritage Stay",
      city: "West Sikkim",
      address: "Pelling, West Sikkim",
    },
    roomType: "Double Bed",
    pricePerNight: 3400,
    amenities: ["Free WiFi", "Free Breakfast", "Room Service"],
    images: [roomImg3, roomImg4, roomImg1, roomImg2],
    isAvailable: true,
    createdAt: "2025-04-10T06:24:06.285Z",
    updatedAt: "2025-04-10T06:24:06.285Z",
    __v: 0,
  },
  {
    _id: "67f763d8197ac559e4089b7a",
    hotel: {
      ...hotelDummyData,
      name: "Lachung Snow View",
      city: "North Sikkim",
      address: "Lachung, North Sikkim",
    },
    roomType: "Single Bed",
    pricePerNight: 3100,
    amenities: ["Free WiFi", "Room Service", "Pool Access"],
    images: [roomImg4, roomImg1, roomImg2, roomImg3],
    isAvailable: true,
    createdAt: "2025-04-10T06:23:20.252Z",
    updatedAt: "2025-04-10T06:23:20.252Z",
    __v: 0,
  },
  // East Sikkim Hotels
  {
    _id: "67f7647c197ac559e4089b97",
    hotel: {
      ...hotelDummyData,
      name: "Gangtok Heights Resort",
      city: "East Sikkim",
      address: "MG Marg, Gangtok, East Sikkim",
    },
    roomType: "Luxury Room",
    pricePerNight: 5500,
    amenities: ["Free WiFi", "Free Breakfast", "Room Service", "Mountain View"],
    images: [roomImg1, roomImg2, roomImg3, roomImg4],
    isAvailable: true,
    createdAt: "2025-04-10T06:26:04.013Z",
    updatedAt: "2025-04-10T06:26:04.013Z",
    __v: 0,
  },
  {
    _id: "67f7647c197ac559e4089b98",
    hotel: {
      ...hotelDummyData,
      name: "Rumtek Monastery View Hotel",
      city: "East Sikkim",
      address: "Rumtek, East Sikkim",
    },
    roomType: "Family Suite",
    pricePerNight: 4800,
    amenities: ["Free WiFi", "Mountain View", "Pool Access"],
    images: [roomImg2, roomImg3, roomImg4, roomImg1],
    isAvailable: true,
    createdAt: "2025-04-10T06:26:04.013Z",
    updatedAt: "2025-04-10T06:26:04.013Z",
    __v: 0,
  },
  {
    _id: "67f7647c197ac559e4089b99",
    hotel: {
      ...hotelDummyData,
      name: "Tsomgo Lake Retreat",
      city: "East Sikkim",
      address: "Tsomgo Lake Road, East Sikkim",
    },
    roomType: "Double Bed",
    pricePerNight: 4500,
    amenities: ["Free WiFi", "Free Breakfast", "Mountain View"],
    images: [roomImg3, roomImg4, roomImg1, roomImg2],
    isAvailable: true,
    createdAt: "2025-04-10T06:26:04.013Z",
    updatedAt: "2025-04-10T06:26:04.013Z",
    __v: 0,
  },
  // West Sikkim Hotels
  {
    _id: "67f76406197ac559e4089b83",
    hotel: {
      ...hotelDummyData,
      name: "Khecheopalri Lake Resort",
      city: "West Sikkim",
      address: "Khecheopalri, West Sikkim",
    },
    roomType: "Double Bed",
    pricePerNight: 3600,
    amenities: ["Free WiFi", "Mountain View", "Pool Access"],
    images: [roomImg4, roomImg1, roomImg2, roomImg3],
    isAvailable: true,
    createdAt: "2025-04-10T06:24:06.285Z",
    updatedAt: "2025-04-10T06:24:06.285Z",
    __v: 0,
  },
  {
    _id: "67f76406197ac559e4089b84",
    hotel: {
      ...hotelDummyData,
      name: "Yuksom Heritage Homestay",
      city: "West Sikkim",
      address: "Yuksom, West Sikkim",
    },
    roomType: "Single Bed",
    pricePerNight: 2800,
    amenities: ["Free WiFi", "Free Breakfast", "Room Service"],
    images: [roomImg1, roomImg3, roomImg2, roomImg4],
    isAvailable: true,
    createdAt: "2025-04-10T06:24:06.285Z",
    updatedAt: "2025-04-10T06:24:06.285Z",
    __v: 0,
  },
  {
    _id: "67f76406197ac559e4089b85",
    hotel: {
      ...hotelDummyData,
      name: "Pemayangtse Monastery Stay",
      city: "West Sikkim",
      address: "Pemayangtse, West Sikkim",
    },
    roomType: "Luxury Room",
    pricePerNight: 3900,
    amenities: ["Free WiFi", "Mountain View", "Room Service"],
    images: [roomImg2, roomImg4, roomImg1, roomImg3],
    isAvailable: true,
    createdAt: "2025-04-10T06:24:06.285Z",
    updatedAt: "2025-04-10T06:24:06.285Z",
    __v: 0,
  },
  // North Sikkim Hotels
  {
    _id: "67f763d8197ac559e4089b7b",
    hotel: {
      ...hotelDummyData,
      name: "Yumthang Valley Resort",
      city: "North Sikkim",
      address: "Yumthang, North Sikkim",
    },
    roomType: "Double Bed",
    pricePerNight: 3500,
    amenities: ["Free WiFi", "Mountain View", "Pool Access"],
    images: [roomImg3, roomImg1, roomImg4, roomImg2],
    isAvailable: true,
    createdAt: "2025-04-10T06:23:20.252Z",
    updatedAt: "2025-04-10T06:23:20.252Z",
    __v: 0,
  },
  {
    _id: "67f763d8197ac559e4089b7c",
    hotel: {
      ...hotelDummyData,
      name: "Gurudongmar Lake View Hotel",
      city: "North Sikkim",
      address: "Gurudongmar, North Sikkim",
    },
    roomType: "Family Suite",
    pricePerNight: 4200,
    amenities: ["Free WiFi", "Free Breakfast", "Mountain View", "Room Service"],
    images: [roomImg1, roomImg4, roomImg3, roomImg2],
    isAvailable: true,
    createdAt: "2025-04-10T06:23:20.252Z",
    updatedAt: "2025-04-10T06:23:20.252Z",
    __v: 0,
  },
  {
    _id: "67f763d8197ac559e4089b7d",
    hotel: {
      ...hotelDummyData,
      name: "Chopta Valley Homestay",
      city: "North Sikkim",
      address: "Chopta Valley, North Sikkim",
    },
    roomType: "Single Bed",
    pricePerNight: 2900,
    amenities: ["Free WiFi", "Mountain View"],
    images: [roomImg4, roomImg2, roomImg1, roomImg3],
    isAvailable: true,
    createdAt: "2025-04-10T06:23:20.252Z",
    updatedAt: "2025-04-10T06:23:20.252Z",
    __v: 0,
  },
  // South Sikkim Hotels
  {
    _id: "67f76452197ac559e4089b8f",
    hotel: {
      ...hotelDummyData,
      name: "Namchi Buddha Park Hotel",
      city: "South Sikkim",
      address: "Namchi, South Sikkim",
    },
    roomType: "Luxury Room",
    pricePerNight: 4000,
    amenities: ["Free WiFi", "Free Breakfast", "Room Service", "Mountain View"],
    images: [roomImg2, roomImg1, roomImg3, roomImg4],
    isAvailable: true,
    createdAt: "2025-04-10T06:25:22.593Z",
    updatedAt: "2025-04-10T06:25:22.593Z",
    __v: 0,
  },
  {
    _id: "67f76452197ac559e4089b90",
    hotel: {
      ...hotelDummyData,
      name: "Temi Tea Garden Resort",
      city: "South Sikkim",
      address: "Temi, South Sikkim",
    },
    roomType: "Double Bed",
    pricePerNight: 3700,
    amenities: ["Free WiFi", "Mountain View", "Pool Access"],
    images: [roomImg3, roomImg2, roomImg4, roomImg1],
    isAvailable: true,
    createdAt: "2025-04-10T06:25:22.593Z",
    updatedAt: "2025-04-10T06:25:22.593Z",
    __v: 0,
  },
  {
    _id: "67f76452197ac559e4089b91",
    hotel: {
      ...hotelDummyData,
      name: "Jorethang Heritage Stay",
      city: "South Sikkim",
      address: "Jorethang, South Sikkim",
    },
    roomType: "Family Suite",
    pricePerNight: 4100,
    amenities: ["Free WiFi", "Free Breakfast", "Room Service"],
    images: [roomImg4, roomImg3, roomImg1, roomImg2],
    isAvailable: true,
    createdAt: "2025-04-10T06:25:22.593Z",
    updatedAt: "2025-04-10T06:25:22.593Z",
    __v: 0,
  },
];

// User Bookings Dummy Data
export const userBookingsDummyData = [
  {
    _id: "67f76839994a731e97d3b8ce",
    user: userDummyData,
    room: roomsDummyData[1],
    hotel: hotelDummyData,
    checkInDate: "2025-04-30T00:00:00.000Z",
    checkOutDate: "2025-05-01T00:00:00.000Z",
    totalPrice: 299,
    guests: 1,
    status: "pending",
    paymentMethod: "Stripe",
    isPaid: true,
    createdAt: "2025-04-10T06:42:01.529Z",
    updatedAt: "2025-04-10T06:43:54.520Z",
    __v: 0,
  },
  {
    _id: "67f76829994a731e97d3b8c3",
    user: userDummyData,
    room: roomsDummyData[0],
    hotel: hotelDummyData,
    checkInDate: "2025-04-27T00:00:00.000Z",
    checkOutDate: "2025-04-28T00:00:00.000Z",
    totalPrice: 399,
    guests: 1,
    status: "pending",
    paymentMethod: "Pay At Hotel",
    isPaid: false,
    createdAt: "2025-04-10T06:41:45.873Z",
    updatedAt: "2025-04-10T06:41:45.873Z",
    __v: 0,
  },
  {
    _id: "67f76810994a731e97d3b8b4",
    user: userDummyData,
    room: roomsDummyData[3],
    hotel: hotelDummyData,
    checkInDate: "2025-04-11T00:00:00.000Z",
    checkOutDate: "2025-04-12T00:00:00.000Z",
    totalPrice: 199,
    guests: 1,
    status: "pending",
    paymentMethod: "Pay At Hotel",
    isPaid: false,
    createdAt: "2025-04-10T06:41:20.501Z",
    updatedAt: "2025-04-10T06:41:20.501Z",
    __v: 0,
  },
];

// Dashboard Dummy Data
export const dashboardDummyData = {
  totalBookings: 3,
  totalRevenue: 897,
  bookings: userBookingsDummyData,
};

// --------- SVG code for Book Icon------
/* 
const BookIcon = ()=>(
    <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
</svg>
)

*/
