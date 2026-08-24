import { projects } from '../data/projects'
// Async boundary for a future API; the UI can keep its TanStack Query contract.
export async function getProjects() { return Promise.resolve(projects) }
