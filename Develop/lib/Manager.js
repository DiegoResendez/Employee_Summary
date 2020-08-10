// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Manager extends Employee
{
    constructor(name, id, email, officeNUmber)
    {
        super(name, id, email);
        this.officeNUmber = officeNUmber;
    }
    getRole()
    {
        return "Manager";
    }
    getOfficeNumber()
    {
        return this.officeNUmber;
    }
}

module.exports = Manager;
