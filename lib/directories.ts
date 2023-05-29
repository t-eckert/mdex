import { directories } from "../mocks"

import type { Directory } from "./interfaces"

export const loadDirectories = (path: string): Directory[] => {
	return directories
}
