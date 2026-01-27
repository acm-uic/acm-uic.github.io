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
    url: "https://github.com/SStuckey816",
    description: "Vice President",
  },
  {
    name: "Vansh (V) Mattraa",
    image: "/media/council_profiles/vmattraa_400.png",
    url: "https://www2.evl.uic.edu/entry.php?id=2929",
    description: "Treasurer\nSIG VR Leader",
  },
  {
    name: "Stanley Huang",
    image: "/media/council_profiles/stanley_huang_224.png",
    url: "https://www.linkedin.com/in/stanley-huang-0a2294243",
    description: "SIG AI Theory Leader",
  },
  {
    name: "Sammy Patel",
    image: "/media/council_profiles/sammy_patel_400.png",
    url: "https://www.github.com/sammypatel06",
    description: "SIG AI Project Leader",
  },
  {
    name: "Tuong Max Le",
    image: "/media/council_profiles/max_le_400.png",
    url: "https://www.linkedin.com/in/tuong-max-le",
    description: "SIG Algorithmic Trading Leader",
  },
  {
    name: "Teegan Springer",
    image: "/media/council_profiles/teegan_springer_400.jpg",
    url: "https://acm.cs.uic.edu/#",
    description: "SIG CyberSecurity Leader\nCyberForce Team Captain",
  },
  {
    name: "Ron Pham",
    image: "/media/council_profiles/quang_pham_200.jpg",
    url: "https://www.linkedin.com/in/quang-pham-206743271",
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
    image: "/media/council_profiles/catherine_markowska_400.png",
    url: "https://www.linkedin.com/in/catherinemarkowska",
    description: "SIG Hacks Leader",
  },
  {
    name: "Danlon Hammons",
    image: "https://avatars.githubusercontent.com/u/63886517?s=100&v=4",
    url: "https://github.com/Nolnad",
    description: "SIG Indie Leader",
  },
  {
    name: "Musa Tahir",
    image: "/media/council_profiles/musa_tahir_200.jpg",
    url: "https://www.linkedin.com/in/m-musa-tahir",
    description: "SIG Jobs Leader",
  },
  {
    name: "Sedrik Punzalan",
    image: "/img/logo.png",
    url: "https://www.linkedin.com/in/sedrik-punzalan-7a9b5036b",
    description: "SIG Jobs Leader\nSIG WebDev Lead",
  },
  {
    name: "Lam (Max) Nguyen",
    image: "https://avatars.githubusercontent.com/u/145540332?s=100&v=4",
    url: "https://github.com/lamtnguyen989/",
    description: "SIG Math Leader",
  },
  {
    name: "Joel John",
    image: "/media/council_profiles/joel_john_181.jpg",
    url: "https://www.linkedin.com/in/joel-john-5586b123a",
    description: "SIG Mobile Dev Leader",
  },
  {
    name: "Sanskar Kalal",
    image: "/media/council_profiles/sanskar_kalal_400.jpg",
    url: "https://www.linkedin.com/in/sanskar-kalal-821308232",
    description: "SIG Mobile Dev Leader",
  },
  {
    name: "Luis Sanchez",
    image: "/media/council_profiles/luis_sanchez_200.jpg",
    url: "https://www.linkedin.com/in/luis-sanchez0378",
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
    image: "/media/council_profiles/jacob_cohen_400.jpg",
    url: "https://jacobcohen.info/",
    description: "SIG Systems Leader",
  },
  {
    name: "Darshan Zaware",
    image: "/img/logo.png",
    url: "www.linkedin.com/in/darshan-zaware-62011b345",
    description: "SIG VR Leader",
  },
  {
    name: "Oday Suleiman",
    image: "https://avatars.githubusercontent.com/u/143299292?s=100&v=4",
    url: "https://github.com/odismaximus",
    description: "SIG VR Leader",
  },
  {
    name: "Adrian Knight",
    image: "/media/council_profiles/adrian_knight_400.jpg",
    url: "https://github.com/Ajknight121",
    description: "SIG WebDev Lead\nPresident 2022-2023",
  },
  {
    name: "Dan Barajas",
    image: "https://avatars.githubusercontent.com/u/83979618?s=100&v=4",
    url: "https://github.com/danbarajas",
    description: "SIG WebDev Lead",
  },
  {
    name: "Dominic Irla",
    image: "https://avatars.githubusercontent.com/u/81499555?s=100&v=4",
    url: "https://github.com/ddomir",
    description: "SIG WebDev Lead",
  },
  {
    name: "Samuel Skean",
    image: "https://avatars.githubusercontent.com/u/48303350?s=100&v=4",
    url: "https://github.com/samuel-skean",
    description: "Tech Lead",
  },
  {
    name: "Dima Medvedkov",
    image: "https://avatars.githubusercontent.com/u/38975569?s=100&v=4",
    url: "https://acm.cs.uic.edu/#",
    description: "Tech Lead",
  },
  {
    name: "Safiyyah Ahmed",
    image: "/media/council_profiles/safiyyah_ahmed_400.jpg",
    url: "https://acm.cs.uic.edu/#",
    description: "Secretary",
  },
  {
    name: "Andrew Wolk",
    image: "/media/council_profiles/andrew_wolk_400.jpg",
    url: "https://www.linkedin.com/in/andrew-wolk-9726ab262",
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
