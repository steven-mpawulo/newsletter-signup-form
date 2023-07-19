import React from 'react'
import SignUpIllustration from './images/illustration-sign-up-desktop.svg'
import '../styles/news_letter_signup_form.css'

const NewsLetterSignUpForm = () => {
  return (
    <main>
        <div className="container">
        <div className="main-container">
            <div className="first-container">
                <p className='stay-updated-text'>Stay updated!</p>
                <p className='product-managers-text'>Join 60,000 product managers receiving monthly updates on:</p>
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
            <div className="second-container">
                <img src={SignUpIllustration} alt="sign up illustration" />
            </div>
        </div>
        </div>
        
    </main>
  )
}

export default NewsLetterSignUpForm