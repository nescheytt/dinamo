import Link from 'next/link'
import { MenuItems } from '@/types/menu-items'

interface Link extends MenuItems {
  className: string;
}

export default function LinkBase({ label, url, className }: Link) {
  return (
    <Link href={url} className={className}>
      {label}
    </Link>
  )
}