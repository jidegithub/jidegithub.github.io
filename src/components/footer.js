import React from 'react'

export default function footer() {
  return (
    <footer className="sf-mono-font name-grey">
      <nav className="flex justify-center max-w-4xl mx-auto p-4 md:p-8 text-xs">
        <p>
          Copyright © 2020
            <a
            className="no-underline whatido-grey"
            href="https://github.com/jidegithub"
            > jide.</a>
            Powered by 
            <a
            className="no-underline whatido-grey"
            href="https://www.gatsbyjs.org/"
            > Gatsby,</a>
            <a
            className="no-underline whatido-grey"
              href="https://tailwindcss.com/"
            > Tailwind css </a> 
             and
            hosted on
            <a
            className="no-underline whatido-grey"
            href="https://www.netlify.com/"
            > Netlify</a>
        </p>
      </nav>
    </footer>
  )
}
