import { ProjectDetectionService } from "./detectors/ProjectDetectorService.js";
import ReactDetector from "./detectors/ReactDetector.js";

import { ProjectParserService } from "./parsers/ProjectParserService.js";
import ReactParser from "./parsers/ReactParser.js";

export function generateReadme(workspacePath: string) {
	const projectDetectionService = new ProjectDetectionService([
		new ReactDetector(),
	]);

	let projectType = projectDetectionService.detect(workspacePath);

	if (projectType == null) {
		projectType = "null";
	}

	const projectParserService = new ProjectParserService(
		new Map([["React", new ReactParser()]]),
	);

	const projectParsed = projectParserService.parse(
		projectType,
		workspacePath,
	);

	console.log("the detected project type is: " + projectType);

	console.log("Parsed project: \n", JSON.stringify(projectParsed));

	return projectType;
}
