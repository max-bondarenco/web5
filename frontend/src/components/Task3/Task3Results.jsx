import ResultItem from '../ResultItem'
import { object } from 'prop-types'

const Task3Results = ({ data }) => {
    return (
        <div className="outputs">
            <h3>Результати</h3>
            <ResultItem name="Xt" value={data?.Xt?.toFixed(2)} />
            <h4>Приведені до напруги 110 кВ</h4>
            <ResultItem name="R" value={data?.R?.toFixed(2)} />
            <ResultItem name="X" value={data?.X?.toFixed(2)} />
            <ResultItem name="Z" value={data?.Z?.toFixed(2)} />
            <ResultItem name="I3" value={data?.I3?.toFixed(2)} />
            <ResultItem name="I2" value={data?.I2?.toFixed(2)} />
            <h4>Дійсні значення</h4>
            <ResultItem name="Rn" value={data?.Rn?.toFixed(2)} />
            <ResultItem name="Xn" value={data?.Xn?.toFixed(2)} />
            <ResultItem name="Zn" value={data?.Zn?.toFixed(2)} />
            <ResultItem name="I3n" value={data?.I3n?.toFixed(2)} />
            <ResultItem name="I2n" value={data?.I2n?.toFixed(2)} />
        </div>
    )
}

Task3Results.propTypes = {
    data: object,
}

export default Task3Results
