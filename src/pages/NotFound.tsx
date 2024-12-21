import { useNavigate } from "react-router-dom"

function NotFound() {

  const navigate = useNavigate();

  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <h3>Oops! This page doesn't exist.
        <span>
          <a onClick={() => navigate("/")} className="body-link"> Click here </a>
          </span>
        to go back.
      </h3>
    </div>
  )
}

export default NotFound