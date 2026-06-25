---
title: "RevenueFarmingIssueQuest"
description: "RevenueFarmingIssueQuest 的自动生成类参考。"
---
# RevenueFarmingIssueQuest

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class RevenueFarmingIssueQuest : QuestBase`
**Base:** `QuestBase`
**File:** `TaleWorlds.CampaignSystem/Issues/RevenueFarmingIssueBehavior.cs`

## 概述

`RevenueFarmingIssueQuest` 位于 `TaleWorlds.CampaignSystem.Issues`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Issues` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Title` | `public override TextObject Title { get; }` |
| `IsRemainingTimeHidden` | `public override bool IsRemainingTimeHidden { get; }` |
| `RevenueVillages` | `public List<RevenueFarmingIssueBehavior.RevenueVillage> RevenueVillages { get; }` |
| `TargetSettlement` | `public Settlement TargetSettlement { get; }` |

## 主要方法

### RevenuesAreDeliveredToSteward
`public void RevenuesAreDeliveredToSteward()`

**用途 / Purpose:** **用途 / Purpose:** 调用 RevenuesAreDeliveredToSteward 对应的操作。

```csharp
// 先通过子系统 API 拿到 RevenueFarmingIssueQuest 实例
RevenueFarmingIssueQuest revenueFarmingIssueQuest = ...;
revenueFarmingIssueQuest.RevenuesAreDeliveredToSteward();
```

### FindCurrentRevenueVillage
`public RevenueFarmingIssueBehavior.RevenueVillage FindCurrentRevenueVillage()`

**用途 / Purpose:** **用途 / Purpose:** 在当前集合/范围内查找满足条件的current revenue village。

```csharp
// 先通过子系统 API 拿到 RevenueFarmingIssueQuest 实例
RevenueFarmingIssueQuest revenueFarmingIssueQuest = ...;
var result = revenueFarmingIssueQuest.FindCurrentRevenueVillage();
```

### SetVillageAsCompleted
`public void SetVillageAsCompleted(RevenueFarmingIssueBehavior.RevenueVillage village, bool addLog = true)`

**用途 / Purpose:** **用途 / Purpose:** 为 village as completed 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 RevenueFarmingIssueQuest 实例
RevenueFarmingIssueQuest revenueFarmingIssueQuest = ...;
revenueFarmingIssueQuest.SetVillageAsCompleted(village, false);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
RevenueFarmingIssueQuest revenueFarmingIssueQuest = ...;
revenueFarmingIssueQuest.RevenuesAreDeliveredToSteward();
```

## 参见

- [本区域目录](../)