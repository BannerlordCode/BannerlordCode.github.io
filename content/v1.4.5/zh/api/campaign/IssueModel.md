---
title: "IssueModel"
description: "IssueModel 的自动生成类参考。"
---
# IssueModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class IssueModel : MBGameModel<IssueModel>`
**Base:** `MBGameModel<IssueModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/IssueModel.cs`

## 概述

`IssueModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `IssueModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IssueOwnerCoolDownInDays` | `public abstract int IssueOwnerCoolDownInDays { get; }` |

## 主要方法

### GetIssueDifficultyMultiplier
`public abstract float GetIssueDifficultyMultiplier()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 issue difficulty multiplier 的结果。

```csharp
// 先通过子系统 API 拿到 IssueModel 实例
IssueModel issueModel = ...;
var result = issueModel.GetIssueDifficultyMultiplier();
```

### GetIssueEffectsOfSettlement
`public abstract void GetIssueEffectsOfSettlement(IssueEffect issueEffect, Settlement settlement, ref ExplainedNumber explainedNumber)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 issue effects of settlement 的结果。

```csharp
// 先通过子系统 API 拿到 IssueModel 实例
IssueModel issueModel = ...;
issueModel.GetIssueEffectsOfSettlement(issueEffect, settlement, explainedNumber);
```

### GetIssueEffectOfHero
`public abstract void GetIssueEffectOfHero(IssueEffect issueEffect, Hero hero, ref ExplainedNumber explainedNumber)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 issue effect of hero 的结果。

```csharp
// 先通过子系统 API 拿到 IssueModel 实例
IssueModel issueModel = ...;
issueModel.GetIssueEffectOfHero(issueEffect, hero, explainedNumber);
```

### GetIssueEffectOfClan
`public abstract void GetIssueEffectOfClan(IssueEffect issueEffect, Clan clan, ref ExplainedNumber explainedNumber)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 issue effect of clan 的结果。

```csharp
// 先通过子系统 API 拿到 IssueModel 实例
IssueModel issueModel = ...;
issueModel.GetIssueEffectOfClan(issueEffect, clan, explainedNumber);
```

### GetFailureRiskForHero
`public abstract float GetFailureRiskForHero(Hero alternativeSolutionHero, IssueBase issue)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 failure risk for hero 的结果。

```csharp
// 先通过子系统 API 拿到 IssueModel 实例
IssueModel issueModel = ...;
var result = issueModel.GetFailureRiskForHero(alternativeSolutionHero, issue);
```

### GetDurationOfResolutionForHero
`public abstract CampaignTime GetDurationOfResolutionForHero(Hero alternativeSolutionHero, IssueBase issue)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 duration of resolution for hero 的结果。

```csharp
// 先通过子系统 API 拿到 IssueModel 实例
IssueModel issueModel = ...;
var result = issueModel.GetDurationOfResolutionForHero(alternativeSolutionHero, issue);
```

### GetTroopsRequiredForHero
`public abstract int GetTroopsRequiredForHero(Hero alternativeSolutionHero, IssueBase issue)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 troops required for hero 的结果。

```csharp
// 先通过子系统 API 拿到 IssueModel 实例
IssueModel issueModel = ...;
var result = issueModel.GetTroopsRequiredForHero(alternativeSolutionHero, issue);
```

### CanTroopsReturnFromAlternativeSolution
`public abstract bool CanTroopsReturnFromAlternativeSolution()`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 troops return from alternative solution 的前置条件。

```csharp
// 先通过子系统 API 拿到 IssueModel 实例
IssueModel issueModel = ...;
var result = issueModel.CanTroopsReturnFromAlternativeSolution();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
IssueModel instance = ...;
```

## 参见

- [本区域目录](../)