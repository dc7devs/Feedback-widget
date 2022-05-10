import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbacksRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedBackFunctionRequest {
    type: string;
    comment: string;
    screenshot?: string;
}

export class SubmitFeedbackFunction {
    constructor(
        private feedbackRepository: FeedbacksRepository,
        private mailAdapter: MailAdapter
    ) {}
    async execute(request: SubmitFeedBackFunctionRequest) {
        const { type, comment, screenshot } = request;

        if(!type) {
            throw new Error('Type is required.');
        }

        if(!comment) {
            throw new Error('Type is required.');
        }

        if(screenshot && !screenshot.startsWith("data:image/png;base64")) {
            throw new Error("Invalid screenshot format."); 
        }

        await this.feedbackRepository.create({
            type: type,
            comment: comment,
            screenshot: screenshot,
        })

        await this.mailAdapter.sendMail({
            subject: 'Novo feedback',
            body: [
                `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
                `<p>Tipo do feedback: ${type}</p>`,
                `<p>Comentário: ${comment}</p>`,
                screenshot ? `<img src="${screenshot}" style="position: relative; width: 100%; heigth: 100%;" />` : ``,
                `</div>`,
            ].join('\n'),
        });
    }
}