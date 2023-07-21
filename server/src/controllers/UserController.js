const UserModel = require("../models/UserModel");
const BaseController = require("./BaseController");
const argon2 = require("argon2")


class UserController extends BaseController {

    constructor(req, res) {
        super(req, res);
        this.model = new UserModel();
    }

    async createUser() {
      const { firstname, lastname, mail, hashedPassword } = this.req.body;
      try {
          const result = await this.model.insert({ firstname, lastname, mail, hashedPassword });
          console.log(result);
          return this.res.status(201).send({ id: result.insertId, firstname, lastname, mail, hashedPassword });
      } catch (err) {
          console.error(err);
          return this.res.status(500).send({
              error: err.message,
          });
      }
  }

    async login() {
        const { firstname, password } = this.req.body;
          this.model
          console.log({firstname})

        try {
          // Récupérer l'utilisateur par son firstname depuis la base de données
          const user = await this.model.getBy({ firstname });
    
          // Vérifier si l'utilisateur existe
          if (!user) {
            return this.res.status(401).send({ error: "Invalid firstname or password." });
          }
    
          // Vérifier si le mot de passe correspond au hachage stocké dans la base de données
          const isPasswordValid = await argon2.verify(user.hashedPassword, password);
          if (!isPasswordValid) {
            return this.res.status(401).send({ error: "Invalid firstname or password." });
          }
    
          // Si l'authentification est réussie, renvoyer une réponse réussie
          return this.res.status(200).send({ message: "Authentication successful!" });
        } catch (error) {
          console.error("Error during login:", error);
          return this.res.status(500).send({ error: "An error occurred during login." });
        }
      }
    }


module.exports = UserController