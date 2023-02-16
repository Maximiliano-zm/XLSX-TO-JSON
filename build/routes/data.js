"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dataServices_1 = __importDefault(require("../services/dataServices"));
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    // res.send()
    res.send(dataServices_1.default);
});
exports.default = router;
