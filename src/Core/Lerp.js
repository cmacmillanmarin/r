/*

──────────────────────────────────────────
──────────────────────────────────────────
LERP
──────────────────────────────────────────
──────────────────────────────────────────

R.Lerp(start, end, multiplier)

*/

R.Lerp = function (s, e, m) {
    return s * (1 - m) + e * m
}
