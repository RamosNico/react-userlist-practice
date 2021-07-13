import { useState } from "react";

import style from "./App.module.css";
import UserInput from "./UserInput/UserInput";
import UsersList from "./UsersList/UsersList";

const App = () => {
    const [users, setUsers] = useState([]);

    const userAddHandler = (newUser) => {
        setUsers((prevUsers) => {
            return [...prevUsers, newUser];
        });

        console.log(users);
    };

    return (
        <div className={style.app}>
            <UserInput onAddUser={userAddHandler} />
            <UsersList users={users} />
        </div>
    );
};

export default App;
