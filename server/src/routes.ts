import express from 'express';
import { NodemailMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';
import { SubmitFeedbackFunction } from './functions/submit-feedback-function';
import { PrismaFeedbackRepository } from './repositories/prisma/prisma-feedbacks-repository';

export const routes = express.Router()

routes.post('/feedbacks', async (req, res) => {
    const { type, comment, screenshot } = req.body;

    try {
        const prismaFeedbackRepository = new PrismaFeedbackRepository()
        const nodemailerMailAdapter = new NodemailMailAdapter()
    
        const submitFeedbackFunction = new SubmitFeedbackFunction(
            prismaFeedbackRepository,
            nodemailerMailAdapter
        );
    
        await submitFeedbackFunction.execute({
            type,
            comment,
            screenshot,
        });

        return res.status(201).send();
    } catch (err) {

        return res.status(500).send();
    }
});