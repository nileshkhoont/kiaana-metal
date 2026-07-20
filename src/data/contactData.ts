import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const contactData = {
  address: {
    street: "19 Broadacre Dr",
    city: "Kitchener",
    province: "ON",
    postalCode: "N3A 3E4",
    country: "Canada",
    full: "19 Broadacre Dr, Kitchener, ON N3A 3E4, Canada",
  },
  phone: {
    display: "+1 647 562 0213",
    href: "tel:+16475620213",
  },
  email: {
    display: "kiaanatrading@gmail.com",
    href: "mailto:kiaanatrading@gmail.com",
  },
  businessHours: {
    display: "Monday – Saturday: 9:00 AM – 6:00 PM (EST)",
  },
};

export const contactInfo = [
  {
    title: "Our Office Address",
    value: contactData.address.full,
    icon: MapPin,
  },
  {
    title: "Call Us",
    value: contactData.phone.display,
    href: contactData.phone.href,
    icon: Phone,
  },
  {
    title: "Email Support",
    value: contactData.email.display,
    href: contactData.email.href,
    icon: Mail,
  },
  {
    title: "Business Hours",
    value: contactData.businessHours.display,
    icon: Clock,
  },
];
