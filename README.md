# TypeScript Type Error: Type 'string[]' is not assignable to type 'string'

This repository demonstrates a common TypeScript error: attempting to pass an array of strings to a function expecting a single string.  The code and solution illustrate how to correctly handle this type mismatch.  The `bug.ts` file contains the erroneous code, while `bugSolution.ts` shows the corrected version.

## How to reproduce the error:

1. Clone this repository.
2. Compile `bug.ts` using the TypeScript compiler (`tsc bug.ts`).
3. Observe the compilation error message indicating a type mismatch.

## Solution:

The solution involves either modifying the function signature to accept an array or iterating over the array and calling the function for each element. The `bugSolution.ts` file showcases both approaches.