import { Outlet } from 'react-router'
import Navigation from './Navigation'

const Layout = () => {
    return (
        <div className="layout">
            <Navigation />
            <Outlet />
        </div>
    )
}

export default Layout
