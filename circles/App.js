// Render the circles using React!
const App = props => {
  let { circles } = props
  // console.log(props)
  return circles.map(function (circle, index) {
    return <Circle key={index} circle={circle} />
  })
}

const Circle = props => {
  const { circle } = props
  console.log(circle)
  return (
    <div
      style={{
        width: circle.radius,
        height: circle.radius,
        backgroundColor: circle.color,
        borderRadius: 50
      }}
    />
  )
} // CHALLENGE: Write a separate Circle component for use in the App component
