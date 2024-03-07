import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className="text-5xl md:text-6xl lg:text-6xl max-w-3xl mx-auto">
      {children}
    </h1>
  );
}
