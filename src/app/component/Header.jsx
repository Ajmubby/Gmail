import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { LuPencil } from "react-icons/lu";
import { RiInboxFill } from "react-icons/ri";
import { TbTagStarred } from "react-icons/tb";
import { MdAccessTime } from "react-icons/md";
import { VscSend } from "react-icons/vsc";
import { GrDocument } from "react-icons/gr";
import { MdExpandMore } from "react-icons/md";
import styles from './header.module.css'



import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="bg-gray-200 h-screen">

      <div className="flex space-x-2 items-center p-8">
          <Link href='/'>
          <RxHamburgerMenu className="text-3xl"/>
          </Link>
          

          <Link href='/'>
          <Image src='/Gmail-logo.png' alt="gmail" width={80} height={80}/>
          </Link>
      </div>
      <nav>
          <ul className={styles.header}>
            <Navbar title="Compose" icon={LuPencil} />
            <Navbar title="Inbox"  icon={RiInboxFill}/>
            <Navbar title="Starred" icon={TbTagStarred}/>
            <Navbar title="Snoozed" icon={MdAccessTime}/>
            <Navbar title="Sent" icon={VscSend} />
            <Navbar title="Drafts" icon={GrDocument}/>           
            <Navbar title="More" icon={MdExpandMore}/>           
          </ul>
      </nav>
    </div>
  )
}
