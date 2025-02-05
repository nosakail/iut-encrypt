# @nosakail/iut-encrypt

Yassine Saddiki password encryption module with support for multiple hashing methods.

## Installation

```bash
npm install @nosakail/iut-encrypt
```

## Usage

```javascript
const Encrypt = require('@nosakail/iut-encrypt');

// Using SHA1 (dedicated methods)
const password = 'mypassword';
const hashedPassword = Encrypt.sha1(password);

// Comparing passwords with SHA1
const isMatch = Encrypt.compareSha1('mypassword', hashedPassword);
console.log(isMatch); // true

// Using other algorithms (extensible approach)
const sha256Hash = Encrypt.hash('sha256', password);
const md5Hash = Encrypt.hash('md5', password);

// Comparing with other algorithms
const isMatchSha256 = Encrypt.compare('sha256', 'mypassword', sha256Hash);
console.log(isMatchSha256); // true
```

## API

### `Encrypt.sha1(password)`
Encrypts a password using SHA1 algorithm.
- `password` (string): The password to encrypt
- Returns: (string) The encrypted password

### `Encrypt.compareSha1(plainTextPassword, hashedPassword)`
Compares a plain text password with a SHA1 hash.
- `plainTextPassword` (string): The password to check
- `hashedPassword` (string): The SHA1 hash to compare against
- Returns: (boolean) True if passwords match, false otherwise

### `Encrypt.hash(algorithm, password)`
Factory method to create a hash using the specified algorithm.
- `algorithm` (string): The hashing algorithm to use (e.g., 'sha1', 'sha256', 'md5')
- `password` (string): The password to hash
- Returns: (string) The hashed password

### `Encrypt.compare(algorithm, plainTextPassword, hashedPassword)`
Compares a plain text password with a hash using the specified algorithm.
- `algorithm` (string): The hashing algorithm to use
- `plainTextPassword` (string): The password to check
- `hashedPassword` (string): The hash to compare against
- Returns: (boolean) True if passwords match, false otherwise

## License

MIT
