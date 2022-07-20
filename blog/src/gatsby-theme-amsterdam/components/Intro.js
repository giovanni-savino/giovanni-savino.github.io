import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  max-width: ${props => props.theme.sizes.maxWidth};
  width: 100%;
  margin: 3rem auto 0;
  padding: 0 1.5rem;
  height: 400px;
  text-transform: ${props => (props.capitalize ? 'capitalize' : 'none')};
`

const Title = styled.h2`
  float: left;
  line-height: 1.25;
  text-align: left;
   font-size: 2em;
   @media screen and (min-width: ${props => props.theme.responsive.small}) {
    padding-top: 0.5em;
    font-size: 3.5em;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    max-width: 50%;
  }
`
const Image = styled.div`
  max-width: ${props => props.theme.sizes.maxWidth};
  float: right;
  @media screen and (min-width: ${props => props.theme.responsive.xsmall}) {

  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    width: 800px;
    height: auto;
    max-width: 50%;
  }
`

const Intro = props => {
  return (
    <>
      {props.context.humanPageNumber === 1 && (
        <Wrapper {...props}>
          <Title>{props.text}</Title>
          <Image><img src="https://holori.com/wp-content/uploads/2021/08/Holori-diagram-3D-1-1024x690.png"></img></Image>

        </Wrapper>
      )}
    </>
  )
}

export default Intro
