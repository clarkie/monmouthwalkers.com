import * as React from "react"
import { Col, Row } from "react-bootstrap"

import Layout from "../components/layout"

import "./header.css"

import badge from "../images/badge-transparent.png"

const IndexPage = () => (
  <Layout>
    {/* <!-- Header with Background Image --> */}
    <header class="header">
      <div class="background-mask">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h1 class="display-3 text-center text-white mt-4 mb-0">
                Monmouth
              </h1>
              <h3 class="text-center text-white mt-0">
                Rambling and Hillwalking Club
              </h3>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/* <!-- Page Content --> */}
    <section class="container">
      <div class="row" id="contact">
        <div class="col-md-6">
          <h2 class="mt-4">Do you enjoy a walk in the countryside?</h2>
          <p>
            Would you like to join a friendly local group for walking and the
            occasional social event?
          </p>

          <p>
            Monmouth Rambling and Hillwalking Club is a long established walking
            club based in Monmouth. We walk every Sunday in our beautiful local
            countryside.
          </p>
          <p>
            Our walks vary in length from around 6 to 8 miles with a break for
            coffee and lunch along the way.
          </p>
          <p>
            We extend a warm welcome to newcomers who may join us for up to
            three "taster" walks before joining the club. We charge a small
            annual subscription to cover admin and insurance costs.
          </p>
          <p>
            To join us, please complete this form and give it to a committee
            member on the next walk along with your subscription
          </p>
          <p>
            <a
              class="btn btn-primary btn-lg"
              href="/assets/MR&HWC membership form.doc"
            >
              Membership Form &raquo;
            </a>
          </p>
        </div>

        <div class="col-sm-12 col-md-6 mt-4">
          <Row className="event">
            <Col sm={4} lg={3}>
              <img src={badge} alt="Monmouth Walkers badge" width="100%" />
            </Col>
            <Col>
              <p>
                Celebrate Our 40th Anniversary with us and enjoy a local walk.
              </p>
              <a href="/walks">See a list of some of our favourite walks</a>.
            </Col>
          </Row>

          <div
            class="fb-group"
            data-href="https://www.facebook.com/groups/1827521370900504/"
            data-show-social-context="true"
            data-show-metadata="true"
          ></div>
        </div>

        <div class="col-sm-12">
          <h2 class="mt-4">Contact Us</h2>
          <address>
            <strong>Tom Clarke: </strong>
            01600 228752
            <br />
          </address>
          <address>
            <strong>Mike Saunders: </strong>
            01600 716255
            <br />
          </address>
        </div>
      </div>
      {/* <!-- /.row --> */}
    </section>
    {/* <!-- /.container --> */}

    <section class="container" id="gallery">
      <div class="row">
        <div class="col-12">
          <h2>Gallery</h2>
          <div class="row justify-content-center">
            <div class="col-md-10">
              <div class="row">
                <a
                  href="/images/group-lake.jpg"
                  data-toggle="lightbox"
                  data-gallery="example-gallery"
                  class="mb-4 col-6 col-sm-4"
                >
                  <img
                    src="/images/thumbnails/group-lake.jpg"
                    class="img-fluid"
                    alt="group lake"
                  />
                </a>
                <a
                  href="/images/river.jpg"
                  data-toggle="lightbox"
                  data-gallery="example-gallery"
                  class="mb-4 col-6 col-sm-4"
                >
                  <img
                    src="/images/thumbnails/river.jpg"
                    class="img-fluid"
                    alt="river"
                  />
                </a>
                <a
                  href="/images/view.jpg"
                  data-toggle="lightbox"
                  data-gallery="example-gallery"
                  class="mb-4 col-6 col-sm-4"
                >
                  <img
                    src="/images/thumbnails/view.jpg"
                    class="img-fluid"
                    alt="nice view"
                  />
                </a>
                <a
                  href="/images/scene-2.jpg"
                  data-toggle="lightbox"
                  data-gallery="example-gallery"
                  class="mb-4 col-6 col-sm-4"
                >
                  <img
                    src="/images/thumbnails/scene-2.jpg"
                    class="img-fluid"
                    alt="scenic view"
                  />
                </a>
                <a
                  href="/images/scene-4.jpg"
                  data-toggle="lightbox"
                  data-gallery="example-gallery"
                  class="mb-4 col-6 col-sm-4"
                >
                  <img
                    src="/images/thumbnails/scene-4.jpg"
                    class="img-fluid"
                    alt="scenic view"
                  />
                </a>
                <a
                  href="/images/scene.jpg"
                  data-toggle="lightbox"
                  data-gallery="example-gallery"
                  class="mb-4 col-6 col-sm-4"
                >
                  <img
                    src="/images/thumbnails/scene.jpg"
                    class="img-fluid"
                    alt="scenic view"
                  />
                </a>
                <a
                  href="/images/waterfall.jpg"
                  data-toggle="lightbox"
                  data-gallery="example-gallery"
                  class="mb-4 col-6 col-sm-4"
                >
                  <img
                    src="/images/thumbnails/waterfall.jpg"
                    class="img-fluid"
                    alt="waterfall"
                  />
                </a>
                <a
                  href="/images/group.jpg"
                  data-toggle="lightbox"
                  data-gallery="example-gallery"
                  class="mb-4 col-6 col-sm-4"
                >
                  <img
                    src="/images/thumbnails/group.jpg "
                    class="img-fluid"
                    alt="group"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.row --> */}
    </section>
    {/* <!-- /.container --> */}

    <section class="container" id="faq">
      <div class="row">
        <div class="col-12">
          <h2>FAQs</h2>
          <h5 class="w-100">Can I try a walk?</h5>
          <p>
            New members may try up to 3 walks before joining the club. Contact
            us for details of upcoming walks.
          </p>

          <h5 class="w-100">Where can I meet for a walk?</h5>
          <p>
            We meet every Sunday morning at Rockfield Road car park, opposite
            the Bridges Centre, in Monmouth and leave there around 9.30, exact
            departure time depending on how far it is to the start of the walk.
          </p>

          <h5 class="w-100">Do I need special equipment/gear?</h5>
          <p>
            We strongly recommend you wear good walking boots and have a
            waterproof jacket and overtrousers. Some walkers like to use walking
            poles to take the weight off their joints and assist with balance
            over rough terrain. In addition, a rucksack for carrying food, water
            and any other items is required.
          </p>

          <h5 class="w-100">Do I need to bring sandwiches and a drink?</h5>
          <p>
            Yes. Our walks usually include a short coffee stop mid-morning and a
            picnic stop for lunch. If there is a convenient pub or café at the
            end of a walk, members may wish to have a drink before going home.
          </p>

          <h5 class="w-100">Can I share transport?</h5>
          <p>
            We encourage our members to share lifts to minimise environmental
            impact. Passengers contribute towards travel costs.
          </p>

          <h5 class="w-100">Can I bring a dog?</h5>
          <p>
            Due to the likelihood that we will be walking among livestock, the
            Club does not allow dogs on walks.
          </p>

          <h5 class="w-100">How do I join the club?</h5>
          <p>
            Please complete a membership form and give it to a committee member
            on the next walk along with your subscription.
          </p>

          <h5 class="w-100">What about insurance?</h5>
          <p>
            Whilst the club has Public Liability insurance covering damage or
            injury that any member of the Club may cause to a third party or
            property, the committee and walk leaders cannot accept
            responsibility for any loss or injury suffered by anyone
            participating in our walks. Participation in our walks is entirely
            at the risk of the member or guest.
          </p>

          <h5 class="w-100">How far do you walk?</h5>
          <p>
            Our walk programme includes walks varying in length from around 6 to
            8 miles but once a month we include a longer walk of 9-10 miles.
          </p>
        </div>
      </div>
      {/* <!-- /.row --> */}
    </section>
    {/* <!-- /.container --> */}

    {/* <!-- Bootstrap core JavaScript --> */}
    <script src="vendor/jquery/jquery.min.js "></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js "></script>

    {/* <!-- Plugin JavaScript --> */}
    <script src="vendor/jquery-easing/jquery.easing.min.js "></script>

    {/* <!-- Custom JavaScript for this theme --> */}
    <script src="js/scroll.js "></script>
    <script src="vendor/lightbox/ekko-lightbox.min.js"></script>

    <script
      dangerouslySetInnerHTML={{
        __html: `
          $(document).ready(() => {
            $(document).on("click", '[data-toggle="lightbox"]', function (event) {
              event.preventDefault();
              $(this).ekkoLightbox();
            });
          });
        `,
      }}
    />
  </Layout>
)

export default IndexPage
