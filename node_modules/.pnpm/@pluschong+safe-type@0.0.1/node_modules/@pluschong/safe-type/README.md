
# @pluschong/safe-type

> TypeScript 通用类型库

许多项目的 lint 规则会禁止使用 `any`，但在实际开发中某些场景难以避免，或为了降低临时工作量会选择使用 `any`。为此，本库提供一组常用的 TypeScript 通用类型，方便在必要时统一处理并减少 lint 报错。注意：这些类型本质上仍相当于 `any`，会降低类型安全性，仅在确有必要时使用，并优先采用更精确的类型定义以遵循项目的 TypeScript 规范。

---

## 安装

```bash
npm install @pluschong/safe-type
# 或者
pnpm add @pluschong/safe-type
# 或者
yarn add @pluschong/safe-type
```

## 使用方法

```ts
import type { SafeAny, SafeArray, SafeObject, SafeTimer } from '@pluschong/safe-type';

function example(a: SafeAny): SafeArray {
	const arr: SafeArray = [a, 1, 'test'];
	return arr;
}

const obj: SafeObject = { foo: 1, bar: 'baz' };

let timer: SafeTimer;
timer = setTimeout(() => {}, 1000);
timer = setInterval(() => {}, 1000);
```

## 类型说明

- `SafeAny`：等价于 `any`，用于特殊场景下绕过类型检查。
- `SafeArray`：等价于 `any[]`，任意类型数组。
- `SafeObject`：键为 `string | number`，值为 `any` 的对象。
- `SafeTimer`：`setTimeout` 或 `setInterval` 返回值。

## 注意事项

- 这些类型仅用于特殊场景，建议优先使用更严格的类型定义。
- 滥用这些类型会降低 TypeScript 的类型安全性。

## License

MIT
