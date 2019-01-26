/*

──────────────────────────────────────────
──────────────────────────────────────────
LERP
──────────────────────────────────────────
──────────────────────────────────────────

►►►  init → simple lerp (!== OP's algorithm used to prevent the floating-point error)

R.Lerp.init(start, end, multiplier)

►►►  extend → lerp with coordinates change

R.Lerp.extend(nX, n0, n1, start, end)

*/

R.Lerp = {
    init: function (s, e, m) {
        return s * (1 - m) + e * m
    },

    extend: function (nX, n0, n1, s, e) {
        return s + (e - s) / (n1 - n0) * (nX - 1)
    }
}
