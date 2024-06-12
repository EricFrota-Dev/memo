export interface ModalProps {
  onClose: () => void;
}

function Modal({ children }: React.PropsWithChildren<ModalProps>) {
  return (
    <div
      className={`bg-zinc-800 rounded-xl shadow p-6 transition-all max-w-mid scale-100 opacity-100`}
      onClick={(e) => e.stopPropagation()}>
      <div className="gap-4 flex-col flex items-center">{children}</div>
    </div>
  );
}

export default Modal;
