"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),_transparent_48%),linear-gradient(135deg,_#f8fafc_0%,_#eef2ff_100%)] px-4 py-10">
      <div className="w-full max-w-5xl rounded-3xl border border-border/70 bg-background/80 p-6 shadow-2xl shadow-slate-200/70 backdrop-blur sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              Demo login experience
            </div>
            <div className="space-y-3">
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Welcome back to Prisma Press
              </h1>
              <p className="max-w-xl text-lg text-muted-foreground">
                Sign in to preview the polished auth flow for your next
                publishing experience.
              </p>
            </div>
            <div className="rounded-2xl border border-border/70 bg-muted/40 p-4 text-sm text-muted-foreground">
              <p className="font-medium text-foreground">Demo credentials</p>
              <p className="mt-1">Email: demo@prismapress.dev</p>
              <p>Password: password123</p>
            </div>
          </div>

          <Card className="w-full max-w-md border-border/70 shadow-lg">
            <CardHeader className="space-y-2">
              <CardTitle className="text-2xl">Sign in</CardTitle>
              <CardDescription>
                Use your account to continue into the dashboard.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label
                  className="text-sm font-medium text-foreground"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  defaultValue="demo@prismapress.dev"
                  className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm shadow-sm outline-none transition focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50"
                  placeholder="you@example.com"
                />
              </div>

              <div className="space-y-2">
                <label
                  className="text-sm font-medium text-foreground"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  defaultValue="password123"
                  className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm shadow-sm outline-none transition focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50"
                  placeholder="Enter your password"
                />
              </div>

              <Button className="w-full">Continue</Button>

              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-border" />
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  or
                </span>
                <div className="h-px flex-1 bg-border" />
              </div>

              <Button variant="outline" className="w-full">
                Continue with Google
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                New here?{" "}
                <span className="font-medium text-primary">
                  Create an account
                </span>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
