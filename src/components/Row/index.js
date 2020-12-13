import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styled'

const Row = ({ children, style, className }) => (
    <S.RowContainer style={style} className={className}>{children}</S.RowContainer>
)

Row.propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
}

Row.defaultProps = {
    style: {},
    className: ''
}

export default Row