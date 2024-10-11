import { IfProps } from "./If.types";

const If = ({ condition, children }: IfProps) => {
  return condition ? children : null;
};

export default If;
