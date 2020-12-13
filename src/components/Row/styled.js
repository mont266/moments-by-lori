import React from 'react'
import styled from 'styled-components'
import media, { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
    mobile: '46em',
})

export const RowContainer = styled.div`
    ${customMedia.lessThan('mobile')`
        line-height: 1.1;
        font-size: 2rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        width: 100%;
    `}
    ${media.greaterThan('small')`
        line-height: 1.1;
        font-size: 2rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        width: 100%;
    `}
    ${media.greaterThan('medium')`
        line-height: 1.1;
        font-size: 2.4rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        width: 100%;
        padding: 1em;
    `}
    ${media.greaterThan('large')`
        line-height: 1.1;
        font-size: 3rem;
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        padding: 1em;
    `}
    ${media.greaterThan('huge')`
        line-height: 1.1;
        font-size: 3rem;
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        padding: 1em;
    `}
`