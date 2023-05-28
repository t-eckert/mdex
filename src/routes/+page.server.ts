import type { PageServerLoad } from './$types';

export interface Directory {
	name: string;
	href: string;
}

const directories: Directory[] = [
	{
		name: 'Home',
		href: '/'
	},
	{
		name: 'Log',
		href: '/log'
	}
];

export interface File {
	name: string;
	href: string;
}

const files: File[] = [
	{
		name: 'README',
		href: '/README'
	},
	{
		name: 'LICENSE',
		href: '/LICENSE'
	}
];

const markdown = ``;

export const load = (() => {
	return {
		directories,
		files,
		markdown
	};
}) satisfies PageServerLoad;
