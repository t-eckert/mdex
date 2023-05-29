import { files } from "../mocks"
import type { File } from "./interfaces"

export const loadFiles = (path: string): File[] => {
	return files
}
