import { ccdata , finaldata , thirddata , seconddata , firstdata } from "@/assets/data/dummydata"
import { Card } from "@/components/common/Card"
import { Title, TitleSm } from "@/components/common/Title"
import React from "react"

const Team = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div data-aos='zoom-in' className='heading-title'>
            <TitleSm title='MEET OUR TEAM' /> <br />
            <br />
            <Title title='Club Coordinator' className='title-bg' />
          </div>

          <div  className='team-container py '>
            {ccdata.map((item) => (
              <Card data={item} key={item.id} caption={item.post} className="card-container" />
            ))}
          </div>

          <div  data-aos='zoom-in' className='heading-title'>
            <Title title='Final Year' className='title-bg' />
          </div>

          <div  className='grid-4 py'>
            {finaldata.map((item) => (
              <Card data={item} key={item.id} caption={item.post} />
            ))}
          </div>

          <div  data-aos='zoom-in' className='heading-title'>
            <Title title='Third Year' className='title-bg' />
          </div>

          <div  className='grid-4 py'>
            {thirddata.map((item) => (
              <Card data={item} key={item.id} caption={item.post} />
            ))}
          </div>

          <div  data-aos='zoom-in' className='heading-title'>
            <Title title='Executive Members' className='title-bg' />
          </div>

          <div className='grid-4 py'>
            {seconddata.map((item) => (
              <Card data={item} key={item.id} caption={item.post} />
            ))}
          </div>

          <div  data-aos='zoom-in' className='heading-title'>
            <Title title='Volunteers' className='title-bg' />
          </div>

          <div  className='grid-4 py'>
            {firstdata.map((item) => (
              <Card data={item} key={item.id} caption={item.post} />
            ))}
          </div>

        </div>
      </section>
    </>
  )
}

export default Team
