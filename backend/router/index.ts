import express from "express";
import UserController from "../controllers/user";
import CompanieController from "../controllers/companie";
import authentication from "../middlewares/authentication";
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ message: "Company Revenue" });
});
router.post("/login", UserController.login);
router.get("/companies", authentication, CompanieController.getAllCompanies);
router.get("/company/:id", authentication, CompanieController.getCompanyById);
router.get("/company", authentication, CompanieController.searchCompany);

export { router };
