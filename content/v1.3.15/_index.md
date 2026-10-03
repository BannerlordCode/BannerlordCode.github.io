---
title: Bannerlord v1.3.15 文档 / Bannerlord v1.3.15 Documentation
description: Bannerlord 模块编辑器 v1.3.15 完整文档 / Complete documentation for Bannerlord modding SDK v1.3.15
---
# Bannerlord v1.3.15 / 骑砍2 v1.3.15

## Mental Model

Treat `Bannerlord v1.3.15` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

欢迎来到 Bannerlord v1.3.15 模块编辑文档。

Welcome to the Bannerlord v1.3.15 modding documentation.

## 内容导航 / Navigation

- [指南 / Guide](./zh/guide/)
- [API 参考 / API Reference](./zh/api/)
- [XML 参考 / XML Reference](./zh/xml-reference/)
- [原生接口 / Native Reference](./zh/native/)
- [Native 1.3.15 源码参考 / Native 1.3.15 Source Reference](./zh/native-1.3.15-src/)
- [架构 / Architecture](./zh/architecture/)

## 本版本怎么用

**定位：长期稳定基线。** 站内把它标为「最新稳定版」，也是跨版本逐类对比的**上界版本**。
要一个「和大多数 mod 社区对得上」的文档版本，读这一版。

**modder 的第一步**：
① [模组工作流](./zh/guide/mod-workflow) 建工程 →
② [模块系统](./zh/architecture/module-system) 搞清加载 →
③ [MBSubModuleBase](./zh/api/core/MBSubModuleBase) 写第一个入口类。
整条路径见 [让 mod 被加载](../versions/task-mod-bootstrap)。

**这一版特有的坑**（实测，非推测）：

- **它是站内唯一有完整 `guide` 散文层的版本**（17 篇：上手、战役系统、任务系统、
  Gauntlet UI、存档、常见模式、排错）。别处讲流程的深度都不如这里，
  遇到「怎么做」类问题先搜本页的 `guide`。
- **`save-system` 是这一版才有的独立桶。** 1.3.0 没有它。
  存档相关见 [存档系统](./zh/architecture/save-system) 与 [存档指南](./zh/guide/save-system-guide)。
- **桶名与 1.3.0 不同**：1.3.0 有 `gameplay`，这一版没有。
  升级时同一类会换桶，见 [版本差异](./zh/architecture/version-delta)。
- **类页数量在本组三版里最大但带生成标记的比例也高。**
  签名可参考，行为描述请回源码核对。
- **`native-1.3.15-src` 是这一版（及 1.4.5）特有的域**，不是通用域。
  别的版本没有这个目录。

## 导航

- ↑ [站点首页](../) —— 全部版本与「按我要做什么进入」
- ↔ [中文文档](./zh/) · [English documentation](./en/)
- ↘ [指南](./zh/guide/) · [API 参考](./zh/api/) · [架构](./zh/architecture/)
- ↘ [版本差异](./zh/architecture/version-delta) · [跨版本类对比](../versions/)


## 版本信息 / Version Info

- **游戏版本**: 1.3.15
- **发布日期**: 2024
- **主要更新**: SaveSystem 重构, 新增更多 [Obsolete] 标记


## Usage Example

```csharp
// Use the navigation below to explore guides, API reference, and architecture.
```

<!-- BEGIN SECTION INDEX -->

## 语言选择 / Select Language

- [English Documentation](./en/)
- [中文文档 / Chinese Documentation](./zh/)

<!-- END SECTION INDEX -->
