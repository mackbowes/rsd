import React from 'react';
import MediaQuery from 'react-responsive'
import ServiceHighlight from './ServicesHighlight.js'


export default function Services() {
  let dtextWrapper = {
    margin: `5vh 12.5vw`,
    color: `var(--text)`
  }
  let dlargeHeading = {
    fontSize: `2rem`,
  }
  let textWrapper = {
    margin: `2rem 2rem 2rem 1rem`,
    color: `var(--text)`
  }
  let largeHeading = {
    fontSize: `5vw`,
  }
  return(
    <div>
    <MediaQuery maxWidth={800}>
    <div style={textWrapper}>
    <h2 style={largeHeading}>Grow Your Brand Using Designer Collateral Without Designer Price Tags.<br />
    Only Pay For What You Need.</h2>
    <ServiceHighlight
    title="Flyers"
    desc="Get flyers designed, printed, and mailed to your target zip codes without breaking the bank."
    pricing="From $25." />
    <ServiceHighlight
    title="Advertising"
    desc="Offload the stress & administrivia of digital advertising to our expert team." />
    <ServiceHighlight
    title="Lead Generating Funnels"
    desc="Own your own lead generation & automate your database growth." />
    </div>
    </MediaQuery>
    <MediaQuery minWidth={801}>
    <div style={dtextWrapper}>
    <h2 style={dlargeHeading}>Grow Your Brand Using Designer Collateral Without Designer Price Tags.<br />
    Only Pay For What You Need.</h2>
    <ServiceHighlight
    title="Flyers"
    desc="Get flyers designed, printed, and mailed to your target zip codes without breaking the bank."
    pricing="Flyers From $25" />
    <ServiceHighlight
    title="Advertising"
    desc="Offload the stress & administrivia of digital advertising to our expert team." />
    <ServiceHighlight
    title="Lead Generating Funnels"
    desc="Own your own lead generation & automate your database growth." />
    </div>
    </MediaQuery>
    </div>
  )
}
