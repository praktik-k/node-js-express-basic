import { CustomError } from "./custom-error";

export class BadRequestError extends CustomError {
    statuseCode = 400

    constructor(message = 'bad request custom') {
        super(message)
        this.message = message

        Object.setPrototypeOf(this, BadRequestError.prototype)
    }

    serializeError(): { message: string; } {
        return { message: this.message }
    }
}