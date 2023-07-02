// named imports
import { BanknotesIcon, BellAlertIcon, CircleStackIcon, CogIcon, CreditCardIcon, HomeIcon, UserCircleIcon } from '@heroicons/react/24/solid'

// default imports
import NavLink from '../NavLink'
import { useState } from 'react'

const sideBarLinks = [
  {
    name: 'Dashboard',
    path: '/',
    icon: <HomeIcon />,
  },
  {
    name: 'Payments',
    path: '/payments',
    icon: <BanknotesIcon />,
  },
  {
    name: 'My Cards',
    path: '/cards',
    icon: <CreditCardIcon />,
  },
  {
    name: 'Investments',
    path: '/investments',
    icon: <CircleStackIcon />,
  },
  {
    name: 'Profile',
    path: '/profile',
    icon: <UserCircleIcon />,
  },
]

const sideBarLinks2 = [
  {
    name: 'Notifications',
    path: '/notifications',
    icon: <BellAlertIcon />,
  },
  {
    name: 'Settings',
    path: '/settings',
    icon: <CogIcon />,
  }
]

const SideBar = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <h2 className='font-bold text-black text-3xl underline my-4 mt-8 text-center'>FinVisor.</h2>

      <div className='flex flex-col ml-16 space-y-2 mt-10'>
        <NavLink sideBarLinks={sideBarLinks} />
        <div className='absolute bottom-7'>
          <NavLink sideBarLinks={sideBarLinks2} />
        </div>
      </div>
    </div>
  )
}

export default SideBar
