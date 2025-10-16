"use client"

import { Bell, Settings, User, Search, Menu } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import Image from "next/image"

export function Header({ onMenuClick }: { onMenuClick?: () => void }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card backdrop-blur supports-[backdrop-filter]:bg-card/95">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-6">
          <Button variant="ghost" size="icon" className="h-9 w-9" onClick={onMenuClick}>
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-3">
            <Image
              src="/sd-guthrie-logo.png"
              alt="SD Guthrie International"
              width={180}
              height={40}
              className="h-8 w-auto"
              priority
            />
            <div className="border-l pl-3 ml-1">
              <p className="text-xs text-muted-foreground">Credit Risk Assessment</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search..." className="pl-9 w-64 h-9" />
          </div>
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Bell className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Settings className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
            <User className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  )
}
