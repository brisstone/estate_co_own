import React from "react";
import styles from "./Modal.module.scss";
import { RiCloseLine } from "react-icons/ri";
import Checked from "../../assets/checked.png";
import AppButton from "../Button/AppButton";
import useAppDownloader from '../../hooks/useAppDownloader'

const Modal = ({ setIsOpen }) => {
  const { download } = useAppDownloader()
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          {/* <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Dialog</h5>
          </div> */}
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          {/* <div className={styles.modalContent}>
            Are you sure you want to delete the item?
          </div> */}
          <div className={styles.logoImg}>
            <img src={Checked} alt={Checked} style={{width:'100%', height:"100%"}} />
          </div>
          <div className={styles.contentText}>
            Congratulations! Your account has been succesfully created. Click
            below to download the fragvest app from app store
          </div>
          {/* <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button className={styles.deleteBtn} onClick={() => setIsOpen(false)}>
                Delete
              </button>
              <button
                className={styles.cancelBtn}
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div> */}
          <div className={styles.appButton} >
            <AppButton
              className={styles.appButtonEle}
              style={{
                // height: "56px",
                // fontSize: "18px",
                width: "100%",
                //   marginTop: "106px",
              }}
              
              onClick={() => {setIsOpen(false); download() }}
            >
              Get App
            </AppButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
