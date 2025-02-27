"use client"

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useParams, usePathname, useRouter } from 'next/navigation'
import React, { HTMLAttributes } from 'react'

const MainNav = ({
    className,
    ...props
}:React.HTMLAttributes<HTMLElement>) => {

   const pathname = usePathname()
   const params = useParams()

  const routes = [
    {
        href: `/${params.storeId}`,
        label: 'Overview',
        active: pathname === `/${params.storeId}`
    },
    {
        href: `/${params.storeId}/settings`,
        label: 'Settings',
        active: pathname === `/${params.storeId}/settings`
    }
  ]

  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6",className)}>
        {
            routes.map(({href,label,active})=>
                (
                    <Link href={href} className={cn('text-sm font-medium transition-colors hover:text-primary',active ? "text-black dark:text-white": "text-muted-foreground")} key={href}>
                    {label}
                    </Link>
                )
            )
        }
    </nav>
  )
}

export default MainNav