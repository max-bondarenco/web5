import ResultItem from '../ResultItem'
import { object } from 'prop-types'

const Task1Results = ({ data }) => {
    return (
        <div className="outputs">
            <h3>Результати</h3>
            <ResultItem name="I" value={data?.I?.toFixed(2)} />
            <ResultItem name="Ipa" value={data?.Ipa?.toFixed(2)} />
            <ResultItem name="j" value={data?.j?.toFixed(2)} />
            <ResultItem name="s" value={data?.s?.toFixed(2)} />
            <ResultItem name="S" value={data?.S?.toFixed(2)} />
        </div>
    )
}

Task1Results.propTypes = {
    data: object,
}

export default Task1Results
