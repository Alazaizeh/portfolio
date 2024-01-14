import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
 import MainImage from './MainImage'
import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = [
    ' ',
    'O',
    'm',
    'a',
    'r',
    ' ',
    'A',
    'l',
    'a',
    'z',
    'a',
    'i',
    'z',
    'e',
    'h',
    ' ',
  ]
  const jobArray = [
    'F',
    'u',
    'l',
    'l',
    ' ',
    's',
    't',
    'a',
    'c',
    'k',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
  
    <div className="container home-page-container">

      <div className="home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m </span>

            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
              colored={true}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={15}
            />
          </h1>
          <h2>Front End and Back End Developer / JavaScript Expert</h2>
     
          <Link target='_blank' to="/Omar Alazaizeh Resume.pdf" className="flat-button">
            Resume
          </Link>
        </div>
      </div>
      <div className=" home-page-image">
        <MainImage />
      </div>

    </div>
      <Loader type="ball-clip-rotate-multiple" /> 
       </>
  )
}

export default Home
