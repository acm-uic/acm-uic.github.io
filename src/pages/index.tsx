import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";

const EventsAgenda = React.lazy(() => import("../components/EventsAgenda"));
const HomepageProfiles = React.lazy(() => import("../components/HomepageProfiles"));

const HomepageHeader: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/blog">
            Announcements 📰
          </Link>
          <Link className="button button--secondary button--lg" to="/about">
            About ACM❓
          </Link>
        </div>
      </div>
    </header>
  );
};

export const Home: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Hello from ${siteConfig.title}`} description={`${siteConfig.tagline}`}>
      <HomepageHeader />
      <main>
        <React.Suspense fallback={<div />}>
          <EventsAgenda />
        </React.Suspense>
        <React.Suspense fallback={<div />}>
          <HomepageProfiles />
        </React.Suspense>
      </main>
    </Layout>
  );
};

export default Home;
