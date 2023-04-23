import React from 'react'
import styled from 'styled-components'

const SignUpPageStyles = styled.div`
  min-height: 100vh;
  padding: 40px;
  .logo {
    margin: 0 auto 20px;
  }
  .heading {
    text-align: center;
    color: ${props => props.theme.primary};
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 40px;
  }
`;
export default function SignUpPage() {
  return (
    <SignUpPageStyles>
    <div className="container">
      <img srcSet="/images/logo.png" alt="" className='logo' />
      <h1 className='heading'>Monkey Blogging</h1>
    </div>
    </SignUpPageStyles>
  )
}
