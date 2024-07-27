"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import statements with types
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
/////  IMPORTING ROUTES  ////
const default_routes_1 = __importDefault(require("./routes/default.routes"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const note_routes_1 = __importDefault(require("./routes/note.routes"));
const app = (0, express_1.default)(); // Type inference for app (express.Application)
/////  MIDDLEWARES /////
// Middlewares with type annotations
app.use((0, cors_1.default)({
    credentials: true,
    origin: ["http://localhost:8081"],
}));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json()); // Type inference for request body parsing
app.use(express_1.default.urlencoded({ extended: true })); // Type inference for form data parsing
// Route usage with type annotations
app.use(default_routes_1.default);
app.use(auth_routes_1.default);
app.use(note_routes_1.default);
// Error handler with type annotations
// En caso de que no se encuentre
app.use((req, res) => {
    res.status(404).send("No se encontro esta pagina");
});
exports.default = app;
