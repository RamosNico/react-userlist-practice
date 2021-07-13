import style from "./UserItem.module.css";

const UserItem = (props) => {
    return (
        <li className={style.item}>
            <p>{`${props.name} (${props.age} años)`}</p>
        </li>
    );
};

export default UserItem;
