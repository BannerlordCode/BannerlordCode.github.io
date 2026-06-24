<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FamilyFeudIssue`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# FamilyFeudIssue

**命名空间:** SandBox.Issues
**模块:** SandBox.Issues
**类型:** `public class FamilyFeudIssue`
**领域:** campaign-ext

## 概述

`FamilyFeudIssue` 位于 `SandBox.Issues`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `SandBox.Issues` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `AlternativeSolutionScaleFlags` | `public override IssueBase.AlternativeSolutionScaleFlag AlternativeSolutionScaleFlags { get; }` |
| `AlternativeSolutionBaseNeededMenCount` | `public override int AlternativeSolutionBaseNeededMenCount { get; }` |
| `CounterOfferHero` | `public override Hero CounterOfferHero { get; set; }` |
| `NeededInfluenceForLordSolution` | `public override int NeededInfluenceForLordSolution { get; }` |
| `IsThereAlternativeSolution` | `public override bool IsThereAlternativeSolution { get; }` |
| `IsThereLordSolution` | `public override bool IsThereLordSolution { get; }` |
| `IssueBriefByIssueGiver` | `public override TextObject IssueBriefByIssueGiver { get; }` |
| `IssueAcceptByPlayer` | `public override TextObject IssueAcceptByPlayer { get; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueAlternativeSolutionExplanationByIssueGiver` | `public override TextObject IssueAlternativeSolutionExplanationByIssueGiver { get; }` |
| `IssueLordSolutionExplanationByIssueGiver` | `public override TextObject IssueLordSolutionExplanationByIssueGiver { get; }` |
| `IssuePlayerResponseAfterLordExplanation` | `public override TextObject IssuePlayerResponseAfterLordExplanation { get; }` |
| `IssuePlayerResponseAfterAlternativeExplanation` | `public override TextObject IssuePlayerResponseAfterAlternativeExplanation { get; }` |
| `IssueLordSolutionAcceptByPlayer` | `public override TextObject IssueLordSolutionAcceptByPlayer { get; }` |
| `IssueLordSolutionResponseByIssueGiver` | `public override TextObject IssueLordSolutionResponseByIssueGiver { get; }` |
| `IssueLordSolutionCounterOfferExplanationByOtherNpc` | `public override TextObject IssueLordSolutionCounterOfferExplanationByOtherNpc { get; }` |
| `IssueLordSolutionCounterOfferBriefByOtherNpc` | `public override TextObject IssueLordSolutionCounterOfferBriefByOtherNpc { get; }` |
| `IssueLordSolutionCounterOfferAcceptByPlayer` | `public override TextObject IssueLordSolutionCounterOfferAcceptByPlayer { get; }` |
| `IssueLordSolutionCounterOfferAcceptResponseByOtherNpc` | `public override TextObject IssueLordSolutionCounterOfferAcceptResponseByOtherNpc { get; }` |
| `IssueLordSolutionCounterOfferDeclineByPlayer` | `public override TextObject IssueLordSolutionCounterOfferDeclineByPlayer { get; }` |

## 主要方法

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 处理 `register events` 相关逻辑。

### OnCheckForIssue
`public void OnCheckForIssue(Hero hero)`

**用途 / Purpose:** 当 `check for issue` 事件触发时调用此方法。

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 处理 `sync data` 相关逻辑。

### OnAgentHit
`public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon affectorWeapon, in Blow blow, in AttackCollisionData attackCollisionData)`

**用途 / Purpose:** 当 `agent hit` 事件触发时调用此方法。

### OnHeroCanBeSelectedInInventoryInfoIsRequested
`public override void OnHeroCanBeSelectedInInventoryInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 当 `hero can be selected in inventory info is requested` 事件触发时调用此方法。

### OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested
`public override void OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 当 `hero can have party role or be governor info is requested` 事件触发时调用此方法。

### OnHeroCanLeadPartyInfoIsRequested
`public override void OnHeroCanLeadPartyInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 当 `hero can lead party info is requested` 事件触发时调用此方法。

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 当 `hero can have campaign issues info is requested` 事件触发时调用此方法。

### GetAlternativeSolutionSkill
`public override ValueTuple<SkillObject, int> GetAlternativeSolutionSkill(Hero hero)`

**用途 / Purpose:** 获取 `alternative solution skill` 的当前值。

### LordSolutionCondition
`public override bool LordSolutionCondition(out TextObject explanation)`

**用途 / Purpose:** 处理 `lord solution condition` 相关逻辑。

### AlternativeSolutionCondition
`public override bool AlternativeSolutionCondition(out TextObject explanation)`

**用途 / Purpose:** 处理 `alternative solution condition` 相关逻辑。

### DoTroopsSatisfyAlternativeSolution
`public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**用途 / Purpose:** 处理 `do troops satisfy alternative solution` 相关逻辑。

### IsTroopTypeNeededByAlternativeSolution
`public override bool IsTroopTypeNeededByAlternativeSolution(CharacterObject character)`

**用途 / Purpose:** 处理 `is troop type needed by alternative solution` 相关逻辑。

### GetFrequency
`public override IssueBase.IssueFrequency GetFrequency()`

**用途 / Purpose:** 获取 `frequency` 的当前值。

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**用途 / Purpose:** 处理 `issue stay alive conditions` 相关逻辑。

### OnHeroCanBeSelectedInInventoryInfoIsRequested
`public override void OnHeroCanBeSelectedInInventoryInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 当 `hero can be selected in inventory info is requested` 事件触发时调用此方法。

### OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested
`public override void OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 当 `hero can have party role or be governor info is requested` 事件触发时调用此方法。

### OnHeroCanLeadPartyInfoIsRequested
`public override void OnHeroCanLeadPartyInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 当 `hero can lead party info is requested` 事件触发时调用此方法。

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 当 `hero can have campaign issues info is requested` 事件触发时调用此方法。

### OnMissionStarted
`public void OnMissionStarted(IMission iMission)`

**用途 / Purpose:** 当 `mission started` 事件触发时调用此方法。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 FamilyFeudIssue 实例，再调用它的公开方法
var value = new FamilyFeudIssue();
value.RegisterEvents();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
