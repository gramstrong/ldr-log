const validate = {
    date: value => !Number.isNaN(Date.parse(value)),
    number: value => (value % 1 === 0 && value > -1),
    effort: value => ({EASY: 1, MEDIUM: 1, HARD: 1}[value.toUpper()]),
    notes: value => (typeof value === 'string' && value.length < 500)
}

export default validate;