import { FC } from "react";

interface LoadingProps {
  loadingText: string;
}

const Loading: FC<LoadingProps> = ({ loadingText }) => {
  return <div>{loadingText}</div>;
};

export default Loading;
