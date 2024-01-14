import './index.scss'

const AnimatedLetters = ({ letterClass, strArray, idx,colored }) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${colored?"colored ":""}${letterClass} _${i + idx}`}>
          {char} 
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters
