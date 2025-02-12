'use strict';

const crypto = require('crypto');

class Encrypt {
    /**
     * Encrypts a password using SHA1
     * @param {string} password - The password to encrypt
     * @returns {string} - The encrypted password
     */
    static sha1(password) {
        return crypto.createHash('sha1')
                    .update(password)
                    .digest('hex');
    }

    /**
     * Compares a plain text password with a SHA1 hash
     * @param {string} plainTextPassword - The password to check
     * @param {string} hashedPassword - The SHA1 hash to compare against
     * @returns {boolean} - True if passwords match, false otherwise
     */
    static compareSha1(plainTextPassword, hashedPassword) {
        const hashedInput = this.sha1(plainTextPassword);
        return hashedInput === hashedPassword;
    }

    /**
     * Factory method to create a hash using the specified algorithm
     * @param {string} algorithm - The hashing algorithm to use (e.g., 'sha1', 'sha256', 'md5')
     * @param {string} password - The password to hash
     * @returns {string} - The hashed password
     */
    static hash(algorithm, password) {
        return crypto.createHash(algorithm)
                    .update(password)
                    .digest('hex');
    }

    /**
     * Compares a plain text password with a hash using the specified algorithm
     * @param {string} algorithm - The hashing algorithm to use
     * @param {string} plainTextPassword - The password to check
     * @param {string} hashedPassword - The hash to compare against
     * @returns {boolean} - True if passwords match, false otherwise
     */
    static compare(algorithm, plainTextPassword, hashedPassword) {
        const hashedInput = this.hash(algorithm, plainTextPassword);
        return hashedInput === hashedPassword;
    }
}

module.exports = Encrypt;
