import React, { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Img from "gatsby-image"
import { motion, useAnimation } from "framer-motion"

import { detectMobileAndTablet, isSSR } from "../../utils"
import { useOnScreen } from "../../hooks/"
import ContentWrapper from "../../styles/ContentWrapper"
import Underlining from "../../styles/Underlining"
import Button from "../../styles/Button"
import Theme from "../../styles/Theme"

const StyledSection = styled.section`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.background};
  margin-top: 6rem;
`

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 0;
    padding-left: 0;
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      padding-right: 2.5rem;
      padding-left: 2.5rem;
    }
    .section-title {
      padding-right: 2.5rem;
      padding-left: 2.5rem;
      @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        padding-right: 0;
        padding-left: 0;
      }
    }
    .section-paragraph {
      padding-right: 2.5rem;
      padding-left: 2.5rem;
      @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        padding-right: 0;
        padding-left: 0;
      }
    }
  }
`

const StyledInterests = styled.div`
  display: grid;
  /* Calculate how many columns are needed, depending on interests count */
  grid-template-columns: repeat(
    ${({ itemCount }) => Math.ceil(itemCount / 2)},
    15.625rem
  );
  grid-template-rows: repeat(2, auto);
  grid-auto-flow: column;
  column-gap: 1rem;
  row-gap: 1rem;
  padding: 0 2.5rem;
  overflow-x: scroll;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
  /* Workaround: https://stackoverflow.com/questions/38993170/last-margin-padding-collapsing-in-flexbox-grid-layout */
  &::after {
    content: "";
    width: ${({ itemCount }) =>
      Math.ceil(itemCount / 2) % 2 === 1 ? "17.125rem" : "2.5rem"};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-auto-flow: row;
    grid-template-columns: repeat(3, 15.625rem);
    overflow: visible;
    padding: 0;
  }
  /* Show scrollbar if desktop and wrapper width > viewport width */
  @media (hover: hover) {
    &::-webkit-scrollbar {
      display: block;
      -webkit-appearance: none;
    }

    &::-webkit-scrollbar:horizontal {
      height: 0.8rem;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 8px;
      border: 0.2rem solid white;
      background-color: rgba(0, 0, 0, 0.5);
    }

    &::-webkit-scrollbar-track {
      background-color: #fff;
      border-radius: 8px;
    }
  }

  .interest {
    width: 15.625rem;
    height: 3rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem;

    .icon {
      margin-right: 0.5rem;
    }
  }
`
const AnimatedUnderlining = motion.custom(Underlining)

const Interests = ({ content }) => {
  const { exports, frontmatter } = content[0].node
  const { shownItems, interests } = exports

  const [shownInterests, setShownInterests] = useState(shownItems)

  const ref = useRef()
  const onScreen = useOnScreen(ref)

  const iControls = useAnimation()
  const bControls = useAnimation()
  const uControls = useAnimation()

  useEffect(() => {
    // If mobile or tablet, show all interests initially
    // Otherwise interests.mdx will determine how many interests are shown
    // (isSSR) is used to prevent error during gatsby build
    if (!isSSR && detectMobileAndTablet(window.innerWidth)) {
      setShownInterests(interests.length)
    }
  }, [interests])

  useEffect(() => {
    const sequence = async () => {
      if (onScreen) {
        // i receives the value of the custom prop - can be used to stagger
        // the animation of each "interest" element
        await iControls.start(i => ({
          opacity: 1,
          scaleY: 1,
          transition: { delay: i * 0.1 },
        }))
        await bControls.start({ opacity: 1, scaleY: 1 })
      }
    }
    sequence()
  }, [onScreen, shownInterests, iControls, bControls])

  const showMoreItems = () => setShownInterests(shownInterests + 4)

  return (
    <StyledSection id="interests">
      <StyledContentWrapper>
        <h3 className="section-title">{frontmatter.title}</h3>
        <p className="section-paragraph">
          {frontmatter.intro}{" "}
          <a href="https://www.sfsu.edu/">
            <AnimatedUnderlining
              animate={uControls}
              color="secondary"
              hoverColor="secondary"
              big
            >
              {frontmatter.school}
            </AnimatedUnderlining>
          </a>{" "}
          {frontmatter.join}{" "}
          <a href="https://ez.football/hkg/en/">
            <AnimatedUnderlining
              animate={uControls}
              color="orange"
              hoverColor="orange"
              big
            >
              {frontmatter.ezshopnet}
            </AnimatedUnderlining>
          </a>{" "}
          {frontmatter.where} <br></br>
          <br></br>
          {frontmatter.later}{" "}
          <a href="https://intersog.com/">
            <AnimatedUnderlining
              animate={uControls}
              color="blue"
              hoverColor="blue"
              big
            >
              {frontmatter.intersog}
            </AnimatedUnderlining>
          </a>{" "}
          {frontmatter.work} <br></br>
          <br></br>
          {frontmatter.work2}{" "}
       
          <a href="https://wello.ca">
            <AnimatedUnderlining
              animate={uControls}
              color="green"
              hoverColor="green"
              big
            >   {frontmatter.wello}</AnimatedUnderlining> </a>{" "}
            {frontmatter.work3} <br></br>
          <br></br>
          {frontmatter.here}
        </p>
        <StyledInterests itemCount={interests.length} ref={ref}>
          {interests.slice(0, shownInterests).map(({ name, icon }, key) => (
            <motion.div
              className="interest"
              key={key}
              custom={key}
              initial={{ opacity: 0, scaleY: 0 }}
              animate={iControls}
            >
              <Img className="icon" fixed={icon.childImageSharp.fixed} /> {name}
            </motion.div>
          ))}
          {shownInterests < interests.length && (
            <motion.div initial={{ opacity: 0, scaleY: 0 }} animate={bControls}>
              <Button
                onClick={() => showMoreItems()}
                type="button"
                textAlign="left"
                color="primary"
              >
                + Load more
              </Button>
            </motion.div>
          )}
        </StyledInterests>
      </StyledContentWrapper>
    </StyledSection>
  )
}

Interests.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        exports: PropTypes.shape({
          interests: PropTypes.array.isRequired,
          shownItems: PropTypes.number.isRequired,
        }).isRequired,
        frontmatter: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
}

export default Interests
