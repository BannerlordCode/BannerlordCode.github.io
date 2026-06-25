---
title: "IssueBase"
description: "IssueBase 的自动生成类参考。"
---
# IssueBase

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class IssueBase : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.CampaignSystem/Issues/IssueBase.cs`

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
| `IssuePlayerResponseAfterLordExplanation` | `public virtual TextObject IssuePlayerResponseAfterLordExplanation { get; }` |
| `IssuePlayerResponseAfterAlternativeExplanation` | `public virtual TextObject IssuePlayerResponseAfterAlternativeExplanation { get; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public abstract TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueAlternativeSolutionExplanationByIssueGiver` | `public virtual TextObject IssueAlternativeSolutionExplanationByIssueGiver { get; }` |
| `IssueLordSolutionExplanationByIssueGiver` | `public virtual TextObject IssueLordSolutionExplanationByIssueGiver { get; }` |
| `IssueQuestSolutionAcceptByPlayer` | `public abstract TextObject IssueQuestSolutionAcceptByPlayer { get; }` |
| `IssueAlternativeSolutionAcceptByPlayer` | `public virtual TextObject IssueAlternativeSolutionAcceptByPlayer { get; }` |
| `IssueAlternativeSolutionResponseByIssueGiver` | `public virtual TextObject IssueAlternativeSolutionResponseByIssueGiver { get; }` |
| `IssueLordSolutionAcceptByPlayer` | `public virtual TextObject IssueLordSolutionAcceptByPlayer { get; }` |
| `IssueLordSolutionResponseByIssueGiver` | `public virtual TextObject IssueLordSolutionResponseByIssueGiver { get; }` |
| `IssueLordSolutionCounterOfferBriefByOtherNpc` | `public virtual TextObject IssueLordSolutionCounterOfferBriefByOtherNpc { get; }` |
| `IssueLordSolutionCounterOfferExplanationByOtherNpc` | `public virtual TextObject IssueLordSolutionCounterOfferExplanationByOtherNpc { get; }` |
| `IssueLordSolutionCounterOfferAcceptByPlayer` | `public virtual TextObject IssueLordSolutionCounterOfferAcceptByPlayer { get; }` |
| `IssueLordSolutionCounterOfferDeclineByPlayer` | `public virtual TextObject IssueLordSolutionCounterOfferDeclineByPlayer { get; }` |
| `IssueLordSolutionCounterOfferAcceptResponseByOtherNpc` | `public virtual TextObject IssueLordSolutionCounterOfferAcceptResponseByOtherNpc { get; }` |
| `IssueLordSolutionCounterOfferDeclineResponseByOtherNpc` | `public virtual TextObject IssueLordSolutionCounterOfferDeclineResponseByOtherNpc { get; }` |
| `IssueAsRumorInSettlement` | `public virtual TextObject IssueAsRumorInSettlement { get; }` |
| `AlternativeSolutionBaseNeededMenCount` | `public virtual int AlternativeSolutionBaseNeededMenCount { get; }` |
| `AlternativeSolutionReturnTimeForTroops` | `public CampaignTime AlternativeSolutionReturnTimeForTroops { get; }` |
| `IsThereAlternativeSolution` | `public abstract bool IsThereAlternativeSolution { get; }` |
| `IsThereDiscussDialogFlow` | `public bool IsThereDiscussDialogFlow { get; }` |
| `AlternativeSolutionIssueEffectClearTime` | `public CampaignTime AlternativeSolutionIssueEffectClearTime { get; }` |
| `AlternativeSolutionHero` | `public Hero AlternativeSolutionHero { get; }` |
| `IssueDiscussAlternativeSolution` | `public virtual TextObject IssueDiscussAlternativeSolution { get; }` |
| `IssueAlternativeSolutionSuccessLog` | `public virtual TextObject IssueAlternativeSolutionSuccessLog { get; }` |
| `IssueAlternativeSolutionFailLog` | `public virtual TextObject IssueAlternativeSolutionFailLog { get; }` |
| `IsThereLordSolution` | `public abstract bool IsThereLordSolution { get; }` |
| `NeededInfluenceForLordSolution` | `public virtual int NeededInfluenceForLordSolution { get; set; }` |
| `CounterOfferHero` | `public virtual Hero CounterOfferHero { get; set; }` |
| `JournalEntries` | `public MBReadOnlyList<JournalLog> JournalEntries { get; set; }` |
| `IssueOwner` | `public Hero IssueOwner { get; set; }` |
| `Title` | `public abstract TextObject Title { get; }` |
| `IssueQuest` | `public QuestBase IssueQuest { get; }` |
| `IssueSettlement` | `public Settlement IssueSettlement { get; }` |
| `Description` | `public abstract TextObject Description { get; }` |
| `IsTriedToSolveBefore` | `public bool IsTriedToSolveBefore { get; }` |
| `IsOngoingWithoutQuest` | `public bool IsOngoingWithoutQuest { get; }` |
| `IsSolvingWithQuest` | `public bool IsSolvingWithQuest { get; }` |
| `IsSolvingWithAlternative` | `public bool IsSolvingWithAlternative { get; }` |
| `IsSolvingWithLordSolution` | `public bool IsSolvingWithLordSolution { get; }` |
| `AlternativeSolutionScaleFlags` | `public virtual IssueBase.AlternativeSolutionScaleFlag AlternativeSolutionScaleFlags { get; }` |
| `AlternativeSolutionHasCasualties` | `public bool AlternativeSolutionHasCasualties { get; }` |
| `AlternativeSolutionHasScaledRequiredTroops` | `public bool AlternativeSolutionHasScaledRequiredTroops { get; }` |
| `AlternativeSolutionHasScaledDuration` | `public bool AlternativeSolutionHasScaledDuration { get; }` |
| `AlternativeSolutionHasFailureRisk` | `public bool AlternativeSolutionHasFailureRisk { get; }` |

## 主要方法

### GetTotalAlternativeSolutionNeededMenCount
`public int GetTotalAlternativeSolutionNeededMenCount()`

**用途 / Purpose:** 读取并返回当前对象中 「total alternative solution needed men count」 的结果。

```csharp
// 先通过子系统 API 拿到 IssueBase 实例
IssueBase issueBase = ...;
var result = issueBase.GetTotalAlternativeSolutionNeededMenCount();
```

### GetTotalAlternativeSolutionDurationInDays
`public int GetTotalAlternativeSolutionDurationInDays()`

**用途 / Purpose:** 读取并返回当前对象中 「total alternative solution duration in days」 的结果。

```csharp
// 先通过子系统 API 拿到 IssueBase 实例
IssueBase issueBase = ...;
var result = issueBase.GetTotalAlternativeSolutionDurationInDays();
```

### GetBaseAlternativeSolutionDurationInDays
`public int GetBaseAlternativeSolutionDurationInDays()`

**用途 / Purpose:** 读取并返回当前对象中 「base alternative solution duration in days」 的结果。

```csharp
// 先通过子系统 API 拿到 IssueBase 实例
IssueBase issueBase = ...;
var result = issueBase.GetBaseAlternativeSolutionDurationInDays();
```

### AlternativeSolutionCondition
`public virtual bool AlternativeSolutionCondition(out TextObject explanation)`

**用途 / Purpose:** 获取或更新 「alternative solution condition」 的状态。

```csharp
// 先通过子系统 API 拿到 IssueBase 实例
IssueBase issueBase = ...;
var result = issueBase.AlternativeSolutionCondition(explanation);
```

### AlternativeSolutionStartConsequence
`public virtual void AlternativeSolutionStartConsequence()`

**用途 / Purpose:** 处理与 「alternative solution start consequence」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 IssueBase 实例
IssueBase issueBase = ...;
issueBase.AlternativeSolutionStartConsequence();
```

### DoTroopsSatisfyAlternativeSolution
`public virtual bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**用途 / Purpose:** 处理与 「do troops satisfy alternative solution」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 IssueBase 实例
IssueBase issueBase = ...;
var result = issueBase.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

### IsTroopTypeNeededByAlternativeSolution
`public virtual bool IsTroopTypeNeededByAlternativeSolution(CharacterObject character)`

**用途 / Purpose:** 判断当前对象是否处于 「troop type needed by alternative solution」 状态或条件。

```csharp
// 先通过子系统 API 拿到 IssueBase 实例
IssueBase issueBase = ...;
var result = issueBase.IsTroopTypeNeededByAlternativeSolution(character);
```

### LordSolutionCondition
`public virtual bool LordSolutionCondition(out TextObject explanation)`

**用途 / Purpose:** 获取或更新 「lord solution condition」 的状态。

```csharp
// 先通过子系统 API 拿到 IssueBase 实例
IssueBase issueBase = ...;
var result = issueBase.LordSolutionCondition(explanation);
```

### GetName
`public override TextObject GetName()`

**用途 / Purpose:** 读取并返回当前对象中 「name」 的结果。

```csharp
// 先通过子系统 API 拿到 IssueBase 实例
IssueBase issueBase = ...;
var result = issueBase.GetName();
```

### GetActiveIssueEffectAmount
`public float GetActiveIssueEffectAmount(IssueEffect issueEffect)`

**用途 / Purpose:** 读取并返回当前对象中 「active issue effect amount」 的结果。

```csharp
// 先通过子系统 API 拿到 IssueBase 实例
IssueBase issueBase = ...;
var result = issueBase.GetActiveIssueEffectAmount(issueEffect);
```

### GetAlternativeSolutionSkill
`public virtual ValueTuple<SkillObject, int> GetAlternativeSolutionSkill(Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 「alternative solution skill」 的结果。

```csharp
// 先通过子系统 API 拿到 IssueBase 实例
IssueBase issueBase = ...;
var result = issueBase.GetAlternativeSolutionSkill(hero);
```

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 IssueBase 实例
IssueBase issueBase = ...;
var result = issueBase.ToString();
```

### InitializeIssueBaseOnLoad
`public void InitializeIssueBaseOnLoad()`

**用途 / Purpose:** 为 「issue base on load」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 IssueBase 实例
IssueBase issueBase = ...;
issueBase.InitializeIssueBaseOnLoad();
```

### GetFrequency
`public abstract IssueBase.IssueFrequency GetFrequency()`

**用途 / Purpose:** 读取并返回当前对象中 「frequency」 的结果。

```csharp
// 先通过子系统 API 拿到 IssueBase 实例
IssueBase issueBase = ...;
var result = issueBase.GetFrequency();
```

### IssueStayAliveConditions
`public abstract bool IssueStayAliveConditions()`

**用途 / Purpose:** 创建或发起「stay alive conditions」。

```csharp
// 先通过子系统 API 拿到 IssueBase 实例
IssueBase issueBase = ...;
var result = issueBase.IssueStayAliveConditions();
```

### CanBeCompletedByAI
`public virtual bool CanBeCompletedByAI()`

**用途 / Purpose:** 检查当前对象是否满足 「be completed by a i」 的前置条件。

```csharp
// 先通过子系统 API 拿到 IssueBase 实例
IssueBase issueBase = ...;
var result = issueBase.CanBeCompletedByAI();
```

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public virtual void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 在 「hero can have campaign issues info is requested」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 IssueBase 实例
IssueBase issueBase = ...;
issueBase.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

### OnHeroCanLeadPartyInfoIsRequested
`public virtual void OnHeroCanLeadPartyInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 在 「hero can lead party info is requested」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 IssueBase 实例
IssueBase issueBase = ...;
issueBase.OnHeroCanLeadPartyInfoIsRequested(hero, result);
```

### OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested
`public virtual void OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 在 「hero can have party role or be governor info is requested」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 IssueBase 实例
IssueBase issueBase = ...;
issueBase.OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested(hero, result);
```

### OnHeroCanDieInfoIsRequested
`public virtual void OnHeroCanDieInfoIsRequested(Hero hero, KillCharacterAction.KillCharacterActionDetail causeOfDeath, ref bool result)`

**用途 / Purpose:** 在 「hero can die info is requested」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 IssueBase 实例
IssueBase issueBase = ...;
issueBase.OnHeroCanDieInfoIsRequested(hero, causeOfDeath, result);
```

### OnHeroCanBecomePrisonerInfoIsRequested
`public virtual void OnHeroCanBecomePrisonerInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 在 「hero can become prisoner info is requested」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 IssueBase 实例
IssueBase issueBase = ...;
issueBase.OnHeroCanBecomePrisonerInfoIsRequested(hero, result);
```

### OnHeroCanBeSelectedInInventoryInfoIsRequested
`public virtual void OnHeroCanBeSelectedInInventoryInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 在 「hero can be selected in inventory info is requested」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 IssueBase 实例
IssueBase issueBase = ...;
issueBase.OnHeroCanBeSelectedInInventoryInfoIsRequested(hero, result);
```

### OnHeroCanMoveToSettlementInfoIsRequested
`public virtual void OnHeroCanMoveToSettlementInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 在 「hero can move to settlement info is requested」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 IssueBase 实例
IssueBase issueBase = ...;
issueBase.OnHeroCanMoveToSettlementInfoIsRequested(hero, result);
```

### OnHeroCanMarryInfoIsRequested
`public virtual void OnHeroCanMarryInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 在 「hero can marry info is requested」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 IssueBase 实例
IssueBase issueBase = ...;
issueBase.OnHeroCanMarryInfoIsRequested(hero, result);
```

### IsSettlementBusy
`public virtual void IsSettlementBusy(Settlement settlement, object asker, ref int priority)`

**用途 / Purpose:** 判断当前对象是否处于 「settlement busy」 状态或条件。

```csharp
// 先通过子系统 API 拿到 IssueBase 实例
IssueBase issueBase = ...;
issueBase.IsSettlementBusy(settlement, asker, priority);
```

### StartIssueWithQuest
`public bool StartIssueWithQuest()`

**用途 / Purpose:** 启动「issue with quest」流程或状态机。

```csharp
// 先通过子系统 API 拿到 IssueBase 实例
IssueBase issueBase = ...;
var result = issueBase.StartIssueWithQuest();
```

### StartIssueWithAlternativeSolution
`public void StartIssueWithAlternativeSolution()`

**用途 / Purpose:** 启动「issue with alternative solution」流程或状态机。

```csharp
// 先通过子系统 API 拿到 IssueBase 实例
IssueBase issueBase = ...;
issueBase.StartIssueWithAlternativeSolution();
```

### OnAlternativeSolutionSolvedAndTroopsAreReturning
`public void OnAlternativeSolutionSolvedAndTroopsAreReturning()`

**用途 / Purpose:** 在 「alternative solution solved and troops are returning」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 IssueBase 实例
IssueBase issueBase = ...;
issueBase.OnAlternativeSolutionSolvedAndTroopsAreReturning();
```

### IssueFinalized
`public void IssueFinalized()`

**用途 / Purpose:** 创建或发起「finalized」。

```csharp
// 先通过子系统 API 拿到 IssueBase 实例
IssueBase issueBase = ...;
issueBase.IssueFinalized();
```

### CompleteIssueWithQuest
`public void CompleteIssueWithQuest()`

**用途 / Purpose:** 处理与 「complete issue with quest」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 IssueBase 实例
IssueBase issueBase = ...;
issueBase.CompleteIssueWithQuest();
```

### CompleteIssueWithTimedOut
`public void CompleteIssueWithTimedOut()`

**用途 / Purpose:** 处理与 「complete issue with timed out」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 IssueBase 实例
IssueBase issueBase = ...;
issueBase.CompleteIssueWithTimedOut();
```

### CompleteIssueWithStayAliveConditionsFailed
`public void CompleteIssueWithStayAliveConditionsFailed()`

**用途 / Purpose:** 处理与 「complete issue with stay alive conditions failed」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 IssueBase 实例
IssueBase issueBase = ...;
issueBase.CompleteIssueWithStayAliveConditionsFailed();
```

### CompleteIssueWithBetrayal
`public void CompleteIssueWithBetrayal()`

**用途 / Purpose:** 处理与 「complete issue with betrayal」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 IssueBase 实例
IssueBase issueBase = ...;
issueBase.CompleteIssueWithBetrayal();
```

### CompleteIssueWithFail
`public void CompleteIssueWithFail(TextObject log = null)`

**用途 / Purpose:** 处理与 「complete issue with fail」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 IssueBase 实例
IssueBase issueBase = ...;
issueBase.CompleteIssueWithFail(null);
```

### CompleteIssueWithCancel
`public void CompleteIssueWithCancel(TextObject log = null)`

**用途 / Purpose:** 处理与 「complete issue with cancel」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 IssueBase 实例
IssueBase issueBase = ...;
issueBase.CompleteIssueWithCancel(null);
```

### CompleteIssueWithAiLord
`public void CompleteIssueWithAiLord(Hero issueSolver)`

**用途 / Purpose:** 处理与 「complete issue with ai lord」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 IssueBase 实例
IssueBase issueBase = ...;
issueBase.CompleteIssueWithAiLord(issueSolver);
```

### StartIssueWithLordSolution
`public void StartIssueWithLordSolution()`

**用途 / Purpose:** 启动「issue with lord solution」流程或状态机。

```csharp
// 先通过子系统 API 拿到 IssueBase 实例
IssueBase issueBase = ...;
issueBase.StartIssueWithLordSolution();
```

### CompleteIssueWithAlternativeSolution
`public void CompleteIssueWithAlternativeSolution()`

**用途 / Purpose:** 处理与 「complete issue with alternative solution」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 IssueBase 实例
IssueBase issueBase = ...;
issueBase.CompleteIssueWithAlternativeSolution();
```

### CompleteIssueWithLordSolutionWithRefuseCounterOffer
`public void CompleteIssueWithLordSolutionWithRefuseCounterOffer()`

**用途 / Purpose:** 处理与 「complete issue with lord solution with refuse counter offer」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 IssueBase 实例
IssueBase issueBase = ...;
issueBase.CompleteIssueWithLordSolutionWithRefuseCounterOffer();
```

### CompleteIssueWithLordSolutionWithAcceptCounterOffer
`public void CompleteIssueWithLordSolutionWithAcceptCounterOffer()`

**用途 / Purpose:** 处理与 「complete issue with lord solution with accept counter offer」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 IssueBase 实例
IssueBase issueBase = ...;
issueBase.CompleteIssueWithLordSolutionWithAcceptCounterOffer();
```

### InitializeIssueOnSettlementOwnerChange
`public void InitializeIssueOnSettlementOwnerChange()`

**用途 / Purpose:** 为 「issue on settlement owner change」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 IssueBase 实例
IssueBase issueBase = ...;
issueBase.InitializeIssueOnSettlementOwnerChange();
```

### AddLog
`public void AddLog(JournalLog log)`

**用途 / Purpose:** 将 「log」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 IssueBase 实例
IssueBase issueBase = ...;
issueBase.AddLog(log);
```

### AddTrackedObject
`public void AddTrackedObject(ITrackableCampaignObject o)`

**用途 / Purpose:** 将 「tracked object」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 IssueBase 实例
IssueBase issueBase = ...;
issueBase.AddTrackedObject(o);
```

### ToggleTrackedObjects
`public void ToggleTrackedObjects(bool enableTrack)`

**用途 / Purpose:** 处理与 「toggle tracked objects」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 IssueBase 实例
IssueBase issueBase = ...;
issueBase.ToggleTrackedObjects(false);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
IssueBase instance = ...;
```

## 参见

- [本区域目录](../)