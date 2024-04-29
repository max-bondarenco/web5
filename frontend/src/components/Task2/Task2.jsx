import { useState } from 'react'
import Task2Inputs from './Task2Inputs'
import Task2Results from './Task2Results'
import axios from '../../api/axios'

const Task2 = () => {
    const [formData, setFormData] = useState({})
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            setLoading(true)
            const res = await axios.post('/task2', formData)
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
            <Task2Inputs setFormData={setFormData} onSubmit={handleSubmit} />
            <Task2Results data={data} />
        </div>
    )
}

export default Task2
