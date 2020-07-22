describe("Sample Tests", () => {
    it("Sample Test #1", () => {
        cy.visit("http://localhost:4200");

        cy.get("#formTitle")
            .should("visible")
            .should("contain", "Registration Form");

        cy.get("label[for='emailAddress']")
            .should("visible")
            .should("contain", "Email address");

        cy.get("input#emailAddress")
            .should("visible")
            .should("have.attr", "type", "email")
            .should("value", "");

        cy.get("label[for='password']")
            .should("visible")
            .should("contain", "Password");

        cy.get("input#password")
            .should("visible")
            .should("have.attr", "type", "password")
            .should("value", "");

        cy.get("label[for='firstName']")
            .should("visible")
            .should("contain", "First name");

        cy.get("input#firstName")
            .should("visible")
            .should("have.attr", "type", "text")
            .should("value", "");

        cy.get("label[for='lastName']")
            .should("visible")
            .should("contain", "Last name");

        cy.get("input#lastName")
            .should("visible")
            .should("have.attr", "type", "text")
            .should("value", "");

        cy.get("legend")
            .contains("Gender")
            .should("visible");

        cy.get("input#male")
            .should("visible")
            .should("have.attr", "name", "gender")
            .should("have.attr", "type", "radio")
            .should("value", "male");

        cy.get("label[for='male']")
            .should("visible")
            .should("contain", "Male");

        cy.get("input#female")
            .should("visible")
            .should("have.attr", "name", "gender")
            .should("have.attr", "type", "radio")
            .should("value", "female");

        cy.get("label[for='female']")
            .should("visible")
            .should("contain", "Female");

        cy.get("label[for='maritalStatus']")
            .should("visible")
            .should("contain", "Marital status");

        cy.get("select#maritalStatus")
            .should("visible")
            .find("option")
            .should("have.length", 4);

        cy.get("select#maritalStatus > option[value='single']")
            .should("visible")
            .should("contain", "Single");

        cy.get("select#maritalStatus > option[value='married']")
            .should("visible")
            .should("contain", "Married");

        cy.get("select#maritalStatus > option[value='divorced']")
            .should("visible")
            .should("contain", "Divorced");

        cy.get("select#maritalStatus > option[value='widowed']")
            .should("visible")
            .should("contain", "Widowed");

        cy.get("label[for='message']")
            .should("visible")
            .should("contain", "Message");

        cy.get("textarea#message")
            .should("visible")
            .should("value", "");

        cy.get("input#agree")
            .should("visible")
            .should("have.attr", "type", "checkbox")
            .should("value", "");

        cy.get("label[for='agree']")
            .should("visible")
            .should("contain", "Agree to terms and conditions");

        cy.get("button#submit")
            .should("visible")
            .should("have.attr", "type", "submit")
            .should("contain", "Submit");
    });
});
