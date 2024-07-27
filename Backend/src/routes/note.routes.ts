import express from "express";
import {
  getNotes,
  postNotes,
  putNote,
  deleteNote,
  getOneNote,
} from "../controllers/note.controller";


const router = express.Router();

router.get("/api/notes/", getNotes);
router.get("/api/notes/note/", getOneNote);
router.post("/api/notes", postNotes);
router.put("/api/notes/:idNote", putNote);
router.delete("/api/notes/:idNote", deleteNote);

export default router;
