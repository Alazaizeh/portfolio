import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const SKILLS = {
  frontend: [
    'html',
    'css',
    'javascriptt',
    'react',
    'redux',
    'gulp',
    'next-js',
    'SASS',
    'mui',
    'jest',
    'bootstrap-5',
    'auth0',
  ],
  backend: [
    'node',
    'express',
    'jwt',
    'firebase',
    'nm',
    'mongodb',
    'google-cloud',
    'heroku',
    'socket-io',
    'sql',
    'netlify',
    'postgresql',
  ],
  other: [
    'github',
    'npm',
    'cmd',
    'postman',
    'excel',
    'vbox',
    'git-bash',
    'visual-studio-code-1',
  ],
  programming: ['js', 'python', 'c', 'java', 'c--4', 'ruby', 'c-1'],
}
const SKILL_STYLES = {
  SECTION:
    'w-full relative select-none mb-24 section-container py-12 flex flex-col justify-center',
  SKILL_TITLE: 'section-title-sm mb-4 seq',
}
const Technologies = () => {
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

 
  const renderSkillColumn = (title, skills) => (
    <>
      <h3 className={SKILL_STYLES.SKILL_TITLE}>{title}</h3>
      <div className={`flex flex-wrap seq`}>
        {skills.map((skill) => {
  

          return (
            <img
            
              key={skill}
              src={require(`../../assets/tech/${skill.toLowerCase()}.${
                skill == 'npxm' ? '.png' : 'svg'
              }`)}
              alt={skill}
              width={76}
              height={76}
              className="skills"
            />
          )
        })}
      </div>
    </>
  )

 

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Technologies'.split('')}
            idx={15}
          />
        </h1>
        <div className="technologies-list">
          <div className="mt-10">
            {renderSkillColumn('FRONTEND DEVELOPMENT', SKILLS.frontend)}
          </div>
          <div className="mt-10">
            {renderSkillColumn('BACKEND DEVELOPMENT', SKILLS.backend)}
          </div>

          <div className="mt-10">
            {renderSkillColumn('Cooding', SKILLS.programming)}
          </div>
          <div className="flex flex-wrap mt-10">
            <div>{renderSkillColumn('Other Skills', SKILLS.other)}</div>
          </div>
        </div>
      </div>
      <Loader type="ball-clip-rotate-multiple" />
    </>
  )
}

export default Technologies
