---
title: "StoryModeBanditDensityModel"
description: "StoryModeBanditDensityModel 的自动生成类参考。"
---
# StoryModeBanditDensityModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModeBanditDensityModel : BanditDensityModel`
**Base:** `BanditDensityModel`
**File:** `StoryMode/GameComponents/StoryModeBanditDensityModel.cs`

## 概述

`StoryModeBanditDensityModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `StoryModeBanditDensityModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `NumberOfMaximumBanditPartiesAroundEachHideout` | `public override int NumberOfMaximumBanditPartiesAroundEachHideout { get; }` |
| `NumberOfMaximumBanditPartiesInEachHideout` | `public override int NumberOfMaximumBanditPartiesInEachHideout { get; }` |
| `NumberOfMaximumHideoutsAtEachBanditFaction` | `public override int NumberOfMaximumHideoutsAtEachBanditFaction { get; }` |
| `NumberOfInitialHideoutsAtEachBanditFaction` | `public override int NumberOfInitialHideoutsAtEachBanditFaction { get; }` |
| `NumberOfMinimumBanditPartiesInAHideoutToInfestIt` | `public override int NumberOfMinimumBanditPartiesInAHideoutToInfestIt { get; }` |
| `NumberOfMinimumBanditTroopsInHideoutMission` | `public override int NumberOfMinimumBanditTroopsInHideoutMission { get; }` |
| `NumberOfMaximumTroopCountForFirstFightInHideout` | `public override int NumberOfMaximumTroopCountForFirstFightInHideout { get; }` |
| `NumberOfMaximumTroopCountForBossFightInHideout` | `public override int NumberOfMaximumTroopCountForBossFightInHideout { get; }` |
| `SpawnPercentageForFirstFightInHideoutMission` | `public override float SpawnPercentageForFirstFightInHideoutMission { get; }` |

## 主要方法

### GetMaximumTroopCountForHideoutMission
`public override int GetMaximumTroopCountForHideoutMission(MobileParty party)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 maximum troop count for hideout mission 的结果。

```csharp
// 先通过子系统 API 拿到 StoryModeBanditDensityModel 实例
StoryModeBanditDensityModel storyModeBanditDensityModel = ...;
var result = storyModeBanditDensityModel.GetMaximumTroopCountForHideoutMission(party);
```

### IsPositionInsideNavalSafeZone
`public override bool IsPositionInsideNavalSafeZone(CampaignVec2 position)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 position inside naval safe zone 状态或条件。

```csharp
// 先通过子系统 API 拿到 StoryModeBanditDensityModel 实例
StoryModeBanditDensityModel storyModeBanditDensityModel = ...;
var result = storyModeBanditDensityModel.IsPositionInsideNavalSafeZone(position);
```

### GetMaxSupportedNumberOfLootersForClan
`public override int GetMaxSupportedNumberOfLootersForClan(Clan clan)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 max supported number of looters for clan 的结果。

```csharp
// 先通过子系统 API 拿到 StoryModeBanditDensityModel 实例
StoryModeBanditDensityModel storyModeBanditDensityModel = ...;
var result = storyModeBanditDensityModel.GetMaxSupportedNumberOfLootersForClan(clan);
```

### GetMinimumTroopCountForHideoutMission
`public override int GetMinimumTroopCountForHideoutMission(MobileParty party)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 minimum troop count for hideout mission 的结果。

```csharp
// 先通过子系统 API 拿到 StoryModeBanditDensityModel 实例
StoryModeBanditDensityModel storyModeBanditDensityModel = ...;
var result = storyModeBanditDensityModel.GetMinimumTroopCountForHideoutMission(party);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<StoryModeBanditDensityModel>(new MyStoryModeBanditDensityModel());
```

## 参见

- [本区域目录](../)