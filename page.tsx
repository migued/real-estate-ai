import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>AI Real Estate Assistant</CardTitle>
          <CardDescription>Your intelligent real estate companion</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Get started with our AI-powered tools for real estate.</p>
        </CardContent>
        <CardFooter className="flex justify-end gap-4">
          <Button variant="outline">Learn More</Button>
          <Button>Get Started</Button>
        </CardFooter>
      </Card>
    </main>
  )
}
