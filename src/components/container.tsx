import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function Container({ children, className = "", id }: ContainerProps) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-[82rem] px-4 sm:px-6 lg:px-8 xl:px-10 2xl:max-w-[88rem] 2xl:px-12 ${className}`}
    >
      {children}
    </section>
  );
}
