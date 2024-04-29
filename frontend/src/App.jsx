import Layout from './components/Layout'
import Task1 from './components/Task1/Task1'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Task2 from './components/Task2/Task2'
import Task3 from './components/Task3/Task3'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '1', element: <Task1 /> },
            { path: '2', element: <Task2 /> },
            { path: '3', element: <Task3 /> },
        ],
    },
])

const App = () => {
    return <RouterProvider router={router} />
}

export default App
