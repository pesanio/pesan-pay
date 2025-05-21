import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDays, ChevronDown, Info, Search, Bell, BarChart3 } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Home</h1>
        <div className="flex items-center gap-2 self-end md:self-auto">
          <Button variant="outline" size="sm" className="h-9 gap-1">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" className="h-9 gap-1">
            <Bell className="h-4 w-4" />
          </Button>
          <div className="h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center text-white text-sm font-medium">
            JP
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4" />
            <span>21 Apr, 2025 - 21 May, 2025</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
          <Select defaultValue="daily">
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="daily">Daily</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Products" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Products</SelectItem>
              <SelectItem value="product1">Product 1</SelectItem>
              <SelectItem value="product2">Product 2</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-sm">
            <span className="h-3 w-3 rounded-full bg-blue-500"></span>
            <span>Chosen Period</span>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <span className="h-3 w-3 rounded-full bg-gray-300"></span>
            <span>Last Period</span>
          </div>
        </div>
      </div>

      <Card className="border rounded-lg">
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">All revenue</span>
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold">IDR 0.00</h2>
              <p className="text-sm text-muted-foreground">vs. IDR 0.00 last period</p>
            </div>
            <div className="h-[200px] w-full relative">
              {/* Chart would go here - using a placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <BarChart3 className="h-24 w-24 text-gray-200" />
              </div>
              <div className="absolute bottom-0 left-0 text-xs text-muted-foreground">21 Apr</div>
              <div className="absolute bottom-0 right-0 text-xs text-muted-foreground">21 May</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* New Orders */}
        <Card className="border rounded-lg">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">New orders</span>
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold">0</h2>
                <p className="text-sm text-muted-foreground">vs. 0 last period</p>
              </div>
              <div className="h-[100px] w-full relative">
                {/* Chart would go here - using a placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <BarChart3 className="h-16 w-16 text-gray-200" />
                </div>
                <div className="absolute bottom-0 left-0 text-xs text-muted-foreground">21 Apr</div>
                <div className="absolute bottom-0 right-0 text-xs text-muted-foreground">21 May</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* New Order Revenue */}
        <Card className="border rounded-lg">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">New order revenue</span>
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold">IDR 0.00</h2>
                <p className="text-sm text-muted-foreground">vs. IDR 0.00 last period</p>
              </div>
              <div className="h-[100px] w-full relative">
                {/* Chart would go here - using a placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <BarChart3 className="h-16 w-16 text-gray-200" />
                </div>
                <div className="absolute bottom-0 left-0 text-xs text-muted-foreground">21 Apr</div>
                <div className="absolute bottom-0 right-0 text-xs text-muted-foreground">21 May</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Avg. Order Revenue */}
        <Card className="border rounded-lg">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Avg. order revenue</span>
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold">IDR 0.00</h2>
                <p className="text-sm text-muted-foreground">vs. IDR 0.00 last period</p>
              </div>
              <div className="h-[100px] w-full relative">
                {/* Chart would go here - using a placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <BarChart3 className="h-16 w-16 text-gray-200" />
                </div>
                <div className="absolute bottom-0 left-0 text-xs text-muted-foreground">21 Apr</div>
                <div className="absolute bottom-0 right-0 text-xs text-muted-foreground">21 May</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Subscription Renewals Revenue */}
        <Card className="border rounded-lg">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Subscription renewals revenue</span>
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold">IDR 0.00</h2>
                <p className="text-sm text-muted-foreground">vs. IDR 0.00 last period</p>
              </div>
              <div className="h-[100px] w-full relative">
                {/* Chart would go here - using a placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <BarChart3 className="h-16 w-16 text-gray-200" />
                </div>
                <div className="absolute bottom-0 left-0 text-xs text-muted-foreground">21 Apr</div>
                <div className="absolute bottom-0 right-0 text-xs text-muted-foreground">21 May</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* New Subscriptions */}
        <Card className="border rounded-lg">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">New subscriptions</span>
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold">0</h2>
                <p className="text-sm text-muted-foreground">vs. 0 last period</p>
              </div>
              <div className="h-[100px] w-full relative">
                {/* Chart would go here - using a placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <BarChart3 className="h-16 w-16 text-gray-200" />
                </div>
                <div className="absolute bottom-0 left-0 text-xs text-muted-foreground">21 Apr</div>
                <div className="absolute bottom-0 right-0 text-xs text-muted-foreground">21 May</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Monthly Recurring Revenue */}
        <Card className="border rounded-lg">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Monthly recurring revenue</span>
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold">IDR 0.00</h2>
                <p className="text-sm text-muted-foreground">vs. IDR 0.00 last period</p>
              </div>
              <div className="h-[100px] w-full relative">
                {/* Chart would go here - using a placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <BarChart3 className="h-16 w-16 text-gray-200" />
                </div>
                <div className="absolute bottom-0 left-0 text-xs text-muted-foreground">21 Apr</div>
                <div className="absolute bottom-0 right-0 text-xs text-muted-foreground">21 May</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Refunds */}
        <Card className="border rounded-lg">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Refunds</span>
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold">0</h2>
                <p className="text-sm text-muted-foreground">vs. 0 last period</p>
              </div>
              <div className="h-[100px] w-full relative">
                {/* Chart would go here - using a placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <BarChart3 className="h-16 w-16 text-gray-200" />
                </div>
                <div className="absolute bottom-0 left-0 text-xs text-muted-foreground">21 Apr</div>
                <div className="absolute bottom-0 right-0 text-xs text-muted-foreground">21 May</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Abandoned Cart Revenue */}
        <Card className="border rounded-lg">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Abandoned cart revenue</span>
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold">IDR 0.00</h2>
                <p className="text-sm text-muted-foreground">vs. IDR 0.00 last period</p>
              </div>
              <div className="h-[100px] w-full relative">
                {/* Chart would go here - using a placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <BarChart3 className="h-16 w-16 text-gray-200" />
                </div>
                <div className="absolute bottom-0 left-0 text-xs text-muted-foreground">21 Apr</div>
                <div className="absolute bottom-0 right-0 text-xs text-muted-foreground">21 May</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Email Subscribers */}
        <Card className="border rounded-lg">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Email subscribers</span>
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold">...</h2>
                <p className="text-sm text-muted-foreground">...</p>
              </div>
              <div className="h-[100px] w-full relative flex items-center justify-center">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                  Enable email marketing
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
