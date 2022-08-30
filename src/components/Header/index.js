import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const logoutUser = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <div className="HeaderContainer">
      <img
        className="headerLogo"
        src="https://assets.ccbp.in/frontend/react-js/logo-img.png "
        alt="website logo"
      />
      <div>
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/jobs">
          Jobs
        </Link>
      </div>
      <button type="button" className="logoutBtn" onClick={logoutUser}>
        Logout
      </button>
    </div>
  )
}
export default Header
