/*

──────────────────────────────────────────
──────────────────────────────────────────
RANDOM
──────────────────────────────────────────
──────────────────────────────────────────

R.Rand(min, max, precision)

R.Rand(40, 80, 0)

►►►  precision is optional → 3 by default

0 → 1
1 → 0.1
2 → 0.01
3 → 0.001

*/

R.Rand = function (a, z, r) {
    return R.R(Math.random() * (z - a) + a, r)
}
