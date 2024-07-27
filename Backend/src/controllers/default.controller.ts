import { Request, Response } from "express";

export const getDefault: (req: Request, res: Response) => void = (req, res) => {
  res.json({ message: "Bienvenido a la prueba de Neaxis. )" });
};
