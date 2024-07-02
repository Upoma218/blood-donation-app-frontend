import { ReactNode } from "react";

interface DBModalProps {
  id: string;
  title: string;
  content: ReactNode;
  showModalButtonLabel: string;
  onClose?: () => void;
}

const DBModal: React.FC<DBModalProps> = ({
  id,
  title,
  content,
  showModalButtonLabel,
  onClose,
}) => {
  const openModal = () => {
    const modal = document.getElementById(id) as HTMLDialogElement;
    modal?.showModal();
  };

  const closeModal = () => {
    const modal = document.getElementById(id) as HTMLDialogElement;
    modal?.close();
    if (onClose) onClose();
  };

  return (
    <>
      <button onClick={openModal}>{showModalButtonLabel}</button>
      <dialog id={id} className="modal modal-bottom sm:modal-middle w-full">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <div className="py-4">{content}</div>
          <div className="modal-action">
            <button className="btn" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default DBModal;
