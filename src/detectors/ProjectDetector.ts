export interface ProjectDetector {
	detectProjectType(workSpacePath: string): string | null;
}
