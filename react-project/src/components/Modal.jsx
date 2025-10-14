import './Modal.css';
function Modal({children,onClose})
{
  return (
    <>
    <div className="backdrop" onClick={onClose}/>
    <dialog open={true} className='modal'>
    {children}
    </dialog>
    </>
  );
}

export default Modal;