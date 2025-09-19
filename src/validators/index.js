import { body } from "express-validator"
import { AvailableUserRole } from "../utils/constants.js"

const userRegisterValidator = () => {
    return [
        body("email")
            .trim()
            .notEmpty()
            .withMessage("Email is required")
            .isEmail()
            .withMessage("Email is invalid"),
        body("username")
            .trim()
            .notEmpty()
            .withMessage("username is required")
            .isLowercase()
            .withMessage("Username must be in lower case")
            .isLength({ min: 3 })
            .withMessage("Username must be atleast three characters long"),
        body("password").trim().notEmpty().withMessage("Password is required"),
        body("fullName").optional()
    ]
}

export {
    userRegisterValidator
}