/*

──────────────────────────────────────────
──────────────────────────────────────────
BIND MAKER
──────────────────────────────────────────
──────────────────────────────────────────

R.BM(this, ['bindFunction1', 'bindFunction2', 'bindFunction3'])

*/

R.BM = function (c, a) {
    var arrL = a.length

    for (var i = 0; i < arrL; i++) {
        c[a[i]] = c[a[i]].bind(c)
    }
}
