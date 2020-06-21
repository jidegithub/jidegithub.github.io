import React from 'react'

// white - space: nowrap;
// font - size: 32px;

export default function aboutme() {
  return (
    <section id="About" className="min-h-screen">
      <h3 className="after-title-hr relative font-semibold anti-main-color topnav-font text-5xl flex items-center name-font mt-10">
        About Me
      </h3>
      <div className="whatido-grey name-font text-2xl">
        <p>
          I like working smart.

        </p>
        <p className="mt-2">
          I enjoy building efficient products that live on the internet. 
          i have built several websites, web applications, and enterprise 
          applications that pretty much follow this paradigm. 
          My goal is to always build products that not only scale but 
          deliver a performant experience to the end user.
        </p>
        <div className="mt-2">
          <ul className="stack-listing">
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
  )
}
