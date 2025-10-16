"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, UserCircle, TrendingUp, BarChart3 } from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Customer Profile", href: "/customer-profile", icon: UserCircle },
  { name: "Sales Profile", href: "/sales-profile", icon: TrendingUp },
  { name: "Sales Performance Dashboard", href: "/sales-performance", icon: BarChart3 },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col space-y-1 px-3 py-4">
      {navigation.map((item) => {
        const Icon = item.icon
        const isActive =
          pathname === item.href || (item.href === "/customer-profile" && pathname.startsWith("/customer-profile"))
        return (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-colors",
              isActive ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-accent hover:text-foreground",
            )}
          >
            <Icon className="h-5 w-5" />
            {item.name}
          </Link>
        )
      })}
    </nav>
  )
}
