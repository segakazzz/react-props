const initialState = [
    {
        user: {
            handle: "@officialjaden",
            username: "Jaden Smith",
            isVerified: true,
            profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
        },
        text: "The Moment That Truth Is Organized It Becomes A Lie",
        likes: 231,
        retweets: 12,
        replies: 21
    },
    {
        user: {
            handle: "@officialjaden",
            username: "Jaden Smith",
            isVerified: true,
            profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
        },
        text: "How Can Mirrors Be Real If Our Eyes Aren't Real",
        likes: 112,
        retweets: 2,
        replies: 24
    },
    {
        user: {
            handle: "@DigitalCrafts",
            username: "DigitalCrafts Bootcamp",
            isVerified: false,
            profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
        },
        text: "Sign up for our next course plz!",
        likes: 11,
        retweets: 3,
        replies: 144
    }
]
;

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type, method } = action;

    // const reducer = (state = initialState, action) => {
        // Handle actions here - make sure you don't mutate the state!
        // const { type, method } = action;


        if (type == 'SORT') {
            // console.log(method)
            return [...state].sort((a, b) => b[method] - a[method]);
        }

        if (type == 'DELETE') {
            console.log(action.id)
            const newState = [...state].filter(function(tweet, index){
                // console.log(tweet)
                return index !== action.id
            })
            console.log(state, newState)
            return newState;
        }

        return state;
    // }
    
    // return state;
}