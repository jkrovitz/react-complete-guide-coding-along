import Modal from "react-modal";
import styles from "./Modal.module.css";
import Button from "../UI/Button/Button";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    width: "70%",
    border: "0px",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "transparent",
  },
};

function MyModal(props) {
  function onModalClose(event, data) {
    //let data = {name: 'example', type: 'closed from child'};
    props.onCloseModal(event, data);
  }

  return (
    <div
      onClick={() => {
        onModalClose();
      }}
    >
      <Modal
        isOpen={props.IsModalOpened}
        style={customStyles}
        ariaHideApp={false}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={styles["modal-content"]}
        >
          <div className={styles["modal-header"]}>
            <p className={styles["modal-header-text"]}>Invalid input</p>
          </div>
          <div className={styles["modal-body"]}>
            <p>{props.dynData.body}</p>
            <Button
              type="button"
              onClick={(e) => onModalClose(e, props.dynData.body)}
              name="Okay"
            >
              Okay
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default MyModal;
