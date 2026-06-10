import fs from "fs/promises";
import * as path from "path";

export async function findAllDirectories(workspacePath: string) {
	let dirs = (await fs.readdir(workspacePath)).map((item) =>
		path.join(workspacePath, item),
	);

	return dirs;
}
