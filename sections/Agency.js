
import Tilt from "@/components/Tilt"
import { Title, TitleSm } from "@/components/common/Title"

const Agency = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='ABOUT PROJECTS' /> <br />
            <br />
            <Title title='Making your vision become a reality.' className='title-bg' />
          </div>

          <div className='content flex'>
            <div data-aos="zoom-in" className='left w-40 py'>
              <Tilt options={{ max:15, speed: 400 }} className="hover-box">
                <img src='/images/s4.jpg' alt='Img' className='round' width='100%' height='100%' />
                <a href="/" className="arrow"><svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="#00dc93" viewBox="0 0 256 256"><path d="M237.66,122.34l-96-96A8,8,0,0,0,128,32V72H104a8,8,0,0,0-8,8v96a8,8,0,0,0,8,8h24v40a8,8,0,0,0,13.66,5.66l96-96A8,8,0,0,0,237.66,122.34ZM144,204.69V176a8,8,0,0,0-8-8H112V88h24a8,8,0,0,0,8-8V51.31L220.69,128ZM48,80v96a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Zm32,0v96a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Z"></path></svg></a>
              </Tilt>  
            </div>
            <div  data-aos="fade-left" className='right w-60 ml'>
              <TitleSm title='PROJECT NAME' />
              <br />
              <p className='misson-p'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe consequuntur modi autem a corrupti fugiat ipsum possimus distinctio hic officiis!</p>
            </div>
          </div>

          <div className='content flex'>
            <div data-aos="zoom-in" className='left w-40 py'>
            <Tilt options={{ max:15, speed: 400 }} className="hover-box">
              <img src='/images/s4.jpg' alt='Img' className='round' width='100%' height='100%' />
              <a href="/" className="arrow"><svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="#00dc93" viewBox="0 0 256 256"><path d="M237.66,122.34l-96-96A8,8,0,0,0,128,32V72H104a8,8,0,0,0-8,8v96a8,8,0,0,0,8,8h24v40a8,8,0,0,0,13.66,5.66l96-96A8,8,0,0,0,237.66,122.34ZM144,204.69V176a8,8,0,0,0-8-8H112V88h24a8,8,0,0,0,8-8V51.31L220.69,128ZM48,80v96a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Zm32,0v96a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Z"></path></svg></a>
            </Tilt>  
            </div>
            <div  data-aos="fade-left" className='right w-60 ml'>
              <TitleSm title='PROJECT NAME' />
              <br />
              <p className='misson-p'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe consequuntur modi autem a corrupti fugiat ipsum possimus distinctio hic officiis!</p>
            </div>
          </div>

          <div  className='content flex'>
          <div data-aos="zoom-in" className='left w-40 py'>
            <Tilt options={{ max:15, speed: 400 }} className="hover-box">
              <img src='/images/s4.jpg' alt='Img' className='round' width='100%' height='100%' />
              <a href="/" className="arrow"><svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="#00dc93" viewBox="0 0 256 256"><path d="M237.66,122.34l-96-96A8,8,0,0,0,128,32V72H104a8,8,0,0,0-8,8v96a8,8,0,0,0,8,8h24v40a8,8,0,0,0,13.66,5.66l96-96A8,8,0,0,0,237.66,122.34ZM144,204.69V176a8,8,0,0,0-8-8H112V88h24a8,8,0,0,0,8-8V51.31L220.69,128ZM48,80v96a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Zm32,0v96a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Z"></path></svg></a>
            </Tilt>  
            </div>
            <div data-aos="fade-left" className='right w-60 ml'>
              <TitleSm title='PROJECT NAME' />
              <br />
              <p className='misson-p'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe consequuntur modi autem a corrupti fugiat ipsum possimus distinctio hic officiis!</p>
            </div>
          </div>

          <br />
          <br />

        </div>
      </section>
    </>
  )
}

export default Agency
