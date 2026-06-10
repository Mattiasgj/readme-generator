import { ProjectDetectionService } from "./detectors/ProjectDetectorService.js";
import ReactDetector from "./detectors/ReactDetector.js";

export function generateReadme(workspacePath: string) {
	const projectDetectionService = new ProjectDetectionService([
		new ReactDetector(),
	]);

	const projectType = projectDetectionService.detect(workspacePath);

	return projectType;
}
