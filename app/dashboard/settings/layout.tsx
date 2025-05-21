"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const tabs = [
    {
      title: "General",
      href: "/dashboard/settings/general",
      isActive: pathname === "/dashboard/settings/general",
    },
    {
      title: "Webhooks",
      href: "/dashboard/settings/webhooks",
      isActive: pathname === "/dashboard/settings/webhooks",
    },
    {
      title: "API",
      href: "/dashboard/settings/api",
      isActive: pathname === "/dashboard/settings/api",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account settings and preferences.
        </p>
      </div>

      <Card className="overflow-hidden">
        <div className="border-b">
          <div className="flex">
            {tabs.map((tab) => (
              <Link
                key={tab.href}
                href={tab.href}
                className={cn(
                  "flex h-10 items-center justify-center px-4 text-sm font-medium transition-colors hover:text-primary",
                  tab.isActive
                    ? "border-b-2 border-primary text-primary"
                    : "text-muted-foreground"
                )}
              >
                {tab.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="p-6">{children}</div>
      </Card>
    </div>
  );
}
