"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserControllers_1 = require("../controllers/UserControllers");
const router = (0, express_1.Router)();
router.get("/", UserControllers_1.getUsers);
exports.default = router;
