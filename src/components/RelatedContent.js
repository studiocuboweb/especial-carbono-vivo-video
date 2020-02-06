import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';
import { media } from '../styles/utils';

const Wrapper = styled.div`
  max-width: 500px;
  display: block;
  margin: 30px auto 15px auto;
  a {
      color:#434343;
      font-size:1rem;
  }
  .more-content {
    text-align:center;
  }
  .more-tit {
    padding-bottom:20px  
  }
  img {
      margin:0px;
  }
`

const RelatedContent = ({ title, imageUrl, href }) => {
  return (    
    <Wrapper>
      <div className="more-content">
        <a href={href} target='_blank'>
          <div className="related-content">
            <h3 class="more-tit">{title}</h3>
            <img src={imageUrl} />
          </div>
        </a>
      </div>
    </Wrapper>
  );
}

RelatedContent.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default RelatedContent;