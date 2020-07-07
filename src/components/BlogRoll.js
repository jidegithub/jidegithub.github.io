import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="grid grid-mobile grid-cols-3 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 col-gap-4 row-gap-12 mt-6 mx-auto mb-8">
        {posts &&
          posts.map(({ node: post }) => (
            <div key={post.id}>
              <div className="max-w-sm overflow-hidden mx-auto h-full">
                <article>
                  <div className="px-6 py-4 mt-2">
                    <header className="font-bold name-grey text-xl mb-2 uppercase">
                      <Link
                        to={post.fields.slug}
                      >
                        {post.frontmatter.title}
                      </Link>
                    </header>
                    <span className="color-dim py-3 mb-2">
                      {post.frontmatter.date}
                    </span>
                    <p className="whatido-grey text-base mt-2">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="my-3">
                    <Link to={post.fields.slug} className="ml-6 color-mid text-sm py-2 px-4">
                      Read more →
                    </Link>
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
              excerpt(pruneLength: 120)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
