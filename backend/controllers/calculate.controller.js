import catchAsync from '../utils/catchAsync.js'

//Константи з прикладу
const constants = {
    1: {
        U: 10,
        C: 92,
    },
    2: {
        U: 10.5,
        Uk: 10.5,
        St: 6.3,
    },
    3: {
        Uk: 11.1,
        U: 115,
        Un: 11,
        k: 0.009,
        St: 6.3,
    },
}

export const calculateTask1 = catchAsync(async (req, res, next) => {
    const { I, t, P, S, T } = req.body
    const result = {}

    result.I = S / (Math.sqrt(3) * constants[1].U * 2)
    result.Ipa = result.I * 2
    result.j = T < 3000 ? 1.6 : T < 5000 ? 1.4 : 1.2
    result.s = result.I / result.j
    result.S = (I * 1000 * Math.sqrt(t)) / constants[1].C

    res.status(200).json({ status: 'success', data: result })
})

export const calculateTask2 = catchAsync(async (req, res, next) => {
    const { S } = req.body
    const result = {}

    result.Xc = (constants[2].U * constants[2].U) / S
    result.Xt =
        ((constants[2].Uk / 100) * (constants[2].U * constants[2].U)) /
        constants[2].St
    result.X = result.Xc + result.Xt
    result.I0 = constants[2].U / Math.sqrt(3) / result.X

    res.status(200).json({ status: 'success', data: result })
})

export const calculateTask3 = catchAsync(async (req, res, next) => {
    const { R, X } = req.body
    const result = {}

    result.Xt =
        (constants[3].Uk * constants[3].U * constants[3].U) /
        (constants[3].St * 100)
    result.R = R
    result.X = result.Xt + X
    result.Z = Math.sqrt(result.R * result.R + result.X * result.X)
    result.I3 = (constants[3].U * 1000) / (Math.sqrt(3) * result.Z)
    result.I2 = (result.I3 * Math.sqrt(3)) / 2
    result.Rn = result.R * constants[3].k
    result.Xn = result.X * constants[3].k
    result.Zn = Math.sqrt(result.Rn * result.Rn + result.Xn * result.Xn)
    result.I3n = (constants[3].Un * 1000) / (Math.sqrt(3) * result.Zn)
    result.I2n = (result.I3n * Math.sqrt(3)) / 2

    res.status(200).json({ status: 'success', data: result })
})
