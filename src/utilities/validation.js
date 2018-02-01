const validate = {

    date(value) {
        return !Number.isNaN(Date.parse(value)) || console.error("Invalid date supplied.");
    },

    number(value) {
        return (value % 1 === 0 && value > -1) || console.error("Invalid number supplied.");
    },

    effort(value) {
        return {EASY: 1, MEDIUM: 1, HARD: 1}[value.toUpper()] || console.error("Invalid effort supplied.");
    },

    notes(value) {
        return (typeof value === 'string' && value.length < 500) || console.error("Invalid notes supplied.");
    }
}

export default validate;