import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

import {
    faDatabase,
 faWandMagicSparkles,
 faCode,
 faGlobe,
 faCodeBranch
  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
 

  // create a function that takes image name and returns the image path from assets
    const getImagePath = (imageName) => {
        return `../../assets/images/${imageName}.png`
        }



  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  })

 
  const renderSkillColumn = (title, skills,icon) => (
    <div key={title}>
 
      <h2  className="skill-title">{icon} {title}</h2>
      <ul className={`flex flex-wrap seq`}>
        {skills.map((skill) =>  <li key={skill}> <h2>{skill}</h2></li>)}
      </ul>
    </div>
  )


const skillsData = [
    {
        icon:  <FontAwesomeIcon icon={faWandMagicSparkles} color="#616161" />,
      title: "Frontend Development",
      lines: [
        "Proficiency in HTML, CSS, and JavaScript.",
        "Experience with React.js and its ecosystem.",
        "Responsive and mobile-first design.",
        "State management and component architecture."
      ]
    },
    {
        icon:  <FontAwesomeIcon icon={faCode} color="#616161" />,

      title: "Backend Development",
      lines: [
        "Strong understanding of JavaScript and asynchronous programming.",
        "Proficiency in Node.js and Express.js framework.",
        "RESTful API design and development.",
        "Handling of routes, middleware, and server-side logic."
      ]
    },
    {
        icon:  <FontAwesomeIcon icon={faDatabase} color="#616161" />,

      title: "Database and Storage",
      lines: [
        "Experience with SQL and NoSQL databases like MongoDB, FireBase, MySQL, and MSSQL.",
        "Querying databases and understanding database design principles.",
        "Data modeling and schema design."
      ]
    },
    {
        icon:  <FontAwesomeIcon icon={faCodeBranch} color="#616161" />,
      title: "Version Control",
      lines: [
        "Proficiency with Git and version control best practices.",
        "Collaboration and branching strategies."
      ]
    },
    {
        icon:  <FontAwesomeIcon icon={faGlobe } color="#616161" />,
      title: "API Integration",
      lines: [
        "Consuming and integrating third-party APIs and services.",
        "Authentication and authorization for APIs."
      ]
    }
  ];

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Skills'.split('')}
            idx={15}
          />
        </h1>
        <div className="skills-list">
 
        {skillsData.map((skill, index) => {

            return (
                <div key={skill.title} className="mt-10">
                {renderSkillColumn(skill.title, skill.lines, skill.icon)}
                </div>
            )

        })}
        </div>
      </div>
      <Loader type="ball-clip-rotate-multiple" />
    </>
  )
}

export default Portfolio
