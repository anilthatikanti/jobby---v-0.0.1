import Header from '../Header'
import './index.css'

const Home = props => {
  const changeToJobsPage = () => {
    const {history} = props
    history.replace('/')
  }

  const homePage = () => (
    <div className="informationContainer">
      <h1>Find The Job That Fits Your Life</h1>
      <p className="homeParagraph ">
        Millions of people are searching for jobs,salary information,company
        reviews.Find the job that fits your abilities and potential.
      </p>
      <button className="homeBtn" type="button" onClick={changeToJobsPage}>
        Find Jobs
      </button>
    </div>
  )

  return (
    <>
      <Header />
      <div className="HomeContainer">{homePage()}</div>
    </>
  )
}
export default Home
