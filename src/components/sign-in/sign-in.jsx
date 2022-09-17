import React from "react";
import content from "../../static/data";
import { Link } from 'react-router-dom'

const SignIn = () => {
    return(
        <div className="sign-in">
            <h2>Already have an account?</h2>
            <h3>Sign in here!</h3>
            <form>
                {content.inputs.map((input, key) => {
                    return(
                        <div key={key}>
                            <label htmlFor={input.name}>{input.label}</label>
                            <input type={input.type} name={input.name} placeholder={input.placeholder} />
                        </div>
                    )
                })}
                <button type="submit">Submit</button>
            </form>
    <p>Do'nt have an account? <Link to="/signup">Sign Up</Link></p>
    <p><Link to="/">Back to Home</Link></p>
        </div>
    )
}
export default SignIn;