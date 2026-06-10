import type { ProjectDetector } from "./ProjectDetector.ts";
import path from "node:path";
import fs from "fs";

export default class ReactDetector implements ProjectDetector {
	detectProjectType(workSpacePath: string): string | null {
		const packageJSONPath = path.join(workSpacePath, "package.json");
		if (!fs.existsSync(packageJSONPath)) {
			return null;
		}

		const packageJSON = JSON.parse(
			fs.readFileSync(packageJSONPath, "utf8"),
		);

		if (packageJSON.dependencies.react) {
			return "React";
		} else {
			return null;
		}
	}
}
