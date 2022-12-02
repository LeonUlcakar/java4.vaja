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
    //return encrypted_word.join("");
    return encrypted_word;
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
    /*
    for (let i in decrypted_word) {
        if (decrypted_word[i] == '_') { 
            decrypted_word[i] = ' ';
        }
    }
    */
    //return decrypted_word.join("");
    return decrypted_word;
}



//console.log(decrypt(IMPORTANT_MESSAGE, 22));
console.log(decrypt(encrypt(message, 3), 3));
console.log(encrypt(message, 3));
console.log(decrypt(IMPORTANT_MESSAGE, 22));
    /*
    
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
    
    let code = "amfora";
    let lenght = 0;
    
    for (let i in CHARTABLE) {
        length = parseInt(i) + 1;
    }
    let _offset = 22;
    
    function encrypt(word, offset) {
        tmp = "";
        for (let i in word) {
            tmp = tmp + crke[(crke.indexOf(word[i]) + offset >= length) ? crke.indexOf(word[i]) + offset - length : crke.indexOf(word[i]) + offset];
        }
        return tmp;
    }
    
    function decrypt(word, offset) {
        tmp = "";
        for (let i in word) {
            tmp = tmp + crke[(crke.indexOf(word[i]) - offset < 0) ? crke.indexOf(word[i]) - offset + length : crke.indexOf(word[i]) - offset];
        }
        return tmp;
    }
    decrypt(IMPORTANT_MESSAGE, 22);
    */
