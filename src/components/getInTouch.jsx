import React from 'react'

export default function getInTouch() {
  return (
    <section className="in-touch-wrap py-16 sm:py-16 md:py-20 lg:py-24 mt-6">
      <div className="container mx-auto px-4">
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-12">
          <div className="col-span-2 sm:col-span-2 md:col-span-6 lg:col-span-4 mb-4 lg:mb-0 flex items-end">
            <h2 className="text-white text-3xl sm:text-3xl md:text-4xl lg:text-4xl leading-none font-semibold pl-8">
              Get in touch
            </h2>
          </div>
          <div className="col-span-2 sm:col-span-2 md:col-span-6 lg:col-span-2 lg:col-start-7">
            <h4 className="text-white text-lg font-semibold">Connect</h4>
          </div>
          <div className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-2 lg:col-start-7">
            <ul className="text-teal-200 text-2xl sm:text-2xl md:text-2xl lg:text-3xl -mt-4">
              <li><a href="https://twitter.com/jidesnr" target="_blank" rel="noopener">Twitter</a></li>
              <li><a href="https://www.linkedin.com/in/michael-olajide-olutola-4836a0ab" target="_blank" rel="noopener">Linkedin</a>
              </li>
            </ul>
          </div>
          <div className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-2">
            <ul className="text-teal-200 text-2xl sm:text-2xl md:text-2xl lg:text-3xl -mt-4">
              <li><a href="https://gitlab.com/jidegitlab" target="_blank" rel="noopener">Gitlab</a></li>
              <li><a href="https://github.com/jidegithub" target="_blank" rel="noopener">Github</a></li>
            </ul>
          </div>
          {/* <div className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-2">
          <ul className="text-teal-200 text-2xl sm:text-2xl md:text-2xl lg:text-3xl -mt-4">
              <li><a href="https://unsplash.com/namzo" target="_blank" rel="noopener">Unsplash</a></li>
              <li><a href="https://open.spotify.com/user/ernestojeh" target="_blank" rel="noopener">Spotify</a></li>
            </ul>
          </div> */}
          <div className="col-span-2 sm:col-span-2 md:col-span-6 lg:col-span-2 lg:col-start-7 mt-8">
            <h4 className="text-white text-lg font-semibold">Email</h4>
          </div>
          <div className="col-span-2 sm:col-span-2 md:col-span-6 lg:col-span-2 lg:col-start-7">
            <ul className="text-teal-200 text-2xl sm:text-2xl md:text-2xl lg:text-3xl -mt-4">
              <li><a className="text-xl" href="mailto:olutolajide@gmail.com">olutolajide@gmail.com</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
