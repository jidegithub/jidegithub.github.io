import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Helmet } from 'react-helmet';

function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={[`about olutola jide`, `olutola jide`, `olutola michael`, `about olutola michael`]}
        title="About"
      />
      <Helmet title="About - Olutola Olajide | Software Developer" />
      <section id="About" className="min-h-screen mt-40">
        <h3 className="relative font-semibold anti-main-color sf-mono-font text-5xl flex items-center mt-6">
          About
        </h3>
        <div className="whatido-grey calibre-font text-3xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
          <section>
            <p className="mt-2">
              I am a software Engineer based in Lagos, Nigeria. 
              I currently work at Lopworks, Nigeria — An IT solutions company with some of 
              the most talented folks I've ever met, shipping software solutions to make 
              it easier for people to work smart and solve business challenges.
              Ultimately, i aim to build products that not only scales but also
              deliver an amazing experience to the end user.
            </p>
            <p>
              I enjoy studying, travelling, sightseeing, watching animes and playing video games.
            </p>
          </section>
          <section>
            <p className="mt-2">
              Before joining Lopworks Nigeria, I interned at Lopworks, Nigeria. I mainly focused on building out the Project Management solution of the company, and prior to that I interned at Stutern - An internet company that connects interns with employers of labour in West Africa.
            </p>
          </section>
        </div>
        <div className="whatido-grey calibre-font text-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
          <div className="mt-2">
            <h3 className="text-4xl font-bold anti-main-color">Stack:</h3>
            <ul className="stack-listing">
              <li className="stack-item">Javascript (ES6+)</li>
              <li className="stack-item">Reactjs</li>
              <li className="stack-item">Redux</li>
              <li className="stack-item">Vuejs</li>
              <li className="stack-item">Vuex</li>
              <li className="stack-item">Node.js</li>
              <li className="stack-item">Express.js</li>
              <li className="stack-item">HTML&(S)CSS</li>
              <li className="stack-item">Elixir</li>
              <li className="stack-item">Phoenix</li>
              <li className="stack-item">Docker</li>
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
