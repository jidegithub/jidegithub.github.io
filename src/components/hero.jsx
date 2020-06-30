import React from 'react'

export default function hero() {
  return (
    <section id="" className="min-h-screen">
      <h3 className="anti-main-color topnav-font">Hi, my name is</h3>
      <div className="name-font font-semibold text-7xl my-4">
        <h2 className="name-grey leading-tight m-0 screen-reader-text">Michael Olajide Olutola</h2>
        <h2 className="name-grey leading-tight m-0">Jide</h2>
        <div className="flex flex-wrap">
          <h2 className="whatido-grey text-4xl leading-none m-0">Software Developer/</h2>
          <h2 className="whatido-grey text-4xl leading-none m-0">Technical Writer/</h2>
          <h2 className="whatido-grey text-4xl leading-none m-0">Open source contributor.</h2>
        </div>
      </div>
      <div className="whatido-grey name-font max-w-xl mt-8">
        <p className="text-xxl">
          i have over 3 years of experience building
          exceptional web/mobile/enterprise applications.

          <br/>Recently, i started <a href="/blog" className="anti-main-color">writing</a> on some challenges, tricks and discoveries about some programs i have used over time.
        </p>
      </div>
      <div className="name-grey">
        <button className="getintouch" href="mailto:olutolajide@gmail.com">
          shoot me a mail
        </button>
         {/* or */}
        {/* <a className="tweet mx-4" href="https://www.twitter.com/@jidesnr">
          send a tweet
        </a> */}
      </div>
    </section>
  )
}
