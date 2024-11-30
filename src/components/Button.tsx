import { ReactNode } from "react";

// step 5: we merge the type
type ChildrenType = string | number | ReactNode;

// Step 6: we pull out the prop definition and create an interface
interface ButtonProps {
  // step 4: we define the type
  children: ChildrenType;
  onClick: () => void;
}

// step 1: we created a function
function Button({ children, onClick }: ButtonProps) {
  // Step 3: we send props
  // step 2: we returning HTML
  return <button onClick={onClick}>{children}</button>;
}

export default Button;
