---
title: KingdomManager 跨版本对比 / Cross-Version Comparison
extra:
  sidebar: auto
---
# KingdomManager

## Mental Model

Treat `KingdomManager` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

本页比较 `KingdomManager` 在 **1.3.0 / 1.3.15 / 1.4.5** 三个版本的可访问 API 变化（public/protected/internal，不含 private），数据由 [`tools/class-version-diff.mjs`](https://github.com/BannerlordCode/BannerlordCode.github.io/tree/main/tools/class-version-diff.mjs) 从源码自动提取。该模块属于“精选跨版本对比”集合，而不是全站所有类型的全量对比表。

This page compares the accessible API of `KingdomManager` across **1.3.0 / 1.3.15 / 1.4.5** (public/protected/internal, excluding private), extracted from source by `tools/class-version-diff.mjs`. It is part of a selected cross-version set, not a full matrix of every type in the site.

> **重新生成 / Regenerate**
> 源码更新后，在仓库根目录运行：`node BannerlordCode.github.io/tools/gen-version-pages.mjs`
> After source updates, run from repo root: `node BannerlordCode.github.io/tools/gen-version-pages.mjs`

## 对 modder 的影响 / Impact for modders

**中文：** 1.4.5 移除 `UpdateLordPartyVariablesRelatedToSettlements`、`GetEligibleClansForSettlementOwnershipGift`、`QuarterHourlyTick`；未新增。王国管理逻辑精简/迁移。依赖这些方法的 mod 需找替代。

**English:** 1.4.5 removes `UpdateLordPartyVariablesRelatedToSettlements`, `GetEligibleClansForSettlementOwnershipGift`, `QuarterHourlyTick`; nothing added. Kingdom-management logic was slimmed/moved. Mods depending on these methods need replacements.

---


> 自动生成自源码 API 提取（`tools/class-version-diff.mjs`）。比较 1.3.0 / 1.3.15 / 1.4.5 的可访问成员签名（public/protected/internal，不含 private）。

## 源文件与声明 / Source files & declaration

| 版本 Version | 文件 File | 行数 Lines |
|------|------|------|
| 1.3.0 | `bannerlord-1.3.0/TaleWorlds.CampaignSystem/KingdomManager.cs` | 395 |
| 1.3.15 | `bannerlord-1.3.15/TaleWorlds.CampaignSystem/KingdomManager.cs` | 387 |
| 1.4.5 | `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/KingdomManager.cs` | 297 |

**类声明 / Class declaration:**
- **1.3.0:** `public class KingdomManager`
- **1.3.15:** `public class KingdomManager`
- **1.4.5:** `public class KingdomManager`

## 成员数量 / Member counts

| 版本 Version | 成员数 Members (excl. private) |
|------|------|
| 1.3.0 | 16 |
| 1.3.15 | 16 |
| 1.4.5 | 13 |

## 1.3.0 → 1.3.15 变化 / Changes

**新增 Added (0):** 无 none

**移除 Removed (0):** 无 none

## 1.3.15 → 1.4.5 变化 / Changes

**新增 Added (0):** 无 none

**移除 Removed (3):** `UpdateLordPartyVariablesRelatedToSettlements`, `GetEligibleClansForSettlementOwnershipGift`, `QuarterHourlyTick`

### 1.4.5 移除成员签名 / Removed in 1.4.5 (存在于 1.3.15)

| 成员 Member | 类型 Kind | 签名 Signature |
|------|------|------|
| `UpdateLordPartyVariablesRelatedToSettlements` | method | `static void UpdateLordPartyVariablesRelatedToSettlements()` |
| `GetEligibleClansForSettlementOwnershipGift` | method | `public IEnumerable<Clan> GetEligibleClansForSettlementOwnershipGift(Settlement settlement)` |
| `QuarterHourlyTick` | method | `static void QuarterHourlyTick(MBCampaignEvent campaignevent, object delegateparams)` |

<!-- BEGIN CROSSVERSION-BACKLINK -->

## 返回类参考 / Back to Class Reference

| 版本 Version | 语言 Lang | 链接 |
|------|------|------|
| v1.3.0 | 🇨🇳 中文 | [v1.3.0 KingdomManager](/v1.3.0/zh/api/campaign/KingdomManager) |
| v1.3.0 | 🇬🇧 English | [v1.3.0 KingdomManager](/v1.3.0/en/api/campaign/KingdomManager) |
| v1.3.15 | 🇨🇳 中文 | [v1.3.15 KingdomManager](/v1.3.15/zh/api/campaign-ext/KingdomManager) |
| v1.3.15 | 🇬🇧 English | [v1.3.15 KingdomManager](/v1.3.15/en/api/campaign-ext/KingdomManager) |
| v1.4.5 | 🇨🇳 中文 | [v1.4.5 KingdomManager](/v1.4.5/zh/api/campaign/KingdomManager) |
| v1.4.5 | 🇬🇧 English | [v1.4.5 KingdomManager](/v1.4.5/en/api/campaign/KingdomManager) |

<!-- END CROSSVERSION-BACKLINK -->

## Usage Example

```csharp
var example = new KingdomManager();
```
