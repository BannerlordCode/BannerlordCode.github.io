<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `VillageEvent`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VillageEvent

**命名空间:** TaleWorlds.CampaignSystem.Issues
**模块:** TaleWorlds.CampaignSystem
**类型:** `public class VillageEvent`
**领域:** campaign-ext

## 概述

`VillageEvent` 位于 `TaleWorlds.CampaignSystem.Issues`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Issues` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IssueBriefByIssueGiver` | `public override TextObject IssueBriefByIssueGiver { get; }` |
| `IssueAcceptByPlayer` | `public override TextObject IssueAcceptByPlayer { get; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueQuestSolutionAcceptByPlayer` | `public override TextObject IssueQuestSolutionAcceptByPlayer { get; }` |
| `IsThereAlternativeSolution` | `public override bool IsThereAlternativeSolution { get; }` |
| `IsThereLordSolution` | `public override bool IsThereLordSolution { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `Description` | `public override TextObject Description { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `IsRemainingTimeHidden` | `public override bool IsRemainingTimeHidden { get; }` |
| `RevenueVillages` | `public List<RevenueFarmingIssueBehavior.RevenueVillage> RevenueVillages { get; }` |
| `TargetSettlement` | `public Settlement TargetSettlement { get; }` |
| `CollectProgress` | `public float CollectProgress { get; }` |

## 主要方法

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 处理 `register events` 相关逻辑。

### OnVillageEventWithIdSpawned
`public void OnVillageEventWithIdSpawned(string Id)`

**用途 / Purpose:** 当 `village event with id spawned` 事件触发时调用此方法。

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 处理 `sync data` 相关逻辑。

### OnCheckForIssue
`public void OnCheckForIssue(Hero hero)`

**用途 / Purpose:** 当 `check for issue` 事件触发时调用此方法。

### GetFrequency
`public override IssueBase.IssueFrequency GetFrequency()`

**用途 / Purpose:** 获取 `frequency` 的当前值。

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**用途 / Purpose:** 处理 `issue stay alive conditions` 相关逻辑。

### RevenuesAreDeliveredToSteward
`public void RevenuesAreDeliveredToSteward()`

**用途 / Purpose:** 处理 `revenues are delivered to steward` 相关逻辑。

### FindCurrentRevenueVillage
`public RevenueFarmingIssueBehavior.RevenueVillage FindCurrentRevenueVillage()`

**用途 / Purpose:** 处理 `find current revenue village` 相关逻辑。

### SetVillageAsCompleted
`public void SetVillageAsCompleted(RevenueFarmingIssueBehavior.RevenueVillage village, bool addLog = true)`

**用途 / Purpose:** 设置 `village as completed` 的值或状态。

### SetDone
`public void SetDone()`

**用途 / Purpose:** 设置 `done` 的值或状态。

### SetAdditionalProgress
`public void SetAdditionalProgress(float progress)`

**用途 / Purpose:** 设置 `additional progress` 的值或状态。

### GetIsCompleted
`public bool GetIsCompleted()`

**用途 / Purpose:** 获取 `is completed` 的当前值。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 VillageEvent 实例，再调用它的公开方法
var value = new VillageEvent();
value.RegisterEvents();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
