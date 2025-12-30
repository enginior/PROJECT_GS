import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

// 1. DATA: List all your tools here
type Resource = {
  id: string
  name: string
  category: "Software" | "Hardware"
  description: string
  url: string
}

const resources: Resource[] = [
  // --- SOFTWARE RESOURCES ---
  {
    id: "s1",
    name: "Next.js",
    category: "Software",
    description: "The React framework for the web. Used for building the frontend of this portfolio.",
    url: "https://nextjs.org/docs",
  },
  {
    id: "s2",
    name: "Gemini AI",
    category: "Software",
    description: "Google's multimodal AI model. Used for code assistance and brainstorming logic.",
    url: "https://deepmind.google/technologies/gemini/",
  },
  {
    id: "s3",
    name: "Tailwind CSS",
    category: "Software",
    description: "A utility-first CSS framework for rapid UI development.",
    url: "https://tailwindcss.com/docs",
  },
  {
    id: "s4",
    name: "Proxmox VE",
    category: "Software",
    description: "Open-source server virtualization management platform.",
    url: "https://www.proxmox.com/en/",
  },

  // --- HARDWARE RESOURCES ---
  {
    id: "h1",
    name: "Arduino",
    category: "Hardware",
    description: "Open-source electronic prototyping platform enabling users to create interactive electronic objects.",
    url: "https://docs.arduino.cc/",
  },
  {
    id: "h2",
    name: "Raspberry Pi",
    category: "Hardware",
    description: "A series of small single-board computers. Great for running lightweight servers.",
    url: "https://www.raspberrypi.com/documentation/",
  },
  {
    id: "h3",
    name: "ESP32",
    category: "Hardware",
    description: "Low-cost, low-power system on a chip microcontrollers with integrated Wi-Fi and dual-mode Bluetooth.",
    url: "https://www.espressif.com/en/products/socs/esp32",
  },
]

export default function ResourcesPage() {
  const softwareResources = resources.filter(r => r.category === "Software")
  const hardwareResources = resources.filter(r => r.category === "Hardware")

  return (
    <div className="container mx-auto min-h-screen py-10 px-4">
      <div className="mb-8 space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Resources & Tools</h1>
        <p className="text-muted-foreground">
          A collection of the libraries, hardware, and documentation I rely on to build my projects.
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="software">Software</TabsTrigger>
          <TabsTrigger value="hardware">Hardware</TabsTrigger>
        </TabsList>

        {/* ALL TAB */}
        <TabsContent value="all" className="mt-6">
          <ResourceGrid items={resources} />
        </TabsContent>

        {/* SOFTWARE TAB */}
        <TabsContent value="software" className="mt-6">
          <ResourceGrid items={softwareResources} />
        </TabsContent>

        {/* HARDWARE TAB */}
        <TabsContent value="hardware" className="mt-6">
          <ResourceGrid items={hardwareResources} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

// 2. HELPER COMPONENT: The Grid Layout
function ResourceGrid({ items }: { items: Resource[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {items.map((item) => (
        <Link 
          key={item.id} 
          href={item.url} 
          target="_blank" 
          className="group block h-full" // 'group' allows us to style child elements on hover
        >
          <Card className="h-full transition-colors hover:bg-slate-50 dark:hover:bg-slate-900 hover:border-primary/50">
            <CardHeader className="p-5">
              <div className="flex items-center justify-between mb-2">
                <Badge variant="secondary" className="text-xs font-normal">
                  {item.category}
                </Badge>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              
              <CardTitle className="text-lg group-hover:underline underline-offset-4 decoration-primary/50">
                {item.name}
              </CardTitle>
              <CardDescription className="line-clamp-3 mt-2 text-sm">
                {item.description}
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </div>
  )
}