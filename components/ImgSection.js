import React from 'react';
import MediaQuery from 'react-responsive';

export default function ImgSection(props) {
  const wrapStyle = {
    display: `grid`,
    gridTemplateColumns: `1fr`,
    gridTemplateRows: `1fr`,
    margin: `0`,
    padding: `2rem 2rem 3rem 2rem`,
    backgroundImage: `url(${props.bg})`,
    backgroundSize: `cover`,
    minHeight: `25vh`,
    alignItems: `center`
  };
  const headingStyle = {
    color: `var(--text-white)`,
    fontFamily: `'IBM Plex Serif', serif`,
    fontWeight: `600`,
    fontSize: `3rem`,
    lineHeight: `1.1`,
    margin: `0`
  }
  const subheadingStyle = {
    color: `var(--text-white)`,
    fontFamily: `'Roboto', sans-serif`,
    fontWeight: `500`,
    fontSize: `1.25rem`,
    lineHeight: `1.25`,
    letterSpacing: `0.5px`,
    margin: `0`
  }

  const dWrapStyle = {
    display: `grid`,
    gridTemplateColumns: `1fr`,
    gridTemplateRows: `1fr`,
    margin: `0`,
    padding: `0 0 0 5vw`,
    backgroundImage: `url(${props.bg})`,
    backgroundSize: `cover`,
    minHeight: `50vh`,
    alignItems: `center`
  }
  const dHeadingStyle = {
    color: `var(--text-white)`,
    fontFamily: `'IBM Plex Serif', serif`,
    fontWeight: `600`,
    fontSize: `6rem`,
    lineHeight: `1.1`,
    margin: `0`
  }
  const dSubheadingStyle = {
    color: `var(--text-white)`,
    fontFamily: `'Roboto', sans-serif`,
    fontWeight: `500`,
    fontSize: `2.5rem`,
    lineHeight: `1.25`,
    letterSpacing: `0.5px`,
    margin: `0`,
    display: `block`,
    maxWidth: `50%`
  }

  return(
    <div>
    <MediaQuery maxWidth={800}>
    <div style={wrapStyle}>
      <h2 style={headingStyle}>{props.heading}</h2>
      {(props.subheading)
        ? <h3 style={subheadingStyle}>{props.subheading}</h3> : ''}
    </div>
    </MediaQuery>
    <MediaQuery minWidth={801}>
    <div style={dWrapStyle}>
    <div>
      <h2 style={dHeadingStyle}>{props.heading}</h2>
      {(props.subheading)
        ? <h3 style={dSubheadingStyle}>{props.subheading}</h3> : ''}
    </div>
    </div>
    </MediaQuery>
    </div>
  )
}
