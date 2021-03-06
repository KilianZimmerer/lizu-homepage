/*eslint-disable*/
import React from 'react'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// nodejs library that concatenates classes
import classNames from 'classnames'
// material-ui core components
import { List, ListItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Link from 'next/link'

// @material-ui/icons
import Favorite from '@material-ui/icons/Favorite'

import styles from 'src/assets/jss/nextjs-material-kit/components/footerStyle.js'

const useStyles = makeStyles(styles)

export default function Footer(props) {
  const classes = useStyles()
  const { whiteFont } = props
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  })
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  })
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="/imprint" className={classes.block}>
                {props.imprint}
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="/privacy" className={classes.block}>
                {props.privacy}
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} , made with{' '}
          <Favorite className={classes.icon} /> by{' '}
          <a
            href="https://github.com/jakobkolb"
            className={aClasses}
            target="_blank"
          >
            Jakob Kolb
          </a>{' '}
          and{' '}
          <a
            href="https://github.com/KilianZimmerer"
            className={aClasses}
            target="_blank"
          >
            Kilian Zimmerer.
          </a>{' '}
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
  privacy: PropTypes.string,
  imprint: PropTypes.string,
  cms: PropTypes.string,
  about: PropTypes.string
}
