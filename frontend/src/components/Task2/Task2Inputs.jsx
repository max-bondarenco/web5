import { useState } from 'react'
import { func } from 'prop-types'

const exampleData = {
    S: 200,
}

const Task2Inputs = ({ setFormData, onSubmit }) => {
    const [defaultData, setDefaultData] = useState({})

    const handleInputChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const setExampleData = () => {
        setDefaultData(exampleData)
        setFormData(exampleData)
    }

    return (
        <div className="inputs">
            <form onSubmit={onSubmit}>
                <h3>Визначити струми КЗ на шинах 10 кВ ГПП</h3>
                <div>
                    <label htmlFor="S">Потужність КЗ, МВ*А:</label>
                    <input
                        defaultValue={defaultData?.S}
                        onChange={handleInputChange}
                        id="S"
                        step="0.01"
                        name="S"
                        required
                        min="0"
                        type="number"
                    />
                </div>
                <button type="button" onClick={setExampleData}>
                    Дані з прикладу
                </button>
                <button>Розрахувати</button>
            </form>
        </div>
    )
}

Task2Inputs.propTypes = {
    setFormData: func,
    onSubmit: func,
}

export default Task2Inputs
