---
title: "PartyDesertionModel"
description: "PartyDesertionModel 的自动生成类参考。"
---
# PartyDesertionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyDesertionModel : MBGameModel<PartyDesertionModel>`
**Base:** `MBGameModel<PartyDesertionModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/PartyDesertionModel.cs`

## 概述

`PartyDesertionModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `PartyDesertionModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetTroopsToDesert
`public abstract TroopRoster GetTroopsToDesert(MobileParty mobileParty)`

**用途 / Purpose:** 读取并返回当前对象中 troops to desert 的结果。

```csharp
// 先通过子系统 API 拿到 PartyDesertionModel 实例
PartyDesertionModel partyDesertionModel = ...;
var result = partyDesertionModel.GetTroopsToDesert(mobileParty);
```

### GetDesertionChanceForTroop
`public abstract float GetDesertionChanceForTroop(MobileParty mobileParty, in TroopRosterElement troopRosterElement)`

**用途 / Purpose:** 读取并返回当前对象中 desertion chance for troop 的结果。

```csharp
// 先通过子系统 API 拿到 PartyDesertionModel 实例
PartyDesertionModel partyDesertionModel = ...;
var result = partyDesertionModel.GetDesertionChanceForTroop(mobileParty, troopRosterElement);
```

### GetMoraleThresholdForTroopDesertion
`public abstract int GetMoraleThresholdForTroopDesertion()`

**用途 / Purpose:** 读取并返回当前对象中 morale threshold for troop desertion 的结果。

```csharp
// 先通过子系统 API 拿到 PartyDesertionModel 实例
PartyDesertionModel partyDesertionModel = ...;
var result = partyDesertionModel.GetMoraleThresholdForTroopDesertion();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
PartyDesertionModel instance = ...;
```

## 参见

- [本区域目录](../)