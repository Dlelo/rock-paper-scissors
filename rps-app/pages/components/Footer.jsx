import React, { useState } from "react";
import Modal from "../components/Rules";
import styles from '../../styles/Footer.module.css'

const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <footer className={styles.footer}>

        <button className={styles.rules} onClick={() => setShowModal(true)}>
          Rules
        </button>
        <Modal
          onClose={() => setShowModal(false)}
          show={showModal}
        >
          Hello from the modal!
        </Modal>
      </footer>
      {/* {modal ? <Modal toggle={toggle} /> : null} */}
    </>
  );
};

export default Footer;