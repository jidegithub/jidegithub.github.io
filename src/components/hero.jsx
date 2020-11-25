import React, { useEffect, useRef } from 'react'
import { TimelineLite, TweenMax as Tween, Power3 } from 'gsap';
import { Link } from 'gatsby';

export default function hero() {
  let content = useRef(null);
  let tl = new TimelineLite();

  useEffect(() => {
    let name = content.children[0].children[1];
    let profession = content.children[0].children[2];
  
      Tween.to(content, 0, { className: "visible" })
      tl.staggerFrom([name, profession.children], 1, {
        y: 44,
        ease: Power3.easeOut,
        delay: .3
      }, .15)
      // console.log(name, profession, aboutMeMini, mailButton);
  }, []);

  return (
    <>
    <div className="pb-40">
      <section ref={element => { content = element }} id="" className="invisible ">
        <div className="calibre-font font-semibold text-6xl my-4">
          <h2 className="name-grey leading-tight m-0 screen-reader-text">Michael Olajide Olutola</h2>
          <h2 className="name-grey leading-tight m-0">I am Jide,</h2>
          <div className="flex flex-wrap">
            <h2 className="whatido-grey leading-none m-0">Software Developer,&nbsp;</h2>
            <h2 className="whatido-grey leading-none m-0">Technical Writer,&nbsp;</h2>
            <h2 className="whatido-grey leading-none m-0">and&nbsp;</h2>
            <h2 className="whatido-grey leading-none m-0">Open source contributor.</h2>
          </div>
        </div>
        <div className="whatido-grey calibre-font max-w-xl mt-8">
          <p className="text-3xl">
            i have over 2 years of experience building
            exceptional web, mobile, business and enterprise applications.
          </p>
        </div>
        <div className="name-grey mt-4">
          <Link to="/about" className="flex text-2xl items-center font-medium">
            Read more about me
            <svg xmlns="http://www.w3.org/2000/svg" className="inline-block ml-1 icon icon-tabler icon-tabler-arrow-up-right-circle" width="34" height="34" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <circle cx="12" cy="12" r="9" />
              <line x1="15" y1="9" x2="9" y2="15" />
              <polyline points="15 15 15 9 9 9" />
            </svg> 
          </Link>
        </div>
      </section>
    </div>
    </>
  )
}
