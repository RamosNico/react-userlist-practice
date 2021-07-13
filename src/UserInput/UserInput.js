import style from "./UserInput.module.css";
import { useState, useRef } from "react";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const UserInput = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState();

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredUsername = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;
        if (
            enteredUsername.trim().length === 0 ||
            enteredUserAge.trim().length === 0
        ) {
            setError({
                title: "Datos inválidos.",
                message:
                    "Por favor introduzca un nombre y edad válidos (rellene las casillas).",
            });
            return;
        } else if (+enteredUserAge < 1) {
            //? El + en enteredAge es para convertirlo a número
            setError({
                title: "Edad inválida.",
                message: "Por favor introduzca una edad válida (mayor a 0).",
            });
            return;
        }

        const newUser = {
            name: enteredUsername,
            age: enteredUserAge,
            id: Math.random(),
        };

        props.onAddUser(newUser);
        nameInputRef.current.value = "";
        ageInputRef.current.value = "";
    };

    const closeModal = () => {
        setError(null);
    };

    return (
        <>
            {error && (
                <ErrorModal
                    clickHandler={closeModal}
                    title={error.title}
                    message={error.message}
                />
            )}
            <div className={style.form}>
                <form onSubmit={submitHandler}>
                    <div className={style.input}>
                        <label htmlFor="username">Nombre de Usuario</label>
                        <input id="username" type="text" ref={nameInputRef} />
                    </div>
                    <div className={style.input}>
                        <label htmlFor="age">Edad</label>
                        <input
                            id="age"
                            type="text"
                            className="input"
                            ref={ageInputRef}
                        />
                    </div>
                    <Button type="submit">Agregar Usuario</Button>
                </form>
            </div>
        </>
    );
};

export default UserInput;
