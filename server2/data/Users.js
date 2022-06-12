import bcrypt from 'bcryptjs';

const users =[
    {
        username: "khoa1",
        email: "khoa1@gmail.com",
        password: bcrypt.hashSync("12345",10),
        isAdmin: true
    },
    {
        username: "khoa2",
        email: "khoa2@gmail.com",
        password: bcrypt.hashSync("12345",10),
        isAdmin: false
    }

];

export default(users);