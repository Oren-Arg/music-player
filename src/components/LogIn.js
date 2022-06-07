import React from "react"
import "../components/logIn.css"
export default function LogIn() {

        return (
                <div className="logInBoard">
                        <header className="welcome">
                                <h1>welcome to music player!</h1><br />
                                <h3>please login</h3>
                        </header>
                        <div className="register">
                                <form>
                                        <input type="text" name="fullName" placeholder="enter your name" /><br />
                                        <input type="password" name="password" placeholder="enter your password" /><br />
                                        <label>it is my first time heare:</label><h2>sign in</h2><button>LOG IN</button>

                                </form>


                        </div>
                </div>

        )
}