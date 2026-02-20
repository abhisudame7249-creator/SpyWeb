import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const API_URL = import.meta.env.VITE_API_URL as string;

if (!API_URL) {
  throw new Error("VITE_API_URL is not defined");
}

interface Project {
  _id?: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  progress?: number;
  status?: string;
}

interface Client {
  _id: string;
  name: string;
  company: string;
}

const ManageProjects = () => {
  const { toast } = useToast();
  const [projects, setProjects] = useState<Project[]>([]);
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);

      // Fetch Projects (Required)
      const projectsRes = await fetch(`${API_URL}/api/projects`);

      if (!projectsRes.ok) {
        throw new Error("Failed to fetch projects");
      }

      const projectsData = await projectsRes.json();
      setProjects(projectsData);

      // Fetch Clients (Optional)
      try {
        const clientsRes = await fetch(`${API_URL}/api/clients`);
        if (clientsRes.ok) {
          const clientsData = await clientsRes.json();
          setClients(clientsData);
        }
      } catch {
        setClients([]);
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to load projects",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Manage Projects</h2>

      {loading ? (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="animate-spin" size={32} />
        </div>
      ) : projects.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <p>No projects found.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageProjects;
