"use client"

import type * as React from "react"
import {
  BarChart3,
  Wallet,
  Settings2,
  LayoutDashboard,
  Webhook,
  Code,
  Building2,
  Building,
  CircleDollarSign,
} from "lucide-react"

import { NavMain } from "./nav-main"
import { NavProjects } from "./nav-projects"
import { NavUser } from "./nav-user"
import { TeamSwitcher } from "./team-switcher"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: Building2,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: Building,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: CircleDollarSign,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard
    },
    {
      title: "Balance",
      url: "/dashboard/balance",
      icon: Wallet
    },
    {
      title: "Transactions",
      url: "/dashboard/transactions",
      icon: BarChart3
    },
    {
      title: "Settings",
      url: "/dashboard/settings/general",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "/dashboard/settings/general",
        },
        {
          title: "Webhooks",
          url: "/dashboard/settings/webhooks",
        },
        {
          title: "API",
          url: "/dashboard/settings/api",
        },
      ],
    },
  ],
  projects: [],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser/>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
