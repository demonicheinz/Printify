"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import type * as React from "react";

interface PasswordInputProps extends Omit<React.ComponentProps<"input">, "type"> {
  /**
   * Label untuk screen reader
   */
  srLabel?: string;
}

export function PasswordInput({
  className,
  srLabel = "Toggle password visibility",
  ...props
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <Input
        type={showPassword ? "text" : "password"}
        className={className}
        {...props}
      />
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent cursor-pointer"
        onClick={togglePasswordVisibility}
        tabIndex={-1}
        aria-label={srLabel}
      >
        <Icon
          name={showPassword ? "eyeOff" : "eye"}
          size={18}
          className="text-muted-foreground"
        />
        <span className="sr-only">
          {showPassword ? "Sembunyikan password" : "Tampilkan password"}
        </span>
      </Button>
    </div>
  );
}
