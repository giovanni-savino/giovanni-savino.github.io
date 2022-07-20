import React from 'react'
import styled from '@emotion/styled'
import { useSiteMetadata } from 'gatsby-theme-amsterdam/src/hooks/use-site-metadata'

const Wrapper = styled.footer`
  background: ${props => props.theme.colors.base};
`

const Container = styled.div`
  color: white;
  font-size: 0.9em;
  max-width: ${props => props.theme.sizes.maxWidth};
  width: 100%;
  padding: 2rem 1.5rem;
  margin: 0 auto;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    padding: 0 1.5rem;
    padding: 3rem 1.5rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: baseline;
  }
`

const Copyright = styled.p`
  opacity: 0.5;
  margin: 0 0 1rem 0;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    margin: 0;
  }
`
const Creativecommons = styled.div`
height: 31px;
width: 80px;
margin: 0 0 1rem 0;
  background-image: url("https://i.creativecommons.org/l/by-sa/4.0/88x31.png");
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    margin: 0;
  }
`

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    justify-content: space-between;
    align-items: center;
  }
`


const Item = styled.li`
  margin: 0 0.5rem 0.5rem 0;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    margin: 0 0 0 0.5rem;
  }
  a {
    transition: 0.3s color;
    color: white;
    text-decoration: none;
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
    @media (hover: none) {
      color: white !important;
    }
  }  

`

const Footer = props => {
  const { author, footerLinks } = useSiteMetadata()

  return (
    <Wrapper>
      <Container>
      <Creativecommons></Creativecommons>
        <Copyright>
        
        {new Date().getFullYear()} This blog is under Creative Commons Attribution 3.0 License
        </Copyright>
        {footerLinks && (
          <List>
            {footerLinks.map(link => (
              <Item key={link.name}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.name}
                </a>
              </Item>
            ))}
           
          </List>
        )}
      </Container>
    </Wrapper>
  )
}

export default Footer