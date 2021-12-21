const crypto = require("crypto");

const cryptoModule = {
  encrypt: (password) => {
    return new Promise(async (resolve, reject) => {
      try {
        const salt = (await crypto.randomBytes(64)).toString("base64");
        crypto.pbkdf2(
          password,
          salt.toString(),
          142356,
          64,
          "sha512",
          (err, derivedKey) => {
            if (err) throw err;
            const hashed = derivedKey.toString("base64");
            resolve({ salt, hashed });
          }
        );
      } catch (err) {
        console.log(err);
        reject(err);
      }
    });
  },

  compare: async (password, salt) => {
    return new Promise(async (resolve, reject) => {
      try {
        crypto.pbkdf2(
          password,
          salt,
          142356,
          64,
          "sha512",
          (err, derivedKey) => {
            if (err) throw err;
            const hashed = derivedKey.toString("base64");
            resolve(hashed);
          }
        );
      } catch (err) {
        console.log(err);
        reject(err);
      }
    });
  },
};

module.exports = cryptoModule;
