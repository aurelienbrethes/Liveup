import './modal.css';

const Modal = ({ children, openModal, hideModal }) => {

  
  return (
    <div
      className="modalBackground"
      role="button"
      aria-hidden="true"

      
      onClick={() => hideModal()}
    >
      <div className={openModal ? 'modalContainer' : 'isHidden'}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
