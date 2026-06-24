---
title: HeroDeveloper 跨版本对比 / Cross-Version Comparison
sidebar: auto
---

# HeroDeveloper

## Mental Model

Treat `HeroDeveloper` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

本页比较 `HeroDeveloper` 在 **1.3.0 / 1.3.15 / 1.4.5** 三个版本的可访问 API 变化（public/protected/internal，不含 private），数据由 [`tools/class-version-diff.mjs`](https://github.com/BannerlordCode/BannerlordCode.github.io/tree/main/tools/class-version-diff.mjs) 从源码自动提取。该模块属于“精选跨版本对比”集合，而不是全站所有类型的全量对比表。

This page compares the accessible API of `HeroDeveloper` across **1.3.0 / 1.3.15 / 1.4.5** (public/protected/internal, excluding private), extracted from source by `tools/class-version-diff.mjs`. It is part of a selected cross-version set, not a full matrix of every type in the site.

::: tip 重新生成 / Regenerate
源码更新后，在仓库根目录运行：`node BannerlordCode.github.io/tools/gen-version-pages.mjs`
After source updates, run from repo root: `node BannerlordCode.github.io/tools/gen-version-pages.mjs`
:::

## 对 modder 的影响 / Impact for modders

**中文：** 

**English:** 

---


> 自动生成自源码 API 提取（`tools/class-version-diff.mjs`）。比较 1.3.0 / 1.3.15 / 1.4.5 的可访问成员签名（public/protected/internal，不含 private）。

## 源文件与声明 / Source files & declaration

| 版本 Version | 文件 File | 行数 Lines |
|------|------|------|
| 1.3.0 | `bannerlord-1.3.0/TaleWorlds.CampaignSystem/CharacterDevelopment/HeroDeveloper.cs` | 559 |
| 1.3.15 | `bannerlord-1.3.15/TaleWorlds.CampaignSystem/CharacterDevelopment/HeroDeveloper.cs` | 559 |
| 1.4.5 | `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CharacterDevelopment/HeroDeveloper.cs` | 505 |

**类声明 / Class declaration:**
- **1.3.0:** `public class HeroDeveloper`
- **1.3.15:** `public class HeroDeveloper`
- **1.4.5:** `public class HeroDeveloper`

## 成员数量 / Member counts

| 版本 Version | 成员数 Members (excl. private) |
|------|------|
| 1.3.0 | 39 |
| 1.3.15 | 39 |
| 1.4.5 | 41 |

## 1.3.0 → 1.3.15 变化 / Changes

**新增 Added (0):** 无 none

**移除 Removed (0):** 无 none

## 1.3.15 → 1.4.5 变化 / Changes

**新增 Added (2):** `ResetCharacterStats`, `ResetTotalXpForPlayerCharacter`

**移除 Removed (0):** 无 none

### 1.4.5 新增成员签名 / Added in 1.4.5

| 成员 Member | 类型 Kind | 签名 Signature |
|------|------|------|
| `ResetCharacterStats` | method | `public void ResetCharacterStats()` |
| `ResetTotalXpForPlayerCharacter` | method | `public void ResetTotalXpForPlayerCharacter()` |

<!-- BEGIN CROSSVERSION-BACKLINK -->

## 返回类参考 / Back to Class Reference

| 版本 Version | 语言 Lang | 链接 |
|------|------|------|
| v1.3.0 | 🇨🇳 中文 | [v1.3.0 HeroDeveloper](/v1.3.0/zh/api/campaign/HeroDeveloper) |
| v1.3.0 | 🇬🇧 English | [v1.3.0 HeroDeveloper](/v1.3.0/en/api/campaign/HeroDeveloper) |
| v1.3.15 | 🇨🇳 中文 | [v1.3.15 HeroDeveloper](/v1.3.15/zh/api/campaign-ext/HeroDeveloper) |
| v1.3.15 | 🇬🇧 English | [v1.3.15 HeroDeveloper](/v1.3.15/en/api/campaign-ext/HeroDeveloper) |
| v1.4.5 | 🇨🇳 中文 | [v1.4.5 HeroDeveloper](/v1.4.5/zh/api/campaign/HeroDeveloper) |
| v1.4.5 | 🇬🇧 English | [v1.4.5 HeroDeveloper](/v1.4.5/en/api/campaign/HeroDeveloper) |

<!-- END CROSSVERSION-BACKLINK -->

## Usage Example

```csharp
var example = new HeroDeveloper();
```
