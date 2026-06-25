---
title: "DefaultIssueModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultIssueModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultIssueModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultIssueModel : IssueModel`
**Base:** `IssueModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultIssueModel.cs`

## 概述

`DefaultIssueModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultIssueModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetIssueDifficultyMultiplier
`public override float GetIssueDifficultyMultiplier()`

**用途 / Purpose:** 获取 `issue difficulty multiplier` 的当前值。

### GetIssueEffectsOfSettlement
`public override void GetIssueEffectsOfSettlement(IssueEffect issueEffect, Settlement settlement, ref ExplainedNumber explainedNumber)`

**用途 / Purpose:** 获取 `issue effects of settlement` 的当前值。

### GetIssueEffectOfHero
`public override void GetIssueEffectOfHero(IssueEffect issueEffect, Hero hero, ref ExplainedNumber explainedNumber)`

**用途 / Purpose:** 获取 `issue effect of hero` 的当前值。

### GetIssueEffectOfClan
`public override void GetIssueEffectOfClan(IssueEffect issueEffect, Clan clan, ref ExplainedNumber explainedNumber)`

**用途 / Purpose:** 获取 `issue effect of clan` 的当前值。

### GetFailureRiskForHero
`public override float GetFailureRiskForHero(Hero alternativeSolutionHero, IssueBase issue)`

**用途 / Purpose:** 获取 `failure risk for hero` 的当前值。

### GetDurationOfResolutionForHero
`public override CampaignTime GetDurationOfResolutionForHero(Hero alternativeSolutionHero, IssueBase issue)`

**用途 / Purpose:** 获取 `duration of resolution for hero` 的当前值。

### GetTroopsRequiredForHero
`public override int GetTroopsRequiredForHero(Hero alternativeSolutionHero, IssueBase issue)`

**用途 / Purpose:** 获取 `troops required for hero` 的当前值。

### CanTroopsReturnFromAlternativeSolution
`public override bool CanTroopsReturnFromAlternativeSolution()`

**用途 / Purpose:** 判断当前对象是否可以执行 `troops return from alternative solution`。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultIssueModel>(new MyDefaultIssueModel());
```

## 参见

- [完整类目录](../catalog)