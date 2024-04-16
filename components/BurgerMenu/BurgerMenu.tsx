"use client";
import { Menu, MenuItem, MenuButton } from "@aws-amplify/ui-react";
import Image from "next/image"
import Link from "next/link";
import Burger from "../../public/icons/burger.svg"

const BurgerMenu = () => {

    return(
    <Menu
        trigger={
            <MenuButton>
                <Image width={24} height={24} src={Burger} alt="burger menu"/>
            </MenuButton>
        }
  menuAlign="start"
>
  <MenuItem>
    <Link href="/menu">Menu</Link>
  </MenuItem>
  <MenuItem>
  <Link href="/how-to-order">How to order</Link>
  </MenuItem>
  <MenuItem>
  <Link href="/faqs">FAQs</Link>
  </MenuItem>
  <MenuItem>
  <Link href="/contact">Contact</Link>
  </MenuItem>
  <MenuItem>
  <Link href="/blogs">Blogs</Link>
  </MenuItem>
</Menu>
    )
}

export default BurgerMenu