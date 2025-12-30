"use client" // Required because we use UI interactivity (opening the menu)

import Link from "next/link"
import { Menu, Package2 } from "lucide-react" // Icons
import { Button } from "@/components/ui/button" // Adjust path if using alias
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet" // Adjust path if using alias

// ROUTE NAVBAR COMPONENT
export function Navbar() {
  const routes = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" }, // Software & Hardware projects
    { href: "/about", label: "About" }, // About Me page
  ]

  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Package2 className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        {/* DESKTOP NAV LINKS - Hidden on mobile, Flex on Medium screens+ */}
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            {route.label}
          </Link>
        ))}
      </nav>

      {/* MOBILE NAV (Sheet) - Hidden on Medium screens+ */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="shrink-0 md:hidden" // md:hidden ensures this vanishes on desktop
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetTitle>Navigation Menu</SheetTitle>
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Package2 className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className="text-muted-foreground hover:text-foreground"
              >
                {route.label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>

      {/* RIGHT SIDE ACTIONS (User Profile, etc.) */}
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <div className="ml-auto flex-1 sm:flex-initial">
            {/* Search bar could go here */}
        </div>
        <Button variant="secondary" size="sm" className="rounded-full">
            Login
        </Button>
      </div>
    </header>
  )
}