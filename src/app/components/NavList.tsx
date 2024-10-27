import React from 'react'
import { Navbarlinks } from '../../../types/PropsTypes'
import Link from 'next/link'

function NavList(props:Navbarlinks) {
  return (
    <div>
          <Link href={props.href}> {props.title }</Link>
    </div>
  )
}

export default NavList