'use strict';
let CHARTABLE = ['a', 'b', 'c', '?', 'd',
    'e', 'f', 'g', 'h', 'i',
    'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'r', 's', '�',
    't', 'u', 'v', 'z', '�', '_', 0];

let IMPORTANT_MESSAGE = [
    'v', 'n', 'p', 'b', 'm', 'e',
    'g', 'n', 'u', 'l', 'm', 'e',
    'f', 'b', 'p', 'u', 'k', 'z',
    'b', 'h', 'e', 'g', 'n', 'u',
    'l', 'k', 'z', 'b', '?', 'j',
    'e', 'h', 0];

let inspace = [];
let outspace = [];

for (let i in (CHARTABLE - 1)) {
    inspace[CHARTABLE[i]] = CHARTABLE[i];
    outspace[CHARTABLE[i]] = CHARTABLE[i];
}
inspace["_"] = " ";
outspace[" "] = "_";

function encrypt(word, x) {
    let cypher = [];
    let encrypted_word = [];
    for (let i in CHARTABLE) {
        cypher[CHARTABLE[i]] = CHARTABLE[(x + i) % 26];
    }
    for (let i in word) {
        encrypted_word.push(inspace[cypher[outspace[word[i]]]]);
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
        decrypted_word.push(inspace[cypher[outspace[word[i]]]]);
    }
    return decrypted_word.join("");
}

console.log(decrypt(IMPORTANT_MESSAGE, 22));
