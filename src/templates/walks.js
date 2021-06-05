import * as React from "react"
import { Link } from "gatsby"

import styled from "styled-components"
import Layout from "../components/layout"
import { WalkInfo } from "../components/walkInfo"
import { Container, Row, Col } from "react-bootstrap"

import badge from "../images/badge.png"

const WalkLink = styled(Link)`
  color: #963027;
`

const WalkListContainer = styled(Row)`
  margin-top: 15px;
  margin-bottom: 15px;
`

const WalkListItem = ({ id, title, slug, info }) => (
  <WalkListContainer>
    <Container>
      <Row>
        <WalkLink to={slug}>
          Walk No {id} - {title}
        </WalkLink>
      </Row>
      <WalkInfo {...{ info }} />
    </Container>
  </WalkListContainer>
)

const WalksPage = ({ pageContext }) => {
  const { walks } = pageContext
  return (
    <Layout>
      <Container>
        <Row className="mt-3 ml-1">
          <h3>Celebrate Our 40th Anniversary with us and enjoy a local walk</h3>
        </Row>

        <Row>
          <Col sm={4} lg={3}>
            <img src={badge} alt="Monmouth Walkers badge" width="100%" />
          </Col>
          <Col sm={8} lg={9} className="align-self-center">
            <Container fluid className="">
              <p>
                Monmouth Rambling &amp; Hillwalking Club first started walking
                as a group in 1981. Since then our members have enjoyed walking
                countless miles in and around the Monmouth area. We are lucky to
                have some of the UK’s most beautiful and accessible countryside
                on our doorstep.
              </p>
              <p>
                From the town centre you can walk along the Wye Valley, climb
                the Kymin or visit beautiful woodlands.
              </p>
              <p>
                To enjoy some of our favourite walks, select from the list to
                find a map and walk instructions.
              </p>
            </Container>
          </Col>
        </Row>

        {walks.map(walk => (
          <WalkListItem key={walk.id} {...walk} />
        ))}
        <Row>
          <p>
            All these walks are within the area covered by Ordnance Survey
            Explorer Map OL14 and it is strongly recommended that you take a
            copy on your walk. We recommend you wear sturdy footwear and
            appropriate clothing.
          </p>
          <p>
            Always follow the Country Code:
            <ul>
              <li>Be safe – plan ahead and follow any signs</li>
              <li>Leave gates and property as you find them</li>
              <li>Protect plants and animals, and take your litter home</li>
              <li>Keep dogs under control</li>
              <li>Consider other people</li>
            </ul>
          </p>
          <p>
            We hope you enjoy your walk but please understand that all outdoor
            activities involve a degree of risk and that you participate in
            these walks at your own risk – Monmouth Rambling and Hillwalking
            Club accepts no responsibility for any injuries to walkers following
            these walks.
          </p>
          <p>
            We have taken every care to ensure the directions given for the
            walks are accurate but Monmouth Rambling &amp; Hillwalking Club
            cannot accept responsibility for any errors or omissions. We would
            be pleased to hear of any inaccuracies or changes to the routes by
            email at{" "}
            <a href="mailto:monmouthwalkers@gmail.com">
              monmouthwalkers@gmail.com
            </a>
            .
          </p>
        </Row>
      </Container>
    </Layout>
  )
}
export default WalksPage
