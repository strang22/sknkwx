'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Separator } from './ui/separator';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from './ui/navigation-menu';
import Link from 'next/link';

export function DesignShowcase() {
  return (
    <div className="container mx-auto space-y-8 p-8">
      {/* Typography Section */}
      <Card>
        <CardHeader>
          <CardTitle className="font-mono text-red">Typography</CardTitle>
          <CardDescription>
            Showcasing Space Mono and Inter fonts
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h2 className="mb-2 font-mono text-2xl">Space Mono (Monospace)</h2>
            <p className="font-mono">SKNKWX Weather Data Visualization</p>
          </div>
          <Separator />
          <div>
            <h2 className="mb-2 font-sans text-2xl">Inter (Sans-serif)</h2>
            <p className="font-sans">Clean, modern interface text</p>
          </div>
        </CardContent>
      </Card>

      {/* Color Palette Section */}
      <Card>
        <CardHeader>
          <CardTitle className="font-mono">Color Palette</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4 md:grid-cols-5">
          <div className="space-y-2">
            <div className="h-20 rounded-md bg-black"></div>
            <p className="font-mono text-sm">#0D0D0D</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 rounded-md border bg-white"></div>
            <p className="font-mono text-sm">#FAFAF7</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 rounded-md bg-red"></div>
            <p className="font-mono text-sm">#E62325</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 rounded-md bg-orange"></div>
            <p className="font-mono text-sm">#FF9E2C</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 rounded-md bg-green"></div>
            <p className="font-mono text-sm">#1DB954</p>
          </div>
        </CardContent>
      </Card>

      {/* Components Section */}
      <Card>
        <CardHeader>
          <CardTitle className="font-mono">Components</CardTitle>
          <CardDescription>
            Showcasing shadcn components with our design system
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="space-y-4">
            <h3 className="font-mono text-lg">Buttons & Badges</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="default">Default</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-mono text-lg">Navigation Menu</h3>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="space-y-4">
            <h3 className="font-mono text-lg">Tabs</h3>
            <Tabs defaultValue="tab1">
              <TabsList>
                <TabsTrigger value="tab1">Weather</TabsTrigger>
                <TabsTrigger value="tab2">Forecast</TabsTrigger>
                <TabsTrigger value="tab3">History</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1" className="mt-2 rounded-md border p-4">
                Current weather information would go here
              </TabsContent>
              <TabsContent value="tab2" className="mt-2 rounded-md border p-4">
                Forecast information would go here
              </TabsContent>
              <TabsContent value="tab3" className="mt-2 rounded-md border p-4">
                Historical data would go here
              </TabsContent>
            </Tabs>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
