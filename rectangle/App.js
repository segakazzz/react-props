// Render the rectangle using React!
const App = props => {
  let { rectangle } = props
  console.log(rectangle)
  return (
    <div
      style={{
        backgroundColor: rectangle.color,
        width: rectangle.width,
        height: rectangle.height
      }}
    >
      rectangle
    </div>
  )
}
