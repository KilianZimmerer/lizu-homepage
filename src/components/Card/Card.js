import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import styles from 'src/assets/jss/nextjs-material-kit/components/cardStyle'

const useStyles = makeStyles(styles)

const Card = (props) => {
  const classes = useStyles()
  const { className, children, plain, carousel, ...rest } = props
  const cardClasses = classNames({
    [classes.card]: true,
    [classes.cardPlain]: plain,
    [classes.cardCarousel]: carousel,
    [className]: className !== undefined
  })
  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  )
}

export default Card

Card.propTypes = {
  className: PropTypes.string,
  plain: PropTypes.bool,
  carousel: PropTypes.bool,
  children: PropTypes.node
}
