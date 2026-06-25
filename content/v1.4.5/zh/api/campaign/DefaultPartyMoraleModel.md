---
title: "DefaultPartyMoraleModel"
description: "DefaultPartyMoraleModel 的自动生成类参考。"
---
# DefaultPartyMoraleModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyMoraleModel : PartyMoraleModel`
**Base:** `PartyMoraleModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultPartyMoraleModel.cs`

## 概述

`DefaultPartyMoraleModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultPartyMoraleModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetDailyStarvationMoralePenalty
`public override int GetDailyStarvationMoralePenalty(PartyBase party)`

**用途 / Purpose:** 读取并返回当前对象中 「daily starvation morale penalty」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultPartyMoraleModel 实例
DefaultPartyMoraleModel defaultPartyMoraleModel = ...;
var result = defaultPartyMoraleModel.GetDailyStarvationMoralePenalty(party);
```

### GetDailyNoWageMoralePenalty
`public override int GetDailyNoWageMoralePenalty(MobileParty party)`

**用途 / Purpose:** 读取并返回当前对象中 「daily no wage morale penalty」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultPartyMoraleModel 实例
DefaultPartyMoraleModel defaultPartyMoraleModel = ...;
var result = defaultPartyMoraleModel.GetDailyNoWageMoralePenalty(party);
```

### GetStandardBaseMorale
`public override float GetStandardBaseMorale(PartyBase party)`

**用途 / Purpose:** 读取并返回当前对象中 「standard base morale」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultPartyMoraleModel 实例
DefaultPartyMoraleModel defaultPartyMoraleModel = ...;
var result = defaultPartyMoraleModel.GetStandardBaseMorale(party);
```

### GetVictoryMoraleChange
`public override float GetVictoryMoraleChange(PartyBase party)`

**用途 / Purpose:** 读取并返回当前对象中 「victory morale change」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultPartyMoraleModel 实例
DefaultPartyMoraleModel defaultPartyMoraleModel = ...;
var result = defaultPartyMoraleModel.GetVictoryMoraleChange(party);
```

### GetDefeatMoraleChange
`public override float GetDefeatMoraleChange(PartyBase party)`

**用途 / Purpose:** 读取并返回当前对象中 「defeat morale change」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultPartyMoraleModel 实例
DefaultPartyMoraleModel defaultPartyMoraleModel = ...;
var result = defaultPartyMoraleModel.GetDefeatMoraleChange(party);
```

### GetEffectivePartyMorale
`public override ExplainedNumber GetEffectivePartyMorale(MobileParty mobileParty, bool includeDescription = false)`

**用途 / Purpose:** 读取并返回当前对象中 「effective party morale」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultPartyMoraleModel 实例
DefaultPartyMoraleModel defaultPartyMoraleModel = ...;
var result = defaultPartyMoraleModel.GetEffectivePartyMorale(mobileParty, false);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultPartyMoraleModel>(new MyDefaultPartyMoraleModel());
```

## 参见

- [本区域目录](../)