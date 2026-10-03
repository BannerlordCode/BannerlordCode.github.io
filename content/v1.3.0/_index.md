---
title: Bannerlord v1.3.0 文档 / Bannerlord v1.3.0 Documentation
description: Bannerlord 模块编辑器 v1.3.0 完整文档 / Complete documentation for Bannerlord modding SDK v1.3.0
---
# Bannerlord v1.3.0 / 骑砍2 v1.3.0

## Mental Model

Treat `Bannerlord v1.3.0` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

欢迎来到 Bannerlord v1.3.0 模块编辑文档。

Welcome to the Bannerlord v1.3.0 modding documentation.

## 内容导航 / Navigation

- [指南 / Guide](./zh/guide/)
- [API 参考 / API Reference](./zh/api/)
- [XML 参考 / XML Reference](./zh/xml-reference/)
- [原生接口 / Native Reference](./zh/native/)
- [架构 / Architecture](./zh/architecture/)

## 本版本怎么用

**定位：本站收录的最早版本，只在两种情况下用**：你的 mod 要兼容 1.3.0，
或者你要读一份最早的 `guide` / `xml-reference` / `native` 散文来理解概念从哪来。
它不是「简化版」，只是更老。

**modder 的第一步**：先确认你真的需要这一版。站内六版的关系见
[站点首页](../)。

**这一版特有的坑**（实测，非推测）：

- **桶名与后来的版本不同。** v1.3.0 的 zh 桶集合里**有 `gameplay`**，
  而 v1.3.15 起就没有这个桶了。从 1.3.0 迁到 1.3.15 时，同一个类会换桶 ——
  别在 1.3.15 树里按 1.3.0 的路径去找。
- **这一版没有 `save-system` 桶。** v1.3.15 才把存档拆成独立的域。
  1.3.0 上的存档相关内容分散在别处，见 [指南](./zh/guide/)。
- **跨版本逐类对比只有到这一版为止。** `tools/class-version-diff.mjs` 的源码根
  写死为 1.3.0 / 1.3.15 / 1.4.5，所以 1.3.0 是逐类对比的**下界**，
  不存在「再往前一版」的对比。
- **它是这一组三版里最全的中英双树之一，但类页带生成标记的比例最高。**
  查到签名后请回源码核对，见 [常见问题](./zh/guide/common-issues)。

## 导航

- ↑ [站点首页](../) —— 全部版本与「按我要做什么进入」
- ↔ [中文文档](./zh/) · [English documentation](./en/)
- ↘ [指南](./zh/guide/) · [API 参考](./zh/api/) · [架构](./zh/architecture/)
- ↘ [跨版本类对比](../versions/)


## 版本信息 / Version Info

- **游戏版本**: 1.3.0
- **发布日期**: 2023
- **备注**: v1.3.0 是 v1.3.15 之前的版本


## Usage Example

```csharp
// Use the navigation below to explore guides, API reference, and architecture.
```

<!-- BEGIN SECTION INDEX -->

## 语言选择 / Select Language

- [English Documentation](./en/)
- [中文文档 / Chinese Documentation](./zh/)

<!-- END SECTION INDEX -->
