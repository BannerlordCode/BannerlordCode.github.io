---
title: "DefaultPartyImpairmentModel"
description: "DefaultPartyImpairmentModel 的自动生成类参考。"
---
# DefaultPartyImpairmentModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyImpairmentModel : PartyImpairmentModel`
**Base:** `PartyImpairmentModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyImpairmentModel.cs`

## 概述

`DefaultPartyImpairmentModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultPartyImpairmentModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetSiegeExpectedVulnerabilityTime
`public override float GetSiegeExpectedVulnerabilityTime()`

**用途 / Purpose:** 读取并返回当前对象中 「siege expected vulnerability time」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultPartyImpairmentModel 实例
DefaultPartyImpairmentModel defaultPartyImpairmentModel = ...;
var result = defaultPartyImpairmentModel.GetSiegeExpectedVulnerabilityTime();
```

### GetDisorganizedStateDuration
`public override ExplainedNumber GetDisorganizedStateDuration(MobileParty party)`

**用途 / Purpose:** 读取并返回当前对象中 「disorganized state duration」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultPartyImpairmentModel 实例
DefaultPartyImpairmentModel defaultPartyImpairmentModel = ...;
var result = defaultPartyImpairmentModel.GetDisorganizedStateDuration(party);
```

### CanGetDisorganized
`public override bool CanGetDisorganized(PartyBase party)`

**用途 / Purpose:** 检查当前对象是否满足 「get disorganized」 的前置条件。

```csharp
// 先通过子系统 API 拿到 DefaultPartyImpairmentModel 实例
DefaultPartyImpairmentModel defaultPartyImpairmentModel = ...;
var result = defaultPartyImpairmentModel.CanGetDisorganized(party);
```

### GetVulnerabilityStateDuration
`public override float GetVulnerabilityStateDuration(PartyBase party)`

**用途 / Purpose:** 读取并返回当前对象中 「vulnerability state duration」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultPartyImpairmentModel 实例
DefaultPartyImpairmentModel defaultPartyImpairmentModel = ...;
var result = defaultPartyImpairmentModel.GetVulnerabilityStateDuration(party);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultPartyImpairmentModel>(new MyDefaultPartyImpairmentModel());
```

## 参见

- [本区域目录](../)