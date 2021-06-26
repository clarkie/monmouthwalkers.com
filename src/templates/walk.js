import * as React from "react"

import styled from "styled-components"
import Layout from "../components/layout"
import { Container, Row } from "react-bootstrap"
import { WalkInfo } from "../components/walkInfo"
import { SEO } from "../components/seo"

const MapRow = styled(Row)`
  left: -20px;
  width: calc(100% + 70px);
  position: relative;
`

const MapImage = styled.div`
  max-width: 100%;
  height: 400px;
  width: 1140px;
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

const MapImageMask = styled.div`
  content: "";
  display: block;
  width: 100%;
  height: 400px;
  background: linear-gradient(
    90deg,
    #fff 0%,
    transparent 5%,
    transparent 95%,
    #fff 100%
  ); ;
`

const WalkPage = props => {
  const { pageContext } = props
  const {
    id,
    title,
    intro,
    content,
    info,
    mapImage,
    osLink,
    gpxLink,
  } = pageContext
  const walkHeader = `Walk No. ${id} - ${title}`

  return (
    <Layout>
      <SEO title={walkHeader} description={intro} />
      <Container className="mb-5">
        <Row className="mt-3">
          <h2>{walkHeader}</h2>
        </Row>
        <WalkInfo {...{ info }} />
        <Row className="my-3">{intro}</Row>
        <MapRow>
          <MapImage src={`/images/walks/${mapImage}`}>
            <MapImageMask />
          </MapImage>
        </MapRow>
        <Row>
          For a digital version click on one of these - note you may need to
          download one of the many free navigation apps (OS Maps, Strava,
          ViewRanger etc)
        </Row>
        <Row>
          <a href={osLink} target="_blank" rel="noreferrer">
            [OS Map]
          </a>
          <a href={`/gpx/${gpxLink}`} target="_blank" rel="noreferrer">
            [GPX]
          </a>
        </Row>
        {content.map((contentItem, index) => (
          <Row
            className="mt-3"
            key={index}
            dangerouslySetInnerHTML={{ __html: contentItem }}
          />
        ))}
      </Container>
    </Layout>
  )
}
export default WalkPage
