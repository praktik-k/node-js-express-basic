export abstract class CustomError extends Error {
    abstract statuseCode: number

    constructor(message: string) {
        super(message)

        Object.setPrototypeOf(this, CustomError.prototype)
    }

    abstract serializeError(): { message: string }
}