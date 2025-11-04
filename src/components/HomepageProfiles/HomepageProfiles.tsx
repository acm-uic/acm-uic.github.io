import Link from "@docusaurus/Link";
import clsx from "clsx";
import React from "react";
import styles from "./HomePageProfiles.module.css";

export type HomepageOfficerProps = Record<string, never>;

const officers = [
  {
    name: "Eva Pisabaj",
    image: "/media/council_profiles/eva_pisabaj_400.jpg",
    url: "https://www.linkedin.com/in/evapisabaj/",
    description: "President",
  },
  {
    name: "Sam Stuckey",
    image: "https://avatars.githubusercontent.com/u/145505945?s=100&v=4",
    url: "https://github.com/SStuckey88",
    description: "Vice President",
  },
  {
    name: "Vansh (V) Mattraa",
    image: "/media/council_profiles/vmattra_400.png",
    url: "https://www2.evl.uic.edu/entry.php?id=2929",
    description: "Co-Treasurer\nTech Lead",
  },
  {
    name: "Stanley Huang",
    image: "/media/council_profiles/anirudh_kuppili_400.jpg",
    url: "http://www.linkedin.com/in/akuppili",
    description: "SIG AI Theory Leader",
  },
  {
    name: "Sammy Patel",
    image: "/media/council_profiles/anirudh_kuppili_400.jpg",
    url: "http://www.linkedin.com/in/akuppili",
    description: "SIG Mobile Dev Leader",
  },
  {
    name: "Tuong Max Le",
    image: "/media/council_profiles/max_le_400.png",
    url: "https://www.linkedin.com/in/tuong-max-le",
    description: "SIG Algorithmic Trading Leader",
  },
  {
    name: "Teegan",
    image: "/media/council_profiles/max_le_400.png",
    url: "https://www.linkedin.com/in/tuong-max-le",
    description: "SIG CyberSecurity Leader",
  },
  {
    name: "Ron",
    image: "/media/council_profiles/max_le_400.png",
    url: "https://www.linkedin.com/in/tuong-max-le",
    description: "SIG CyberSecurity Leader",
  },
  {
    name: "Ethan Ky",
    image: "/media/council_profiles/ethan_ky_400.jpg",
    url: "https://www.linkedin.com/in/ethan-ky2429",
    description: "SIG Game Leader",
  },
  {
    name: "Cat Markowska",
    image: "/media/council_profiles/ethan_ky_400.jpg",
    url: "https://www.linkedin.com/in/ethan-ky2429",
    description: "SIG Hacks Leader",
  },
  {
    name: "Danlon Hammons",
    image: "/media/council_profiles/ethan_ky_400.jpg",
    url: "https://www.linkedin.com/in/ethan-ky2429",
    description: "SIG Indie Leader",
  },
  {
    name: "Musa Tahir",
    image: "/media/council_profiles/isaac_alazar_400.jpg",
    url: "https://www.linkedin.com/in/isaac-alazar-17b949311/",
    description: "SIG Jobs Leader",
  },
  {
    name: "Sedrik Punzalan",
    image: "/media/council_profiles/isaac_alazar_400.jpg",
    url: "https://www.linkedin.com/in/isaac-alazar-17b949311/",
    description: "SIG Jobs Leader",
  },
  {
    name: "Lam (Max) Nguyen",
    image: "https://avatars.githubusercontent.com/u/145540332?v=4",
    url: "https://github.com/lamtnguyen989/",
    description: "SIG Math Leader",
  },
  {
    name: "Joel John",
    image: "https://avatars.githubusercontent.com/u/145540332?v=4",
    url: "https://github.com/lamtnguyen989/",
    description: "SIG Mobile Dev Leader",
  },
  {
    name: "Sanskar",
    image: "https://avatars.githubusercontent.com/u/145540332?v=4",
    url: "https://github.com/lamtnguyen989/",
    description: "SIG Mobile Dev Leader",
  },
  {
    name: "Luis Sanchez",
    image: "https://avatars.githubusercontent.com/u/145540332?v=4",
    url: "https://github.com/lamtnguyen989/",
    description: "SIG PC Building Leader",
  },
  {
    name: "Chase Lee",
    image: "https://avatars.githubusercontent.com/u/1387910?s=100&v=4",
    url: "https://github.com/clee231",
    description: "SIG SysAdmin Leader\nWebmaster",
  },
  {
    name: "Jacob Cohen",
    image: "https://avatars.githubusercontent.com/u/11198575?s=100&v=4",
    url: "https://github.com/CJacob314",
    description: "SIG Systems Leader",
  },
  {
    name: "Vansh (V) Mattraa",
    image: "/media/council_profiles/vmattra_400.png",
    url: "https://www2.evl.uic.edu/entry.php?id=2929",
    description: "SIG VR Leader",
  },
  {
    name: "Eon",
    image: "/media/council_profiles/vmattra_400.png",
    url: "https://www2.evl.uic.edu/entry.php?id=2929",
    description: "SIG VR Leader",
  },
  {
    name: "Oday",
    image: "/media/council_profiles/vmattra_400.png",
    url: "https://www2.evl.uic.edu/entry.php?id=2929",
    description: "SIG VR Leader",
  },
  {
    name: "Adrian Knight",
    image: "/media/council_profiles/adrian_knight_400.jpg",
    url: "https://github.com/Ajknight121",
    description: "President Advisor\nSIG WebDev Leader",
  },
  {
    name: "Dominic",
    image: "/media/council_profiles/adrian_knight_400.jpg",
    url: "https://github.com/Ajknight121",
    description: "SIG WebDev Leader",
  },
  {
    name: "Samuel Skean",
    image: "https://avatars.githubusercontent.com/u/48303350?s=100&v=4",
    url: "https://github.com/samuel-skean",
    description: "Tech Lead",
  },
  {
    name: "Dima Medvedkov",
    image: "https://avatars.githubusercontent.com/u/49312226?s100&v=4",
    url: "https://github.com/dejazzhands",
    description: "Tech Lead",
  },

  {
    name: "Safiyyah Ahmed",
    image: "/media/council_profiles/khin_yuupar_myat_400.jpg",
    url: "https://www.linkedin.com/in/khinyuuparmyat/",
    description: "Secretary",
  },
  {
    name: "Andrew Wolk",
    image: "/media/council_profiles/amy_kodama_400.jpg",
    url: "http://www.linkedin.com/in/amy-kodama-a76519266",
    description: "Secretary",
  },
];

const sysadmins = [
  {
    name: "Bharat Middha",
    image: "https://avatars.githubusercontent.com/u/5100938?s=100&v=4",
    url: "https://github.com/bmiddha",
    description: "Breaker of things | President 2019-2021",
  },
  {
    name: "Chase Lee",
    image: "https://avatars.githubusercontent.com/u/1387910?s=100&v=4",
    url: "https://github.com/clee231",
    description: "Fixer of things | Been here too long",
  },
  {
    name: "Soham Gumaste",
    image: "https://avatars.githubusercontent.com/u/7116239?s=100&v=4",
    url: "https://github.com/SohamG",
    description: "SysAdmin initiate",
  },
  {
    name: "Ethan Wong",
    image: "https://avatars.githubusercontent.com/u/87404863?s=100?v=4",
    url: "https://github.com/lowpolyneko",
    description: "Rack Server Enthusiast | LUG President",
  },
  {
    name: "Harshit Modi",
    image: "https://avatars.githubusercontent.com/u/129324567?v=4",
    url: "https://github.com/hmodi51",
    description: "Waiting for chaos | LUG Officer",
  },
  {
    name: "Lam (Max) Nguyen",
    image: "https://avatars.githubusercontent.com/u/145540332?v=4",
    url: "https://github.com/lamtnguyen989",
    description: "Enjoyer of big and little stuff in life",
  },
];

const sections = [
  {
    name: "Officers",
    profiles: officers,
    link: "/officers",
  },
  {
    name: "SysAdmins",
    profiles: sysadmins,
  },
];

export const HomepageProfiles: React.FC<HomepageOfficerProps> = () => (
  <>
    <div className="container">
      <div className="row">
        <div className="col text--center" style={{ color: "var(--ifm-color-primary)" }}>
          <h2>Meet the Board</h2>
        </div>
      </div>
    </div>
    {sections.map((section, sectionIndex) => (
      <section key={`${section.name}-${sectionIndex}`}>
        <div className="container">
          <div className="row">
            <div className="col text--center margin-bottom--xs">
              <h3>{section.link ? <Link to={section.link}>{section.name}</Link> : section.name}</h3>
            </div>
          </div>
          <div className="row">
            {section.profiles.map((profile, profileIndex) => (
              <div
                className="col col--2 avatar avatar--vertical margin-bottom--lg"
                key={`${profile.name}-${profileIndex}`}
              >
                <div className="margin-bottom--sm">
                  <a href={profile.url} className="avatar__photo-link avatar__photo avatar__photo--xl">
                    <img src={profile.image} alt={`Avatar of ${profile.name}`} />
                  </a>
                </div>
                <div className="avatar__intro">
                  <div className="avatar__name">
                    <a href={profile.url} target="_blank" rel="noopener noreferrer">
                      {profile.name}
                    </a>
                  </div>
                  <small className={clsx("avatar__subtitle", styles.profileDescription)}>{profile.description}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    ))}
  </>
);
