import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { db } from '../firebase.config'
import {ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'
function SignUp() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    password:''
  })
  const {name, email, password} = formData

  const navigate = useNavigate()

  const onChange = (e)=>{
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const auth = getAuth()
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user

      updateProfile(auth.currentUser, {
        displayName: name
      })
      navigate('/')
    } catch (error) {
      console.log(db)
    }
  }

  return (
    <div className="pageContainer">
      <header>
        <p className="pageHeader">Welcome Back!</p>
      </header>
      <main>
        <form onSubmit={onSubmit} >
        <input 
            type="text" 
            className="nameInput"
            id="name" 
            value={name}
            onChange={onChange}
            placeholder="Name"
          />

          <input 
            type="email" 
            className="emailInput"
            id="email" 
            value={email}
            onChange={onChange}
            placeholder="Email"
          />

          <div className="passwordInputDiv">
            <input 
              type={showPassword ? 'text' : 'password'} 
              className='passwordInput'
              placeholder="Password"
              id="password"
              value={password}
              onChange={onChange}
            />
            <img 
              src={visibilityIcon} 
              alt="show password" 
              className="showPassword"
              onClick={()=> setShowPassword((prevState) => !prevState)}
            />
          </div>

          <Link to='/forgot-password' className="forgotPassworkLink" >
            Forgot Password
          </Link>

          <div className="singUpBar">
            <p className="signUpText">Sign In</p>
            <button className="signUpButton">
              <ArrowRightIcon fill='#ffffff' width='34px' height='34px' />
            </button>
          </div>

        </form>

        {/* GOOLGE OAUTH */}

        <Link to='/sign-in' className="registerLink" >
          Sign In Instead
        </Link>
      </main>
    </div>
  )
}

export default SignUp