import { useState } from 'react'
import { func } from 'prop-types'

const exampleData = {
    I: 2.5,
    t: 2.5,
    P: 2000,
    S: 1300,
    T: 4000,
}

const Task1Inputs = ({ setFormData, onSubmit }) => {
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
                <h3>
                    Вибрати кабелі для живлення двотрансформаторної підстанції
                    системи внутрішнього електропостачання підприємства напругою
                    10 кВ
                </h3>
                <div>
                    <label htmlFor="I">Струм КЗ, кА:</label>
                    <input
                        defaultValue={defaultData?.I}
                        onChange={handleInputChange}
                        id="I"
                        step="0.01"
                        name="I"
                        required
                        min="0"
                        type="number"
                    />
                </div>
                <div>
                    <label htmlFor="t">
                        Фіктивний час вимикання струму, с:{' '}
                    </label>
                    <input
                        defaultValue={defaultData?.t}
                        onChange={handleInputChange}
                        id="t"
                        step="0.01"
                        name="t"
                        required
                        min="0"
                        type="number"
                    />
                </div>
                <div>
                    <label htmlFor="P">Потужність ТП, кВ*А: </label>
                    <input
                        defaultValue={defaultData?.P}
                        onChange={handleInputChange}
                        id="P"
                        step="0.01"
                        name="P"
                        required
                        min="0"
                        type="number"
                    />
                </div>
                <div>
                    <label htmlFor="S">Розрахункове навантаження, кВ*А: </label>
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
                <div>
                    <label htmlFor="T">
                        Час використання макс. навантаження, год:{' '}
                    </label>
                    <input
                        defaultValue={defaultData?.T}
                        onChange={handleInputChange}
                        id="T"
                        step="0.01"
                        name="T"
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

Task1Inputs.propTypes = {
    setFormData: func,
    onSubmit: func,
}

export default Task1Inputs
