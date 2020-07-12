import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby';

export default function toProjectBlog() {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
    query {
      allMarkdownRemark(limit: 1) {
        edges {
          node {
            excerpt(pruneLength: 120)
            id
            fields {
                slug
              }
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
            }
        }
      }
    }
  }
  `
  )

  const { edges: posts } = allMarkdownRemark
  return (
    <section className="relative overflow-hidden mt-6">
      <div className="container mx-auto">
        <div className="grid gap-0 grid-cols-3 sm:grid-cols-3 md:grid-cols-12 lg:grid-cols-12">
          <div className="ent-left relative col-span-3 sm:col-span-3 md:col-span-6 bg-gray-800 hover:bg-gray-900 transition ease-in-out duration-700 py-16 sm:py-16 md:py-20 lg:py-48 pl-12">
            <div className="mb-8 sm:mb-8 lg:mb-16 pr-4 sm:pr-4 md:pr-8 lg:pr-16">
              <h2 className="text-white text-3xl sm:text-3xl md:text-4xl lg:text-4xl leading-none font-semibold">
                All Projects
              </h2>
              <p className="text-base sm:text-base md:text-xl lg:text-2xl mt-4 mb-4 text-gray-500">A collection of things I've worked on, design explorations, work-in-progress or any other things...</p>
              <Link to="/work" className="font-medium text-white text-lg sm:text-lg md:text-xl lg:text-2xl">
                View more
                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block -mt-1 ml-1 icon icon-tabler icon-tabler-arrow-up-right-circle" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <circle cx="12" cy="12" r="9" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                  <polyline points="15 15 15 9 9 9" />
                </svg> 
              </Link>
            </div>
          </div>

          <div className="ent-right relative col-span-3 sm:col-span-3 md:col-span-6 bg-namzo-green py-16 sm:py-16 md:py-20 lg:py-48 pl-4 sm:pl-4 md:pl-8 lg:pl-16 pr-4">
            <h2 className="text-white text-3xl sm:text-3xl md:text-4xl lg:text-4xl leading-none font-semibold">
              Latest Post
            </h2>

            {posts &&
              posts.map(({ node: post }) => (
                <div key={post.id}>
                  <div className="max-w-sm overflow-hidden">
                    <article>
                      <header className="mt-4 mb-4">
                        <Link
                          className="text-white text-xl sm:text-2xl md:text-2xl leading-tight font-medium"
                          to={post.fields.slug}
                        >
                          {post.frontmatter.title}
                        </Link>
                      </header>
                      <span className="text-base sm:text-base md:text-xl lg:text-lg mt-2 mb-2 pb-2 text-teal-400 border-b-2 border-teal-400 inline-block">{post.frontmatter.date}</span>
                      <p className="text-base sm:text-base md:text-xl lg:text-2xl mt-4 mb-4 text-teal-200">
                        {post.excerpt}
                      </p>
                      <Link className="font-medium text-white text-lg sm:text-lg md:text-xl lg:text-2xl" to={post.fields.slug}>
                        Continue reading
                        <svg xmlns="http://www.w3.org/2000/svg" className="inline-block -mt-1 ml-1 icon icon-tabler icon-tabler-arrow-up-right-circle" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <circle cx="12" cy="12" r="9" />
                          <line x1="15" y1="9" x2="9" y2="15" />
                          <polyline points="15 15 15 9 9 9" />
                        </svg>
                      </Link>
                    </article>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
