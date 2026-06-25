---
title: "ChangeSettlementOwnerTask"
description: "ChangeSettlementOwnerTask 的自动生成类参考。"
---
# ChangeSettlementOwnerTask

**Namespace:** TaleWorlds.CampaignSystem.Issues.IssueQuestTasks
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ChangeSettlementOwnerTask : QuestTaskBase`
**Base:** `QuestTaskBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues.IssueQuestTasks/ChangeSettlementOwnerTask.cs`

## 概述

`ChangeSettlementOwnerTask` 位于 `TaleWorlds.CampaignSystem.Issues.IssueQuestTasks`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Issues.IssueQuestTasks` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OnSettlementOwnerChanged
`public void OnSettlementOwnerChanged(Settlement settlement, bool openToClaim, Hero newOwner, Hero oldOwner, Hero capturerHero, ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail detail)`

**用途 / Purpose:** 在 settlement owner changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ChangeSettlementOwnerTask 实例
ChangeSettlementOwnerTask changeSettlementOwnerTask = ...;
changeSettlementOwnerTask.OnSettlementOwnerChanged(settlement, false, newOwner, oldOwner, capturerHero, detail);
```

### SetReferences
`public override void SetReferences()`

**用途 / Purpose:** 为 references 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ChangeSettlementOwnerTask 实例
ChangeSettlementOwnerTask changeSettlementOwnerTask = ...;
changeSettlementOwnerTask.SetReferences();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ChangeSettlementOwnerTask changeSettlementOwnerTask = ...;
changeSettlementOwnerTask.OnSettlementOwnerChanged(settlement, false, newOwner, oldOwner, capturerHero, detail);
```

## 参见

- [本区域目录](../)