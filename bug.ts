function greet(name: string | null): string {
  if (name === null) {
    return "Hello, world!";
  }
  return `Hello, ${name}!`;
}

console.log(greet(null)); // Output: Hello, world!
console.log(greet("Alice")); // Output: Hello, Alice!

// Uncommon bug: Unexpected behavior when using optional chaining with nullish coalescing
function greet2(name: string | null): string {
  return `Hello, ${name?.toUpperCase() ?? 'world'}!`;
}

console.log(greet2(null)); // Output: Hello, !
// Expected output: Hello, world!