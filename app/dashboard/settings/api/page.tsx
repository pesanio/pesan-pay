"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy as CopyIcon, Eye as EyeIcon, EyeOff as EyeOffIcon } from "lucide-react";
import { useState } from "react";

export default function ApiSettingsPage() {
  const [showKey, setShowKey] = useState(false);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">API Settings</h2>
        <p className="text-sm text-muted-foreground">
          Manage your API keys and access credentials.
        </p>
      </div>

      <Tabs defaultValue="keys">
        <TabsList className="mb-4">
          <TabsTrigger value="keys">API Keys</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
          <TabsTrigger value="docs">Documentation</TabsTrigger>
        </TabsList>
        
        <TabsContent value="keys">
          <Card>
            <CardHeader>
              <CardTitle>API Keys</CardTitle>
              <CardDescription>
                Your API keys grant access to your account. Keep them secure!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label className="text-base">Live API Keys</Label>
                  <p className="text-sm text-muted-foreground">
                    Use these keys for production transactions.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="live-key">Live Secret Key</Label>
                  <div className="flex items-center space-x-2">
                    <div className="relative flex-1">
                      <Input 
                        id="live-key" 
                        value={showKey ? "sk_live_51NxXXXXXXXXXXXXXXXXXXXXXX" : "sk_live_51Nx••••••••••••••••••••••••"}
                        readOnly
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full"
                        onClick={() => setShowKey(!showKey)}
                      >
                        {showKey ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
                      </Button>
                    </div>
                    <Button variant="outline" size="icon">
                      <CopyIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="live-pub-key">Live Publishable Key</Label>
                  <div className="flex items-center space-x-2">
                    <Input 
                      id="live-pub-key" 
                      value="pk_live_51NxXXXXXXXXXXXXXXXXXXXXXX"
                      readOnly
                    />
                    <Button variant="outline" size="icon">
                      <CopyIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <Label className="text-base">Test API Keys</Label>
                  <p className="text-sm text-muted-foreground">
                    Use these keys for testing. They don't affect real money.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="test-key">Test Secret Key</Label>
                  <div className="flex items-center space-x-2">
                    <div className="relative flex-1">
                      <Input 
                        id="test-key" 
                        value={showKey ? "sk_test_51NxXXXXXXXXXXXXXXXXXXXXXX" : "sk_test_51Nx••••••••••••••••••••••••"}
                        readOnly
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full"
                        onClick={() => setShowKey(!showKey)}
                      >
                        {showKey ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
                      </Button>
                    </div>
                    <Button variant="outline" size="icon">
                      <CopyIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="test-pub-key">Test Publishable Key</Label>
                  <div className="flex items-center space-x-2">
                    <Input 
                      id="test-pub-key" 
                      value="pk_test_51NxXXXXXXXXXXXXXXXXXXXXXX"
                      readOnly
                    />
                    <Button variant="outline" size="icon">
                      <CopyIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <Button>Rotate API Keys</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="usage">
          <Card>
            <CardHeader>
              <CardTitle>API Usage</CardTitle>
              <CardDescription>
                Monitor your API usage and rate limits.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>API usage statistics will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="docs">
          <Card>
            <CardHeader>
              <CardTitle>API Documentation</CardTitle>
              <CardDescription>
                Learn how to integrate with our API.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>API documentation and guides will be displayed here.</p>
              <Button className="mt-4" variant="outline">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  View Full Documentation
                </a>
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
