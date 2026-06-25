---
title: "PartyMoraleModel"
description: "PartyMoraleModel 的自动生成类参考。"
---
# PartyMoraleModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyMoraleModel : MBGameModel<PartyMoraleModel>`
**Base:** `MBGameModel<PartyMoraleModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyMoraleModel.cs`

## 概述

`PartyMoraleModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `PartyMoraleModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `HighMoraleValue` | `public abstract float HighMoraleValue { get; }` |

## 主要方法

### GetDailyStarvationMoralePenalty
`public abstract int GetDailyStarvationMoralePenalty(PartyBase party)`

**用途 / Purpose:** 读取并返回当前对象中 「daily starvation morale penalty」 的结果。

```csharp
// 先通过子系统 API 拿到 PartyMoraleModel 实例
PartyMoraleModel partyMoraleModel = ...;
var result = partyMoraleModel.GetDailyStarvationMoralePenalty(party);
```

### GetDailyNoWageMoralePenalty
`public abstract int GetDailyNoWageMoralePenalty(MobileParty party)`

**用途 / Purpose:** 读取并返回当前对象中 「daily no wage morale penalty」 的结果。

```csharp
// 先通过子系统 API 拿到 PartyMoraleModel 实例
PartyMoraleModel partyMoraleModel = ...;
var result = partyMoraleModel.GetDailyNoWageMoralePenalty(party);
```

### GetStandardBaseMorale
`public abstract float GetStandardBaseMorale(PartyBase party)`

**用途 / Purpose:** 读取并返回当前对象中 「standard base morale」 的结果。

```csharp
// 先通过子系统 API 拿到 PartyMoraleModel 实例
PartyMoraleModel partyMoraleModel = ...;
var result = partyMoraleModel.GetStandardBaseMorale(party);
```

### GetVictoryMoraleChange
`public abstract float GetVictoryMoraleChange(PartyBase party)`

**用途 / Purpose:** 读取并返回当前对象中 「victory morale change」 的结果。

```csharp
// 先通过子系统 API 拿到 PartyMoraleModel 实例
PartyMoraleModel partyMoraleModel = ...;
var result = partyMoraleModel.GetVictoryMoraleChange(party);
```

### GetDefeatMoraleChange
`public abstract float GetDefeatMoraleChange(PartyBase party)`

**用途 / Purpose:** 读取并返回当前对象中 「defeat morale change」 的结果。

```csharp
// 先通过子系统 API 拿到 PartyMoraleModel 实例
PartyMoraleModel partyMoraleModel = ...;
var result = partyMoraleModel.GetDefeatMoraleChange(party);
```

### GetEffectivePartyMorale
`public abstract ExplainedNumber GetEffectivePartyMorale(MobileParty party, bool includeDescription = false)`

**用途 / Purpose:** 读取并返回当前对象中 「effective party morale」 的结果。

```csharp
// 先通过子系统 API 拿到 PartyMoraleModel 实例
PartyMoraleModel partyMoraleModel = ...;
var result = partyMoraleModel.GetEffectivePartyMorale(party, false);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
PartyMoraleModel instance = ...;
```

## 参见

- [本区域目录](../)