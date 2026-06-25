---
title: "DefaultIssueModel"
description: "DefaultIssueModel 的自动生成类参考。"
---
# DefaultIssueModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultIssueModel : IssueModel`
**Base:** `IssueModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultIssueModel.cs`

## 概述

`DefaultIssueModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultIssueModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IssueOwnerCoolDownInDays` | `public override int IssueOwnerCoolDownInDays { get; }` |

## 主要方法

### GetIssueDifficultyMultiplier
`public override float GetIssueDifficultyMultiplier()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 issue difficulty multiplier 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultIssueModel 实例
DefaultIssueModel defaultIssueModel = ...;
var result = defaultIssueModel.GetIssueDifficultyMultiplier();
```

### GetIssueEffectsOfSettlement
`public override void GetIssueEffectsOfSettlement(IssueEffect issueEffect, Settlement settlement, ref ExplainedNumber explainedNumber)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 issue effects of settlement 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultIssueModel 实例
DefaultIssueModel defaultIssueModel = ...;
defaultIssueModel.GetIssueEffectsOfSettlement(issueEffect, settlement, explainedNumber);
```

### GetIssueEffectOfHero
`public override void GetIssueEffectOfHero(IssueEffect issueEffect, Hero hero, ref ExplainedNumber explainedNumber)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 issue effect of hero 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultIssueModel 实例
DefaultIssueModel defaultIssueModel = ...;
defaultIssueModel.GetIssueEffectOfHero(issueEffect, hero, explainedNumber);
```

### GetIssueEffectOfClan
`public override void GetIssueEffectOfClan(IssueEffect issueEffect, Clan clan, ref ExplainedNumber explainedNumber)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 issue effect of clan 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultIssueModel 实例
DefaultIssueModel defaultIssueModel = ...;
defaultIssueModel.GetIssueEffectOfClan(issueEffect, clan, explainedNumber);
```

### GetCausalityForHero
`public override ValueTuple<int, int> GetCausalityForHero(Hero alternativeSolutionHero, IssueBase issue)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 causality for hero 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultIssueModel 实例
DefaultIssueModel defaultIssueModel = ...;
var result = defaultIssueModel.GetCausalityForHero(alternativeSolutionHero, issue);
```

### GetFailureRiskForHero
`public override float GetFailureRiskForHero(Hero alternativeSolutionHero, IssueBase issue)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 failure risk for hero 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultIssueModel 实例
DefaultIssueModel defaultIssueModel = ...;
var result = defaultIssueModel.GetFailureRiskForHero(alternativeSolutionHero, issue);
```

### GetDurationOfResolutionForHero
`public override CampaignTime GetDurationOfResolutionForHero(Hero alternativeSolutionHero, IssueBase issue)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 duration of resolution for hero 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultIssueModel 实例
DefaultIssueModel defaultIssueModel = ...;
var result = defaultIssueModel.GetDurationOfResolutionForHero(alternativeSolutionHero, issue);
```

### GetTroopsRequiredForHero
`public override int GetTroopsRequiredForHero(Hero alternativeSolutionHero, IssueBase issue)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 troops required for hero 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultIssueModel 实例
DefaultIssueModel defaultIssueModel = ...;
var result = defaultIssueModel.GetTroopsRequiredForHero(alternativeSolutionHero, issue);
```

### GetIssueAlternativeSolutionSkill
`public override ValueTuple<SkillObject, int> GetIssueAlternativeSolutionSkill(Hero hero, IssueBase issue)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 issue alternative solution skill 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultIssueModel 实例
DefaultIssueModel defaultIssueModel = ...;
var result = defaultIssueModel.GetIssueAlternativeSolutionSkill(hero, issue);
```

### CanTroopsReturnFromAlternativeSolution
`public override bool CanTroopsReturnFromAlternativeSolution()`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 troops return from alternative solution 的前置条件。

```csharp
// 先通过子系统 API 拿到 DefaultIssueModel 实例
DefaultIssueModel defaultIssueModel = ...;
var result = defaultIssueModel.CanTroopsReturnFromAlternativeSolution();
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultIssueModel>(new MyDefaultIssueModel());
```

## 参见

- [本区域目录](../)