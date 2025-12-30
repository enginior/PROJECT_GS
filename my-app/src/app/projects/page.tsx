import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Globe, Hammer } from "lucide-react"
import Link from "next/link"

// --- 1. YOUR PROJECT DATA ---
// distinct "types" match the Tab values below: "all", "software", "hardware"
type Project = {
  id: string
  title: string
  category: "Software" | "Hardware" | "Hybrid"
  status: "Completed" | "In Progress" | "Upcoming"
  description: string
  techStack: string[]
  githubLink?: string
  demoLink?: string
}

const projects: Project[] = [
  {
    id: "1",
    title: "Inventory Management System",
    category: "Software",
    status: "Completed",
    description: "A full-stack web app for managing Chemistry Lab apparatuses and consumables.",
    techStack: ["PHP", "MySQL", "Bootstrap", "XAMPP"],
    githubLink: "#",
  },
  {
    id: "2",
    title: "SMS Server Gateway",
    category: "Hybrid",
    status: "In Progress",
    description: "An IoT system using SIM900A and Arduino to send SMS alerts from a Proxmox server.",
    techStack: ["Arduino", "SIM900A", "Proxmox LXC", "Node.js"],
    githubLink: "#",
  },
  {
    id: "3",
    title: "Raspberry Pi Mini NAS",
    category: "Hardware",
    status: "Upcoming",
    description: "Converting a Raspberry Pi 3 B+ into a network attached storage using 2.5\" laptop HDDs.",
    techStack: ["Raspberry Pi", "Linux", "Samba", "Hardware Mod"],
  },
  {
    id: "4",
    title: "Local LLM Server",
    category: "Software",
    status: "In Progress",
    description: "Running a private AI model on a laptop with RTX 2050 using LM Studio.",
    techStack: ["Python", "LM Studio", "AI/ML"],
  },
]

// --- 2. HELPER COMPONENTS ---

// This helper function returns the correct color/style for each status
function StatusBadge({ status }: { status: Project["status"] }) {
  const styles = {
    "Completed": "bg-green-500/15 text-green-700 hover:bg-green-500/25 border-green-200", // Greenish
    "In Progress": "bg-blue-500/15 text-blue-700 hover:bg-blue-500/25 border-blue-200",   // Blueish
    "Upcoming": "text-muted-foreground border-dashed border-gray-400",                   // Gray dashed
  }
  
  return (
    <Badge variant="outline" className={`${styles[status]} border px-2 py-0.5`}>
      {status}
    </Badge>
  )
}

export default function ProjectsPage() {
  // Filter logic
  const softwareProjects = projects.filter(p => p.category === "Software" || p.category === "Hybrid")
  const hardwareProjects = projects.filter(p => p.category === "Hardware" || p.category === "Hybrid")

  return (
    <div className="container mx-auto min-h-screen py-10 px-4">
      <div className="mb-8 flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">My Projects</h1>
        <p className="text-muted-foreground">
          A showcase of my software development and hardware engineering work.
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="software">Software</TabsTrigger>
          <TabsTrigger value="hardware">Hardware</TabsTrigger>
        </TabsList>

        {/* TAB: ALL PROJECTS */}
        <TabsContent value="all" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>

        {/* TAB: SOFTWARE */}
        <TabsContent value="software" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {softwareProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>

        {/* TAB: HARDWARE */}
        <TabsContent value="hardware" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {hardwareProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// --- 3. THE CARD COMPONENT (Reusable) ---
function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.category}</CardDescription>
          </div>
          <StatusBadge status={project.status} />
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 pt-4">
        {project.githubLink && (
          <Button variant="outline" size="sm" asChild>
            <Link href={project.githubLink} target="_blank">
              <Github className="mr-2 h-4 w-4" /> Code
            </Link>
          </Button>
        )}
        {project.demoLink && (
          <Button size="sm" asChild>
            <Link href={project.demoLink} target="_blank">
              <Globe className="mr-2 h-4 w-4" /> Demo
            </Link>
          </Button>
        )}
        {!project.githubLink && !project.demoLink && (
             <span className="text-xs text-muted-foreground italic">Internal / Offline Project</span>
        )}
      </CardFooter>
    </Card>
  )
}