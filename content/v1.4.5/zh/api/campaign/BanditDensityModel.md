---
title: "BanditDensityModel"
description: "BanditDensityModel 的自动生成类参考。"
---
# BanditDensityModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class BanditDensityModel : MBGameModel<BanditDensityModel>`
**Base:** `MBGameModel<BanditDensityModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/BanditDensityModel.cs`

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

**用途 / Purpose:** 读取并返回当前对象中 「max supported number of looters for clan」 的结果。

```csharp
// 先通过子系统 API 拿到 BanditDensityModel 实例
BanditDensityModel banditDensityModel = ...;
var result = banditDensityModel.GetMaxSupportedNumberOfLootersForClan(clan);
```

### GetMinimumTroopCountForHideoutMission
`public abstract int GetMinimumTroopCountForHideoutMission(MobileParty party, bool isAssault)`

**用途 / Purpose:** 读取并返回当前对象中 「minimum troop count for hideout mission」 的结果。

```csharp
// 先通过子系统 API 拿到 BanditDensityModel 实例
BanditDensityModel banditDensityModel = ...;
var result = banditDensityModel.GetMinimumTroopCountForHideoutMission(party, false);
```

### GetMaximumTroopCountForHideoutMission
`public abstract int GetMaximumTroopCountForHideoutMission(MobileParty party, bool isAssault)`

**用途 / Purpose:** 读取并返回当前对象中 「maximum troop count for hideout mission」 的结果。

```csharp
// 先通过子系统 API 拿到 BanditDensityModel 实例
BanditDensityModel banditDensityModel = ...;
var result = banditDensityModel.GetMaximumTroopCountForHideoutMission(party, false);
```

### IsPositionInsideNavalSafeZone
`public abstract bool IsPositionInsideNavalSafeZone(CampaignVec2 position)`

**用途 / Purpose:** 判断当前对象是否处于 「position inside naval safe zone」 状态或条件。

```csharp
// 先通过子系统 API 拿到 BanditDensityModel 实例
BanditDensityModel banditDensityModel = ...;
var result = banditDensityModel.IsPositionInsideNavalSafeZone(position);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
BanditDensityModel instance = ...;
```

## 参见

- [本区域目录](../)