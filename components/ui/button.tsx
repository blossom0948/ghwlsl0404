import React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

export function Button({
  asChild,
  className = "",
  children,
  ...props
}: ButtonProps & { children?: React.ReactNode }) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 font-semibold text-white transition-all duration-300 hover:shadow-2xl hover:scale-110 active:scale-95"

  const combinedClassName = `${baseStyles} ${className}`

  if (asChild) {
    return React.Children.map(children, (child) =>
      React.isValidElement(child)
        ? React.cloneElement(child, { className: combinedClassName } as any)
        : child
    ) as any
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  )
}
