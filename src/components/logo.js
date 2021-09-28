import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import logo from '../../static/logo.jpg'

const StyledLogo = styled.div`
  position: relative;
  z-index: 13;

  font-size: ${({ size }) => (size ? size : "1.75rem")};
  font-weight: 900;
  color: ${({ theme, color }) => theme.colors[color] || color };

  /* Disable effects when sidebar is open */
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
`

const StyledImg = styled.img`
 max-width: 100%;
    max-height: 100%;
`

const Logo = ({ size, color }) => (
  <StyledLogo color={color} size={size}>
    {/* {siteShortTitle} */}
    <StyledImg src={logo}></StyledImg>
  </StyledLogo>
)

Logo.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
}

export default Logo
