import React from 'react'
import { Link } from 'gatsby';

export default function footer() {
  return (
    <footer className="bg-gray-100 py-4 lg:py-24 border-t border-gray-300">
      <div className="container mx-auto px-4">
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-12 lg:grid-cols-12">
          <div className="col-span-2 sm:col-span-6 md:col-span-5 lg:col-span-4 mb-4">
            <span className="text-black uppercase font-semibold inline-block">
              <h4>©<span id="year">2021</span>, Olajide Olutola</h4>
            </span>· 
            <p className="text-gray-700">This site was built with <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener" className="text-teal-800">Gatsby </a>
             &amp; <a href="https://tailwindcss.com" target="_blank" rel="noopener" className="text-teal-800">Tailwind</a>
             . It’s hosted on <a href="https://github.com/jidegithub" target="_blank" rel="noopener" className="text-teal-800">
               Github</a> and deployed with <a href="https://netlify.com" target="_blank" rel="noopener" className="text-teal-800">Netlify</a>.
            </p>
          </div>
          <div className="col-span-1 sm:col-span-1 md:col-span-2 md:col-start-7 lg:col-span-2 lg:col-start-7">
            <ul className="text-gray-700 text-lg">
              <li className="uppercase text-black text-base mb-1 font-semibold">
                <h4>Links</h4>
              </li>
              <li>
                <Link to="/" className="block py-1">
                  Home
                </Link>
              </li>
              <li><Link to="/work" className="block py-1">Portfolio</Link></li>
              <li><a href="https://jideolutola.hashnode.dev/" className="block py-1">Blog</a></li>
              <li><a href="mailto:olutolajide@gmail.com" className="block py-1">Contact</a></li>
            </ul>
          </div>
          <div className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-2">
            <ul className="text-gray-700 text-lg font-normal">
              <li className="uppercase text-black text-base mb-1 font-semibold">
              <h4>Connect</h4>
              </li>
              <li><a href="http://twitter.com/jidesnr" target="_blank" rel="noopener" className="block py-1">Twitter</a></li>
              <li><a href="https://www.linkedin.com/in/michael-olajide-olutola-4836a0ab" target="_blank" rel="noopener" className="block py-1">LinkedIn</a></li>
              <li><a href="http://gitlab.com/jidegitlab" target="_blank" rel="noopener" className="block py-1">Gitlab</a></li>
              <li><a href="https://github.com/jidegithub" target="_blank" rel="noopener" className="block py-1">Github</a></li>
            </ul>
          </div>
          <div className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-2">
            <ul className="text-gray-700 text-lg">
              <li className="uppercase text-black text-base mb-1 font-semibold"><h4>Projects</h4></li>
              <li><a href="http://togamobile.netlify.app" target="_blank" rel="noopener"className="block py-1">Toga Mobile</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
