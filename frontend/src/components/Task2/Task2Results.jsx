import ResultItem from '../ResultItem'
import { object } from 'prop-types'

const Task2Results = ({ data }) => {
    return (
        <div className="outputs">
            <h3>Результати</h3>
            <ResultItem name="Xt" value={data?.Xt?.toFixed(2)} />
            <ResultItem name="Xc" value={data?.Xc?.toFixed(2)} />
            <ResultItem name="X" value={data?.X?.toFixed(2)} />
            <ResultItem name="I0" value={data?.I0?.toFixed(2)} />
        </div>
    )
}

Task2Results.propTypes = {
    data: object,
}

export default Task2Results
