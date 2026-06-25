---
title: "IssueBase"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `IssueBase`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
- [🔀 跨版本对比 /versions/IssueBase](/versions/IssueBase)
<!-- END BREADCRUMB -->
# IssueBase

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class IssueBase : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/IssueBase.cs`

## 概述

`IssueBase` 位于 `TaleWorlds.CampaignSystem.Issues`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Issues` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `RelationshipChangeWithIssueOwner` | `public virtual int RelationshipChangeWithIssueOwner { get; set; }` |
| `IssueBriefByIssueGiver` | `public abstract TextObject IssueBriefByIssueGiver { get; }` |
| `IssueAcceptByPlayer` | `public abstract TextObject IssueAcceptByPlayer { get; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public abstract TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueQuestSolutionAcceptByPlayer` | `public abstract TextObject IssueQuestSolutionAcceptByPlayer { get; }` |
| `AlternativeSolutionBaseNeededMenCount` | `public virtual int AlternativeSolutionBaseNeededMenCount { get; }` |
| `AlternativeSolutionReturnTimeForTroops` | `public CampaignTime AlternativeSolutionReturnTimeForTroops { get; }` |
| `IsThereAlternativeSolution` | `public abstract bool IsThereAlternativeSolution { get; }` |
| `AlternativeSolutionIssueEffectClearTime` | `public CampaignTime AlternativeSolutionIssueEffectClearTime { get; }` |
| `AlternativeSolutionHero` | `public Hero AlternativeSolutionHero { get; }` |
| `IssueDiscussAlternativeSolution` | `public virtual TextObject IssueDiscussAlternativeSolution { get; }` |
| `IssueAlternativeSolutionSuccessLog` | `public virtual TextObject IssueAlternativeSolutionSuccessLog { get; }` |
| `IssueAlternativeSolutionFailLog` | `public virtual TextObject IssueAlternativeSolutionFailLog { get; }` |
| `IsThereLordSolution` | `public abstract bool IsThereLordSolution { get; }` |
| `NeededInfluenceForLordSolution` | `public virtual int NeededInfluenceForLordSolution { get; set; }` |
| `CounterOfferHero` | `public virtual Hero CounterOfferHero { get; set; }` |
| `IssueOwner` | `public Hero IssueOwner { get; set; }` |
| `Title` | `public abstract TextObject Title { get; }` |
| `IssueQuest` | `public QuestBase IssueQuest { get; }` |
| `IssueSettlement` | `public Settlement IssueSettlement { get; }` |
| `Description` | `public abstract TextObject Description { get; }` |
| `IsTriedToSolveBefore` | `public bool IsTriedToSolveBefore { get; }` |

## 主要方法

### GetTotalAlternativeSolutionNeededMenCount
`public int GetTotalAlternativeSolutionNeededMenCount()`

**用途 / Purpose:** 获取 `total alternative solution needed men count` 的当前值。

### GetTotalAlternativeSolutionDurationInDays
`public int GetTotalAlternativeSolutionDurationInDays()`

**用途 / Purpose:** 获取 `total alternative solution duration in days` 的当前值。

### GetBaseAlternativeSolutionDurationInDays
`public int GetBaseAlternativeSolutionDurationInDays()`

**用途 / Purpose:** 获取 `base alternative solution duration in days` 的当前值。

### AlternativeSolutionCondition
`public virtual bool AlternativeSolutionCondition(out TextObject explanation)`

**用途 / Purpose:** 处理 `alternative solution condition` 相关逻辑。

### AlternativeSolutionStartConsequence
`public virtual void AlternativeSolutionStartConsequence()`

**用途 / Purpose:** 处理 `alternative solution start consequence` 相关逻辑。

### DoTroopsSatisfyAlternativeSolution
`public virtual bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**用途 / Purpose:** 处理 `do troops satisfy alternative solution` 相关逻辑。

### IsTroopTypeNeededByAlternativeSolution
`public virtual bool IsTroopTypeNeededByAlternativeSolution(CharacterObject character)`

**用途 / Purpose:** 处理 `is troop type needed by alternative solution` 相关逻辑。

### LordSolutionCondition
`public virtual bool LordSolutionCondition(out TextObject explanation)`

**用途 / Purpose:** 处理 `lord solution condition` 相关逻辑。

### GetName
`public override TextObject GetName()`

**用途 / Purpose:** 获取 `name` 的当前值。

### GetActiveIssueEffectAmount
`public float GetActiveIssueEffectAmount(IssueEffect issueEffect)`

**用途 / Purpose:** 获取 `active issue effect amount` 的当前值。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### InitializeIssueBaseOnLoad
`public void InitializeIssueBaseOnLoad()`

**用途 / Purpose:** 初始化 `issue base on load` 的状态、资源或绑定。

### GetFrequency
`public abstract IssueFrequency GetFrequency()`

**用途 / Purpose:** 获取 `frequency` 的当前值。

### IssueStayAliveConditions
`public abstract bool IssueStayAliveConditions()`

**用途 / Purpose:** 处理 `issue stay alive conditions` 相关逻辑。

### CanBeCompletedByAI
`public virtual bool CanBeCompletedByAI()`

**用途 / Purpose:** 判断当前对象是否可以执行 `be completed by a i`。

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public virtual void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 当 `hero can have campaign issues info is requested` 事件触发时调用此方法。

### OnHeroCanLeadPartyInfoIsRequested
`public virtual void OnHeroCanLeadPartyInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 当 `hero can lead party info is requested` 事件触发时调用此方法。

### OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested
`public virtual void OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 当 `hero can have party role or be governor info is requested` 事件触发时调用此方法。

### OnHeroCanDieInfoIsRequested
`public virtual void OnHeroCanDieInfoIsRequested(Hero hero, KillCharacterAction.KillCharacterActionDetail causeOfDeath, ref bool result)`

**用途 / Purpose:** 当 `hero can die info is requested` 事件触发时调用此方法。

### OnHeroCanBecomePrisonerInfoIsRequested
`public virtual void OnHeroCanBecomePrisonerInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 当 `hero can become prisoner info is requested` 事件触发时调用此方法。

### OnHeroCanBeSelectedInInventoryInfoIsRequested
`public virtual void OnHeroCanBeSelectedInInventoryInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 当 `hero can be selected in inventory info is requested` 事件触发时调用此方法。

### OnHeroCanMoveToSettlementInfoIsRequested
`public virtual void OnHeroCanMoveToSettlementInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 当 `hero can move to settlement info is requested` 事件触发时调用此方法。

### OnHeroCanMarryInfoIsRequested
`public virtual void OnHeroCanMarryInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 当 `hero can marry info is requested` 事件触发时调用此方法。

### IsSettlementBusy
`public virtual void IsSettlementBusy(Settlement settlement, object asker, ref int priority)`

**用途 / Purpose:** 处理 `is settlement busy` 相关逻辑。

### StartIssueWithQuest
`public bool StartIssueWithQuest()`

**用途 / Purpose:** 处理 `start issue with quest` 相关逻辑。

### StartIssueWithAlternativeSolution
`public void StartIssueWithAlternativeSolution()`

**用途 / Purpose:** 处理 `start issue with alternative solution` 相关逻辑。

### OnAlternativeSolutionSolvedAndTroopsAreReturning
`public void OnAlternativeSolutionSolvedAndTroopsAreReturning()`

**用途 / Purpose:** 当 `alternative solution solved and troops are returning` 事件触发时调用此方法。

### IssueFinalized
`public void IssueFinalized()`

**用途 / Purpose:** 处理 `issue finalized` 相关逻辑。

### CompleteIssueWithQuest
`public void CompleteIssueWithQuest()`

**用途 / Purpose:** 处理 `complete issue with quest` 相关逻辑。

### CompleteIssueWithTimedOut
`public void CompleteIssueWithTimedOut()`

**用途 / Purpose:** 处理 `complete issue with timed out` 相关逻辑。

### CompleteIssueWithStayAliveConditionsFailed
`public void CompleteIssueWithStayAliveConditionsFailed()`

**用途 / Purpose:** 处理 `complete issue with stay alive conditions failed` 相关逻辑。

### CompleteIssueWithBetrayal
`public void CompleteIssueWithBetrayal()`

**用途 / Purpose:** 处理 `complete issue with betrayal` 相关逻辑。

### CompleteIssueWithFail
`public void CompleteIssueWithFail(TextObject log = null)`

**用途 / Purpose:** 处理 `complete issue with fail` 相关逻辑。

### CompleteIssueWithCancel
`public void CompleteIssueWithCancel(TextObject log = null)`

**用途 / Purpose:** 处理 `complete issue with cancel` 相关逻辑。

### CompleteIssueWithAiLord
`public void CompleteIssueWithAiLord(Hero issueSolver)`

**用途 / Purpose:** 处理 `complete issue with ai lord` 相关逻辑。

### StartIssueWithLordSolution
`public void StartIssueWithLordSolution()`

**用途 / Purpose:** 处理 `start issue with lord solution` 相关逻辑。

### CompleteIssueWithAlternativeSolution
`public void CompleteIssueWithAlternativeSolution()`

**用途 / Purpose:** 处理 `complete issue with alternative solution` 相关逻辑。

### CompleteIssueWithLordSolutionWithRefuseCounterOffer
`public void CompleteIssueWithLordSolutionWithRefuseCounterOffer()`

**用途 / Purpose:** 处理 `complete issue with lord solution with refuse counter offer` 相关逻辑。

### CompleteIssueWithLordSolutionWithAcceptCounterOffer
`public void CompleteIssueWithLordSolutionWithAcceptCounterOffer()`

**用途 / Purpose:** 处理 `complete issue with lord solution with accept counter offer` 相关逻辑。

### InitializeIssueOnSettlementOwnerChange
`public void InitializeIssueOnSettlementOwnerChange()`

**用途 / Purpose:** 初始化 `issue on settlement owner change` 的状态、资源或绑定。

### AddLog
`public void AddLog(JournalLog log)`

**用途 / Purpose:** 向当前集合/状态中添加 `log`。

### AddTrackedObject
`public void AddTrackedObject(ITrackableCampaignObject o)`

**用途 / Purpose:** 向当前集合/状态中添加 `tracked object`。

### ToggleTrackedObjects
`public void ToggleTrackedObjects(bool enableTrack)`

**用途 / Purpose:** 处理 `toggle tracked objects` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomIssueBase();
```

## 参见

- [完整类目录](../catalog)