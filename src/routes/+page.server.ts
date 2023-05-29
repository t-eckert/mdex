import type { PageServerLoad } from "./$types"
import { loadDirectories } from "../../lib/directories"
import { loadFiles } from "../../lib/files"
import { loadMarkdown } from "../../lib/markdown"

export const load = (() => {
	const path = ""
	return {
		directories: loadDirectories(path),
		files: loadFiles(path),
		markdown: loadMarkdown(path),
	}
}) satisfies PageServerLoad
