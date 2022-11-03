
function Main() {
    return (
        <main>
            <div className="message-box">
                <h2>Welcome to NearBee</h2>
                <p>Chat annonymously with people near by! <br></br>Enter the details below to get connected with people near by </p>
                <div className="details-form">
                    <form>
                        <label htmlFor="name">Nick name</label>
                        <input type="text" id="name" name="name" placeholder="Enter your nick name" required></input><br></br>
                        <label htmlFor="location">Location</label>
                        <input type="text" id="location" name="location" placeholder="Enter your location" required></input>
                        <p>Gender</p>
                        <input type="radio" id="male" name="male" value="Male"></input>
                        <label htmlFor="html">Male</label><br></br>
                        <input type="radio" id="female" name="female" value="Female" ></input>
                        <label htmlFor="html">female</label><br></br>
                        <input type="radio" id="trans" name="trans" value="Transgender"></input>
                        <label htmlFor="html">Transgender</label><br></br>
                        <label htmlFor="quantity" >Year of birth:</label>
                        <input type="number" id="quantity" name="quantity" min="1900" max="2100" required></input><br></br>
                        <input type="submit" value="Chat"></input>
                    </form>
                </div>

            </div>
        </main>
    );
}

export default Main;