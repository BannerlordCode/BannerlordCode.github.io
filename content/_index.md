---
title: Bannerlord Modding Wiki
description: Bannerlord Modding SDK Documentation — bilingual module architecture guide and API reference
extra:
  layout: home
  titleTemplate: false
---
# Bannerlord Modding Wiki / 骑砍2模组编辑维基

## Mental Model

Treat `Bannerlord Modding Wiki` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

> **推荐起点 / Recommended starting point**
> 先从 **版本首页** 进入，再走 **架构总览 → API 目录 → 类页** 这条树；需要迁移时再回到 **跨版本对比**。
> Start from a **version home**, then follow **architecture → API catalog → class page**; use **cross-version compare** when migrating.

## 选择版本 / Select Version

| 版本 Version | 描述 Description | 文档 Documentation |
|-------------|-----------------|-------------------|
| **v1.3.15** | 最新稳定版 / Latest stable | [查看文档 / View Docs](./v1.3.15/) |
| **v1.4.5**  | 源码可用 / Source available | [查看文档 / View Docs](./v1.4.5/) |
| **v1.3.0**  | 早期版本 / Earlier version | [查看文档 / View Docs](./v1.3.0/) |

## 版本对比 / Version Comparison

> **跨版本迁移 / Cross-version migration**
> - [🔀 跨版本类对比（逐类 API 差异）](./versions/) — 同一类在 1.3.0/1.3.15/1.4.5 的 API 变化
> - [版本差异（模块 + 类级速览）](./v1.3.15/zh/architecture/version-delta) — 破坏性移除/新功能/稳定类总表
> - [🔀 Cross-Version Class Comparison](./versions/) — per-class API deltas across 1.3.0/1.3.15/1.4.5

### v1.3.15 (最新 / Latest)
- SaveSystem 重构 / SaveSystem refactored
- 更多 [Obsolete] 标记 / More [Obsolete] markers
- 23 个新模块 / 23 new modules
- TaleWorlds.Native.dll v1.3.15 源码索引 / TaleWorlds.Native.dll v1.3.15 source index

### v1.4.5 (整理中 / In preparation)
- 65 个 TaleWorlds DLL；多人/自定义战斗拆分 / 65 TaleWorlds DLLs; multiplayer/custom battle split
- 14 新模块、4 移除 / 14 new, 4 removed modules
- 源码反编译进行中 / Source decompilation in progress

### v1.3.0 (早期 / Earlier)
- 原始版本 / Original version
- 基础文档 / Base documentation

## 关于 / About

这里是 Bannerlord 模块编辑器的完整文档。

欢迎来到 Bannerlord Modding Wiki!

## 内容 / Contents

- **架构总览 / Architecture hub** - 先看模块地图，再进入 API 目录和版本差异
- **API 目录 / API catalog** - 按领域找到类，再沿面包屑回到领域入口
- **跨版本对比 / Cross-version compare** - 逐类看 1.3.0 / 1.3.15 / 1.4.5 的 API 演化
- **原生接口 / Native interface** - P/Invoke 与原生引擎交互 / Interact with native engine via P/Invoke
- **源码索引 / Source index** - 导出函数、类型定义和反编译函数索引 / Exports, type definitions, and decompiled function index

## 状态 / Status

> **文档已迁移 / Migration Complete**
> 本站已从 VitePress 迁移至 Zola，现有路由和文档内容保持不变。
>
> The site has been migrated from VitePress to Zola. Existing routes and documentation are preserved.

## 链接 / Links

- **GitHub Organization**: https://github.com/BannerlordCode
- **Official Modding Forum**: https://forums.taleworlds.com/


## 使用方式 / How to Use

1. 先选择版本。
2. 再从架构总览或 API 目录进入具体子系统。
3. 进入类页后，使用 breadcrumb 返回版本页、领域页或跨版本对比页。

## Usage Example

```csharp
// Pick a version from the top navigation: v1.3.15, v1.3.0, or v1.4.5.
```

<!-- BEGIN SECTION INDEX -->

## 站点栏目 / Site Sections

- [Bannerlord v1.3.0 文档 / Bannerlord v1.3.0 Documentation](./v1.3.0/)
- [Bannerlord v1.3.15 文档 / Bannerlord v1.3.15 Documentation](./v1.3.15/)
- [Bannerlord v1.4.5](./v1.4.5/)
- [跨版本类对比 / Cross-Version Class Comparison](./versions/)

<!-- END SECTION INDEX -->
