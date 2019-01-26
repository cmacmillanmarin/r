# R<br/>[![license](https://img.shields.io/github/license/ariiiman/r.svg)](https://github.com/ariiiman/r/blob/master/LICENSE) [![minified size](https://img.shields.io/github/size/ariiiman/r/index.js.svg?label=minified%20size)](https://github.com/ariiiman/r/blob/master/index.js) [![npm version](https://img.shields.io/npm/v/@ariii/r.svg)](https://www.npmjs.com/package/@ariii/r)

A light JavaScript library.

## Installation

    $ yarn add @ariii/r --dev

## Usage

Look at the [src](https://github.com/ariiiman/r/tree/master/src) folder for more information.

### Import

    import R from '@ariii/r'

### Return the body node of the document

    const body = R.Dom.body

### Add scroll event listener

    R.L(element, 'a', 'click', callback)

### Check if a variable is an object

    const isObj = R.Is.obj(variable)

### Play animations with Merom

    const animation = new R.M({el: '#id', p: {x: [0, 600, 'px']}, d: 2000, e: 'io4'})
    animation.play()

    animation.play({p: {x: {newEnd: 50}}, reverse: true})

### Build sequences of Merom with Timeline

    const tl = new R.TL()
    tl.from({el: '#id0', p: {x: [0, 600, 'px'], rotate: [0, 360]}, d: 300, e: 'i3', delay: 300})
    tl.from({el: '#id1', p: {x: [0, 600, 'px'], rotate: [0, 360]}, d: 500, e: 'o6', cb: myCallback})

    tl.play()

    tl.pause()

## Author

[Aristide Benoist](https://www.aristidebenoist.com)

## License

[MIT](https://github.com/ariiiman/r/blob/master/LICENSE)

Copyright (c) 2019-present, Aristide Benoist.
