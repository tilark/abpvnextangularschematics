export interface Schema {
  // The name of the service.
  name: string;

  dto: string;
  // The path to create the service.
  path?: string;

  // The name of the project.
  project?: string;

  flat?: boolean;

  skipTests?: boolean;
}
