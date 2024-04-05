import Link from "next/link"
import { TitleSm } from "./Title"
import { HiOutlineArrowRight } from "react-icons/hi"
import Tilt from "../Tilt"
import Image from "next/image"

export const Card = ({ data, caption, show}) => {
  return (
    <>
      <div  data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className='card'>
        <div className='card-img '>
        <Tilt options={{ max:15, speed: 400 }}>
          <img className="team-card" src={data.cover} alt={data.title} loading="lazy"/>
          </Tilt>
        </div>
        <div className='card-details '>
          <Link href={`${data.handle}`} className='title-link' target="_blank">
            <TitleSm title={data.title} />
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#ffffff" viewBox="0 0 256 256"><path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path></svg> */}
          </Link>

          {caption && (
            <Link href={`${data.handlegit}`} target="_blank">
              {caption} <HiOutlineArrowRight className='link-icon' />
            </Link>
          )}
               
          <div className='flex'>
            <span> {data.catgeory} </span> {data.date && <span> / {data.date}</span>}
          </div>

          {show && (
            <ul>
              {data.desc.map((text, i) => (
                <li key={i}> - {text.text} </li>
              ))}''
            </ul>
          )}
        </div>
      </div>
    </>
  )
} 
