import React, {
  ComponentType,
  ReactNode,
  forwardRef,
  memo,
  useEffect,
} from "react";

// default: create modal with <div>
interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements | ComponentType<any>;
  closeModal?: (fn: any) => boolean;
}

const Modal = memo(
  forwardRef<HTMLDivElement, Props>((props, ref) => {
    const { children, className, as, ...rest } = props;
    const Tag = as ?? "div";

    return (
      <Tag className={className} ref={ref} {...rest}>
        {children}
      </Tag>
    );
  })
);

Modal.displayName = "Modal";
export default Modal;
