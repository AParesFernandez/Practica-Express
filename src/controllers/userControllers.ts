import { Request, Response } from "express";
import User from "../models/userModel"

export const createUser = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { nombre, apellido } = req.body;
    try {
        const user = await User.create({ nombre, apellido });
        res.status(201).json(user);
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
};
