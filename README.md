# Array Flattening Solution

## Install & Run Tests:

`git clone https://github.com/vlad-at-work/theorem-quiz.git`
`cd on-theorem-quiz`
`npm i`
`npm run test`


### Problem & Solution:

Array flattening is an interesting question with two approaches I can think of: recursive and sequential.

Alternatively, the naiive/native `array.flat(Infinity)` would accomplish the task but runtime complexity may easily become murky.

With this particular solution, we'll step through the array item-by-item and flatten it as we go until we have a flat array and `.splice()` is no longer applicable to items returning true for `.isArray()`.

#### Example Output For Solution:

Given: `const initialArray = [1, [2, [3]], [4, 5, [6, [10, 1]]], 7, [8, 9], []];`

`[ 1, 2, [ 3 ], [ 4, 5, [ 6, [ 10, 1 ] ] ], 7, [ 8, 9 ], [] ]`
`...`
`...`
`[ 1, 2, 3, 4, 5, [ 6, [ 10, 1 ] ], 7, [ 8, 9 ], [] ]`
`...`
`...`
`[ 1, 2, 3, 4, 5, 6, 10, 1, 7, 8, 9 ]`

`.splice()` makes a copy of the array in the process of splicing, which is not ideal in terms of space complexity. If the input array is large enough, the (O)n copy may be surprising. If this is an issue, a recursive approach is best.

`Array.isArray()` is available on IE9+ so this seems like a reasonable solution which will work on the vast majority of modern browsers.

Finally, I've added the function `deepFlattenArray()` to a gimmicky module `Utils` as we need to use it for Jest as welll as remain available for import anywhere else in the app. `Utils` seemed as appropriate name as any.

### Tools:

This tidbit was developed in [RunJS](https://runjs.dev/) and subsequent testing was added using VScode for github :)