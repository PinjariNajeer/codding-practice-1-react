const element = (
    <div className="container">
        <h1>Congratulation</h1>
        <div className="sub-container">
            <img 
            src = "https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
            className = "image"
            />
            <h1>Kiran V</h1>
            <p>Vishnu Institute of Computer Education and Technology, Bhimavaram</p>
            <img 
            src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
            className = "image"
            />
        </div>
    </div>
)

ReactDOM.render(element, document.getElementById("root"));