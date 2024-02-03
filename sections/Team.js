import { teamdata , teamdata2 } from "@/assets/data/dummydata"
import SwiperComponent from "@/components/Swiper"
import { Card } from "@/components/common/Card"
import { Title, TitleSm } from "@/components/common/Title"
import React from "react"

const Team = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='MEET OUR TEAM' /> <br />
            <br />
            <Title title='CORE TEAM' className='title-bg' />
          </div>
          <div  className='grid-4 py'>
            {teamdata.map((item) => (
              <Card data={item} key={item.id} caption={item.post} />
            ))}
          </div>

          <div className='heading-title'>
            <Title title='TEAM MEMBERS' className='title-bg' />
          </div>
          <div  className='grid-4 py'>
            {teamdata2.map((item) => (
              <Card data={item} key={item.id} caption={item.post} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Team
