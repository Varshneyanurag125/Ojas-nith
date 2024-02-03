import Link from "next/link"
import { TitleSm } from "./Title"
import { HiOutlineArrowRight } from "react-icons/hi"
import Tilt from "../Tilt"

export const Card = ({ data, caption, show, path }) => {
  return (
    <>
      <div  data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className='card'>
        <div className='card-img '>
        <Tilt options={{ max:15, speed: 400 }}>
          <img className="team-card" src={data.cover} alt={data.title} />
          </Tilt>
        </div>
        <div className='card-details '>
          <Link href="/" className='title-link'>
            <TitleSm title={data.title} />
          </Link>
          {caption && (
            <Link href="/">
              {caption} <HiOutlineArrowRight className='link-icon' />
            </Link>
          )}
          <div className='flex'>
            <span> {data.catgeory} </span> {data.date && <span> / {data.date}</span>}
          </div>

          {show && (
            <ul>
              {data.desc.map((text, i) => (
                <li key={i}> - {text.text}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  )
} 
