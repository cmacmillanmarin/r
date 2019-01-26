# R

A light JavaScript library.

## Installation

    $ yarn add @ariii/r --dev

## Usage

Look at the **src** folder in the github repository for more information

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

Aristide Benoist

[www.aristidebenoist.com](https://www.aristidebenoist.com)

## Licence

MIT License

Copyright (c) 2019 Aristide Benoist

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
