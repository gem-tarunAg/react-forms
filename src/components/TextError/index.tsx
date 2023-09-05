type TextErrorProps = {
  children: React.ReactNode;
};
export const TextError = ({ children }: TextErrorProps) => {
  return <p className="text-md text-red-500 my-1">{children}</p>;
};
