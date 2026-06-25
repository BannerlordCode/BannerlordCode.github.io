---
title: "SiegeLordsHallFightModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SiegeLordsHallFightModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SiegeLordsHallFightModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SiegeLordsHallFightModel : MBGameModel<SiegeLordsHallFightModel>`
**Base:** `MBGameModel<SiegeLordsHallFightModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SiegeLordsHallFightModel.cs`

## 概述

`SiegeLordsHallFightModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `SiegeLordsHallFightModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `AreaLostRatio` | `public abstract float AreaLostRatio { get; }` |
| `AttackerDefenderTroopCountRatio` | `public abstract float AttackerDefenderTroopCountRatio { get; }` |
| `DefenderTroopNumberForSuccessfulPullBack` | `public abstract int DefenderTroopNumberForSuccessfulPullBack { get; }` |
| `DefenderMaxArcherRatio` | `public abstract float DefenderMaxArcherRatio { get; }` |
| `MaxDefenderSideTroopCount` | `public abstract int MaxDefenderSideTroopCount { get; }` |
| `MaxDefenderArcherCount` | `public abstract int MaxDefenderArcherCount { get; }` |
| `MaxAttackerSideTroopCount` | `public abstract int MaxAttackerSideTroopCount { get; }` |

## 主要方法

### GetPriorityListForLordsHallFightMission
`public abstract FlattenedTroopRoster GetPriorityListForLordsHallFightMission(MapEvent playerMapEvent, BattleSideEnum side, int troopCount)`

**用途 / Purpose:** 获取 `priority list for lords hall fight mission` 的当前值。

## 使用示例

```csharp
var implementation = new CustomSiegeLordsHallFightModel();
```

## 参见

- [完整类目录](../catalog)