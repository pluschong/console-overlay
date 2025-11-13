import { SafeAny, SafeArray } from '@pluschong/safe-type';
import { outputConsoleLog, overlayConsole } from './overlay';

interface SrvCfg {
	/** 打印error */
	enableError: boolean;
	/** 打印info */
	enableInfo: boolean;
}

class ConsoleService {
	static instance: ConsoleService;
	static getInstance() {
		if (!this.instance) {
			this.instance = new ConsoleService();
		}
		return this.instance;
	}

	private config: SrvCfg = {
		enableError: true,
		enableInfo: true
	};

	constructor() {
		overlayConsole();
	}

	setConfig(cfg: Partial<SrvCfg>) {
		this.config = { ...this.config, ...cfg };
	}

	/**
	 * 错误信息
	 */
	error(tag: string, err: SafeAny) {
		if (this.config.enableError) {
			this.print(tag, err, 'red');
		}
	}

	/**
	 * 警告信息
	 */
	warn(tag: string, data: SafeAny) {
		this.print(tag, data, 'yellow');
	}

	/**
	 * 调试信息
	 */
	info(tag: string, data: SafeAny, color?: string) {
		if (this.config.enableInfo) {
			this.print(tag, data, color);
		}
	}

	/**
	 * 自定义输出log
	 * @param info - log的参数
	 * @param args - groupCollapsed的参数
	 */
	custom(info: SafeAny, ...args: SafeArray) {
		if (this.config.enableInfo) outputConsoleLog(info, ...args);
	}

	private print(tag: string, info: SafeAny, color = 'grey') {
		outputConsoleLog(info, `%c ${tag}`, `color:${color};font-size:12px;font-weight:bold;`);
	}
}

export const consoleSrv = ConsoleService.getInstance();
