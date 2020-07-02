import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import fourOfour from "../images/404.svg";
import rocket from "../images/rocket.svg";
import earth from "../images/earth.svg";
import moon from "../images/moon.svg";
import astronaut from "../images/astronaut.svg"

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <section className="mb-20">
        <div className="stars">
          <div className="flex items-center justify-center">
            <img className="image-404" src={fourOfour} width="300px"/>
          </div>
          <div className="objects">
            <img className="object_rocket" src={rocket} width="40px"/>
              <div className="earth-moon">
                <img className="object_earth" src={earth} width="100px"/>
                <img className="object_moon" src={moon} width="80px"/>
              </div>
              <div className="box_astronaut">
                <img className="object_astronaut" src={astronaut} width="140px"/>
              </div>
          </div>
          <div className="glowing_stars">
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default NotFoundPage;
