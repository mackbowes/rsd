import Head from 'next/head'
import ImgSection from '../components/ImgSection.js'
import PortfolioCard from '../components/PortfolioCard.js'

export default function Flyers() {

  const gridWrap = {
    display: `grid`,
    gridTemplateColumns: `repeat(auto-fit, minmax(320px, 1fr))`,
    columnGap: `2rem;`
  }

  return(
    <div>
      <ImgSection
      bg="/BG-1.png"
      heading="rs.d Flyers"
      subheading="View Our Flyer Portfolio"  />
      <div style={gridWrap}>
      <PortfolioCard
      img="/BG-1.png"
      alt=""
      title="Flyer 1"
      desc="Our First Flyer" />
      </div>
    </div>
  )

}
