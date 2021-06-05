/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import "bootstrap/dist/css/bootstrap.min.css"
import { Menu } from "./menu"
import "./main.css"
import { SEO } from "./seo"

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-47073255-2"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag("js", new Date());
            
            gtag("config", "UA-47073255-2");
            `,
          }}
        />
        <SEO />

        {/* <!-- Bootstrap core CSS --> */}
        <link
          href="https://fonts.googleapis.com/css?family=Dosis|PT+Sans"
          rel="stylesheet"
        />
        <link href="/vendor/lightbox/ekko-lightbox.css" rel="stylesheet" />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function (d, s, id) {
                var js,
                  fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s);
                js.id = id;
                js.src =
                  "https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v3.1&appId=2125053681069339&autoLogAppEvents=1";
                fjs.parentNode.insertBefore(js, fjs);
              })(document, "script", "facebook-jssdk");
           `,
          }}
        />
      </head>

      <body id="top">
        {/* <!-- Navigation --> */}
        <Menu />

        {children}
      </body>

      <footer class="py-5 bg-dark">
        <div class="container">
          <p class="m-0 text-center text-white">
            Copyright &copy; Monmouth Rambling and Hillwalking Club 2018
          </p>
        </div>
      </footer>
    </html>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
