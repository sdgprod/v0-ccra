"use client"

import { Navigation } from "./navigation"
import { X } from "lucide-react"
import { Button } from "./ui/button"

export function Sidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <>
      <aside
        className={`fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 border-r bg-card z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-4 py-3 border-b lg:hidden">
            <h2 className="text-sm font-semibold">Menu</h2>
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex-1 overflow-y-auto py-4">
            <div className="px-3 mb-4">
              <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Main Menu</h2>
            </div>
            <Navigation />
          </div>
        </div>
      </aside>
    </>
  )
}
