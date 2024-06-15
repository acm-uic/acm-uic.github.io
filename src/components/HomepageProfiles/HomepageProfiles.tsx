import Link from "@docusaurus/Link";
import React from "react";

export type HomepageOfficerProps = Record<string, never>;

const officers = [
  {
    name: "Yashi Shandilya",
    image: "https://avatars.githubusercontent.com/u/89973416?s=100&v=4",
    url: "https://github.com/yashishandilya",
    description: <>President</>,
  },
  {
    name: "Eva Pisabaj",
    image: "/media/council_profiles/eva_pisabaj_400.jpg",
    url: "https://www.linkedin.com/in/evapisabaj/",
    description: <>Vice President</>,
  },
  {
    name: "Florianne Che",
    image: "/media/council_profiles/florianne_che_400.jpg",
    url: "https://www.linkedin.com/in/florianne-che-3b3148211",
    description: <>Treasurer</>,
  },
  {
    name: "Adrian Knight",
    image: "/media/council_profiles/adrian_knight_400.jpg",
    url: "https://github.com/Ajknight121",
    description: <>Presidential Advisor</>,
  },
  {
    name: "Khin Yuupar Myat",
    image: "/media/council_profiles/khin_yuupar_myat_400.jpg",
    url: "https://www.linkedin.com/in/khinyuuparmyat/",
    description: <>Secretary</>,
  },
  {
    name: "Ethan Ky",
    image: "/media/council_profiles/ethan_ky_400.jpg",
    url: "https://www.linkedin.com/in/ethan-ky2429",
    description: <>SIG Game Leader</>,
  },
  {
    name: "Connor Hunter",
    image: "/media/council_profiles/connor_hunter_400.jpg",
    url: "https://github.com/Mohpann",
    description: <>Tech Lead</>,
  },
];

const sysadmins = [
  {
    name: "Bharat Middha",
    image: "https://avatars.githubusercontent.com/u/5100938?s=100&v=4",
    url: "https://github.com/bmiddha",
    description: (
      <>
        Breaker of things
        <br />
        President 2019-2021
      </>
    ),
  },
  {
    name: "Chase Lee",
    image: "https://avatars.githubusercontent.com/u/1387910?s=100&v=4",
    url: "https://github.com/clee231",
    description: (
      <>
        Fixer of things
        <br />
        Been here too long
      </>
    ),
  },
  {
    name: "Christian Bingman",
    image: "https://avatars.githubusercontent.com/u/42191425?s=100&v=4",
    url: "https://github.com/ChristianBingman",
    description: <>President 2021-2022</>,
  },
  {
    name: "Soham Gumaste",
    image: "https://avatars.githubusercontent.com/u/7116239?s=100&v=4",
    url: "https://github.com/SohamG",
    description: <>SysAdmin initiate</>,
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
              <div className="col avatar avatar--vertical margin-bottom--lg" key={`${profile.name}-${profileIndex}`}>
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
                  <small className="avatar__subtitle">{profile.description}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    ))}
  </>
);
