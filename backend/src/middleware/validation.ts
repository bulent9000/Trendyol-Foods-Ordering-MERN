import { body, validationResult } from "express-validator";
import {Request,Response,NextFunction} from "express";

const handleValidationErrors=async (req:Request, res:Response,next:NextFunction)=>{
const errors=validationResult(req);
if(!errors.isEmpty()){
    return res.status(400).json({errors: errors.array()});
}
next();
}

export const validateMyUserRequest=[
    body("name").isString().notEmpty().withMessage("Name must be a string"),
    body("addressLine1").isString().notEmpty().withMessage("Address must be a string"),
    body("city").isString().notEmpty().withMessage("City must be a string"),
    body("country").isString().notEmpty().withMessage("Country must be a string"),
    handleValidationErrors, 
];

export const validateMyRestaurantRequest=[
    body("restaurantName").notEmpty().withMessage("Restaurant Name is required"),
    body("city").notEmpty().withMessage("City name is required"),
    body("country").notEmpty().withMessage("Country is required"),
    body("deliveryPrice").isFloat({min:0}).withMessage("Delivery Price must be a positive number"),
    body("estimatedDeliveryTime").isInt({min:0}).withMessage("Must be a positive integer"),
    body("cuisines").isArray().withMessage("Cuisines must be an array").not().isEmpty().withMessage("Cuisines array can not be empty"),
    body("menuItems").isArray().withMessage("Menu items must be an array"),
    body("menuItems.*.name").notEmpty().withMessage("Menu item name is required"),
    body("menuItems.*.price").isFloat({min:0}).withMessage("Price required and must be a positive number"),
    handleValidationErrors,

];