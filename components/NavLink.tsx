'use client'
// named imports
import { usePathname } from 'next/navigation'

// default imports
import Link from 'next/link'

interface Props {
  sideBarLinks: SideBarLinks[]
}

const NavLink = ({ sideBarLinks }: Props) => {
  const pathname = usePathname()
  return (
    <>
      {sideBarLinks.map((link, index) => {
        return (
          <Link
            key={index}
            className={`flex ${pathname === link.path ? 'text-white rounded-full border-x-4 bg-[#3A4F7A] opacity-70 border-[#000000]' : 'border-x-4 border-transparent text-gray-400'} px-4 py-3 hover:text-gray-100 items-center space-x-4 text-xl font-semibold`}
            href={link.path}
          >
            <p className='h-6 w-6'>{link.icon}</p>
            <p>{link.name}</p>
          </Link>
        )
      })}
    </>
  )
}

export default NavLink
