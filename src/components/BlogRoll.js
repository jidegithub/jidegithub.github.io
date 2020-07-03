import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="grid grid-mobile grid-cols-3 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 col-gap-4 row-gap-12 mt-6 mx-auto mb-8">
        {posts &&
          posts.map(({ node: post }) => (
            <div key={post.id}>
              <div className="max-w-sm overflow-hidden bg-white shadow-lg mx-auto h-full">
                <article>
                  <header>
                    {post.frontmatter.featuredimage ? (
                      <div className="w-full">
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: post.frontmatter.featuredimage,
                            alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                          }}
                        />
                      </div>
                    ) : null}
                  </header>

                  <div className="px-6 py-4 mt-2">
                    <div className="font-bold text-xl mb-2 uppercase">
                      <Link
                        className=""
                        to={post.fields.slug}
                      >
                        {post.frontmatter.title}
                      </Link>
                    </div>
                    <span className="py-3 mb-2">
                      {post.frontmatter.date}
                    </span>
                    <p className="text-gray-700 text-base mt-2">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="my-3">
                    <Link to={post.fields.slug} className="ml-6 bg-transparent hover:bg-blue-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent">
                      Keep Reading →
                    </Link>
                  </div>
                  <div className="px-6 py-4">
                    <span className="inline-block bg-gray-200  px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
                    <span className="inline-block bg-gray-200  px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
                    <span className="inline-block bg-gray-200  px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
                  </div>
                </article>
              </div>
            </div>
          ))}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 384, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
