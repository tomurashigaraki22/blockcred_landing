import React from "react"
import { cn } from "../../lib/utils"

const buttonVariants = {
  default: "bg-purple-600 text-white hover:bg-purple-700",
  outline: "border border-purple-500 text-purple-400 hover:bg-purple-900/30",
  secondary: "bg-gray-800 text-white hover:bg-gray-700",
  ghost: "hover:bg-gray-800 hover:text-white",
  link: "text-purple-500 underline-offset-4 hover:underline",
}

const buttonSizes = {
  default: "h-10 px-4 py-2",
  sm: "h-9 rounded-md px-3",
  lg: "h-11 rounded-md px-8",
  icon: "h-10 w-10",
}

export function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? React.cloneElement : "button"
  
  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
      {...props}
    />
  )
}
