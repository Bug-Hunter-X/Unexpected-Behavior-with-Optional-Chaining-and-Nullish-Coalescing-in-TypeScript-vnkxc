function greet2(name: string | null): string {
  // Explicitly handle null case before using optional chaining
  const nameToUse = name === null ? 'world' : name;
  return `Hello, ${nameToUse.toUpperCase()}!`;
}

console.log(greet2(null)); // Output: Hello, WORLD!
console.log(greet2("Alice")); // Output: Hello, ALICE!