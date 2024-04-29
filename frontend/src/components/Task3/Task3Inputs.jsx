import { useRef, useState } from 'react'
import { func } from 'prop-types'

const exampleData = {
    minimal: {
        R: 34.88,
        X: 65.68,
    },
    normal: {
        R: 10.65,
        X: 24.02,
    },
}

const Task3Inputs = ({ setFormData, onSubmit }) => {
    const [defaultData, setDefaultData] = useState({})
    const modeRef = useRef(null)

    const handleInputChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const setExampleData = () => {
        setDefaultData(exampleData[modeRef.current.value])
        setFormData(exampleData[modeRef.current.value])
    }

    return (
        <div className="inputs">
            <form onSubmit={onSubmit}>
                <h3>
                    Визначити струми КЗ для підстанції Хмельницьких північних
                    електричних мереж
                </h3>
                <div>
                    <label htmlFor="mode">Режим роботи:</label>
                    <select id="mode" name="mode" ref={modeRef}>
                        <option value="normal">Нормальний</option>
                        <option value="minimal">Мінімальний</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="R">Опір на шинах R, Ом:</label>
                    <input
                        defaultValue={defaultData?.R}
                        onChange={handleInputChange}
                        id="R"
                        step="0.01"
                        name="R"
                        required
                        min="0"
                        type="number"
                    />
                </div>
                <div>
                    <label htmlFor="X">Опір на шинах X, Ом:</label>
                    <input
                        defaultValue={defaultData?.X}
                        onChange={handleInputChange}
                        id="X"
                        step="0.01"
                        name="X"
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

Task3Inputs.propTypes = {
    setFormData: func,
    onSubmit: func,
}

export default Task3Inputs
