---
title: "DefaultPartyDesertionModel"
description: "DefaultPartyDesertionModel 的自动生成类参考。"
---
# DefaultPartyDesertionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyDesertionModel : PartyDesertionModel`
**Base:** `PartyDesertionModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultPartyDesertionModel.cs`

## 概述

`DefaultPartyDesertionModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultPartyDesertionModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetMoraleThresholdForTroopDesertion
`public override int GetMoraleThresholdForTroopDesertion()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 morale threshold for troop desertion 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultPartyDesertionModel 实例
DefaultPartyDesertionModel defaultPartyDesertionModel = ...;
var result = defaultPartyDesertionModel.GetMoraleThresholdForTroopDesertion();
```

### GetDesertionChanceForTroop
`public override float GetDesertionChanceForTroop(MobileParty mobileParty, in TroopRosterElement troopRosterElement)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 desertion chance for troop 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultPartyDesertionModel 实例
DefaultPartyDesertionModel defaultPartyDesertionModel = ...;
var result = defaultPartyDesertionModel.GetDesertionChanceForTroop(mobileParty, troopRosterElement);
```

### GetTroopsToDesert
`public override TroopRoster GetTroopsToDesert(MobileParty mobileParty)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 troops to desert 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultPartyDesertionModel 实例
DefaultPartyDesertionModel defaultPartyDesertionModel = ...;
var result = defaultPartyDesertionModel.GetTroopsToDesert(mobileParty);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultPartyDesertionModel>(new MyDefaultPartyDesertionModel());
```

## 参见

- [本区域目录](../)