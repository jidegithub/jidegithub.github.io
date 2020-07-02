import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={[`about olutola jide`, `olutola jide`, `olutola michael`, `about olutola michael`]}
        title="About"
      />
      <section id="About" className="min-h-screen">
        <h3 className="after-title-hr relative font-semibold anti-main-color sf-mono-font text-5xl flex items-center calibre-font mt-10">
          About Me
          </h3>
        <div className="whatido-grey calibre-font text-2xl">
          <p className="mt-2">
            I enjoy building efficient products that live on the internet.
            i have built several websites, web applications, and enterprise
            applications that pretty much follow this paradigm.
            My goal is to always build products that not only scale but
            deliver a performant experience to the end user.
            </p>
          <p>
            My hobbies are studying, discovering new technologies, travelling, sightseeing, watching animes and playing video games.
            </p>
          <div className="mt-2">
            <h3 className="text-3xl font-bold anti-main-color">Stack:</h3>
            <ul className="stack-listing md:text-2xl">
              <li className="stack-item">Javascript (ES6+)</li>
              <li className="stack-item">Reactjs</li>
              <li className="stack-item">Vuejs</li>
              <li className="stack-item">Node.js</li>
              <li className="stack-item">Express.js</li>
              <li className="stack-item">HTML&(S)CSS</li>
              <li className="stack-item">Elixir</li>
              <li className="stack-item">Phoenix</li>
              <li className="stack-item">Firebase</li>
              <li className="stack-item">Git/Github/Gitlab</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default AboutPage;
