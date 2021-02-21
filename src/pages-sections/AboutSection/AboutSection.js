import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import styles from 'src/assets/jss/nextjs-material-kit/pages/landingPageSections/workStyle.js'


const useStyles = makeStyles(styles)


export const AboutSection = (props) => {
    const classes = useStyles()
    return(
        <div className={classes.container}>
        <h2 className={classes.title}>{props.title}</h2>
        <h4 className={classes.description}>
            {props.text}
        </h4>
        </div>
    )
}

export default AboutSection
