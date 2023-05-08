import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import { Seo } from "../components/seo"

const IndexPage = () => (
  <Layout>
    <section className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">Hare Krishna ! </h1>
          <p className="lead text-muted"> Welcome to Iskcon Sahibabad! Website will be launched soon.....</p>
          <StaticImage
            src="../images/iskcon.jpeg"
            width={800}
            height={500}
            quality={95}
            formats={["AUTO", "WEBP"]}
            alt="A Gatsby astronaut"
            className="img-fluid"
          />

        </div>
      </div>
      {/* <div className="row">
        <Link to="/about/" className="btn btn-primary my-2">About</Link>
        <Link to="/page-2/" className="btn btn-secondary my-2">Go to page 2</Link>
      </div> */}
    </section>
  </Layout>
)

export default IndexPage

export const Head = () => (
    <Seo />
)