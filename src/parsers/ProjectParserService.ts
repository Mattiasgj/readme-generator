import ReactParser from "./ReactParser.js";
import type { ParsedProject } from "./ParsedProject.js";
import type { ProjectParser } from "./ProjectParser.js";

export class ProjectParserService {
	constructor(private parsers: Map<string, ProjectParser>) {}

	parse(projectType: string, workSpacePath: string) {
		const parser = this.parsers.get(projectType);

		if (!parser) {
			throw new Error(`No parser for ${projectType}`);
		}

		return parser.parseProject(workSpacePath);
	}
}
