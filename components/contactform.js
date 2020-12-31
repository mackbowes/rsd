import React from 'react';
import MediaQuery from 'react-responsive';
import { Formik, Field, Form } from 'formik';

export default function ContactForm() {

  const inputStyle = {
    display: `block`,
    width: `100%`,
    fontFamily: `'IBM Plex Serif', serif`,
    fontWeight: `600`,
    lineHeight: `2`,
    fontSize: `1.5rem`,
    padding: `1rem 0 .5rem 1rem`,
    border: `none`,
    borderBottom: `4px solid var(--text)`,
    marginBottom: `2rem`,
    backgroundColor: `var(--background)`,
    placeHolder: `var(--text)`
  }

  const buttonStyle = {
    display: `grid`,
    gridTemplateColumns: `1fr`,
    gridTemplateRows: `1fr`,
    alignItems: `center`,
    justifyItems: `center`,
    fontFamily: `'IBM Plex Serif', serif`,
    fontWeight: `600`,
    lineHeight: `2`,
    fontSize: `1.5rem`,
    padding: `1rem 5rem`,
    border: `none`,
    marginBottom: `2rem`,
    color: `var(--background)`,
    backgroundColor: `var(--text)`,
    cursor: `pointer`,
  }

  let wrapper = {
    margin: `2rem 1rem 2rem 1rem`,
    color: `var(--text)`,
    minHeight: `100vh`,
    display: `grid`,
    gridTemplateColumns: `1fr`,
    gridTemplateRows: `1fr`,
    alignItems: `center`,
  }

  let dwrapper = {
    margin: `0 12.5vw`,
    color: `var(--text)`,
    minHeight: `80vh`,
    display: `grid`,
    gridTemplateColumns: `1fr`,
    gridTemplateRows: `1fr`,
    alignItems: `center`,
  }

  return(
    <>
    <MediaQuery maxWidth={800}>
    <div style={wrapper}>
    <Formik
      initialValues={{
        name: '',
      }}
    >
      <Form>
        <Field style={inputStyle} id="name" name="name" placeholder="Full Name" />
        <Field style={inputStyle} id="email" name="email" placeholder="eMail Address" />
        <Field style={inputStyle} id="phone" name="phone" placeholder="Phone Number" />
        <Field style={inputStyle} id="message" name="message" placeholder="Message..." />
        <button style={buttonStyle} type="submit">Send</button>
      </Form>
    </Formik>
    </div>
    </MediaQuery>
    <MediaQuery minWidth={801}>
    <div style={dwrapper}>
    <Formik
      initialValues={{
        name: '',
      }}
    >
      <Form>
        <Field style={inputStyle} id="name" name="name" placeholder="Full Name" />
        <Field style={inputStyle} id="email" name="email" placeholder="eMail Address" />
        <Field style={inputStyle} id="phone" name="phone" placeholder="Phone Number" />
        <Field style={inputStyle} id="message" name="message" placeholder="Message..." />
        <button style={buttonStyle} type="submit">Send</button>
      </Form>
    </Formik>
    </div>
    </MediaQuery>
    </>
  )
}
