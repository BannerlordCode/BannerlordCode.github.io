<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FamilyFeudIssueTypeDefiner`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# FamilyFeudIssueTypeDefiner

**命名空间:** SandBox.Issues
**模块:** SandBox.Issues
**类型:** `public class FamilyFeudIssueTypeDefiner : SaveableTypeDefiner`
**Base:** `SaveableTypeDefiner`
**领域:** campaign-ext

## 概述

`FamilyFeudIssueTypeDefiner` 位于 `SandBox.Issues`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `SandBox.Issues` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CounterOfferHero` | `public override Hero CounterOfferHero { get; set; }` |
| `IssueBriefByIssueGiver` | `public override TextObject IssueBriefByIssueGiver { get; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueAlternativeSolutionExplanationByIssueGiver` | `public override TextObject IssueAlternativeSolutionExplanationByIssueGiver { get; }` |
| `IssueLordSolutionExplanationByIssueGiver` | `public override TextObject IssueLordSolutionExplanationByIssueGiver { get; }` |
| `IssueLordSolutionAcceptByPlayer` | `public override TextObject IssueLordSolutionAcceptByPlayer { get; }` |
| `IssueLordSolutionCounterOfferExplanationByOtherNpc` | `public override TextObject IssueLordSolutionCounterOfferExplanationByOtherNpc { get; }` |
| `Description` | `public override TextObject Description { get; }` |
| `IssueAlternativeSolutionAcceptByPlayer` | `public override TextObject IssueAlternativeSolutionAcceptByPlayer { get; }` |
| `IssueDiscussAlternativeSolution` | `public override TextObject IssueDiscussAlternativeSolution { get; }` |
| `IssueAlternativeSolutionResponseByIssueGiver` | `public override TextObject IssueAlternativeSolutionResponseByIssueGiver { get; }` |
| `IssueAsRumorInSettlement` | `public override TextObject IssueAsRumorInSettlement { get; }` |
| `IssueAlternativeSolutionSuccessLog` | `public override TextObject IssueAlternativeSolutionSuccessLog { get; }` |

## 主要方法

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
`public override IssueFrequency GetFrequency()`

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

### OnSettlementLeft
`public void OnSettlementLeft(MobileParty party, Settlement settlement)`

**用途 / Purpose:** 当 `settlement left` 事件触发时调用此方法。

### OnBeforeMissionOpened
`public void OnBeforeMissionOpened()`

**用途 / Purpose:** 当 `before mission opened` 事件触发时调用此方法。

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 处理 `register events` 相关逻辑。

### OnCheckForIssue
`public void OnCheckForIssue(Hero hero)`

**用途 / Purpose:** 当 `check for issue` 事件触发时调用此方法。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 FamilyFeudIssueTypeDefiner 实例，再调用它的公开方法
var value = new FamilyFeudIssueTypeDefiner();
value.OnAgentHit(affectedAgent, affectorAgent, affectorWeapon, blow, attackCollisionData);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
