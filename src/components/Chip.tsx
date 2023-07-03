import Link from 'next/link';
import React from 'react'

export default function Chip({className, text}: {className: string; text: string;}) {
  return (
    <div className={'text-sm text-black px-2 py-1 rounded-full w-fit flex items-center gap-2 ' + className}>
      <div className='w-4 h-4 bg-[rgba(255,255,255,0.5)] float-left rounded-full'></div>
      {text}
    </div>
  )
}