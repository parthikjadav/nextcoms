import { ReactNode } from "react";
import {
  Dialog,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogContent,
} from "./dialog";


interface ModelProps {
  title: string;
  desc: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Model = ({ title, desc, isOpen, onClose, children }: ModelProps) => {
  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };
  return (
    <Dialog open={isOpen} onOpenChange={onChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{desc}</DialogDescription>
        </DialogHeader>
        <div>
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Model;
