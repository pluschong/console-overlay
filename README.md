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
import consoleOverlay from '@pluschong/console-overlay';

// 使用封装后的 console 方法
consoleOverlay.log('普通日志');
consoleOverlay.warn('警告信息');
consoleOverlay.error('错误信息');
consoleOverlay.info('提示信息');
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
