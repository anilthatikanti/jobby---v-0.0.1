import Header from '../Header'
import './index.css'

const NotFound = () => (
  <div className="notFound">
    <Header />
    <div className="failurePage">
      <div className="failedImage">
        <img
          src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
          alt="failure view"
        />
      </div>
    </div>
  </div>
)
export default NotFound
