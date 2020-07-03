import React from 'react'
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import BlogRoll from '../../components/BlogRoll'

export default function BlogIndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`olutola`, `jide`, `olutolajide`, `michael`, `olutolamichael`, `blog`, `personal blog`, `olutola jides blog`, 'olutola jide\'s blog']}
        title="Blog"
      />
        <section className="inverse-main">
          <div className="container mx-auto">
            <h1 className="text-4xl font-sans font-bold ml-4 mt-8">
              Latest Articles
              </h1>
            <BlogRoll />
          </div>
        </section>
    </Layout>
  )
}
