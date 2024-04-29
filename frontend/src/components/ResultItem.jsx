import { string } from 'prop-types'

const nameMapping = {
    I: 'Розрахунковий струм, А',
    Ipa: 'Розрахунковий струм (післяаварійний), А',
    j: 'Економічна густина струму, А/мм^2',
    s: 'Економічний переріз, мм^2',
    S: 'Фактичний переріз, мм^2',
    I0: 'Початковий стурм трифазного КЗ, кА',
    Xc: 'Опір схеми, Ом',
    Xt: 'Опір трансформатора, Ом',
    X: 'Загальний опір, Ом',
    R: 'Опір шини, Ом',
    Z: 'Середній опір, Ом',
    I2: 'Стурм двофазного КЗ, А',
    I3: 'Стурм трифазного КЗ, А',
    Xn: 'Загальний опір, Ом',
    Rn: 'Опір шини, Ом',
    Zn: 'Середній опір, Ом',
    I2n: 'Стурм двофазного КЗ, А',
    I3n: 'Стурм трифазного КЗ, А',
}

const ResultItem = ({ name, value }) => {
    return (
        <div className="output">
            <label htmlFor={`${name}`}>{nameMapping[name]}:</label>
            <input defaultValue={value} disabled id={`${name}`} />
        </div>
    )
}

ResultItem.propTypes = {
    name: string,
    value: string,
}

export default ResultItem
