import { Button } from "@/components/ui/button";
import { FC } from "react";

export const Comp: FC = () => {
  return (
    <div className="text-[var(--textColor)] bg-[var(--HomebackgroundColor)] h-[var(--ButtonHeight)] p-[var(--spacing)]">
      <h1>Hello, Global CSS Variables!</h1>
      <Button className="h-[var(--ButtonHeight)]">Hey</Button>
    </div>
  );
};
