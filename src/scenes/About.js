import React from "react";
import { Helmet } from "react-helmet";
import {
  injectIntl,
  intlShape,
  defineMessages,
  FormattedMessage
} from "react-intl";
import { connect } from "react-redux";
import Page from "components/Page";
import Container from "components/blocks/Container";
import Paragraph from "components/blocks/Paragraph";
import styled from "styled-components";
import { Link } from "react-router-dom";

const messages = defineMessages({
  title: {
    id: "about.title",
    defaultMessage: "Sobre"
  },
  siteTitle: {
    id: "head.title",
    defaultMessage: "Uru-Eu-Wau-Wau: Terra em Disputa"
  }
});

const Button = styled.div`
  widht:100%;
  margin-top:50px;
  text-align: center;
  a{
    margin:0 auto;
    font-family: 'Merriweather', serif;
    font-size: 0.5em;
    -webkit-letter-spacing: 0.1rem;
    -moz-letter-spacing: 0.1rem;
    -ms-letter-spacing: 0.1rem;
    letter-spacing: 0.1rem;
    display: inline-block;
    color: #fff;
    border: 1px solid #fff;
    text-align: center;
    padding: 0.75rem 1rem;
    font-weight: 600;
    width: 210px;
    text-transform: uppercase;
  }
`;
const About = ({ intl, lastPath }) => {
  const title = intl.formatMessage(messages.title);
  const siteTitle = intl.formatMessage(messages.siteTitle);
  return (
    <Page>
      <Helmet>
        <title>
          {title} | {siteTitle}
        </title>
      </Helmet>
      <section className="content">
        <Container>
          <Button>
            <div>
            {
              lastPath &&
                <Link to={lastPath}>
                  <span className="fa fa-arrow-left" />
                  <FormattedMessage
                    id="about.close"
                    defaultMessage="Keep watching"
                  />
                </Link>
            }
            </div>
          </Button>
          <Paragraph big>
            <FormattedMessage
              id="about.intro"
              defaultMessage="The Carbono Vivo video is a special project of the Amazon Georeferenced Social and Environmental Information Network (RAISG) in partnership with {InfoAmazoniaLink}. Its objective is to communicate the results of the scientific article “{link}” published on January 27, 2020 in the journal Scientific Proceedings of the National Academy of Sciences (PNAS). The study results from a partnership between RAISG, the Woods Hole Research Center (WHRC), Environmental Defense Fund (EDF) and the Coordination of Indigenous Organizations in the Amazon Basin (COICA)."
              values={{
                link: (
                  <strong>
                    <a href="https://www.pnas.org/content/early/2020/01/21/1913321117" target="_blank">The Role of Forest Conversion, Degradation, and Disturbance in the Carbon Dynamics of Amazon Indigenous Territories and Protected Areas</a>
                  </strong>
                ),
                InfoAmazoniaLink: (
                  <a href="https://infoamazonia.org/" target="_blank">InfoAmazonia</a>
                )
              }}
            />
          </Paragraph>
          <Paragraph big>
            <FormattedMessage
              id="about.readmore"
              defaultMessage="Read more in press reports: {readmorelink}"
              values={{
                readmorelink: (
                  <strong>
                    <a href="https://www.pnas.org/content/early/2020/01/21/1913321117" target="_blank">www.pnas.org/content/early/2020/01/21/1913321117</a>
                  </strong>
                ),
                
              }}
            />
          </Paragraph>
          <Paragraph>
            <div style={{float:'left'}}>
              <strong>
                <FormattedMessage
                id="about.organization1"
                defaultMessage="The following organizations are members of"
              />
              </strong>
            </div>
            <div style={{float:'left'}}>
            <a href='https://www.amazoniasocioambiental.org/es/' target='_blank'><img src={require('images/partners/raisg-branco.png')} title='RAISG' alt='RAISG' style={{'margin':'0.1rem 0.5rem 0 0.5rem'}}  /></a>
            </div>
            <div style={{float:'left'}}>
              <strong>
                <FormattedMessage
                  id="about.organization2"
                  defaultMessage=":"
                />
              </strong>
            </div>
            <div style={{clear:'both'}}></div>
            <p>
            <img src={require('images/partners/logoISA_branco.png')} title='RAISG' alt='RAISG' style={{'margin':'0 2rem 0 0'}}  align="left" /> <img src={require('images/partners/ecociencia_min.png')} title='Ecociencia' alt='Ecociencia' style={{'margin':0}} align="left"/> <img src={require('images/partners/fan.png')} title='FAN' alt='FAN' style={{'margin':0}} align="left" /> <img src={require('images/partners/LOGO-GAIA-BLANCO-130b.png')} title='Gaia' alt='Gaia' style={{'margin':0}} align="left" /> <img src={require('images/partners/LOGO-ibc.png')} title='IBC' alt='IBC' style={{'margin':0}} align="left" /> <img src={require('images/partners/Imazon_min_png.png')} title='Imazon' alt='Imazon' style={{'margin':0}} align="left" /> <img src={require('images/partners/provita_min_png.png')} title='Provita' alt='Provita' style={{'margin':0}} align="left"/> <img src={require('images/partners/Wataniba_min_png.png')} title='Wataniba' alt='Wataniba' style={{'margin':0}} /> 
            </p>
          </Paragraph>
          <Paragraph>
            <strong>
              <FormattedMessage id="about.team" defaultMessage="{InfoAmazoniaLink} Team" 
              values={{
                InfoAmazoniaLink: (
                  <a href="https://infoamazonia.org/" target="_blank">InfoAmazonia</a>
                )
              }}
              />
            </strong>
          </Paragraph>
          <Paragraph>
            <strong>
              <FormattedMessage
                id="about.director"
                defaultMessage="Direction"
              />
            </strong>
            <br />
            Gustavo Faleiros
          </Paragraph>
          <Paragraph>
            <strong>
              <FormattedMessage id="about.edition" defaultMessage="Edition" />
            </strong>
            <br />
            Juliana Mori
          </Paragraph>
          <Paragraph>
            <strong>
              <FormattedMessage id="about.animation" defaultMessage="Animation" />
            </strong>
            <br />
            Sergio Castro
          </Paragraph>
          <Paragraph>
            <strong>
              <FormattedMessage id="about.music" defaultMessage="Music" />
            </strong>
            <br />
            Flávio Ianuzzi
          </Paragraph>
          <Paragraph>
            <strong>
              <FormattedMessage id="about.locution" defaultMessage="Voiceover" />
            </strong>
            <br />
            Cecília Rosen
          </Paragraph>
          <Paragraph>
            <strong>
              <FormattedMessage id="about.finalizingImages" defaultMessage="Image finalization" />
            </strong>
            <br />
            Luis Ushirobira
          </Paragraph>
          <Paragraph>
            <strong>
              <FormattedMessage id="about.photo_credit" defaultMessage="Cover photo credit" />
            </strong>
            <br />
            Giovanni Bello/Rede Xingu
          </Paragraph>
          <Paragraph>
            <strong>
              <FormattedMessage
                id="about.dev"
                defaultMessage="Development"
              />
            </strong>
            <br />
            <a href="https://github.com/studiocuboweb/especial-carbono-vivo-video/" target="_blank">Paulo Campos (Studio Cubo Web)</a>
          </Paragraph>
          <Button>
            <div>
              {
                lastPath &&
                  <Link to={lastPath}>
                    <span className="fa fa-arrow-left" />
                    <FormattedMessage
                      id="about.close"
                      defaultMessage="Keep watching"
                    />
                  </Link>
              }
            </div>
          </Button>
        </Container>
      </section>
    </Page>
  );
};

About.propTypes = {
  intl: intlShape.isRequired
};


const mapStateToProps = (state, ownProps) => {
  return {
    lastPath: state.context.lastPath
  };
};

export default injectIntl(connect(mapStateToProps, null)(About));
