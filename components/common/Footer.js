import Link from "next/link"
import { TitleLogo } from "./Title"
import { BsFacebook } from "react-icons/bs"
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='grid-4'>
            <div className='logo'>
              <TitleLogo title='OJAS' className='logobg' />
            </div>
            <ul>
              <h3>CLUB</h3>
              <li>
                <Link href='/'>HOME</Link>
              </li>
              <li>
                <Link href='/'>TEAM</Link>
              </li>
              <li>
                <Link href='/'>EVENTS</Link>
              </li>
              <li>
                <Link href='/'>PROJECTS</Link>
              </li>
              <li>
                <Link href='/'>ABOUT US</Link>
              </li>
            </ul>
            <ul>
              <h3>DOMAINS</h3>
              <li>
                <Link href='/'>Web Design & Development</Link>
              </li>
              <li>
                <Link href='/'>Graphics</Link>
              </li>
              <li>
                <Link href='/'>Core </Link>
              </li>
              <li>
                <Link href='/'>UI/UX</Link>
              </li>
            </ul>
            <ul>
              <h3>CONNECT</h3>
              <div className='social-handle'>
                <li>
                  <Link href='/'>
                    <BsFacebook size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <div className='legal connect py'>
            <div className='text'>
              <span>© 2024 TEAM OJAS. ALL RIGHTS RESERVED.</span>
            </div>
            <div className='connect'>
              <span>ANURAG VARSHNEY</span>
              <span> &nbsp; | &nbsp; </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
