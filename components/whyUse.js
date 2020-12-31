import React from 'react';
import MediaQuery from 'react-responsive'
import ServiceHighlight from './ServicesHighlight'


export default function WhyUse() {
  let dtextWrapper = {
    margin: `5vh 12.5vw`,
    color: `var(--text)`
  }
  let textWrapper = {
    margin: `2rem 2rem 2rem 1rem`,
    color: `var(--text)`
  }
  return(
    <div>
    <MediaQuery maxWidth={800}>
    <div style={textWrapper}>
    <ServiceHighlight
    title="Offload Design Labor Costs."
    desc="By working with realsupport.digital, your brand & business gets to deliver top-shelf branded collateral to your prospects & market..."
    desc2="...without needing to in-house and cover salary for top-shelf branding experts, graphic artists, advertisers, or web developers."
    />
    <ServiceHighlight
    title="Leverage High Tech."
    desc="realsupport.digital employs a cross-disciplinary team of expert web developers, graphic artists, & automation designers that work at the cutting edge of the digital marketing industry..."
    desc2="...giving your brand access to the highest level of customer service without logging 90 hours per week."/>
    <ServiceHighlight
    title="Get What You Need - Nothing More."
    desc="Throughput is unlimited, but you don’t need to buy an expensive subscription or pay high retainer fees to access talent."
    desc2="Grow your authentic and attractive brand on autopilot without breaking the bank by accessing talent only when you need it." />
    </div>
    </MediaQuery>
    <MediaQuery minWidth={801}>
    <div style={dtextWrapper}>
    <ServiceHighlight
    title="Offload Design Labor Costs."
    desc="By working with realsupport.digital, your brand & business gets to deliver top-shelf branded collateral to your prospects & market..."
    desc2="...without needing to in-house and cover salary for top-shelf branding experts, graphic artists, advertisers, or web developers."
    />
    <ServiceHighlight
    title="Leverage High Tech."
    desc="realsupport.digital employs a cross-disciplinary team of expert web developers, graphic artists, & automation designers that work at the cutting edge of the digital marketing industry..."
    desc2="...giving your brand access to the highest level of customer service without logging 90 hours per week."/>
    <ServiceHighlight
    title="Get What You Need - Nothing More."
    desc="Throughput is unlimited, but you don’t need to buy an expensive subscription or pay high retainer fees to access talent."
    desc2="Grow your authentic and attractive brand on autopilot without breaking the bank by accessing talent only when you need it." />
    </div>
    </MediaQuery>
    </div>
  )
}
