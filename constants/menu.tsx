import {v4 as uuid} from 'uuid'
import home from '@/icons/home-agreement.png'
import automation from '@/icons/wave.png'
import integration from '@/icons/space.png'
import setting from '@/icons/setting.png'
import contacts from '@/icons/user.png'
import Image from 'next/image'

type Props = {
    label:string
    id:string
}

type SideBarProps={
    icon:React.ReactNode
}&Props

export const SIDEBAR_MENU: SideBarProps[] = [
    {
        id: uuid(),
        label: 'home',
        icon: <Image src={home.src} alt="" />
    },
    {
        id: uuid(),
        label: 'automations',
        icon: <Image src={automation.src} alt="" />
    },
    {
        id: uuid(),
        label: 'integrations',
        icon: <Image src={integration.src} alt="" />
    },
    {
        id: uuid(),
        label: 'settings',
        icon: <Image src={setting.src} alt="" />
    },
    {
        id: uuid(),
        label: 'contacts',
        icon: <Image src={contacts.src} alt="" />
    }
]