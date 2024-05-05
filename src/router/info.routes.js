const { Router, request } = require("express");
const router = Router();
const {
    gradesonly,
    finalGrade,
    fortheyearoneterm
} = require("../controllers/info.controllers")




router.post("/gradesonly", gradesonly);
router.post("/finalgrade", finalGrade);
router.post("/fortheyearoneterm", fortheyearoneterm)


module.exports = router;