import React from "react";
import Hero from "../components/hero.jsx";

import Layout from "../components/layout";
import SEO from "../components/seo";
import AboutMe from "../components/aboutme.jsx";
import Work from "../components/work.jsx";
import Contact from "../components/contact.jsx";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`olutola`, `jide`, `olutola jide`, `michael`, `olutola michael`, `olutola michael olajide`]}
        title="Home"
      />
      <Hero/>
      <AboutMe/>
      <Work/>
      <Contact/>
    </Layout>
  );
}

export default IndexPage;
