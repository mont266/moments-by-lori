import styled from 'styled-components'
import media, { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
    mobile: '28.1em',
    desktopSmall: '1170px',
    desktopLarge: '1440px',
})

export const ImageColumn = styled.div`
    width: 22%;
    margin: 1em;
    padding: 0.4em;
  ${customMedia.lessThan('mobile')`
    width: 100%;
    margin: 1em;
    padding: 0.4em;
  `}
  ${media.greaterThan('small')`
    width: 50%;
    margin: 1em;
    padding: 0.4em;
  `}
  ${media.greaterThan('medium')`
    width: 22%;
    margin: 1em;
    padding: 0.4em;
  `}
  ${media.greaterThan('large')`
    width: 22%;
    margin: 1em;
    padding: 0.4em;
  `}
  ${media.greaterThan('huge')`
    width: 22%;
    margin: 1em;
    padding: 0.4em;
  `}
`

export const PostItemWrapper = styled.section`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  background: var(--bg-light);

  /* .homepage & {
    flex-direction: row;
  } */
`;