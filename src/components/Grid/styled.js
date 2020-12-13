import React from 'react'
import styled from 'styled-components'
import media, { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
    mobile: '46em',
})

export const GridContainer = styled.div`
    width: 100%;
    ${customMedia.lessThan('mobile')`
    line-height: 1.1;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    `}
    ${media.greaterThan('small')`
    line-height: 1.1;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
  `}
    ${media.greaterThan('medium')`
    line-height: 1.1;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
  `}
    ${media.greaterThan('large')`
    line-height: 1.1;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
  `}
    ${media.greaterThan('huge')`
    line-height: 1.1;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
  `}
`