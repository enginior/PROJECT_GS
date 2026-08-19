import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { FileText, GraduationCap, Heart, Lightbulb } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-5xl">
      
      {/* PAGE HEADER */}
      <div className="mb-10 space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">About Me</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          I am a developer and hardware enthusiast who loves bridging the gap between digital code and physical devices.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-3">
        
        {/* LEFT COLUMN (2/3 width) - Bio, Education, Inspiration */}
        <div className="md:col-span-2 space-y-10">
          
          {/* SECTION: EDUCATION */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Education</h2>
            </div>
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4">
                  <h3 className="font-bold text-lg">Bachelor of Science in Computer Engineering</h3>
                  <p className="text-muted-foreground">University Name Here • 2021 - Present</p>
                </div>
                <Separator className="my-4" />
                <div>
                  <h3 className="font-bold text-lg">High School Diploma</h3>
                  <p className="text-muted-foreground">School Name Here • Graduated 2021</p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* SECTION: INSPIRATIONS */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="h-6 w-6 text-yellow-500" />
              <h2 className="text-2xl font-semibold">Inspirations</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Open Source & Self-Hosting</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  I believe in data privacy and owning your infrastructure. The Proxmox and Linux communities inspire me to build independent systems.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">The Maker Movement</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  The ability to control the physical world (IoT) with code is fascinating. Projects like automated monitoring systems drive my curiosity.
                </CardContent>
              </Card>
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN (1/3 width) - Skills & Resume */}
        <div className="space-y-8">
          
          {/* RESUME CARD */}
          <Card className="bg-slate-50 dark:bg-slate-900 border-primary/20">
            <CardHeader>
              <CardTitle>Resume</CardTitle>
              <CardDescription>View my full professional history.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" asChild>
                {/* REPLACE THIS LINK WITH YOUR REAL GOOGLE DOC LINK */}
                <Link href="https://docs.google.com/document/d/your-doc-id-here" target="_blank">
                  <FileText className="mr-2 h-4 w-4" />
                  Open CV (Google Docs)
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* SKILLS SECTION */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Technical Skills</h3>
            
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2 font-medium">Web Development</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">PHP</Badge>
                  <Badge variant="secondary">MySQL</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">Bootstrap</Badge>
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2 font-medium">Hardware & IoT</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Arduino</Badge>
                  <Badge variant="secondary">Raspberry Pi</Badge>
                  <Badge variant="secondary">ESP32</Badge>
                  <Badge variant="secondary">GSM Modules</Badge>
                  <Badge variant="secondary">Soldering</Badge>
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2 font-medium">Infrastructure</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Proxmox</Badge>
                  <Badge variant="secondary">Linux (Debian)</Badge>
                  <Badge variant="secondary">LXC Containers</Badge>
                  <Badge variant="secondary">Local LLMs</Badge>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}