---
title: "VillageEventOptionData"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `VillageEventOptionData`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VillageEventOptionData

**命名空间:** TaleWorlds.CampaignSystem.Issues
**模块:** TaleWorlds.CampaignSystem
**类型:** `public struct VillageEventOptionData`
**领域:** campaign-ext

## 概述

`VillageEventOptionData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `VillageEventOptionData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

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
var value = new VillageEventOptionData();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
