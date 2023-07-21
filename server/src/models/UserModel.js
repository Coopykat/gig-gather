const BaseModel = require("./BaseModel");
const argon2 = require("argon2")

class UserModel extends BaseModel {

    constructor() {
        super('users')
    }

    async insert(userData) {
        return this.db.query('INSERT INTO users (firstname, lastname, mail, hashedpassword) VALUES (?, ?, ?, ?)', [userData.firstname, userData.lastname, userData.mail, userData.hashedPassword]);
    }
    async getBy(userData) {
        const { firstname, password } = userData;
    
        try {
          const queryResult = await this.db.query(
            "SELECT hashedpassword AS hashedPassword FROM users WHERE firstname = ? LIMIT 1",
            [firstname]
          );
          if (queryResult.length === 0) {
            return null; 
          }
    
          const user = queryResult[0]; 
          const isPasswordValid = await argon2.verify(user.hashedPassword, password);
          console.log(user.hashedPassword)
          if (!isPasswordValid) {
            return null; 
          }
    
          return user; 
        } catch (error) {
          console.error("Erreur lors de la requête :", error);
          throw error;
        }
      }
}

module.exports = UserModel;