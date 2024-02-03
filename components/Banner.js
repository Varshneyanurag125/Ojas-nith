import React from "react"
import { Title, TitleLogo } from "./common/Title"

const Banner = () => {
  return (
    <>
      <section className='banner'>
        <div className='container'>
          <div >
            <Title title='We are looking forward to start new projects' /> <br />
            <TitleLogo title='Lets take our Club to the next level!' />
          </div>
          <div>
            <button className='button-primary'>Join our team </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner
