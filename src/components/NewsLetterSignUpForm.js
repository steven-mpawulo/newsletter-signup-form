import React from 'react'

const NewsLetterSignUpForm = () => {
  return (
    <main>
        <div className="main-container">
            <div className="first-container">
                <p>Stay Updated!</p>
                <p>Join 60,000 product managers receiving monthly updates on:</p>
                <ul>
                    <li>Product discovery and building what matters</li>
                    <li>Measuring to ensure updates are a success</li>
                    <li>And much more!</li>
                </ul>
                <div className="email-input">
                    <label htmlFor="email">Email address</label>
                    <input type="email" id='email' name='email' />
                </div>
                <button className='subscribe'>Subscribe to monthly newsletter</button>

            </div>
            <div className="second-container"></div>
        </div>
    </main>
  )
}

export default NewsLetterSignUpForm