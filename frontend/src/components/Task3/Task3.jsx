import { useState } from 'react'
import Task3Inputs from './Task3Inputs'
import Task3Results from './Task3Results'
import axios from '../../api/axios'

const Task3 = () => {
    const [formData, setFormData] = useState({})
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            setLoading(true)
            const res = await axios.post('/task3', formData)
            setData(res.data.data)
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }

    if (loading) return <div>Завантаження...</div>

    return (
        <div className="app">
            <Task3Inputs setFormData={setFormData} onSubmit={handleSubmit} />
            <Task3Results data={data} />
        </div>
    )
}

export default Task3
