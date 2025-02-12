'use strict';

const readline = require('readline');
const Encrypt = require('./index');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Fonction pour demander le mot de passe de manière asynchrone
function askPassword(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

// Fonction principale asynchrone
async function main() {
    try {
        // Demande le mot de passe initial
        const password = await askPassword('Entrez un mot de passe : ');
        
        // Encrypt le mot de passe avec SHA1
        const hashedPassword = Encrypt.sha1(password);
        console.log('\nMot de passe encrypté (SHA1):', hashedPassword);
        
        let isMatching = false;
        
        // Boucle jusqu'à ce que le bon mot de passe soit entré
        while (!isMatching) {
            const testPassword = await askPassword('\nEntrez le mot de passe à vérifier : ');
            isMatching = Encrypt.compareSha1(testPassword, hashedPassword);
            
            if (isMatching) {
                console.log('\n✅ Mot de passe correct !');
            } else {
                console.log('\n❌ Mot de passe incorrect. Essayez encore.');
            }
        }
        
        rl.close();
    } catch (error) {
        console.error('Une erreur est survenue:', error);
        rl.close();
    }
}

// Lancer le programme
main();
