# Unexpected Behavior with Optional Chaining and Nullish Coalescing in TypeScript

This repository demonstrates an uncommon bug in TypeScript related to the interaction between optional chaining (?.) and the nullish coalescing operator (??).  When an optional property is null, and the nullish coalescing operator is used with it, the result can be unexpected.

## Bug Description
The provided TypeScript code showcases a function that greets a user. It uses optional chaining to safely access the `toUpperCase()` method of a potentially null string, and the nullish coalescing operator to provide a default value if the result is nullish.
However, when the input string is null, the output is unexpectedly an empty string instead of the intended default value ('world'). This occurs because the optional chaining operator returns undefined when the property is null, and the nullish coalescing only handles null and undefined in this context.