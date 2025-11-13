import { SafeAny } from "@pluschong/safe-type";

// 保存原始的 console 对象和方法
export const originalConsole: Console = console;
export const originalInfo: typeof console.info = console.info;
export const originalLog: typeof console.log = console.log;
export const originalWarn: typeof console.warn = console.warn;
export const originalError: typeof console.error = console.error;
export const originalDebug: typeof console.debug = console.debug;
export const originalGroup: typeof console.group = console.group;
export const originalGroupCollapsed: typeof console.groupCollapsed = console.groupCollapsed;
export const originalGroupEnd: typeof console.groupEnd = console.groupEnd;
export const originalClear: typeof console.clear = console.clear;

// 重写全局 console 对象和方法
export function overlayConsole() {
	// @ts-ignore
	console = {
		...originalConsole,
		info: (...args: SafeAny[]) => {
			originalInfo.apply(originalConsole, args);
		},
		log: (...args: SafeAny[]) => {
			// 处理 log 逻辑
			formatLog(...args);
		},
		warn: (...args: SafeAny[]) => {
			originalWarn.apply(originalConsole, args);
		},
		error: (...args: SafeAny[]) => {
			originalError.apply(originalConsole, args);
		},
		debug: (...args: SafeAny[]) => {
			originalDebug.apply(originalConsole, args);
		},
		group: (...args: SafeAny[]) => {
			originalGroup.apply(originalConsole, args);
		},
		groupCollapsed: (...args: SafeAny[]) => {
			originalGroupCollapsed.apply(originalConsole, args);
		},
		groupEnd: () => {
			originalGroupEnd.apply(originalConsole);
		},
		clear: () => {
			originalClear.apply(originalConsole);
		}
	};
}

export function outputConsoleLog(info: SafeAny, ...args: SafeAny[]) {
	console.groupCollapsed(...args);
	originalLog.apply(originalConsole, Array.isArray(info) ? info : [info]);
	console.groupEnd();
}

function formatLog(...args: SafeAny[]) {
	if (!args || !args.length) return;

	const tag = `[未打tag] --> ${new Date().getTime()} --> ${(typeof args[0] === 'string' ? args[0] : JSON.stringify(args[0]))
		.slice(0, 10)
		.trim()
		.replace(/[\r\n]/g, '')}`;
	const color = '#fa8c16';
	outputConsoleLog(args, `%c ${tag}`, `color:${color};font-size:12px;font-weight:bold;`);
}
