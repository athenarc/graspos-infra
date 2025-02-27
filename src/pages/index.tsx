import React from 'react';
import Layout from '@theme/Layout';

import Hero from '@theme/Hero';
import ToolsServices from '@theme/ToolsServices';
import Launchpad from '@theme/Launchpad';
import Demos from '@theme/Demos';
import Resources from '@theme/Resources';
import Info from '@theme/Info';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <Hero />
      <main className="home-main">
        <ToolsServices />
        <Launchpad />
        <Demos />
        <Info />
        {/* <Resources /> */}
      </main>
    </Layout>
  );
}

export default Home;
