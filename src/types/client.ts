export interface ClientOptions<TProject = string> {
  token: string;
  project: TProject;
}

export interface ClientGenerics {
  channel?: string;
  event?: string;
  project?: string;
}
