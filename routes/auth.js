const router = require("express").Router();
const { User } = require("../models/user");
const joi = require("joi");

router.post("/", async (req, res) => {
  try {
  } catch (error) {}

  const validate = (data)=>{
    const schema = joi.object({
        email:joi.string().email().required().label("Email"),
        password:joi.string().required()
    })
  }
});
