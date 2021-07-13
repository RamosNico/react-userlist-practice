import ReactDOM from "react-dom";

import style from "./ErrorModal.module.css";
import Button from "./Button";

const Backdrop = (props) => {
    return <div onClick={props.clickHandler} className={style.backdrop}></div>;
};

const ModalOverlay = (props) => {
    return (
        <div className={style.modal}>
            <header className={style.header}>
                <h2>{props.title}</h2>
            </header>
            <main className={style.content}>
                <p>{props.message}</p>
            </main>
            <footer className={style.actions}>
                <Button onClick={props.clickHandler}>Okay</Button>
            </footer>
        </div>
    );
};

const ErrorModal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop clickHandler={props.clickHandler} />,
                document.getElementById("backdrop-root")
            )}
            {ReactDOM.createPortal(
                <ModalOverlay
                    title={props.title}
                    message={props.message}
                    clickHandler={props.clickHandler}
                />,
                document.getElementById("overlay-root")
            )}
        </>
    );
};

export default ErrorModal;
