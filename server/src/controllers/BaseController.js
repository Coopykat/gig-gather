class BaseController {

    req;
    res;
    model;

    constructor(req, res) {
        this.req = req;
        this.res = res;
    }

    getAll() {
        this.model.getAll()
            .then(([results]) => this.sendJson(results))
    }

    getById() {
       const id = this.model.getById(this.req.params.id)
            .then(([results]) => this.sendJson(results))
    }

    sendJson(data) {
        this.res.status(200).json(data)
    }
}

module.exports = BaseController;