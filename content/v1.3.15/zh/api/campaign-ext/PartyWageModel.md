---
title: "PartyWageModel"
description: "PartyWageModel 的自动生成类参考。"
---
# PartyWageModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyWageModel : MBGameModel<PartyWageModel>`
**Base:** `MBGameModel<PartyWageModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyWageModel.cs`

## 概述

`PartyWageModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `PartyWageModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MaxWagePaymentLimit` | `public abstract int MaxWagePaymentLimit { get; }` |

## 主要方法

### GetCharacterWage
`public abstract int GetCharacterWage(CharacterObject character)`

**用途 / Purpose:** 读取并返回当前对象中 「character wage」 的结果。

```csharp
// 先通过子系统 API 拿到 PartyWageModel 实例
PartyWageModel partyWageModel = ...;
var result = partyWageModel.GetCharacterWage(character);
```

### GetTotalWage
`public abstract ExplainedNumber GetTotalWage(MobileParty mobileParty, TroopRoster troopRoster, bool includeDescriptions = false)`

**用途 / Purpose:** 读取并返回当前对象中 「total wage」 的结果。

```csharp
// 先通过子系统 API 拿到 PartyWageModel 实例
PartyWageModel partyWageModel = ...;
var result = partyWageModel.GetTotalWage(mobileParty, troopRoster, false);
```

### GetTroopRecruitmentCost
`public abstract ExplainedNumber GetTroopRecruitmentCost(CharacterObject troop, Hero buyerHero, bool withoutItemCost = false)`

**用途 / Purpose:** 读取并返回当前对象中 「troop recruitment cost」 的结果。

```csharp
// 先通过子系统 API 拿到 PartyWageModel 实例
PartyWageModel partyWageModel = ...;
var result = partyWageModel.GetTroopRecruitmentCost(troop, buyerHero, false);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
PartyWageModel instance = ...;
```

## 参见

- [本区域目录](../)