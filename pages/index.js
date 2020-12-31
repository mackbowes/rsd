import Head from 'next/head'
import ImgSection from '../components/ImgSection'
import Services from '../components/services'
import WhyUse from '../components/whyUse'
import ContactForm from '../components/contactform'

export default function Home() {

  return (
    <div>
      <Head>
        <title>realsupport.digital</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ImgSection
      bg="/BG-1.png"
      heading="rs.d"
      subheading="On Demand Digital Marketing Support for Real Estate Agents"  />
      <Services />
      <ImgSection
      bg="/BG-2.png"
      heading="Why use rs.d?" />
      <WhyUse />
      <ImgSection
      bg="/BG-3.png"
      heading="Contact rs.d" />
      <ContactForm />
      <div style={{
        textAlign: `center`,
        padding: `2rem`,
        fontFamily: `'Roboto', sans-serf`,
        color: `var(--text)`,
        fontSize: `1rem`
      }}>
      <p>Mailing Address</p>
      <p>#302-20243 56th Avenue, Langley, British Columbia, Canada</p>
      <p>Copyright realsupport.digital 2021</p>
      </div>
    </div>
  )
}
