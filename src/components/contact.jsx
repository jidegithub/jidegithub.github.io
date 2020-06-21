import React from 'react'

export default function contact() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <section id="Contact" className="text-center">
        <h3 className="anti-main-color topnav-font font-semibold text-5xl">Get in Touch</h3>
        <div className="whatido-grey name-font max-w-xl mt-10">
          <p className="text-xl">
            I am most active on twitter, you can send a
            <a className="tweet mx-4" href="https://www.twitter.com/@jidesnr">
              tweet
          </a>
          and i will gratefully respond.
        </p>
        </div>
        <div className="mt-12 whatido-grey">
          you can also
          <a className="getintouch mx-4" href="mailto:olutolajide@gmail.com">
            shoot me a mail
          </a>
          and i will get back to you as soon as possible.
        </div>
      </section>
    </div>
  )
}
