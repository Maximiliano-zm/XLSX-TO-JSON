"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_1 = __importDefault(require("./routes/data"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 3000;
app.get('/ping', (_req, res) => {
    console.log(('test terminal visual'));
    res.send('prueba');
});
app.use('/api/data', data_1.default);
app.listen(PORT, () => {
    console.log(`http://ec2-18-228-196-89.sa-east-1.compute.amazonaws.com:${PORT}/api/data`);
});
