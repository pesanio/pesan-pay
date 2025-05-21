import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

export default function WebhooksSettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">Webhooks</h2>
        <p className="text-sm text-muted-foreground">
          Configure webhooks to receive real-time notifications for events in your account.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Webhook Endpoints</CardTitle>
          <CardDescription>
            Add webhook endpoints to receive notifications for events.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="rounded-md border p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-medium">https://example.com/webhook</h3>
                  <p className="text-sm text-muted-foreground">Created on May 1, 2023</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="active" defaultChecked />
                  <Label htmlFor="active">Active</Label>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                  payment.success
                </div>
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                  payment.failed
                </div>
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                  transfer.created
                </div>
              </div>
            </div>

            <div className="rounded-md border p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-medium">https://api.yourapp.com/hooks</h3>
                  <p className="text-sm text-muted-foreground">Created on April 15, 2023</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="active2" />
                  <Label htmlFor="active2">Active</Label>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                  account.updated
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="mb-4 text-lg font-medium">Add New Webhook</h3>
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="url">Webhook URL</Label>
                  <Input id="url" placeholder="https://your-domain.com/webhook" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="events">Events to send</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select events" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All events</SelectItem>
                      <SelectItem value="payment">Payment events</SelectItem>
                      <SelectItem value="transfer">Transfer events</SelectItem>
                      <SelectItem value="account">Account events</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button>Add Webhook</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
