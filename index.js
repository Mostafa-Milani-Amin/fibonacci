const fibonacci = (n, f = 0, s = 1) => n === 0 ? f : fibonacci(--n, s, f + s);

export default fibonacci;
