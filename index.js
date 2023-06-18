const crypto = require("crypto");

// Generate a secret key for encryption and decryption.
const secretKey = crypto.randomBytes(32);
console.log('Clé secrete : ' + secretKey)

// Generate an initialization vector
const iv = crypto.randomBytes(16);
console.log('Vecteur d\'initialisation : ' + iv)

// data to be encrypted
const plainText = "This is a secret message";

// create cipher object
const cipher = crypto.createCipheriv("aes-256-cbc", secretKey, iv);

// encrypt the data
let encryptedText = cipher.update(plainText, "utf-8", "hex");
console.log('sans methode final : ' + encryptedText)

// finalize the encryption
encryptedText += cipher.final("hex");

console.log('avec methode final : ' + encryptedText);

// Créer un objet de déchiffrement (decipher)
const decipher = crypto.createDecipheriv("aes-256-cbc", secretKey, iv);

// Déchiffrer le texte
let decryptedText = decipher.update(encryptedText, "hex", "utf-8");
decryptedText += decipher.final("utf-8");

console.log(decryptedText);