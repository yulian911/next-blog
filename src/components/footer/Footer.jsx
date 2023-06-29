import React from 'react'

import Image from 'next/image'

const Footer = () => {
  return (
    <div className={`h-[50px] text-[14px] flex items-center justify-between`}>
      <div>©2023 J4SK13R. All rights reserved.</div>
      <div className={`flex items-center gap-[10px]`}>
        <Image
          src="/1.png"
          width={15}
          height={15}
          className={`opacity-[0.6] cursor-pointer`}
          alt="Lama Dev Facebook Account"
        />
        <Image
          src="/2.png"
          width={15}
          height={15}
          className={`opacity-[0.6] cursor-pointer`}
          alt="Lama Dev"
        />
        <Image
          src="/3.png"
          width={15}
          height={15}
          className={`opacity-[0.6] cursor-pointer`}
          alt="Lama Dev"
        />
        <Image
          src="/4.png"
          width={15}
          height={15}
          className={`opacity-[0.6] cursor-pointer`}
          alt="Lama Dev"
        />
      </div>
    </div>
  )
}

export default Footer
