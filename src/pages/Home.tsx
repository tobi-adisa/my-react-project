
import {Link, useLocation, useNavigate} from 'react-router-dom'

export function handleClick() {
  const navigate = useNavigate()
  const location = useLocation()

  console.log(location.pathname)
  if (location.pathname=='/about'){
    navigate('/');
  }
  else{
    navigate('/about')
  }
 
}

const Home = () => {
  const navigate = useNavigate()

  return (
    <div>
      <p>Home</p>
      <button onClick={handleClick}>About</button>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  )
}

export default Home

