// Render the tweets using React!
const App = props => {
  let { tweets } = props
  // console.log(tweets)
  const AllTweets = tweets.map((tweet, idx, _allTweets) => {
      // console.log(idx)
      return <Tweet key={idx} {...tweet} id={idx}/>
  })
  return (
    <div>{AllTweets}</div>
  )
}

const Tweet = (props) => {
  // console.log(props)
  return (
    <div style={{margin: 20}}>
      <User {...props.user} />
      <div>{props.text}</div>
      <hr />
      <Metrics
        likes={props.likes}
        retweets={props.retweets}
        replies={props.replies}
        id={props.id} 
      />
    </div>
  )
} // CHALLENGE: Write a separate Tweet component for use in the App component

const User = props => {
  return (
    <div className='d-flex align-items-center'>
      <img
        width='50'
        src='https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg'
      />
      <div className='mt-4 ml-2'>
        <b>{props.username}</b>
        {props.isVerified && (
          <img style={{ width: 15 }} src='./twitterIcons/check-circle.svg' />
        )}
        <p>{props.username}</p>
      </div>
    </div>
  )
} // CHALLENGE: Write a separate User component for use in the Tweet component

const Metrics = props => {
  const handleDelete = (id) => {
    // console.log(id)
    dispatch({
      type: "DELETE",
      id: id
  });
  };
  // console.log(props)
  return (
    <div className='d-flex text-secondary'>
      <img style={{ opacity: 0.62 }} src='./twitterIcons/message-circle.svg' />
      <b className='mr-3 ml-1'>{props.replies}</b>
      <img style={{ opacity: 0.62 }} src='./twitterIcons/repeat.svg' />
      <b className='mr-3 ml-1'>{props.retweets}</b>
      <img style={{ opacity: 0.62 }} src='./twitterIcons/heart.svg' />
      <b className='mr-3 ml-1'>{props.likes}</b>
      <img style={{ opacity: 0.62, width: 20 }} src='./twitterIcons/garbage.svg' className="delete" onClick={()=>handleDelete(props.id)} />
    </div>
  )
} // CHALLENGE: Write a separate Metrics component for use in the Tweet component (likes, retweets, replies)

// BONUS CHALLENGE - Delete your Tweet component code and rewrite the App component so that it uses User and Metrics directly
