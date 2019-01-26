/*

──────────────────────────────────────────
──────────────────────────────────────────
IS
──────────────────────────────────────────
──────────────────────────────────────────

const isString = R.Is.str(valueToCheck)
const isObject = R.Is.obj(valueToCheck)

*/

R.Is = {
    str: function (v) {
        return typeof v === 'string'
    },

    obj: function (v) {
        return v === Object(v)
    },

    arr: function (v) {
        return v.constructor === Array
    },

    def: function (v) {
        return v !== undefined
    },

    und: function (v) {
        return v === undefined
    }
}
