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
          // Requête SQL pour sélectionner l'utilisateur avec le prénom donné
          const queryResult = await this.db.query(
            "SELECT hashedpassword AS hashedPassword FROM users WHERE firstname = ? LIMIT 1",
            [firstname]
          );
    
          // Vérifier si un utilisateur a été trouvé avec le prénom donné
          if (queryResult.length === 0) {
            return null; // Aucun utilisateur trouvé
          }
    
          const user = queryResult[0]; // Premier utilisateur trouvé (nous supposons que les prénoms sont uniques)
        //   console.log(user)
          // Vérifier le mot de passe haché
          const isPasswordValid = await argon2.verify(user.hashedPassword, password);
          console.log(user.hashedPassword)
          if (!isPasswordValid) {
            return null; // Mot de passe incorrect
          }
    
          return user; // Retourner l'utilisateur trouvé
        } catch (error) {
          console.error("Erreur lors de la requête :", error);
          throw error;
        }
      }
}

module.exports = UserModel;