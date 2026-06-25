---
title: "ArtisanCantSellProductsAtAFairPriceIssue"
description: "ArtisanCantSellProductsAtAFairPriceIssue 的自动生成类参考。"
---
# ArtisanCantSellProductsAtAFairPriceIssue

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ArtisanCantSellProductsAtAFairPriceIssue`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Issues/ArtisanCantSellProductsAtAFairPriceIssueBehavior.cs`

## 概述

`ArtisanCantSellProductsAtAFairPriceIssue` 位于 `TaleWorlds.CampaignSystem.Issues`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Issues` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `AlternativeSolutionScaleFlags` | `public override IssueBase.AlternativeSolutionScaleFlag AlternativeSolutionScaleFlags { get; }` |
| `CounterOfferHero` | `public override Hero CounterOfferHero { get; set; }` |
| `AlternativeSolutionBaseNeededMenCount` | `public override int AlternativeSolutionBaseNeededMenCount { get; }` |
| `NeededInfluenceForLordSolution` | `public override int NeededInfluenceForLordSolution { get; }` |
| `IsThereAlternativeSolution` | `public override bool IsThereAlternativeSolution { get; }` |
| `IsThereLordSolution` | `public override bool IsThereLordSolution { get; }` |
| `IssueBriefByIssueGiver` | `public override TextObject IssueBriefByIssueGiver { get; }` |
| `IssueAcceptByPlayer` | `public override TextObject IssueAcceptByPlayer { get; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueAlternativeSolutionExplanationByIssueGiver` | `public override TextObject IssueAlternativeSolutionExplanationByIssueGiver { get; }` |
| `IssueLordSolutionExplanationByIssueGiver` | `public override TextObject IssueLordSolutionExplanationByIssueGiver { get; }` |
| `IssueLordSolutionAcceptByPlayer` | `public override TextObject IssueLordSolutionAcceptByPlayer { get; }` |
| `IssueLordSolutionResponseByIssueGiver` | `public override TextObject IssueLordSolutionResponseByIssueGiver { get; }` |
| `IssueLordSolutionCounterOfferExplanationByOtherNpc` | `public override TextObject IssueLordSolutionCounterOfferExplanationByOtherNpc { get; }` |
| `IssueLordSolutionCounterOfferBriefByOtherNpc` | `public override TextObject IssueLordSolutionCounterOfferBriefByOtherNpc { get; }` |
| `IssueLordSolutionCounterOfferAcceptByPlayer` | `public override TextObject IssueLordSolutionCounterOfferAcceptByPlayer { get; }` |
| `IssueLordSolutionCounterOfferAcceptResponseByOtherNpc` | `public override TextObject IssueLordSolutionCounterOfferAcceptResponseByOtherNpc { get; }` |
| `IssueLordSolutionCounterOfferDeclineByPlayer` | `public override TextObject IssueLordSolutionCounterOfferDeclineByPlayer { get; }` |
| `IssueLordSolutionCounterOfferDeclineResponseByOtherNpc` | `public override TextObject IssueLordSolutionCounterOfferDeclineResponseByOtherNpc { get; }` |
| `IssueQuestSolutionAcceptByPlayer` | `public override TextObject IssueQuestSolutionAcceptByPlayer { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `Description` | `public override TextObject Description { get; }` |
| `IssueAsRumorInSettlement` | `public override TextObject IssueAsRumorInSettlement { get; }` |
| `IssueAlternativeSolutionAcceptByPlayer` | `public override TextObject IssueAlternativeSolutionAcceptByPlayer { get; }` |
| `IssueDiscussAlternativeSolution` | `public override TextObject IssueDiscussAlternativeSolution { get; }` |
| `IssueAlternativeSolutionResponseByIssueGiver` | `public override TextObject IssueAlternativeSolutionResponseByIssueGiver { get; }` |
| `IsRemainingTimeHidden` | `public override bool IsRemainingTimeHidden { get; }` |
| `Title` | `public override TextObject Title { get; }` |

## 主要方法

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 将「events」注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 ArtisanCantSellProductsAtAFairPriceIssue 实例
ArtisanCantSellProductsAtAFairPriceIssue artisanCantSellProductsAtAFairPriceIssue = ...;
artisanCantSellProductsAtAFairPriceIssue.RegisterEvents();
```

### OnCheckForIssue
`public void OnCheckForIssue(Hero hero)`

**用途 / Purpose:** 在 「check for issue」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ArtisanCantSellProductsAtAFairPriceIssue 实例
ArtisanCantSellProductsAtAFairPriceIssue artisanCantSellProductsAtAFairPriceIssue = ...;
artisanCantSellProductsAtAFairPriceIssue.OnCheckForIssue(hero);
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 将「data」同步到相关上下文或系统中。

```csharp
// 先通过子系统 API 拿到 ArtisanCantSellProductsAtAFairPriceIssue 实例
ArtisanCantSellProductsAtAFairPriceIssue artisanCantSellProductsAtAFairPriceIssue = ...;
artisanCantSellProductsAtAFairPriceIssue.SyncData(dataStore);
```

### GetAlternativeSolutionSkill
`public override ValueTuple<SkillObject, int> GetAlternativeSolutionSkill(Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 「alternative solution skill」 的结果。

```csharp
// 先通过子系统 API 拿到 ArtisanCantSellProductsAtAFairPriceIssue 实例
ArtisanCantSellProductsAtAFairPriceIssue artisanCantSellProductsAtAFairPriceIssue = ...;
var result = artisanCantSellProductsAtAFairPriceIssue.GetAlternativeSolutionSkill(hero);
```

### LordSolutionCondition
`public override bool LordSolutionCondition(out TextObject explanation)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 ArtisanCantSellProductsAtAFairPriceIssue 实例
ArtisanCantSellProductsAtAFairPriceIssue artisanCantSellProductsAtAFairPriceIssue = ...;
var result = artisanCantSellProductsAtAFairPriceIssue.LordSolutionCondition(explanation);
```

### AlternativeSolutionCondition
`public override bool AlternativeSolutionCondition(out TextObject explanation)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 ArtisanCantSellProductsAtAFairPriceIssue 实例
ArtisanCantSellProductsAtAFairPriceIssue artisanCantSellProductsAtAFairPriceIssue = ...;
var result = artisanCantSellProductsAtAFairPriceIssue.AlternativeSolutionCondition(explanation);
```

### DoTroopsSatisfyAlternativeSolution
`public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 ArtisanCantSellProductsAtAFairPriceIssue 实例
ArtisanCantSellProductsAtAFairPriceIssue artisanCantSellProductsAtAFairPriceIssue = ...;
var result = artisanCantSellProductsAtAFairPriceIssue.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

### GetFrequency
`public override IssueBase.IssueFrequency GetFrequency()`

**用途 / Purpose:** 读取并返回当前对象中 「frequency」 的结果。

```csharp
// 先通过子系统 API 拿到 ArtisanCantSellProductsAtAFairPriceIssue 实例
ArtisanCantSellProductsAtAFairPriceIssue artisanCantSellProductsAtAFairPriceIssue = ...;
var result = artisanCantSellProductsAtAFairPriceIssue.GetFrequency();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**用途 / Purpose:** 创建或发起「stay alive conditions」。

```csharp
// 先通过子系统 API 拿到 ArtisanCantSellProductsAtAFairPriceIssue 实例
ArtisanCantSellProductsAtAFairPriceIssue artisanCantSellProductsAtAFairPriceIssue = ...;
var result = artisanCantSellProductsAtAFairPriceIssue.IssueStayAliveConditions();
```

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 在 「hero can have campaign issues info is requested」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ArtisanCantSellProductsAtAFairPriceIssue 实例
ArtisanCantSellProductsAtAFairPriceIssue artisanCantSellProductsAtAFairPriceIssue = ...;
artisanCantSellProductsAtAFairPriceIssue.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

### OnFailed
`public override void OnFailed()`

**用途 / Purpose:** 在 「failed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ArtisanCantSellProductsAtAFairPriceIssue 实例
ArtisanCantSellProductsAtAFairPriceIssue artisanCantSellProductsAtAFairPriceIssue = ...;
artisanCantSellProductsAtAFairPriceIssue.OnFailed();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ArtisanCantSellProductsAtAFairPriceIssue artisanCantSellProductsAtAFairPriceIssue = ...;
artisanCantSellProductsAtAFairPriceIssue.RegisterEvents();
```

## 参见

- [本区域目录](../)