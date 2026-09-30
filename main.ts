import {UserDAO} from "./UserDAO.ts";

const userDAO = new UserDAO();
userDAO.insert('E','nsfg@gmail.com');
userDAO.insert('D','asrfgga@gmail.com');
userDAO.insert('X','khggh@gmail.com');
userDAO.insert('N','iutit@gmail.com');
userDAO.insert('M','ssg24gafj@gmail.com');




const users = userDAO.findAll();
users.forEach(u=>{
    console.log(u.getInfo());
    
});