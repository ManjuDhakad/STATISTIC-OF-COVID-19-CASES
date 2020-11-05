import React ,{useState} from 'react';
import { Modal } from 'react-bootstrap';
import styles from './showAccount.module.css';
import SignUp from './SignUp';
import SignIn from './SignIn';

const ShowAccount = () => {
      const [login , setLogin] =useState(true);
      const [show, setShow] = useState(true);


      const handleClose = () => setShow(false);
   
    return (
      <Modal show={show} onHide={handleClose} className ={styles.modal_container} >
        {login ?
          (
          <>
            <Modal.Header closeButton>
              <Modal.Title>SignUp here!</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <SignUp />
            </Modal.Body>

            <Modal.Footer>
              <button variant="primary" onClick = {() => {setLogin(!login)}}>Already have Account</button>
            </Modal.Footer>
          </>
          ):
          (
          <>
            <Modal.Header closeButton>
              <Modal.Title>SignIn here!</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <SignIn />
            </Modal.Body>
          </>
          )
        }
      </Modal>

    );
}

export default ShowAccount;
