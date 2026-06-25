---
title: "QuestStageVM"
description: "QuestStageVM 的自动生成类参考。"
---
# QuestStageVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Quests
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class QuestStageVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Quests/QuestStageVM.cs`

## 概述

`QuestStageVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Quests`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Quests` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `DateText` | `public string DateText { get; set; }` |
| `DescriptionText` | `public string DescriptionText { get; set; }` |
| `HasATask` | `public bool HasATask { get; set; }` |
| `IsNew` | `public bool IsNew { get; set; }` |
| `IsLastStage` | `public bool IsLastStage { get; set; }` |
| `IsTaskCompleted` | `public bool IsTaskCompleted { get; set; }` |
| `StageTask` | `public QuestStageTaskVM StageTask { get; set; }` |

## 主要方法

### ExecuteResetUpdated
`public void ExecuteResetUpdated()`

**用途 / Purpose:** 执行 「reset updated」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 QuestStageVM 实例
QuestStageVM questStageVM = ...;
questStageVM.ExecuteResetUpdated();
```

### ExecuteLink
`public void ExecuteLink(string link)`

**用途 / Purpose:** 执行 「link」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 QuestStageVM 实例
QuestStageVM questStageVM = ...;
questStageVM.ExecuteLink("example");
```

### UpdateIsNew
`public void UpdateIsNew()`

**用途 / Purpose:** 重新计算并更新 「is new」 的最新表示。

```csharp
// 先通过子系统 API 拿到 QuestStageVM 实例
QuestStageVM questStageVM = ...;
questStageVM.UpdateIsNew();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
QuestStageVM questStageVM = ...;
questStageVM.ExecuteResetUpdated();
```

## 参见

- [本区域目录](../)