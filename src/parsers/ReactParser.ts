import type { ProjectParser } from "./ProjectParser.js";
import type { ParsedProject } from "./ParsedProject.js";

export default class ReactParser implements ProjectParser {
	parseProject(workSpacePath: string): ParsedProject {
		return {
			name: "React name example",
			framework: "React",
			dependencies: ["react"],
		};
	}
}
