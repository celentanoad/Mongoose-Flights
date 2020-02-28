var express = require('express');
var router = express.Router();
const ticketsCtrl = require("../controllers/tickets");


router.get("/flights/:id/tickets/new", ticketsCtrl.new);
router.post("/tickets/:id", ticketsCtrl.create);

module.exports = router;
