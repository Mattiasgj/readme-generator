import type { ParsedProject } from "./ParsedProject.js";

export interface ProjectParser {
	parseProject(workspacePath: string): ParsedProject;
}
