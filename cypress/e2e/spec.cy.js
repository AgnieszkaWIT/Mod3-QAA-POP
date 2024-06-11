import { Login } from "../pages/Login";
import { HomePage } from "../pages/HomePage";

describe("QAA Page object pattern", () => {

  const loginPage = new Login();
  const homePage = new HomePage();

  it("Login page test", () => {
  
    loginPage.navigate(); 
    loginPage.validateLoginTitle();
    loginPage.validateInputs();
    loginPage.validateLogInButton();
    loginPage.validatePasswordLink();
    loginPage.login("user888@gmail.com", "1234567890");
    homePage.logOut();
  });

  it("Home page test", () => {
    loginPage.navigate();
    loginPage.login("testowyqa@qa.team", "QA!automation-1")
    homePage.validateTitle();
    homePage.validateNavigationMenu();
    homePage.logOut();

  })
});

