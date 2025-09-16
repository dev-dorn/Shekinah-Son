import React from 'react'

type Props = React.InputHTMLAttributes<HTMLInputElement>

export default function Input({ className = '', ...props }: Props) {
  const base = 'w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm'
  return <input className={`${base} ${className}`} {...props} />
}


