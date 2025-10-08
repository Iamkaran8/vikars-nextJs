import { GrLinkedin } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import type { IconType } from "react-icons";

interface SocialsTypes {
    name: string
    icon: IconType
    url: string
}


export const Socials:SocialsTypes[] = [
  {
    name: "facebook",
    icon: FaFacebookF,
    url: "https://facebook.com",
  },
  {
    name: "instagram",
    icon: FaInstagram,
    url: "https://instagram.com",
  },
  {
    name: "twitter",
    icon: FaXTwitter,
    url: "https://twitter.com",
  },
  {
    name: "linkedin",
    icon: GrLinkedin,
    url: "https://linkedin.com",
  },
];

