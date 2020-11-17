import React from 'react';
import Toga from "../images/toga_bqumi8_g127t7_c_scale,w_445.png"

export default function FeaturedWork() {
  return (
    <>
      <section className="feat-wrap relative py-16 sm:py-16 md:py-20 lg:py-16">
        <div className="container mx-auto -mt-32 sm:-mt-32 md:-mt-40 lg:-mt-48">
          <h3 className="mb-6 text-2xl font-medium name-grey">Featured Work</h3>
          <div className="index-grids px-6 grid gap-4 sm:gap-4 md:gap-8 lg:gap-14 grid-rows-1 sm:grid-rows-1 md:grid-rows-1 lg:grid-rows-1">
            
            <div className="row-span-1 sm:row-span-1 md:row-span-1 lg:row-span-1 h-64 sm:h-64 md:h-64 lg:h-96">
              <a target="_blank" href={`https://togamobile.netlify.app`}>
                <div className="bg-gray-100 h-full overflow-hidden rounded-md">
                  <div className="grid gap-2 sm:gap-2 md:gap-4 grid-cols-12 sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 h-full items-center justify-center">
                    <div className="col-span-6 sm:col-span-6 md:col-span-6 lg:col-span-4 col-start-2 sm:col-start-2 md:col-start-2 lg:col-start-2">
                      <h2 className="text-black text-2xl sm:text-2xl md:text-3xl leading-none font-bold mb-2">
                        <span className="mr-2">Toga Mobile</span>
                        {/* <span className="green-pill px-2 inline-flex text-sm leading-5 font-medium rounded-full text-green-700 align-middle my-1">Password required</span> */}
                      </h2>
                      <p className="text-gray-700 text-base sm:text-base md:text-xl lg:text-xl">A Business centric mobile network</p>
                    </div>
                    <div className="project-photo col-span-5 sm:col-span-5 md:col-span-5 lg:col-span-7 h-full 
                      bg-cover bg-left sm:bg-left md:bg-left lg:bg-right bg-no-repeat select-none"
                      style={{backgroundImage:`url(${Toga})`, backgroundPosition: 'left'}}
                    >
                    </div>
                  </div>
                </div>
              </a>
            </div>
            
          </div>
        </div>
      </section>
    </>
  )
}
