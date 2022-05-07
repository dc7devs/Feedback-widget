import express from 'express';
import nodemailer from 'nodemailer';
import { NodemailMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';
import { SubmitFeedBackFunction } from './functions/submit-feedback-function';
import { PrismaFeedbackRepository } from './repositories/prisma/prisma-feedbacks-repository';

export const routes = express.Router()

routes.post('/feedbacks', async (req, res) => {
    const { type, comment, screenshot } = req.body;

    const prismaFeedbackRepository = new PrismaFeedbackRepository()
    const nodemailerMailAdapter = new NodemailMailAdapter()

    const submitFeedBackFunction = new SubmitFeedBackFunction(
        prismaFeedbackRepository,
        nodemailerMailAdapter
    );

    await submitFeedBackFunction.execute({
        type,
        comment,
        screenshot,
    });


    return res.status(201).send();
});