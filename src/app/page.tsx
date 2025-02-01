import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>AI Real Estate Assistant</CardTitle>
          <CardDescription>Your intelligent real estate companion</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input placeholder="Your email" type="email" />
            <p>Get started with our AI-powered tools for real estate.</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Learn More</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Welcome to AI Real Estate Assistant</DialogTitle>
                <p className="mt-2 text-slate-600">
                  Our AI-powered platform helps real estate agents automate their workflow and improve their productivity.
                </p>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          <Button>Get Started</Button>
        </CardFooter>
      </Card>
    </main>
  )
}
