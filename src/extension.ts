import * as vscode from "vscode";
import { generateReadme } from "./main.js";

export function activate(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand(
		"readme-generator.generate",
		async () => {
			let result = generateReadme(
				"C://Users//gillm//Mattias-web//Mattias-web//frontend",
			);

			if (result == null) {
				result = "null";
			}

			vscode.window.showInformationMessage(result);
		},
	);
}
