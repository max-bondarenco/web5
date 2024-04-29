import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <div className="navigation">
            <Link to="/1">Task1</Link>
            <Link to="/2">Task2</Link>
            <Link to="/3">Task3</Link>
        </div>
    )
}

export default Navigation
