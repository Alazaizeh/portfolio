import React from 'react'
import {Cloud, renderSimpleIcon, fetchSimpleIcons, SimpleIcon} from 'react-icon-cloud'
 
const useIcons = (slugs) => {
  const [icons, setIcons] = React.useState()
  React.useEffect(() => {fetchSimpleIcons({slugs}).then(({simpleIcons}) => setIcons(Object.values(simpleIcons)))}, [])

  if (icons) {
    return icons.map((icon) => renderSimpleIcon({
      icon,
      size: 42,
      aProps: {
        onClick: (e) => e.preventDefault()
      }
    }))
  }

  return <a>Loading</a>
}

const slugs = [
  'googlecloud',
  'javascript',
  'mongodb',
  'node-dot-js',
  'react',
  'sass',
  'typescript',
  'bootstrap',
  'css3',
  'express',
  'git',
  'github',
  'html5',
  'jest',
  'linux',
  'npm',
  'python',
  'visualstudiocode',
  'firebase',
  'heroku',
  'mysql',
  'postgresql',
  'microsoftsqlserver',
  'figma',
  'graphql',
  'material-ui',
  'redux',
]

const DynamicIconCloud = () => {
  const icons = useIcons(slugs)

  return <Cloud>
    {icons}
  </Cloud>
}

const App = () => {
  return <>
    <h1>{new Date().toISOString()}</h1>
    <DynamicIconCloud />
  </>
}

export default DynamicIconCloud
 