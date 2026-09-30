import { StudentDAO } from "./StudentDAO.ts";

const studentDAO = new StudentDAO();
studentDAO.insert("674245009",'E',3.75);
studentDAO.insert("612495003",'D',3.70);
studentDAO.insert("632640008",'X',3.40);
studentDAO.insert("675245001",'N',3.20);
studentDAO.insert("695255004",'M',3.65);


const students = studentDAO.findAll();
students.forEach(student => {
    if(student.isHonors() === true ) honor = "เกียรตินิยม";
    else honor = "";
    console.log(`${student.getId()} ${student.getStudentCode()} ${student.getFullName()} ${student.getGpa()}${honor}`);
});