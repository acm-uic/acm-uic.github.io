import React from "react";
import clsx from "clsx";
import styles from "./HomepageProfiles.module.css";

export type HomepageOfficerProps = Record<string, never>;

const officers = [
  {
    name: "Christian Bingman",
    image: "https://avatars.githubusercontent.com/u/42191425?s=200&v=4",
    url: "https://github.com/ChristianBingman",
    description: <>President</>,
  },
  {
    name: "Anastasiia Evdokimova",
    image: "https://avatars.githubusercontent.com/u/36254266?s=200&v=4",
    url: "https://github.com/SkylinSky",
    description: <>Vice President</>,
  },
  {
    name: "Kalpkumar Shah",
    image: "https://avatars.githubusercontent.com/u/76023884?s=200&v=4",
    url: "https://github.com/kalps358",
    description: <>Treasurer</>,
  },
];

const sysadmins = [
  {
    name: "Bharat Middha",
    image: "https://avatars.githubusercontent.com/u/5100938?s=200&v=4",
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
    image: "https://avatars.githubusercontent.com/u/1387910?s=200&v=4",
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
    image: "https://avatars.githubusercontent.com/u/42191425?s=200&v=4",
    url: "https://github.com/ChristianBingman",
    description: <>The new guy</>,
  },
];

const sections = [
  {
    name: "Officers",
    profiles: officers,
  },
  {
    name: "SysAdmins",
    profiles: sysadmins,
  },
];

export const HomepageProfiles: React.FC<HomepageOfficerProps> = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className={clsx("col text--center", styles.title)}>
            <h2>Meet the Board</h2>
          </div>
        </div>
      </div>
      {sections.map((section, sectionKey) => (
        <>
          <section className={clsx(styles.profile_section)} key={sectionKey}>
            <div className="container">
              <div className="row">
                <div
                  className={clsx(
                    "col text--center",
                    styles.profile_section_title
                  )}
                >
                  <h3>{section.name}</h3>
                </div>
              </div>
              <div className="row">
                {section.profiles.map((profile, key) => (
                  <div className={clsx("col")} key={key}>
                    <div className="text--center">
                      <a
                        href={profile.url}
                        className={clsx(styles.profile_avatar)}
                      >
                        <img
                          src={profile.image}
                          alt={`Avatar of ${profile.name}`}
                        />
                      </a>
                    </div>
                    <div
                      className={clsx(
                        "text--center padding-horiz--md",
                        styles.profile_name
                      )}
                    >
                      <h3>
                        <a
                          href={profile.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {profile.name}
                        </a>
                      </h3>
                      <p>{profile.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      ))}
    </>
  );
};
