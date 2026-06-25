---
title: "DefaultSiegeLordsHallFightModel"
description: "DefaultSiegeLordsHallFightModel 的自动生成类参考。"
---
# DefaultSiegeLordsHallFightModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSiegeLordsHallFightModel : SiegeLordsHallFightModel`
**Base:** `SiegeLordsHallFightModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultSiegeLordsHallFightModel.cs`

## 概述

`DefaultSiegeLordsHallFightModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultSiegeLordsHallFightModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetPriorityListForLordsHallFightMission
`public override FlattenedTroopRoster GetPriorityListForLordsHallFightMission(MapEvent playerMapEvent, BattleSideEnum side, int troopCount)`

**用途 / Purpose:** 读取并返回当前对象中 「priority list for lords hall fight mission」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultSiegeLordsHallFightModel 实例
DefaultSiegeLordsHallFightModel defaultSiegeLordsHallFightModel = ...;
var result = defaultSiegeLordsHallFightModel.GetPriorityListForLordsHallFightMission(playerMapEvent, side, 0);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultSiegeLordsHallFightModel>(new MyDefaultSiegeLordsHallFightModel());
```

## 参见

- [本区域目录](../)