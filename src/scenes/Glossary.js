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

const Section = styled.section`
  max-width:800px;
  margin:100px auto;
  h1 {
    margin-top:30px;
    margin-left:20px;
    margin-bottom:20px;
  }
  table {
    tr {
      td {
        font-size:0.8em !important;
        padding:20px;
      }
      td:first-child {
        vertical-align: text-top;
        width: 250px;
      }
      td:last-child {
        width: 550px;
      }
    }
  }
`;

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
const Glossary = ({ intl, lastPath }) => {
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
          <div>
            <Section>
              <Link to={lastPath} style={{'margin':'20px'}}>
                  <span className="fa fa-arrow-left" />
                  <FormattedMessage
                    id="about.close"
                    defaultMessage="Keep watching"
                  />
              </Link>
              <h1>
                <FormattedMessage
                  id="glossary.pageTitle"
                  defaultMessage="Glossary"
                  />
              </h1>
              <table className="glossary_table">
                <tr>
                  <td>            
                    <FormattedMessage
                      id="glossary.word1"
                      defaultMessage="Carbon stock"
                    />
                  </td>
                  <td>            
                    <FormattedMessage
                      id="glossary.description1"
                      defaultMessage="amount of carbon present in a given location. For example, the carbon stock of the Amazon rainforest is the amount of carbon present in plants, animals and microorganisms in the forest."
                    />
                  </td>
                </tr>
                <tr>
                  <td>            
                    <FormattedMessage
                      id="glossary.word2"
                      defaultMessage="Biomass"
                    />
                  </td>
                  <td>            
                    <FormattedMessage
                      id="glossary.description2"
                      defaultMessage="all organic material, of vegetable, animals or microbial origin. In the forest, these are the trees, other plants, animals and microorganisms present. It is possible to calculate the relationship between the quantity of biomass and the carbon stock it contains. Consequently, it is possible to know, from calculation of the biomass lost, the reduction in the carbon stock - that is, how much carbon was released into the atmosphere."
                    />
                  </td>
                </tr>
                <tr>
                  <td>            
                    <FormattedMessage
                      id="glossary.word3"
                      defaultMessage="Carbon loss"
                    />
                  </td>
                  <td>            
                    <FormattedMessage
                      id="glossary.description3"
                      defaultMessage="another way of classifying the release of carbon into the atmosphere. In general, carbon emissions are considered as the release of carbon into the atmosphere, usually in a specific area and over a given period. When carbon is “lost” in a forest, it means that the stock of this element in the forest decreases and its quantity in the atmosphere increases. This is the process that occurs in deforestation, burning and any other activity that reduces biomass."
                    />
                  </td>
                </tr>
                <tr>
                  <td>            
                    <FormattedMessage
                      id="glossary.word4"
                      defaultMessage="Greenhouse gases"
                    />
                  </td>
                  <td>            
                    <FormattedMessage
                      id="glossary.description4"
                      defaultMessage="gaseous constituents, natural or man-made, which, in the atmosphere, absorb and transmit infrared radiation. This property causes the greenhouse effect. Carbon dioxide (CO2), nitrous oxide (N2O) and methane (CH4) are the main greenhouse gases in the Earth's atmosphere."
                    />
                  </td>
                </tr>
                <tr>
                  <td>            
                    <FormattedMessage
                      id="glossary.word5"
                      defaultMessage="Greenhouse effect"
                    />
                  </td>
                  <td>            
                    <FormattedMessage
                      id="glossary.description5"
                      defaultMessage="a natural phenomenon whereby, through a layer of atmospheric gases, the temperature of the planet is maintained at ideal levels for the survival of living beings. The Earth would be much colder without the greenhouse effect, hindering the development of life. The greenhouse effect becomes a problem when the concentration of these gases becomes very high, leading to an increase in the average global temperature."
                    />
                  </td>
                </tr>
                <tr>
                  <td>            
                    <FormattedMessage
                      id="glossary.word6"
                      defaultMessage="Global warming"
                    />
                  </td>
                  <td>            
                    <FormattedMessage
                      id="glossary.description6"
                      defaultMessage="the increase in the average temperature of the Earth. The burning of fossil fuels, forest fires, deforestation and industrial pollution release greenhouse gases into the atmosphere. The increase in the concentration of these gases has caused the average temperature of the planet to rise 0.85°C since 1850. Studies making future projections show that, under the best-case scenario, under which levels of gas emissions are reduced, the increase in the global average temperature may reach 1.5°C by 2100. Under the worst-case scenario, the increase could be about 3.7°C."
                    />
                  </td>
                </tr>
                <tr>
                  <td>            
                    <FormattedMessage
                      id="glossary.word7"
                      defaultMessage="Climate change"
                    />
                  </td>
                  <td>            
                    <FormattedMessage
                      id="glossary.description7"
                      defaultMessage="hanges in climate directly or indirectly attributable to human activities that alter the composition of the global atmosphere and which are additional to those caused by natural climate variability, observed over comparable periods.   Climate change causes alterations to the physical environment and to living organisms, resulting in significant detrimental effects on the composition, resilience or productivity of natural and managed ecosystems, on the functioning of socioeconomic systems, and on human health and well-being."
                    />
                  </td>
                </tr>
                <tr>
                  <td>            
                    <FormattedMessage
                      id="glossary.word8"
                      defaultMessage="Deforestation"
                    />
                  </td>
                  <td>            
                    <FormattedMessage
                      id="glossary.description8"
                      defaultMessage="removal of forests or natural vegetation from an area. Caused by human activity, in the Amazon deforestation is related to predatory activities such as illegal logging, ranching, agriculture, mining and large infrastructure projects. Deforestation has direct consequences for the climate crisis as it results in a decrease in carbon stocks and their release into the atmosphere."
                    />
                  </td>
                </tr>
                <tr>
                  <td>            
                    <FormattedMessage
                      id="glossary.word9"
                      defaultMessage="Forest degradation"
                    />
                  </td>
                  <td>            
                    <FormattedMessage
                      id="glossary.description9"
                      defaultMessage="as well as deforestation, which is the complete removal of vegetation from an area, there are several other forms of forest degradation. Logging and fires in the undergrowth, for example, alter forest structure and create types of vegetation cover that are intermediary between intact forest and deforested areas. In general, forest degradation is more difficult to monitor than deforestation, but is responsible for significant carbon emissions to the atmosphere."
                    />
                  </td>
                </tr>
                <tr>
                  <td>            
                    <FormattedMessage
                      id="glossary.word10"
                      defaultMessage="Amazonia"
                    />
                  </td>
                  <td>            
                    <FormattedMessage
                      id="glossary.description10"
                      defaultMessage="there are different ways to define the boundaries of the Amazon. One is the “Amazon basin”, that is, the territory that captures the rainwater that forms smaller rivers, which come together to form the Amazon River. Another common definition is the “Amazon biome”, the set of tropical forests that cover the Amazon River region, and other forms of associated vegetation. We usually refer to this as the Amazon Forest. Both the basin and the biome cover several countries; furthermore, in some of them there are administrative regions known locally as “Amazonia”. The data presented in this study were based on the Amazon Biome."
                    />
                  </td>
                </tr>
              </table>
              <Link to={lastPath} style={{'margin':'20px'}}>
                  <span className="fa fa-arrow-left" />
                  <FormattedMessage
                    id="about.close"
                    defaultMessage="Keep watching"
                  />
              </Link>
            </Section>
          </div>
        </Container>
      </section>
    </Page>
  );
};

Glossary.propTypes = {
  intl: intlShape.isRequired
};


const mapStateToProps = (state, ownProps) => {
  return {
    lastPath: state.context.lastPath
  };
};

export default injectIntl(connect(mapStateToProps, null)(Glossary));
