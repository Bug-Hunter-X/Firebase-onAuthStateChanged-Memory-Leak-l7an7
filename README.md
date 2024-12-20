# Firebase onAuthStateChanged Memory Leak

This repository demonstrates a common error when using Firebase's `onAuthStateChanged` listener: forgetting to unsubscribe.  This can lead to memory leaks and performance issues.

## The Bug
The `onAuthStateChanged` listener attaches itself to the authentication state.  If you don't unsubscribe when you no longer need it (e.g., when the component unmounts), the listener remains active, consuming resources.

The `authBug.js` file contains the buggy code.  Notice that the `unsubscribe()` function is never called.

## The Solution
The solution involves calling the `unsubscribe()` function when it's no longer needed.  The `authSolution.js` file demonstrates this fix.

## How to reproduce the bug
1. Clone this repository
2. Run the buggy code in `authBug.js`. Observe how the listener keeps firing even after the expected condition.