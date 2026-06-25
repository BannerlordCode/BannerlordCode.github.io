---
title: "ArmyNeedsSuppliesIssue"
description: "ArmyNeedsSuppliesIssue 的自动生成类参考。"
---
# ArmyNeedsSuppliesIssue

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ArmyNeedsSuppliesIssue`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/ArmyNeedsSuppliesIssueBehavior.cs`

## 概述

`ArmyNeedsSuppliesIssue` 位于 `TaleWorlds.CampaignSystem.Issues`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Issues` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IssueAcceptByPlayer` | `public override TextObject IssueAcceptByPlayer { get; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueQuestSolutionAcceptByPlayer` | `public override TextObject IssueQuestSolutionAcceptByPlayer { get; }` |
| `Description` | `public override TextObject Description { get; }` |

## 主要方法

### GetFrequency
`public override IssueFrequency GetFrequency()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 frequency 的结果。

```csharp
// 先通过子系统 API 拿到 ArmyNeedsSuppliesIssue 实例
ArmyNeedsSuppliesIssue armyNeedsSuppliesIssue = ...;
var result = armyNeedsSuppliesIssue.GetFrequency();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**用途 / Purpose:** **用途 / Purpose:** 创建或发起stay alive conditions。

```csharp
// 先通过子系统 API 拿到 ArmyNeedsSuppliesIssue 实例
ArmyNeedsSuppliesIssue armyNeedsSuppliesIssue = ...;
var result = armyNeedsSuppliesIssue.IssueStayAliveConditions();
```

### OnFailed
`public override void OnFailed()`

**用途 / Purpose:** **用途 / Purpose:** 在 failed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ArmyNeedsSuppliesIssue 实例
ArmyNeedsSuppliesIssue armyNeedsSuppliesIssue = ...;
armyNeedsSuppliesIssue.OnFailed();
```

### OnCanceled
`public override void OnCanceled()`

**用途 / Purpose:** **用途 / Purpose:** 在 canceled 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ArmyNeedsSuppliesIssue 实例
ArmyNeedsSuppliesIssue armyNeedsSuppliesIssue = ...;
armyNeedsSuppliesIssue.OnCanceled();
```

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** **用途 / Purpose:** 将events注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 ArmyNeedsSuppliesIssue 实例
ArmyNeedsSuppliesIssue armyNeedsSuppliesIssue = ...;
armyNeedsSuppliesIssue.RegisterEvents();
```

### OnCheckForIssue
`public void OnCheckForIssue(Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 在 check for issue 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ArmyNeedsSuppliesIssue 实例
ArmyNeedsSuppliesIssue armyNeedsSuppliesIssue = ...;
armyNeedsSuppliesIssue.OnCheckForIssue(hero);
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** **用途 / Purpose:** 将data同步到相关上下文或系统中。

```csharp
// 先通过子系统 API 拿到 ArmyNeedsSuppliesIssue 实例
ArmyNeedsSuppliesIssue armyNeedsSuppliesIssue = ...;
armyNeedsSuppliesIssue.SyncData(dataStore);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ArmyNeedsSuppliesIssue armyNeedsSuppliesIssue = ...;
armyNeedsSuppliesIssue.GetFrequency();
```

## 参见

- [本区域目录](../)