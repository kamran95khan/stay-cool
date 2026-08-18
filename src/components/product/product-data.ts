// ============================================================
// EDIT THESE CONSTANTS — shop owner configurable values
// ============================================================

// Replace with the shop's real WhatsApp number (country code, no + or spaces)
export const WHATSAPP_NUMBER = "923001234567";

export const BRAND_NAME = "SolarBreeze";
export const CONTACT_PHONE = "0300 123 4567";
export const CONTACT_EMAIL = "orders@solarbreeze.pk";

export const UNIT_PRICE = 6999; // Rs.
export const ORIGINAL_PRICE = 9500; // Rs.
export const DELIVERY_CHARGE = 200; // Rs. flat
export const DISCOUNT_PERCENT = Math.round((1 - UNIT_PRICE / ORIGINAL_PRICE) * 100);

export const PRODUCT_TITLE =
  "16-Inch Portable Solar Rechargeable Fan with Night Light & Solar Panel";
export const PRODUCT_SHORT_DESC =
  "Stay cool and illuminated anywhere. Built for energy efficiency, load-shedding backup and outdoor camping.";
export const RATING = 4.8;
export const ORDERS_COUNT = 2340;

export const PROVINCES = [
  "Punjab",
  "Sindh",
  "Khyber Pakhtunkhwa",
  "Balochistan",
  "Gilgit-Baltistan",
  "Azad Jammu & Kashmir",
  "Islamabad Capital Territory",
];

export const FEATURES = [
  { icon: "wind", title: "120W Powerful Airflow", desc: "Strong, room-filling breeze on every speed." },
  { icon: "sun", title: "Solar Powered", desc: "9V 15W high-efficiency monocrystalline panel." },
  { icon: "battery", title: "Long-Lasting Battery", desc: "7.4V / 4 × 3000mAh lithium battery pack." },
  { icon: "gauge", title: "3 Speed Settings", desc: "Low, medium and high airflow control." },
  { icon: "usb", title: "Emergency USB Output", desc: "Charge your phone during load-shedding." },
  { icon: "lamp", title: "Night Light", desc: "Built-in LED light for power outages." },
  { icon: "clock", title: "6–10 Hours Working Time", desc: "All-night cooling on a single charge." },
  { icon: "move", title: "Portable Design", desc: "Light frame, easy to carry room to room." },
] as const;

export const SPECS = [
  ["Power", "120W"],
  ["Solar Panel", "9V 15W High-Efficiency Monocrystalline"],
  ["Battery", "7.4V / 4 × 3000mAh Lithium Battery"],
  ["Charging Time", "4–6 Hours"],
  ["Working Time", "6–10 Hours"],
  ["Size", "16 Inches"],
  ["Height", "120cm"],
  ["Width", "45cm"],
  ["Color", "Premium White"],
] as const;

export const PACKAGE_ITEMS = [
  "1 × 16-Inch Rechargeable Solar Fan",
  "1 × Solar Panel with cable",
  "1 × AC Charger / Adaptor",
  "1 × User Manual",
];

export const formatPKR = (n: number) => `Rs. ${n.toLocaleString("en-PK")}`;
