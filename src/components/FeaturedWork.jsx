import React from 'react'

export default function FeaturedWork() {
  return (
    <>
      <section className="feat-wrap relative py-16 sm:py-16 md:py-20 lg:py-16">
        <div className="container mx-auto -mt-32 sm:-mt-32 md:-mt-40 lg:-mt-48">
          <h3 className="mb-6 text-2xl font-medium name-grey">Featured Work</h3>
          <div className="index-grids px-6 grid gap-4 sm:gap-4 md:gap-8 lg:gap-14 grid-rows-4 sm:grid-rows-4 md:grid-rows-4 lg:grid-rows-4">
            
            <div className="row-span-1 sm:row-span-1 md:row-span-1 lg:row-span-1 h-64 sm:h-64 md:h-64 lg:h-96">
              <a href="/booking">
                <div className="bg-gray-100 h-full overflow-hidden rounded-md">
                  <div className="grid gap-2 sm:gap-2 md:gap-4 grid-cols-12 sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 h-full items-center justify-center">
                    <div className="col-span-6 sm:col-span-6 md:col-span-6 lg:col-span-4 col-start-2 sm:col-start-2 md:col-start-2 lg:col-start-2">
                      <h2 className="text-black text-2xl sm:text-2xl md:text-3xl leading-none font-bold mb-2">
                        <span className="mr-2">Booking.com</span>
                        <span className="green-pill px-2 inline-flex text-sm leading-5 font-medium rounded-full text-green-700 align-middle my-1">Password required</span>
                      </h2>
                      <p className="text-gray-700 text-base sm:text-base md:text-xl lg:text-xl">Some of the projects I’ve worked on while at Booking.com</p>
                      <p className="mt-4">
                        <span className="font-medium text-black text-lg sm:text-lg md:text-xl lg:text-1xl">View Live
                          <svg className="fill-current inline-block -mt-1 ml-1" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                            <path d="M122.133333,0 C125.373404,0 128,2.62659613 128,5.86666667 L128,16.1333333 C128,19.3734039 
                            125.373404,22 122.133333,22 L111.866667,22 C108.626596,22 106,19.3734039 106,16.1333333 L106,5.86666667 
                            C106,2.62659613 108.626596,0 111.866667,0 L122.133333,0 Z M122.133333,
                            1 L111.866667,1 C109.251524,1 107.118149,3.06269512 107.004742,5.64988626 L107,5.86666667 L107,
                            16.1333333 C107,18.7484763 109.062695,20.8818509 111.649886,20.9952582 L111.866667,
                            21 L122.133333,21 C124.748476,21 126.881851,18.9373049 126.995258,16.3501137 L127,16.1333333 L127,
                            5.86666667 C127,3.25152374 124.937305,1.11814908 122.350114,1.00474179 L122.133333,1 Z M112.940658,
                            8.15232 L118.774471,8.15232 L112.624444,14.3023467 L113.704576,15.3824782 L119.854603,
                            9.23245156 L119.854603,15.0662649 L121.38238,15.0662649 L121.38238,6.62452267 L112.940638,
                            6.62452267 L112.940658,8.15232 Z" transform="translate(-106)">
                            </path>
                          </svg>
                        </span>
                      </p>
                    </div>
                    <div className="project-photo col-span-5 sm:col-span-5 md:col-span-5 lg:col-span-7 h-full 
                      bg-cover bg-left sm:bg-left md:bg-left lg:bg-right bg-no-repeat select-none"
                    // style="background-image:url(/img/thumbnails/booking-preview@2x.jpg)">
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
