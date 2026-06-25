---
title: ItemObject 跨版本对比 / Cross-Version Comparison
extra:
  sidebar: auto
---
# ItemObject

## Mental Model

Treat `ItemObject` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

本页比较 `ItemObject` 在 **1.3.0 / 1.3.15 / 1.4.5** 三个版本的可访问 API 变化（public/protected/internal，不含 private），数据由 [`tools/class-version-diff.mjs`](https://github.com/BannerlordCode/BannerlordCode.github.io/tree/main/tools/class-version-diff.mjs) 从源码自动提取。该模块属于“精选跨版本对比”集合，而不是全站所有类型的全量对比表。

This page compares the accessible API of `ItemObject` across **1.3.0 / 1.3.15 / 1.4.5** (public/protected/internal, excluding private), extracted from source by `tools/class-version-diff.mjs`. It is part of a selected cross-version set, not a full matrix of every type in the site.

> **重新生成 / Regenerate**
> 源码更新后，在仓库根目录运行：`node BannerlordCode.github.io/tools/gen-version-pages.mjs`
> After source updates, run from repo root: `node BannerlordCode.github.io/tools/gen-version-pages.mjs`

## 对 modder 的影响 / Impact for modders

**中文：** 1.3.15 相比 1.3.0 新增 3 个成员、移除 1 个；1.4.5 与 1.3.15 一致。升级到 1.3.15+ 的物品 mod 需留意 1.3.15 的新增 API，之后可稳定跨到 1.4.5。

**English:** 1.3.15 adds 3 members and removes 1 over 1.3.0; 1.4.5 matches 1.3.15. Item mods upgrading to 1.3.15+ should adopt the new API, after which they port cleanly to 1.4.5.

---


> 自动生成自源码 API 提取（`tools/class-version-diff.mjs`）。比较 1.3.0 / 1.3.15 / 1.4.5 的可访问成员签名（public/protected/internal，不含 private）。

## 源文件与声明 / Source files & declaration

| 版本 Version | 文件 File | 行数 Lines |
|------|------|------|
| 1.3.0 | `bannerlord-1.3.0/TaleWorlds.Core/ItemObject.cs` | 1370 |
| 1.3.15 | `bannerlord-1.3.15/TaleWorlds.Core/ItemObject.cs` | 1379 |
| 1.4.5 | `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/ItemObject.cs` | 960 |

**类声明 / Class declaration:**
- **1.3.0:** `public sealed class ItemObject : MBObjectBase`
- **1.3.15:** `public sealed class ItemObject : MBObjectBase`
- **1.4.5:** `public sealed class ItemObject : MBObjectBase`

## 成员数量 / Member counts

| 版本 Version | 成员数 Members (excl. private) |
|------|------|
| 1.3.0 | 79 |
| 1.3.15 | 81 |
| 1.4.5 | 81 |

## 1.3.0 → 1.3.15 变化 / Changes

**新增 Added (3):** `IsUniqueItem`, `IsTransferable`, `SetCraftedWeaponName`

**移除 Removed (1):** `SetName`

## 1.3.15 → 1.4.5 变化 / Changes

**新增 Added (0):** 无 none

**移除 Removed (0):** 无 none

<!-- BEGIN CROSSVERSION-BACKLINK -->

## 返回类参考 / Back to Class Reference

| 版本 Version | 语言 Lang | 链接 |
|------|------|------|
| v1.3.0 | 🇨🇳 中文 | [v1.3.0 ItemObject](/v1.3.0/zh/api/core-extra/ItemObject) |
| v1.3.0 | 🇬🇧 English | [v1.3.0 ItemObject](/v1.3.0/en/api/core-extra/ItemObject) |
| v1.3.15 | 🇨🇳 中文 | [v1.3.15 ItemObject](/v1.3.15/zh/api/core-extra/ItemObject/) |
| v1.3.15 | 🇬🇧 English | [v1.3.15 ItemObject](/v1.3.15/en/api/core-extra/ItemObject/) |
| v1.4.5 | 🇨🇳 中文 | [v1.4.5 ItemObject](/v1.4.5/zh/api/core-extra/ItemObject) |
| v1.4.5 | 🇬🇧 English | [v1.4.5 ItemObject](/v1.4.5/en/api/core-extra/ItemObject) |

<!-- END CROSSVERSION-BACKLINK -->

## Usage Example

```csharp
// Compare class APIs across versions using the notes above.
```
