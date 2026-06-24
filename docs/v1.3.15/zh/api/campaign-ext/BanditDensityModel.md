<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BanditDensityModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BanditDensityModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class BanditDensityModel : MBGameModel<BanditDensityModel>`
**Base:** `MBGameModel<BanditDensityModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/BanditDensityModel.cs`

## 概述

`BanditDensityModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `BanditDensityModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `NumberOfMinimumBanditPartiesInAHideoutToInfestIt` | `public abstract int NumberOfMinimumBanditPartiesInAHideoutToInfestIt { get; }` |
| `NumberOfMaximumBanditPartiesInEachHideout` | `public abstract int NumberOfMaximumBanditPartiesInEachHideout { get; }` |
| `NumberOfMaximumBanditPartiesAroundEachHideout` | `public abstract int NumberOfMaximumBanditPartiesAroundEachHideout { get; }` |
| `NumberOfMaximumHideoutsAtEachBanditFaction` | `public abstract int NumberOfMaximumHideoutsAtEachBanditFaction { get; }` |
| `NumberOfInitialHideoutsAtEachBanditFaction` | `public abstract int NumberOfInitialHideoutsAtEachBanditFaction { get; }` |
| `NumberOfMinimumBanditTroopsInHideoutMission` | `public abstract int NumberOfMinimumBanditTroopsInHideoutMission { get; }` |
| `NumberOfMaximumTroopCountForFirstFightInHideout` | `public abstract int NumberOfMaximumTroopCountForFirstFightInHideout { get; }` |
| `NumberOfMaximumTroopCountForBossFightInHideout` | `public abstract int NumberOfMaximumTroopCountForBossFightInHideout { get; }` |
| `SpawnPercentageForFirstFightInHideoutMission` | `public abstract float SpawnPercentageForFirstFightInHideoutMission { get; }` |

## 主要方法

### GetMaxSupportedNumberOfLootersForClan
`public abstract int GetMaxSupportedNumberOfLootersForClan(Clan clan)`

**用途 / Purpose:** 获取 `max supported number of looters for clan` 的当前值。

### GetMinimumTroopCountForHideoutMission
`public abstract int GetMinimumTroopCountForHideoutMission(MobileParty party, bool isAssault)`

**用途 / Purpose:** 获取 `minimum troop count for hideout mission` 的当前值。

### GetMaximumTroopCountForHideoutMission
`public abstract int GetMaximumTroopCountForHideoutMission(MobileParty party, bool isAssault)`

**用途 / Purpose:** 获取 `maximum troop count for hideout mission` 的当前值。

### IsPositionInsideNavalSafeZone
`public abstract bool IsPositionInsideNavalSafeZone(CampaignVec2 position)`

**用途 / Purpose:** 处理 `is position inside naval safe zone` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomBanditDensityModel();
```

## 参见

- [完整类目录](../catalog)