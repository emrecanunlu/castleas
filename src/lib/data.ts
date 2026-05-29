import { projects, services, type Project, type Service } from "./constants";

export function getServiceById(id: string): Service | undefined {
  return services.find((service) => service.id === id);
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}

export function getAllServiceIds(): string[] {
  return services.map((service) => service.id);
}

export function getAllProjectIds(): string[] {
  return projects.map((project) => project.id);
}
