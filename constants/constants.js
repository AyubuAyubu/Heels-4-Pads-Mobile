const onboarding_screens = [
  {
    id: 1,
    backgroundImage: require("../assets/images/background_01.png"),
    bannerImage: require("../assets/images/favourite_food.png"),
    title: "",
    description:
      "",
  },
  {
    id: 2,
    backgroundImage: require("../assets/images/background_01.png"),
    bannerImage: require("../assets/images/hot_delivery.png"),
    title: "",
    description:
      "",
  },
  {
    id: 3,
    backgroundImage: require("../assets/images/background_01.png"),
    bannerImage: require("../assets/images/great_food.png"),
    title: "PERIOD IS POWER.",
    description:
      "Togetherness Equals Confidence",
  },
];

const screens = {
  main_layout: "MainLayout",
  home: "Dashboard",
  search: "Search",
  cart: "Cart",
  favourite: "Favourite",
  orderHistory: "My Orders",
  notification: "Notifications",
  my_wallet: "My Profile",
 
  coupon: "About us",
  track_order: "Contact us",
  settings: "Setttings",
  refer_friend: "Share with Friends",
  help_center: "Help  and Feedback",
  logout: "Logout",
 
};



const delivery_time = [
  {
    id: 1,
    label: "10 Mins",
  },
  {
    id: 2,
    label: "20 Mins",
  },
  {
    id: 3,
    label: "30 Mins",
  },
];

const track_order_status = [
  {
    id: 1,
    title: "Order Placed",
    sub_title: "Your order has been received",
  },
  {
    id: 2,
    title: "Awaiting fulfilment",
    sub_title: "Your order has been prepared",
  },
  {
    id: 3,
    title: "Shipped",
    sub_title: "Hang on! Your package is on the way",
  },
  {
    id: 4,
    title: "Out of Delivery",
    sub_title: "Order is on the way!",
  },
  {
    id: 5,
    title: "Delivered",
    sub_title: "Enjoy your delivery",
  },
  
];

const ratings = [
  {
    id: 1,
    label: 1,
  },
  {
    id: 2,
    label: 2,
  },
  {
    id: 3,
    label: 3,
  },
  {
    id: 4,
    label: 4,
  },
  {
    id: 5,
    label: 5,
  },
];

const tags = [
  {
    id: 1,
    label: "Burger",
  },
  {
    id: 2,
    label: "Fast Food",
  },
  {
    id: 3,
    label: "Pizza",
  },
  {
    id: 4,
    label: "Asian",
  },
  {
    id: 5,
    label: "Dessert",
  },
  {
    id: 6,
    label: "Breakfast",
  },
  {
    id: 7,
    label: "Vegetable",
  },
  {
    id: 8,
    label: "Taccos",
  },
];

const tips = [
  {
    id: 1,
    label: "No Tips",
  },
  {
    id: 2,
    label: "$5",
  },
  {
    id: 3,
    label: "$10",
  },
  {
    id: 4,
    label: "$15",
  },
  {
    id: 5,
    label: "$20",
  },
];

export default {
  onboarding_screens,
  screens,
  
  delivery_time,
  track_order_status,
  ratings,
  tags,
  tips,
};
