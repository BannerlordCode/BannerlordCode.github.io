---
title: "SnareTheWealthyIssueBehavior"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SnareTheWealthyIssueBehavior`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SnareTheWealthyIssueBehavior

**Namespace:** SandBox.Issues
**Module:** SandBox.Issues
**Type:** `public class SnareTheWealthyIssueBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Issues/SnareTheWealthyIssueBehavior.cs`

## 概述

`SnareTheWealthyIssueBehavior` 位于 `SandBox.Issues`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Issues` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IssueBriefByIssueGiver` | `public override TextObject IssueBriefByIssueGiver { get; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueAlternativeSolutionExplanationByIssueGiver` | `public override TextObject IssueAlternativeSolutionExplanationByIssueGiver { get; }` |
| `Description` | `public override TextObject Description { get; }` |

## 主要方法

### AlternativeSolutionCondition
`public override bool AlternativeSolutionCondition(out TextObject explanation)`

**用途 / Purpose:** 处理 `alternative solution condition` 相关逻辑。

### IsTroopTypeNeededByAlternativeSolution
`public override bool IsTroopTypeNeededByAlternativeSolution(CharacterObject character)`

**用途 / Purpose:** 处理 `is troop type needed by alternative solution` 相关逻辑。

### DoTroopsSatisfyAlternativeSolution
`public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**用途 / Purpose:** 处理 `do troops satisfy alternative solution` 相关逻辑。

### GetFrequency
`public override IssueFrequency GetFrequency()`

**用途 / Purpose:** 获取 `frequency` 的当前值。

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**用途 / Purpose:** 处理 `issue stay alive conditions` 相关逻辑。

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 当 `hero can have campaign issues info is requested` 事件触发时调用此方法。

### GetMountAndHarnessVisualIdsForQuestCaravan
`public void GetMountAndHarnessVisualIdsForQuestCaravan(CultureObject culture, out string mountStringId, out string harnessStringId)`

**用途 / Purpose:** 获取 `mount and harness visual ids for quest caravan` 的当前值。

### OnWarDeclared
`public void OnWarDeclared(IFaction faction1, IFaction faction2, DeclareWarDetail reason)`

**用途 / Purpose:** 当 `war declared` 事件触发时调用此方法。

### OnVillageStateChanged
`public void OnVillageStateChanged(Village village, VillageStates oldState, VillageStates newState, MobileParty raiderParty)`

**用途 / Purpose:** 当 `village state changed` 事件触发时调用此方法。

### OnMapEventEnded
`public void OnMapEventEnded(MapEvent mapEvent)`

**用途 / Purpose:** 当 `map event ended` 事件触发时调用此方法。

### OnSettlementEntered
`public void OnSettlementEntered(MobileParty party, Settlement settlement, Hero hero)`

**用途 / Purpose:** 当 `settlement entered` 事件触发时调用此方法。

### OnSettlementLeft
`public void OnSettlementLeft(MobileParty party, Settlement settlement)`

**用途 / Purpose:** 当 `settlement left` 事件触发时调用此方法。

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 当 `hero can have campaign issues info is requested` 事件触发时调用此方法。

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 处理 `register events` 相关逻辑。

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 处理 `sync data` 相关逻辑。

## 使用示例

```csharp
var value = new SnareTheWealthyIssueBehavior();
value.AlternativeSolutionCondition(explanation);
```

## 参见

- [完整类目录](../catalog)