import { pool } from "../config/database/db";
import message from "../config/message";

export const createTask = async (req, res) => {
    try {
        const name = req.body.name;
        const result = await pool.query(`INSERT INTO users (name) VALUES ('${name}')`);
        res.json(result);
    } catch (error) {
        message(error.message, "danger");
        res.status(500);
    }
}

export const findAllTasks = async (req, res) => {
    try {
        const [rows] = await pool.query(`SELECT * FROM users`);
        res.json(rows);
    } catch (error) {
        message(error.message, "danger");
        res.status(500);
    }
}

export const findOneTask = async (req, res) => {
    try {
        const id = req.params.id;
        const [result] = await pool.query(`SELECT id, name FROM users WHERE id = ${id}`);
        res.send(result[0]);
    } catch (error) {
        message(error.message, "danger");
        res.status(500);
    }
}

export const pingTask = async (req, res) => {
    try {
        const [result] = await pool.query(`SELECT "hello world" as RESULT`);
        res.send(result[0]);
    } catch (error) {
        message(error.message, "danger");
        res.status(500);
    }
}

export const updateTask = async (req, res) => {
    try {
        const id = req.params.id;
        const name = req.body.name;
        const result = await pool.query(`UPDATE users SET name = ('${name}') WHERE id = ${id}`);
        res.send(result);
    } catch (error) {
        message(error.message, "danger");
        res.status(500);
    }
}

export const deleteTask = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await pool.query(`DELETE FROM users WHERE id = ${id}`);
        res.send(result);
    } catch (error) {
        message(error.message, "danger");
        res.status(500);
    }
}

