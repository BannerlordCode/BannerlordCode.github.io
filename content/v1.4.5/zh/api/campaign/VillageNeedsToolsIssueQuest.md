---
title: "VillageNeedsToolsIssueQuest"
description: "VillageNeedsToolsIssueQuest 的自动生成类参考。"
---
# VillageNeedsToolsIssueQuest

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class VillageNeedsToolsIssueQuest : QuestBase`
**Base:** `QuestBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/VillageNeedsToolsIssueBehavior.cs`

## 概述

`VillageNeedsToolsIssueQuest` 位于 `TaleWorlds.CampaignSystem.Issues`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Issues` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Title` | `public override TextObject Title { get; }` |

## 主要方法

### OnFailed
`public override void OnFailed()`

**用途 / Purpose:** 在 failed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 VillageNeedsToolsIssueQuest 实例
VillageNeedsToolsIssueQuest villageNeedsToolsIssueQuest = ...;
villageNeedsToolsIssueQuest.OnFailed();
```

### GiveTradeOrExchangeRewardToMainParty
`public static void GiveTradeOrExchangeRewardToMainParty(Hero questGiver, int gold, ItemObject exchangeItem, int exchangeItemCount)`

**用途 / Purpose:** 调用 GiveTradeOrExchangeRewardToMainParty 对应的操作。

```csharp
// 静态调用，不需要实例
VillageNeedsToolsIssueQuest.GiveTradeOrExchangeRewardToMainParty(questGiver, 0, exchangeItem, 0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
VillageNeedsToolsIssueQuest villageNeedsToolsIssueQuest = ...;
villageNeedsToolsIssueQuest.OnFailed();
```

## 参见

- [本区域目录](../)