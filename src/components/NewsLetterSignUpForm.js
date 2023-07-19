
import SignUpIllustration from './images/illustration-sign-up-desktop.svg'
import '../styles/news_letter_signup_form.css'

const NewsLetterSignUpForm = () => {

  return (
    <main>
        <div className="container">
        <div className="main-container">
            <div className="first-container">
                <p className='stay-updated-text'>Stay updated!</p>
                <p className='product-managers-text'>Join 60,000 product managers receiving monthly updates on:{
                
                }</p>
                <ul>
                    <li><span>Product discovery and building what matters</span></li>
                    <li><span>Measuring to ensure updates are a success</span></li>
                    <li><span>And much more!</span></li>
                </ul>
                <div className="email-input">
                    <label htmlFor="email">Email address</label>
                    <br />
                    <input type="email" id='email' name='email' placeholder='mark@company.com' />
                </div>
                <button className='subscribe-button'>Subscribe to monthly newsletter</button>

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