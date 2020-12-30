import React from 'react'
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import BlogRoll from '../../components/BlogRoll'
import { Helmet } from 'react-helmet';

export default function BlogIndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`olutola`, `jide`, `olutolajide`, `michael`, `olutolamichael`, `blog`, `personal blog`, `olutola jides blog`, 'olutola jide\'s blog']}
        title="Blog"
      />
      <Helmet title="Blog - Olutola Olajide | Software Developer" />
        <section className="mt-40">
          <div className="container mx-auto">
            <h1 className="anti-main-color sf-mono-font text-5xl font-bold my-10">
              Articles
            </h1>
            <BlogRoll />
          </div>
        </section>
    </Layout>
  )
}
