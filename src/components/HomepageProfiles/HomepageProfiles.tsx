import Link from "@docusaurus/Link";
import React from "react";

export type HomepageOfficerProps = Record<string, never>;

const officers = [
  {
    name: "Christian Bingman",
    image: "https://avatars.githubusercontent.com/u/42191425?s=100&v=4",
    url: "https://github.com/ChristianBingman",
    description: <>President</>,
  },
  {
    name: "Anastasiia Evdokimova",
    image: "https://avatars.githubusercontent.com/u/36254266?s=100&v=4",
    url: "https://github.com/SkylinSky",
    description: <>Vice President</>,
  },
  {
    name: "Kalpkumar Shah",
    image: "https://avatars.githubusercontent.com/u/76023884?s=100&v=4",
    url: "https://github.com/kalps358",
    description: <>Treasurer</>,
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
    description: <>The new guy</>,
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
