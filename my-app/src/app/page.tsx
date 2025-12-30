import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ArrowRight, Code, Cpu, Layers } from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      
      {/* 1. HERO SECTION (Motto) */}
      <section className="flex flex-col items-center justify-center space-y-4 px-4 py-24 text-center md:py-32 bg-slate-50 dark:bg-slate-950">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Building the Bridge Between <br className="hidden md:inline" />
          <span className="text-blue-600">Software</span> and <span className="text-orange-600">Hardware</span>
        </h1>
        <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          "Make it work, then make it better." {/* Your Motto here */}
        </p>
        <div className="flex gap-4">
          <Link href="/projects">
            <Button size="lg">View My Work</Button>
          </Link>
          <Link href="/about">
            <Button variant="outline" size="lg">Read Resume</Button>
          </Link>
        </div>
      </section>

      {/* 2. PROJECT SUMMARY SECTION */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-8 text-3xl font-bold tracking-tight">Recent Highlights</h2>
        
        <div className="grid gap-6 md:grid-cols-3">
          
          {/* Card 1: Software Example */}
          <Card>
            <CardHeader>
              <Code className="h-8 w-8 text-blue-500 mb-2" />
              <CardTitle>Web Development</CardTitle>
              <CardDescription>Full stack applications and tools.</CardDescription>
            </CardHeader>
            <CardContent>
              Built responsive platforms using Next.js and PHP.
            </CardContent>
          </Card>

          {/* Card 2: Hardware Example */}
          <Card>
            <CardHeader>
              <Cpu className="h-8 w-8 text-orange-500 mb-2" />
              <CardTitle>Hardware & IoT</CardTitle>
              <CardDescription>Embedded systems and automation.</CardDescription>
            </CardHeader>
            <CardContent>
              Prototyping with Arduino, ESP32, and custom PCBs.
            </CardContent>
          </Card>

          {/* Card 3: Hybrid/Self-Hosting Example */}
          <Card>
            <CardHeader>
              <Layers className="h-8 w-8 text-purple-500 mb-2" />
              <CardTitle>Infrastructure</CardTitle>
              <CardDescription>Server management and homelabs.</CardDescription>
            </CardHeader>
            <CardContent>
              Managing Proxmox clusters and local LLM deployment.
            </CardContent>
          </Card>

        </div>
        
        <div className="mt-8 flex justify-center">
            <Link href="/projects" className="flex items-center text-sm font-medium hover:underline underline-offset-4">
                View all projects <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
        </div>
      </section>
    </main>
  )
}