import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';
import { media } from '../styles/utils';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 500px;
  padding: 1rem 1rem 3rem;
    .more-content {
      a {
        max-height: 12rem;
        display: flex;
      }
      .related-content {
        margin-left: .5rem;
        padding-bottom: 2.5rem;
        padding-left: 1.5rem;
        h3 {
          color: #fff;
          font-size: .9rem;
        }
        p {
          font-size: .8rem;
          color: #fff;
        }
      }
      img {
        height: 4.8rem;
        margin: .5rem 0;
      }
    }
  ${media.phablet`
    .more-content {
      a {
        max-height: 12rem;
        display: flex;
      }
      .related-content {
        h3 {
          font-size: 1.2rem;
        }
        p {
          font-size: 1rem;
        }
      }
      img {
        height: 6rem;
        margin: 0;
        margin-top: .5rem;
      }
    }
  `}
  ${media.desktop`
    margin-left: 8vw;
    margin-right: 8vw;
  `}
  @media (min-width: 75em) {
    margin: 0 auto;
    max-width: 640px;
    .more-content {
      .related-content {
        font-size: 1.2em;
        h3 {
          font-size: 1.4rem;
        }
      }
    }
  }
  .more-content-header {
    padding-bottom: 0.5rem;
    margin-bottom: 1.3rem;
  }
  .related-content>h3 {
    border-bottom: 1px rgba(255,255,255,.9) solid;
  }
`

const RelatedNews = ({ sectionTitle, title, href, title1, href1, title2, href2 }) => {
  return (    
    <Wrapper>
      <div className="more-content-header">
        <h3>{sectionTitle}</h3>
      </div>
      <div className="more-content">
        <a href={href} target="_blank">
          <div className="related-content">
            <h3>{title}</h3>
          </div>
        </a>
      </div>
      <div className="more-content">
        <a href={href1} target="_blank">
          <div className="related-content">
            <h3>{title1}</h3>
          </div>
        </a>
      </div>
      <div className="more-content">
        <a href={href2} target="_blank">
          <div className="related-content">
            <h3>{title2}</h3>
          </div>
        </a>
      </div>
    </Wrapper>
  );
}

RelatedNews.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  title1: PropTypes.string.isRequired,
  href1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  href2: PropTypes.string.isRequired,
};

export default RelatedNews;