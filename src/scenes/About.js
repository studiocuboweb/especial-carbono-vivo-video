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
              defaultMessage="O vídeo Carbono Vivo é um projeto especial da Rede Amazônica de Informação Socioambiental Georreferenciada (RAISG) em aliança com InfoAmazonia. Seu objetivo é comunicar os resultados do artigo científico “{link}” publicado no dia 27 de janeiro de 2020 no periódico científico Proceedings of the National Academy of Sciences (PNAS). O estudo resulta de uma parceria entre pesquisadores da RAISG, do Centro de Pesquisa Woods Hole Research Center (WHRC), o Environmental Defense (EDF) e a Coordenação das Organizações Indígenas da Bacia Amazônica (COICA).Esta reportagem foi produzida por InfoAmazonia e faz parte do especial “Terra de Resistentes."
              values={{
                link: (
                  <strong>
                    <a href="https://www.pnas.org/content/early/2020/01/21/1913321117" target="_blank">The Role of Forest Conversion, Degradation, and Disturbance in the Carbon Dynamics of Amazon Indigenous Territories and Protected Areas</a>
                  </strong>
                ),
                
              }}
            />
          </Paragraph>
          <Paragraph big>
            <FormattedMessage
              id="about.readmore"
              defaultMessage="Leia mais em reportagem: {readmorelink}"
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
            <strong>
              <FormattedMessage id="about.team" defaultMessage="InfoAmazonia Team" />
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
            Gustavo Faleiro
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
              <FormattedMessage id="about.locution" defaultMessage="Locution" />
            </strong>
            <br />
            Cecília Rosen
          </Paragraph>
          <Paragraph>
            <strong>
              <FormattedMessage id="about.finalizingImages" defaultMessage=" Finalizing images" />
            </strong>
            <br />
            Luis Ushirobira
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
