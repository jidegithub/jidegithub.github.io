import React from "react";
import { Helmet } from 'react-helmet';
import Hero from "../components/hero.jsx";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ToProjectBlog from "../components/toProjectBlog.jsx";
import GetInTouch from "../components/getInTouch.jsx";
import FeaturedWork from "../components/FeaturedWork.jsx";


function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`olutola`, `jide`, `olutola jide`, `michael`, `olutola michael`, `olutola michael olajide`]}
        title="Home"
      />
      <Helmet title="Home - Olutola Olajide &bull; Software Engineer"/>
      <Hero/>
      <FeaturedWork/>
      <ToProjectBlog/>
      <GetInTouch/>
    </Layout>
  );
}

export default IndexPage;
