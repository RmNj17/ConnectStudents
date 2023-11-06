import React, { useState, useEffect } from 'react';
import './../../styles/login.css';
import mainlogo from './../../assets/Mainlogo.png';

const Login = () =>
{
  const [ typingText, setTypingText ] = useState( '' );
  const paragraphs = [
    'Connecting Minds, Empowering Education',
    'Empowering Education through Digital Dialogue',
    'Revolutionizing Education with Interactive Discussions',
  ];
  const [ currentParagraphIndex, setCurrentParagraphIndex ] = useState( 0 );
  useEffect( () =>
  {
    const currentParagraph = paragraphs[ currentParagraphIndex ];
    let currentText = '';
    let currentIndex = 0;

    const intervalId = setInterval( () =>
    {
      if ( currentIndex < currentParagraph.length )
      {
        currentText += currentParagraph[ currentIndex ];
        setTypingText( currentText );
        currentIndex++;
      } else
      {
        clearInterval( intervalId );

        setTimeout( () =>
        {
          clearText();
        }, 1000 );
      }
    }, 100 );

    return () => clearInterval( intervalId );
    //eslint-disable-next-line
  }, [ currentParagraphIndex ] ); 
  const clearText = () =>
  {
    setTimeout( () =>
    {
      let currentText = typingText;
      const intervalId = setInterval( () =>
      {
        if ( currentText.length > 0 )
        {
          currentText = currentText.slice( 0, -1 );
          setTypingText( currentText );
        } else
        {
          clearInterval( intervalId );
          setCurrentParagraphIndex( ( prevIndex ) => ( prevIndex + 1 ) % paragraphs.length );
        }
      }, 50 );
    }, 1000 );
  };

  return (
    <div className="container bg-balls">
      <div className="form-container">
        <p className="title">Welcome back</p>
        <form className="form">
          <input type="email" className="input" placeholder="Email" />
          <input type="password" className="input" placeholder="Password" />
          <p className="page-link">
            <span className="page-link-label">Forgot Password?</span>
          </p>
          <button className="form-btn">Log in</button>
        </form>
        <p className="sign-up-label">
          Don't have an account?<span className="sign-up-link">Sign up</span>
        </p>
        <div className="buttons-container">
          <div className="apple-login-button">
            <span>As Student</span>
          </div>
          <div className="google-login-button">
            <span>As Teacher</span>
          </div>
        </div>
      </div>
      <div className="logo-container">
        <img src={ mainlogo } width={ 420 } alt="connect_student_logo" />
        <p>{ typingText }</p>
      </div>
    </div>
  );
};


export default Login;
