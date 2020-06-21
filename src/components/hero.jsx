import React from 'react'

export default function hero() {
  return (
    <section id="" className="min-h-screen">
      <h3 className="anti-main-color topnav-font">Hi, my name is</h3>
      <div className="name-font font-semibold text-7xl my-4">
        <h2 className="name-grey leading-tight m-0 screen-reader-text">Michael Olajide Olutola</h2>
        <h2 className="name-grey leading-tight m-0">Jide</h2>
        <h2 className="whatido-grey text-4xl leading-none m-0">I am a Software Developer.</h2>
      </div>
      <div className="whatido-grey name-font max-w-xl mt-10">
        <p className="text-xxl">
          i prettymuch enjoy building (and occasionally designing) 
          exceptional web/mobile/enterprise applications, and everything in between.
          I love studying, discovering new technologies, travelling, sightseeing, watching animes and playing video games.
          <br/>Recently, i started <a href="/blog" className="anti-main-color">writing</a> about some challenges, tricks and discoveries about some programs i have used over time.
        </p>
      </div>
    </section>
  )
}
