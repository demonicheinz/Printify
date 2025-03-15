import type React from "react";
import { iconLibrary, type IconName } from "@/data/icon";
import { cn } from "@/lib/utils";

export interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  name: IconName;
  size?: number;
  className?: string;
}

const Icon = ({ name, size = 24, className, ...props }: IconProps) => {
  const IconComponent = iconLibrary[name];

  if (!IconComponent) {
    console.warn(`Icon dengan nama "${name}" tidak ditemukan.`);
    return null;
  }

  return (
    <div
      className={cn("inline-flex items-center justify-center", className)}
      {...props}
    >
      <IconComponent size={size} />
    </div>
  );
};

export { Icon };
