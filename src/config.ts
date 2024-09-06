import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://blog.tommytheterrible.com/", // replace this with your deployed domain
  author: "TommyTheTerrible",
  desc: "News about the stuff Tommy does!",
  title: "Terrible News",
  ogImage: "TommyTheTerribleSL.png",
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/TommyTheTerrible/",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Flickr",
    href: "https://www.flickr.com/people/tommytheterrible/",
    linkTitle: `${SITE.title} on Flickr`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:tommy@tommytheterrible.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Twitter`,
    active: false,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@tommytheterribleSL",
    linkTitle: `${SITE.title} on YouTube`,
    active: true,
  },
  {
    name: "Discord",
    href: "https://discord.com/users/tommytheterrible/",
    linkTitle: `${SITE.title} on Discord`,
    active: true,
  },
  {
    name: "Reddit",
    href: "https://www.reddit.com/user/TommyTheTerribleSL/",
    linkTitle: `${SITE.title} on Reddit`,
    active: true,
  },
];
