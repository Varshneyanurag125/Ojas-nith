import { showcase } from "@/assets/data/dummydata"
import { Card } from "@/components/common/Card"
import { Title, TitleSm } from "@/components/common/Title"
import React from "react"

const ShowCase = () => {
  return (
    <>
      <section className='showcase bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='ABOUT US' /> <br />
            <br />
            <Title title='OUR CLUB COORDINATOR' className='title-bg' />
          </div>
          <br />
          <br />
          {/* about us */}
          <div className='cc-card'>
            <div className="cc-card-wrapper">
              <img src="../images/sankalp.webp" className="cc-image" alt="clubcoordinator" loading="lazy"  />
            </div>
            <div className="cc-card-wrapper">
              <img src="../images/leena1.webp" className="cc-image" alt="clubcoordinator" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ShowCase
