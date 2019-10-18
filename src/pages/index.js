import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBCol,
  MDBRow,
  MDBContainer,
  MDBIcon,
} from "mdbreact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MDBContainer>
      <MDBRow className="mb-2">
        <MDBCol sm="12">
          <MDBCard>
            <MDBCardBody>
              <MDBCardText>Quote of the day: "Every day above the ground is a good day!" -- Fortune Cookie</MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <MDBRow className="mb-2">
        <MDBCol sm="4">
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle>Launch Schedule</MDBCardTitle>
              <Link to="/weather/">
                <MDBBtn color="primary">
                  <MDBIcon icon="rocket" size="5x" />
                </MDBBtn>
              </Link>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol sm="4">
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle>Top Tweets</MDBCardTitle>
              <Link to="/weather/">
                <MDBBtn color="primary">
                  <MDBIcon fab icon="twitter" size="5x" />
                </MDBBtn>
              </Link>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol sm="4">
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle>Top Reddit</MDBCardTitle>
              <Link to="/weather/">
                <MDBBtn color="primary">
                  <MDBIcon fab icon="reddit-alien" size="5x" />
                </MDBBtn>
              </Link>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <MDBRow className="mb-2">
        <MDBCol sm="12">
          <MDBCard>
            <MDBCardBody>
              <MDBCardText>Raspberry Pi Status - Operating Temp: 77'C | CPU: 88% | RAM: 60% </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </Layout>
)

export default IndexPage
