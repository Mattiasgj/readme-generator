import type { ProjectDetector } from "./ProjectDetector.ts";

export class ProjectDetectionService {
	constructor(private detectors: ProjectDetector[]) {}

	detect(workspacePath: string): string | null {
		for (const detector of this.detectors) {
			const result = detector.detectProjectType(workspacePath);

			if (result) {
				return result;
			}
		}

		return null;
	}
}
