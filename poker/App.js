// Render the cards using React!
const App = (props) => {
    let { cards } = props;
    // console.log(cards)
    return (
        cards.map(function(card, index){
            return <Card key={index} card={card} />
        })
    )
}

// CHALLENGE: Write a separate Card component for use in the App component
// TIP: Use props to pass the suit and number to each Card component
const Card = (props) => {
    console.log(props.card)
    const {card} = props
    const src = './cards/' + card.value + card.suit + '.png';
    return <div><img src={src} style={{width: 50}}/></div>
}  