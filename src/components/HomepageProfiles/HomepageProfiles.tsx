import Link from "@docusaurus/Link";
import useIsBrowser from "@docusaurus/useIsBrowser";
import clsx from "clsx";
import React, { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import styles from "./HomePageProfiles.module.css";

export type HomepageOfficerProps = Record<string, never>;

interface ProfileLink {
  label: string;
  url: string;
}

interface Profile {
  name: string;
  image: string;
  description: string;
  /** Profiles with a url link straight to it; profiles without one open a contact card instead. */
  url?: string;
  /** Written as "user at domain" so scrapers don't pick them up; turned back into addresses in the browser. */
  emails?: string[];
  links?: ProfileLink[];
  bio?: string;
}

const officers: Profile[] = [
  {
    name: "Sam Stuckey",
    image: "/media/council_profiles/sam_stuckey_400.png",
    description: "President",
    emails: ["sstuc2 at uic.edu"],
    links: [{ label: "GitHub", url: "https://github.com/SStuckey816" }],
  },
  {
    name: "Sammy Patel",
    image: "/media/council_profiles/sammy_patel_400.png",
    description: "Vice President",
    emails: ["spate797 at uic.edu", "sammypatel06 at tuta.com"],
    links: [{ label: "GitHub", url: "https://www.github.com/sammypatel06" }],
  },
  {
    name: "Andrew Wolk",
    image: "/media/council_profiles/andrew_wolk_400.jpg",
    description: "Treasurer",
    emails: ["awolk2 at uic.edu"],
    links: [{ label: "LinkedIn", url: "https://www.linkedin.com/in/andrew-wolk-9726ab262/" }],
  },
  {
    name: "Uzair Azizuddin",
    image: "/img/logo.png",
    description: "SIG AI Project Lead",
    emails: ["uaziz2 at uic.edu"],
    links: [{ label: "LinkedIn", url: "https://www.linkedin.com/in/uzair-azizuddin" }],
  },
  {
    name: "Srihas",
    image: "/media/council_profiles/srihas_400.jpg",
    description: "SIG AI Fluency Lead",
    emails: ["pgupt50 at uic.edu", "srihasgupta at gmail.com"],
    links: [{ label: "LinkedIn", url: "https://www.linkedin.com/in/srihas115/" }],
  },
  {
    name: "Isabella Wu",
    image: "/media/council_profiles/isabella_wu_400.jpg",
    description: "SIG AI Fluency Lead",
    emails: ["iwu at uic.edu"],
  },
  {
    name: "Michael Figura",
    image: "/media/council_profiles/michael_figura_400.jpg",
    description: "SIG Algorithmic Trading Lead",
    emails: ["mfigu37 at uic.edu", "mkfigura1 at gmail.com"],
    links: [{ label: "LinkedIn", url: "https://www.linkedin.com/in/michael-figura1" }],
  },
  {
    name: "Roman Stashkiv",
    image: "/media/council_profiles/roman_stashkiv_400.jpg",
    description: "SIG Algorithmic Trading Co-Lead\nSIG Math Co-Lead",
    emails: ["rstas at uic.edu"],
    links: [{ label: "LinkedIn", url: "https://www.linkedin.com/in/roman-stashkiv/" }],
  },
  {
    name: "Caleb Scott",
    image: "/media/council_profiles/caleb_scott_400.jpg",
    description: "SIG CyberSecurity Lead",
    emails: ["cscot42 at uic.edu", "acm.egotism778 at simplelogin.com"],
    bio: "One time I jumped over the grand canyon. The landing hurt a little bit but I had a lot of fun!!",
  },
  {
    name: "Luke Deany",
    image: "/media/council_profiles/luke_deany_400.jpg",
    description: "SIG Game Lead",
    emails: ["ldean7 at uic.edu"],
    links: [{ label: "GitHub", url: "https://github.com/lukedeany" }],
  },
  {
    name: "Catherine Markowska",
    image: "/media/council_profiles/catherine_markowska_400.png",
    description: "SIG Hacks Lead",
    emails: ["cmark10 at uic.edu", "catherinemarkowska at gmail.com"],
    links: [{ label: "LinkedIn", url: "https://www.linkedin.com/in/catherinemarkowska/" }],
    bio: "I'm an Earth and Environmental Science and Computer Science Double Major! I'm also a Break Through Tech AI/ML fellow!",
  },
  {
    name: "Danlon Hammons",
    image: "/media/council_profiles/danlon_hammons_400.png",
    description: "SIG Indie Lead",
    emails: ["dhamm4 at uic.edu"],
    links: [{ label: "GitHub", url: "https://github.com/Nolnad" }],
  },
  {
    name: "Ibrahim Ceker",
    image: "/media/council_profiles/ibrahim_ceker_400.jpg",
    description: "SIG Jobs Lead",
    emails: ["ihceke at uic.edu", "ibrahimhanifceker at gmail.com"],
    links: [{ label: "LinkedIn", url: "https://www.linkedin.com/in/ibrahim-hanif-ceker-227ba6379/" }],
  },
  {
    name: "Tuan Van Thai",
    image: "/media/council_profiles/tuan_van_thai_400.jpg",
    description: "SIG Jobs Lead",
    emails: ["tthai4 at uic.edu"],
  },
  {
    name: "Naga Sai Dhiraj Kasam",
    image: "/media/council_profiles/naga_kasam_400.jpg",
    description: "SIG Math Lead",
    emails: ["nkasa3 at uic.edu", "kasamnagadhiraj at gmail.com"],
  },
  {
    name: "Ajay Kollur",
    image: "/media/council_profiles/ajay_kollur_400.jpg",
    description: "SIG Math Co-Lead",
    emails: ["akoll10 at uic.edu", "ajaykollur at gmail.com"],
    links: [{ label: "LinkedIn", url: "https://www.linkedin.com/in/ajay-kollur-bb1841382" }],
  },
  {
    name: "Luis Sanchez",
    image: "/media/council_profiles/luis_sanchez_400.jpg",
    description: "SIG PC Building Lead\nSecretary",
    emails: ["lsanc4 at uic.edu"],
    links: [{ label: "LinkedIn", url: "https://www.linkedin.com/in/luis-sanchez0378" }],
    bio: "Also president of Anime & Manga Club @ UIC",
  },
  {
    name: "Chase Lee",
    image: "/media/council_profiles/chase_lee_400.png",
    description: "SIG SysAdmin Lead\nWebmaster",
    emails: ["chase at acm.cs.uic.edu"],
    links: [{ label: "GitHub", url: "https://github.com/clee231" }],
  },
  {
    name: "Jacob Cohen",
    image: "/media/council_profiles/jacob_cohen_400.jpg",
    description: "SIG Systems Founder & Lead",
    emails: ["jcohen30 at uic.edu", "jacob at jacobcohen.info"],
    links: [{ label: "Website", url: "https://jacobcohen.systems" }],
  },
  {
    name: "Sedrik Punzalan",
    image: "/media/council_profiles/sedrik_punzalan_400.jpg",
    description: "SIG WebDev Lead",
    emails: ["sedrikpunzalan at gmail.com"],
    links: [{ label: "LinkedIn", url: "https://www.linkedin.com/in/sedrik-punzalan-7a9b5036b" }],
  },
  {
    name: "Andres Quesada",
    image: "/media/council_profiles/andres_quesada_400.jpg",
    description: "SIG WebDev Co-Lead",
    emails: ["aques at uic.edu", "hospitablepro1 at gmail.com"],
    bio: "My entire family originates from Colombia, which makes me a first generation American. I love to watch Anime, and I also love to play Roblox. I am an enthusiast for running and cycling. I want to continue to program websites and applications for others to use, and hope to get an internship this summer 🥹.",
  },
  {
    name: "Justin Perez",
    image: "/media/council_profiles/justin_perez_400.jpg",
    description: "Secretary of Marketing",
    emails: ["jpere257 at uic.edu"],
    links: [{ label: "LinkedIn", url: "https://www.linkedin.com/in/jstinprez/" }],
  },
  {
    name: "Michael Khan",
    image: "/media/council_profiles/michael_khan_400.jpg",
    description: "Secretary",
    emails: ["mkhan398 at uic.edu"],
    links: [{ label: "GitHub", url: "https://github.com/xmasscan" }],
  },
  {
    name: "Safiyyah Ahmed",
    image: "/media/council_profiles/safiyyah_ahmed_400.jpg",
    description: "Secretary",
    emails: ["sahme213 at uic.edu"],
    links: [{ label: "LinkedIn", url: "https://www.linkedin.com/in/safiyyah-a-ahmed" }],
  },
  {
    name: "Yael Pena",
    image: "/media/council_profiles/yael_pena_400.jpg",
    description: "Secretary",
    emails: ["ypena at uic.edu", "yaelpena773 at gmail.com"],
    links: [{ label: "Linktree", url: "https://linktr.ee/yael.pena" }],
  },
];

const sysadmins: Profile[] = [
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

const decodeEmail = (email: string) => email.replace(" at ", "@");

/** Minimum gap (px) kept between an open card and the edge of the viewport. */
const VIEWPORT_MARGIN = 8;

const ProfileCard: React.FC<{ profile: Profile }> = ({ profile }) => {
  const [open, setOpen] = useState(false);
  const [offset, setOffset] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const cardId = useId();
  const isBrowser = useIsBrowser();
  const hasContact = !!profile.emails?.length || !!profile.links?.length;

  // Nudge the card sideways if it would spill past the edge of the screen.
  useLayoutEffect(() => {
    if (!open || !cardRef.current) {
      setOffset(0);
      return;
    }
    const rect = cardRef.current.getBoundingClientRect();
    const overflowLeft = VIEWPORT_MARGIN - rect.left;
    const overflowRight = rect.right - (document.documentElement.clientWidth - VIEWPORT_MARGIN);
    if (overflowLeft > 0) setOffset(overflowLeft);
    else if (overflowRight > 0) setOffset(-overflowRight);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  // Hover only opens the card for mouse pointers; touch devices tap to toggle.
  const onPointerEnter = (event: React.PointerEvent) => {
    if (event.pointerType === "mouse") setOpen(true);
  };
  const onPointerLeave = (event: React.PointerEvent) => {
    if (event.pointerType === "mouse") setOpen(false);
  };
  const onBlur = (event: React.FocusEvent) => {
    if (!wrapperRef.current?.contains(event.relatedTarget as Node)) setOpen(false);
  };
  const toggle = () => setOpen((value) => !value);

  return (
    <div
      ref={wrapperRef}
      className={styles.profileCardWrapper}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      onBlur={onBlur}
    >
      <div className="margin-bottom--sm">
        <button
          type="button"
          className={clsx("avatar__photo avatar__photo--xl", styles.profileTrigger)}
          onClick={toggle}
          aria-expanded={open}
          aria-controls={cardId}
          tabIndex={-1}
        >
          <img src={profile.image} alt={`Avatar of ${profile.name}`} />
        </button>
      </div>
      <div className="avatar__intro">
        <div className="avatar__name">
          <button
            type="button"
            className={clsx(styles.profileTrigger, styles.profileName)}
            onClick={toggle}
            aria-expanded={open}
            aria-controls={cardId}
          >
            {profile.name}
          </button>
        </div>
        <small className={clsx("avatar__subtitle", styles.profileDescription)}>{profile.description}</small>
      </div>
      <div
        ref={cardRef}
        id={cardId}
        role="dialog"
        aria-label={`${profile.name} contact info`}
        className={clsx("card shadow--md", styles.profileCard)}
        style={{ transform: `translateX(calc(-50% + ${offset}px))` }}
        hidden={!open}
      >
        <div className="card__body">
          <div className={styles.profileCardName}>{profile.name}</div>
          <small className={styles.profileDescription}>{profile.description}</small>
          {profile.bio && <p className={styles.profileCardBio}>{profile.bio}</p>}
          {hasContact && (
            <ul className={styles.profileCardList}>
              {isBrowser &&
                profile.emails?.map((email) => (
                  <li key={email}>
                    <a href={`mailto:${decodeEmail(email)}`}>{decodeEmail(email)}</a>
                  </li>
                ))}
              {profile.links?.map((link) => (
                <li key={link.url}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
          {!profile.bio && !hasContact && <p className={styles.profileCardBio}>More info coming soon!</p>}
        </div>
      </div>
    </div>
  );
};

const ProfileLinkItem: React.FC<{ profile: Profile }> = ({ profile }) => (
  <>
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
  </>
);

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
      <section key={`${section.name}-${sectionIndex}`} className={styles.profiles}>
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
                {profile.url ? <ProfileLinkItem profile={profile} /> : <ProfileCard profile={profile} />}
              </div>
            ))}
          </div>
        </div>
      </section>
    ))}
  </>
);
