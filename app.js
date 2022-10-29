'use strict';
let CHARTABLE = ['a', 'b', 'c', '?', 'd',
    'e', 'f', 'g', 'h', 'i',
    'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'r', 's', 'š',
    't', 'u', 'v', 'z', 'ž', '_', 0];

let IMPORTANT_MESSAGE = [
    'v', 'n', 'p', 'b', 'm', 'e',
    'g', 'n', 'u', 'l', 'm', 'e',
    'f', 'b', 'p', 'u', 'k', 'z',
    'b', 'h', 'e', 'g', 'n', 'u',
    'l', 'k', 'z', 'b', '?', 'j',
    'e', 'h', 0];

let message = ['p', 'o', 'f', 'u', 'k', 'i', '_', 'm', 'e', 0];



function encrypt(word, x) {
    let cypher = [];
    let encrypted_word = [];
    for (let i in CHARTABLE) {
        cypher[CHARTABLE[i]] = CHARTABLE[(x + i) % 26];
    }
    for (let i in word) {
        encrypted_word.push(cypher[word[i]]);
    }
    return encrypted_word.join("");
}

function decrypt(word, x) {
    let cypher = [];
    let decrypted_word = [];
    for (let i in CHARTABLE) {
        cypher[CHARTABLE[(x + i) % 26]] = CHARTABLE[i];
    }
    for (let i in word) {
        decrypted_word.push(cypher[word[i]]);
    }
    for (let i in decrypted_word) {
        if (decrypted_word[i] == '_') {
            decrypted_word[i] = ' ';
        }
    }
    return decrypted_word.join("");
}



console.log(encrypt(message, 3));
