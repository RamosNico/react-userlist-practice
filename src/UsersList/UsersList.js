import style from "./UsersList.module.css";
import UserItem from "../UserItem/UserItem";

const UsersList = ({ users }) =>
    users &&
    users.length > 0 && (
        <ul className={style.list}>
            {users.map((user) => (
                <UserItem key={user.id} name={user.name} age={user.age} />
            ))}
        </ul>
    );

export default UsersList;
