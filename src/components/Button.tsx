import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
  PropsWithChildren,
} from "react";

const Button: FC<
  PropsWithChildren &
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="w-full rounded-md py-2 px-6 bg-blue-700 text-white hover:bg-blue-500"
    >
      {children}
    </button>
  );
};

export default Button;
