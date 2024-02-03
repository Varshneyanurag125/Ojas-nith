import Layout from "@/components/common/Layout"
import "@/styles/main.scss"
import Aos from "aos"
import "aos/dist/aos.css";
import { useEffect } from "react"

export default function App({ Component, pageProps }) {
  useEffect(()=>{
    Aos.init({
      easing:"ease-in-out",
      duration:1000
    })
  },[])
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
