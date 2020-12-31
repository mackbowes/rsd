import React from 'react';
import MediaQuery from 'react-responsive';
import Image from 'next/image';


export default function PortfolioCard(props) {

  const cardWrap = {
    backgroundColor: `var(--text-white)`,
    padding: `25px`,
    margin: `25px`,
    maxWidth: `460px`
  }

  const headingStyle = {
    color: `var(--text)`,
    fontFamily: `'IBM Plex Serif', serif`,
    fontWeight: `600`,
    fontSize: `2rem`,
    lineHeight: `.8`
  }

  return(
    <div style={cardWrap}>
    <a href={props.img}>
      <Image
        src={props.img}
        alt={props.alt}
        width={420}
        height={635}
        loading="lazy"
      /></a><br />
      <h3 style={headingStyle}>{props.title}</h3>
      <p>{props.desc}</p>
    </div>
  )
}
