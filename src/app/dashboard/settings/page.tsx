"use client";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/app-sidebar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { 
  User, 
  Bell,
  Lock,
  Palette,
  Settings as SettingsIcon,
  Save,
  Trash2
} from "lucide-react";

export default function SettingsPage() {
  return (
    <SidebarProvider>
      <div className="relative flex h-screen w-full">
        <DashboardSidebar />
        <SidebarInset className="flex flex-col">
          <main className="mx-auto max-w-[1200px] px-6 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-muted-foreground mt-2">
            Manage your account preferences and configuration
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="pt-6">
                <nav className="space-y-2">
                  <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium bg-primary/10 text-primary rounded-lg">
                    <User className="size-4" />
                    Profile
                  </button>
                  <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground hover:bg-muted rounded-lg">
                    <Bell className="size-4" />
                    Notifications
                  </button>
                  <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground hover:bg-muted rounded-lg">
                    <Lock className="size-4" />
                    Security
                  </button>
                  <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground hover:bg-muted rounded-lg">
                    <Palette className="size-4" />
                    Appearance
                  </button>
                  <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground hover:bg-muted rounded-lg">
                    <SettingsIcon className="size-4" />
                    Advanced
                  </button>
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Profile Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="size-5 text-primary" />
                  Profile Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-6">
                  <div className="size-20 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full flex items-center justify-center">
                    <User className="size-10 text-primary" />
                  </div>
                  <div>
                    <Button variant="outline" size="sm">Change Avatar</Button>
                    <p className="text-xs text-muted-foreground mt-2">
                      JPG, PNG or GIF. Max 2MB.
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" defaultValue="john.doe@example.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" defaultValue="VibeCode AI" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <textarea 
                    id="bio" 
                    className="w-full min-h-[100px] px-3 py-2 border rounded-lg text-sm"
                    defaultValue="Building the future of autonomous software development with AI agents."
                  />
                </div>

                <div className="flex gap-3">
                  <Button>
                    <Save className="size-4 mr-2" />
                    Save Changes
                  </Button>
                  <Button variant="outline">Cancel</Button>
                </div>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="size-5 text-primary" />
                  Notification Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <div className="font-semibold">Email Notifications</div>
                    <div className="text-sm text-muted-foreground">
                      Receive email updates about your projects
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <div className="font-semibold">Agent Activity</div>
                    <div className="text-sm text-muted-foreground">
                      Get notified when agents complete tasks
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <div className="font-semibold">PR Reviews</div>
                    <div className="text-sm text-muted-foreground">
                      Alerts for pull request reviews
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <div className="font-semibold">Deployment Status</div>
                    <div className="text-sm text-muted-foreground">
                      Updates on deployment progress
                    </div>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <div className="font-semibold">Marketing Updates</div>
                    <div className="text-sm text-muted-foreground">
                      News and feature announcements
                    </div>
                  </div>
                  <Switch />
                </div>

                <Button>
                  <Save className="size-4 mr-2" />
                  Save Preferences
                </Button>
              </CardContent>
            </Card>

            {/* Security */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="size-5 text-primary" />
                  Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <Input id="currentPassword" type="password" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input id="newPassword" type="password" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <Input id="confirmPassword" type="password" />
                </div>

                <Button>Update Password</Button>

                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <div>
                      <div className="font-semibold">Two-Factor Authentication</div>
                      <div className="text-sm text-muted-foreground">
                        Add an extra layer of security
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Enable</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Danger Zone */}
            <Card className="border-destructive/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-destructive">
                  <Trash2 className="size-5" />
                  Danger Zone
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 border border-destructive/20 bg-destructive/5 rounded-lg">
                  <div className="font-semibold mb-2">Delete Account</div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Once you delete your account, there is no going back. Please be certain.
                  </p>
                  <Button variant="destructive" size="sm">
                    <Trash2 className="size-4 mr-2" />
                    Delete Account
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
