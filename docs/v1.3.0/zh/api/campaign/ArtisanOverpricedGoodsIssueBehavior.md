<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ArtisanOverpricedGoodsIssueBehavior`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ArtisanOverpricedGoodsIssueBehavior

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ArtisanOverpricedGoodsIssueBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/Issues/ArtisanOverpricedGoodsIssueBehavior.cs`

## 概述

`ArtisanOverpricedGoodsIssueBehavior` 位于 `TaleWorlds.CampaignSystem.Issues`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Issues` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `AlternativeSolutionBaseNeededMenCount` | `public override int AlternativeSolutionBaseNeededMenCount { get; }` |
| `AlternativeSolutionScaleFlags` | `public override IssueBase.AlternativeSolutionScaleFlag AlternativeSolutionScaleFlags { get; }` |
| `CounterOfferHero` | `public override Hero CounterOfferHero { get; set; }` |
| `NeededInfluenceForLordSolution` | `public override int NeededInfluenceForLordSolution { get; }` |
| `IssueBriefByIssueGiver` | `public override TextObject IssueBriefByIssueGiver { get; }` |
| `IssueAcceptByPlayer` | `public override TextObject IssueAcceptByPlayer { get; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueAlternativeSolutionExplanationByIssueGiver` | `public override TextObject IssueAlternativeSolutionExplanationByIssueGiver { get; }` |
| `IssueLordSolutionExplanationByIssueGiver` | `public override TextObject IssueLordSolutionExplanationByIssueGiver { get; }` |
| `IssueQuestSolutionAcceptByPlayer` | `public override TextObject IssueQuestSolutionAcceptByPlayer { get; }` |
| `IssueAlternativeSolutionAcceptByPlayer` | `public override TextObject IssueAlternativeSolutionAcceptByPlayer { get; }` |
| `IssueDiscussAlternativeSolution` | `public override TextObject IssueDiscussAlternativeSolution { get; }` |
| `IssueAlternativeSolutionResponseByIssueGiver` | `public override TextObject IssueAlternativeSolutionResponseByIssueGiver { get; }` |
| `IssueLordSolutionAcceptByPlayer` | `public override TextObject IssueLordSolutionAcceptByPlayer { get; }` |
| `IssueLordSolutionResponseByIssueGiver` | `public override TextObject IssueLordSolutionResponseByIssueGiver { get; }` |
| `IssueLordSolutionCounterOfferBriefByOtherNpc` | `public override TextObject IssueLordSolutionCounterOfferBriefByOtherNpc { get; }` |
| `IssueLordSolutionCounterOfferExplanationByOtherNpc` | `public override TextObject IssueLordSolutionCounterOfferExplanationByOtherNpc { get; }` |
| `IssueLordSolutionCounterOfferAcceptByPlayer` | `public override TextObject IssueLordSolutionCounterOfferAcceptByPlayer { get; }` |
| `IssueLordSolutionCounterOfferAcceptResponseByOtherNpc` | `public override TextObject IssueLordSolutionCounterOfferAcceptResponseByOtherNpc { get; }` |
| `IssueLordSolutionCounterOfferDeclineByPlayer` | `public override TextObject IssueLordSolutionCounterOfferDeclineByPlayer { get; }` |
| `IssueLordSolutionCounterOfferDeclineResponseByOtherNpc` | `public override TextObject IssueLordSolutionCounterOfferDeclineResponseByOtherNpc { get; }` |
| `IsThereAlternativeSolution` | `public override bool IsThereAlternativeSolution { get; }` |
| `IsThereLordSolution` | `public override bool IsThereLordSolution { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `Description` | `public override TextObject Description { get; }` |
| `IssueAsRumorInSettlement` | `public override TextObject IssueAsRumorInSettlement { get; }` |
| `IssueAlternativeSolutionSuccessLog` | `public override TextObject IssueAlternativeSolutionSuccessLog { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `IsRemainingTimeHidden` | `public override bool IsRemainingTimeHidden { get; }` |

## 主要方法

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 处理 `register events` 相关逻辑。

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 处理 `sync data` 相关逻辑。

### OnCheckForIssue
`public void OnCheckForIssue(Hero hero)`

**用途 / Purpose:** 当 `check for issue` 事件触发时调用此方法。

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**用途 / Purpose:** 处理 `issue stay alive conditions` 相关逻辑。

### GetAlternativeSolutionSkill
`public override ValueTuple<SkillObject, int> GetAlternativeSolutionSkill(Hero hero)`

**用途 / Purpose:** 获取 `alternative solution skill` 的当前值。

### AlternativeSolutionCondition
`public override bool AlternativeSolutionCondition(out TextObject explanation)`

**用途 / Purpose:** 处理 `alternative solution condition` 相关逻辑。

### DoTroopsSatisfyAlternativeSolution
`public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**用途 / Purpose:** 处理 `do troops satisfy alternative solution` 相关逻辑。

### IsTroopTypeNeededByAlternativeSolution
`public override bool IsTroopTypeNeededByAlternativeSolution(CharacterObject character)`

**用途 / Purpose:** 处理 `is troop type needed by alternative solution` 相关逻辑。

### AlternativeSolutionStartConsequence
`public override void AlternativeSolutionStartConsequence()`

**用途 / Purpose:** 处理 `alternative solution start consequence` 相关逻辑。

### LordSolutionCondition
`public override bool LordSolutionCondition(out TextObject explanation)`

**用途 / Purpose:** 处理 `lord solution condition` 相关逻辑。

### GetFrequency
`public override IssueBase.IssueFrequency GetFrequency()`

**用途 / Purpose:** 获取 `frequency` 的当前值。

### OnFailed
`public override void OnFailed()`

**用途 / Purpose:** 当 `failed` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new ArtisanOverpricedGoodsIssueBehavior();
value.RegisterEvents();
```

## 参见

- [完整类目录](../catalog)