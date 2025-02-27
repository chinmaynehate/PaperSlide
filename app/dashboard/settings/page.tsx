import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProfileSettings } from "@/components/dashboard/profile-settings"
import { AccountSettings } from "@/components/dashboard/account-settings"
import { NotificationSettings } from "@/components/dashboard/notification-settings"

export default function SettingsPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Settings" text="Manage your account settings and preferences." />
      <div className="mt-4">
        <Tabs defaultValue="profile">
          <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>
          <TabsContent value="profile" className="mt-6">
            <ProfileSettings />
          </TabsContent>
          <TabsContent value="account" className="mt-6">
            <AccountSettings />
          </TabsContent>
          <TabsContent value="notifications" className="mt-6">
            <NotificationSettings />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardShell>
  )
}

