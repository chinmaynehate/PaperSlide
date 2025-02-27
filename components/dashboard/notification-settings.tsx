import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function NotificationSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Preferences</CardTitle>
        <CardDescription>Choose what notifications you want to receive</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Email Notifications</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-presentations">Presentation updates</Label>
                <p className="text-sm text-gray-500">Receive emails when your presentations are ready</p>
              </div>
              <Switch id="email-presentations" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-features">New features</Label>
                <p className="text-sm text-gray-500">Get notified about new features and improvements</p>
              </div>
              <Switch id="email-features" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-newsletter">Newsletter</Label>
                <p className="text-sm text-gray-500">Receive our monthly newsletter with tips and updates</p>
              </div>
              <Switch id="email-newsletter" />
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-medium">In-App Notifications</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="app-presentations">Presentation updates</Label>
                <p className="text-sm text-gray-500">Get notified when your presentations are ready</p>
              </div>
              <Switch id="app-presentations" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="app-comments">Comments and feedback</Label>
                <p className="text-sm text-gray-500">Get notified when someone comments on your presentations</p>
              </div>
              <Switch id="app-comments" defaultChecked />
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button>Save preferences</Button>
      </CardFooter>
    </Card>
  )
}

