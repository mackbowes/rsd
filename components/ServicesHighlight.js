import React from 'react';
import MediaQuery from 'react-responsive'

export default function ServiceHighlight(props) {


  let wrapper = {
    padding: `4vmin 0`
  }
  let desktopWrapper = {
    padding: `5vh 5vw`
  }

  let heading = {
    fontFamily: `'IBM Plex Serif', serif`,
    fontWeight: `600`,
    fontSize: `5vmin`,
    lineHeight: `1`,
    margin: `0`
  }

  let desktopHeading = {
    fontFamily: `'IBM Plex Serif', serif`,
    fontWeight: `600`,
    fontSize: `2rem`,
    lineHeight: `1`,
    margin: `0`
  }
  let desc = {
    fontFamily: `'Roboto', sans-serif`,
    fontWeight: `400`,
    color: `var(--text-tint)`,
    fontSize: `4vmin`,
    lineHeight: `1.5`,
  }
  let desktopDesc = {
    fontFamily: `'Roboto', sans-serif`,
    fontWeight: `400`,
    color: `var(--text-tint)`,
    fontSize: `1.5rem`,
    lineHeight: `2`,
    display: `block`,
    maxWidth: `75%`
  }
  let pricing = {
    display: `block`,
    backgroundColor: `var(--text)`,
    color: `var(--background)`,
    padding: `2rem`,
    fontFamily: `'IBM Plex Serif', serif`,
    fontWeight: `600`,
    fontSize: `2rem`,
    marginLeft: `50%`
  }
  return(
    <div>
    <MediaQuery maxWidth={800}>
    <div style={wrapper}>
    <h3 style={heading}>
    {(props.path)
      ? <a href={props.path}>{props.title} &rarr;</a>
      : props.title}
    </h3>
    <p style={desc}>{props.desc}</p>
    {(props.desc2)
    ? <p style={desc}>{props.desc2}</p>
    : ''}
    </div>
    </MediaQuery>
    <MediaQuery minWidth={801}>
    <div style={desktopWrapper}>
    <h3 style={desktopHeading}>
    {(props.path)
      ? <a href={props.path}>{props.title} &rarr;</a>
      : props.title}
    </h3>
    <p style={desktopDesc}>{props.desc}</p>
    {(props.desc2)
    ? <p style={desktopDesc}>{props.desc2}</p>
    : ''}
    </div>
    </MediaQuery>
    </div>
  )
}

//    {(props.pricing)
//      ? <p style={pricing}>{props.pricing}</p>
//      : ''}
