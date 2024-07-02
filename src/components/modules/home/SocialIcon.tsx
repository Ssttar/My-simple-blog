'use client'

/* eslint-disable react/jsx-key */
import React, { memo } from 'react'
import Link from 'next/link'

import { XIcon } from '~/components/icons/platform/XIcon'

const iconSet = [
  {
    name: 'Github',
    icon: <i className="icon-[mingcute--github-line]" />,
    color: '#181717',
    url: 'https://github.com/Ssttar',
  },
  {
    name: 'X',
    icon: <XIcon />,
    color: 'rgba(36,46,54,1.00)',
    url: 'https://x.com/Ssttar123',
  },
  {
    name: 'Email',
    icon: <i className="icon-[mingcute--mail-line]" />,
    color: '#D44638',
    url: 'mailto:i@ssstttar.com',
  },
  {
    name: 'RSS',
    icon: <i className="icon-[mingcute--rss-line]" />,
    color: '#FFA500',
    url: '/feed',
  },
]

export const SocialIcon = () => {
  return (
    <>
      {iconSet.map((item) => (
        <Link
          key={item.name}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 w-10 items-center justify-center rounded-full transition-transform hover:scale-110"
          style={{ backgroundColor: item.color }}
        >
          {React.isValidElement(item.icon)
            ? React.cloneElement(item.icon as React.ReactElement, {
                className: `h-5 w-5 text-white ${(item.icon as React.ReactElement).props.className || ''}`,
              })
            : item.icon}
        </Link>
      ))}
    </>
  )
}
