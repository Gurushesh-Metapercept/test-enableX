import React from 'react'
import { ScreenContainer } from './ScreenContainer'
import { Card, CardGroup } from 'react-bootstrap'
import multiparty from '../../images/multiparty.png'
import onetoone from '../../images/one-to-one.png'
import exp from '../../images/exp1.png'
import experience from '../../images/ExperienceEnableX.png'
export const CardSection = React.forwardRef((props, ref) => (
  <div
    style={{
      marginTop: '4rem',
      background: '#f5f8f9',
      minHeight: '400px',
      paddingTop: '4rem',
      paddingBottom: '4rem',
    }}
  >
    <ScreenContainer>
      <CardGroup className="d-flex flex-column">
        <Card className="f_card1 mb-5 px-3 border-0 border-start border-danger border-5">
          <Card.Body className="d-flex flex-column flex-md-row justify-content-between">
            <div className="w-100 w-md-50 d-flex flex-column justify-content-center mb-3 mb-md-0">
              <Card.Title
                style={{ color: '#24374E', fontWeight: '600' }}
                className="fs-3"
              >
                Featured Sample Code on GitHub
              </Card.Title>
              <Card.Text className="paraColor">
                Sample Applications and their source codes are available on
                Github to enable developers to understand how to build
                applications using EnableX API.
              </Card.Text>
            </div>
            <div className="featuredImg d-flex w-100 w-md-50 d-flex justify-content-center align-items-center">
              <img src={multiparty} className="w-50" alt="" />
              <img src={onetoone} className="w-50" alt="" />
            </div>
          </Card.Body>
        </Card>

        <Card className="f_card1 mb-5 px-3 border-0 border-start border-danger border-5">
          <Card.Body className="d-flex flex-column-reverse flex-md-row justify-content-between">
            <div className="featuredImg d-flex w-100 w-md-50 d-flex justify-content-center align-items-center">
              <img src={exp} className="w-50" alt="" />
              <img src={experience} className="w-50" alt="" />
            </div>
            <div className="w-100 w-md-50 d-flex flex-column justify-content-center mb-3 mb-md-0">
              <Card.Title
                style={{ color: '#24374E', fontWeight: '600' }}
                className="fs-3"
              >
                Experience EnableX
              </Card.Title>
              <Card.Text className="paraColor">
                We have hosted application for you to try and experience
                jitter-free Video Call.
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
      </CardGroup>
    </ScreenContainer>
  </div>
))
