# @pluschong/console-overlay

> Console 日志美化工具

二次封装 console，提供美化的日志输出，保持 log 一致性。适用于需要统一日志格式、提升控制台输出可读性的场景。

---

## 安装

```bash
npm install @pluschong/console-overlay
# 或者
pnpm add @pluschong/console-overlay
# 或者
yarn add @pluschong/console-overlay
```

## 使用方法

```ts
import { consoleSrv } from '@pluschong/console-overlay';

// 错误信息（红色）
consoleSrv.error('ErrorTag', { message: 'Something went wrong' });

// 警告信息（黄色）
consoleSrv.warn('WarnTag', { data: 'Warning message' });

// 调试信息（可自定义颜色）
consoleSrv.info('InfoTag', { info: 'Debug info' });
consoleSrv.info('InfoTag', { info: 'Custom color' }, 'blue');

// 自定义输出
consoleSrv.custom({ message: 'Custom log' }, 'arg1', 'arg2');
```

## API 说明

### consoleSrv.error(tag: string, err: any)
输出错误信息（红色标签）

### consoleSrv.warn(tag: string, data: any)
输出警告信息（黄色标签）

### consoleSrv.info(tag: string, data: any, color?: string)
输出调试信息，可选自定义颜色

### consoleSrv.custom(info: any, ...args: any[])
自定义输出格式

### consoleSrv.setConfig(config: Partial<SrvCfg>)
配置日志开关
```ts
consoleSrv.setConfig({
  enableError: false,  // 关闭错误日志
  enableInfo: false    // 关闭调试日志
});
```

## 特性说明

- 🎨 美化的日志输出格式
- 📝 统一的日志样式
- 🔧 保持与原生 console API 的兼容性
- 📦 轻量级，无额外依赖

## 注意事项

- 本工具仅用于美化控制台输出，不影响原生 console 功能。
- 建议在开发环境使用，生产环境可根据需求选择。

## License

MIT
