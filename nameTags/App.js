// Render the name tags using React!
const App = (props) => {
    let { nameTags } = props;
    console.log(nameTags)
    return (
        nameTags.map(function(name, index){
            return <NameTag key={index} name={name} />
        })
    )
}

// CHALLENGE: Write a separate NameTag component for use in the App component
// TIP: Use props to pass the name to each NameTag component
const NameTag = (props) => <div className="nametag">{props.name}</div>;  