---
title: "QuestItemVM"
description: "QuestItemVM 的自动生成类参考。"
---
# QuestItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Quests
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class QuestItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestItemVM.cs`

## 概述

`QuestItemVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Quests`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Quests` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Quest` | `public QuestBase Quest { get; }` |
| `Issue` | `public IssueBase Issue { get; }` |
| `QuestLogEntry` | `public JournalLogEntry QuestLogEntry { get; }` |
| `Name` | `public string Name { get; set; }` |
| `CompletionTypeAsInt` | `public int CompletionTypeAsInt { get; set; }` |
| `IsMainQuest` | `public bool IsMainQuest { get; set; }` |
| `IsNavalQuest` | `public bool IsNavalQuest { get; set; }` |
| `IsCompletedSuccessfully` | `public bool IsCompletedSuccessfully { get; set; }` |
| `IsCompleted` | `public bool IsCompleted { get; set; }` |
| `IsUpdated` | `public bool IsUpdated { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `IsRemainingDaysHidden` | `public bool IsRemainingDaysHidden { get; set; }` |
| `IsTracked` | `public bool IsTracked { get; set; }` |
| `IsTrackable` | `public bool IsTrackable { get; set; }` |
| `RemainingDaysText` | `public string RemainingDaysText { get; set; }` |
| `RemainingDaysTextCombined` | `public string RemainingDaysTextCombined { get; set; }` |
| `RemainingDays` | `public int RemainingDays { get; set; }` |
| `QuestGiverHero` | `public HeroVM QuestGiverHero { get; set; }` |
| `IsQuestGiverHeroHidden` | `public bool IsQuestGiverHeroHidden { get; set; }` |
| `Stages` | `public MBBindingList<QuestStageVM> Stages { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 QuestItemVM 实例
QuestItemVM questItemVM = ...;
questItemVM.RefreshValues();
```

### UpdateIsUpdated
`public void UpdateIsUpdated()`

**用途 / Purpose:** 重新计算并更新 is updated 的最新表示。

```csharp
// 先通过子系统 API 拿到 QuestItemVM 实例
QuestItemVM questItemVM = ...;
questItemVM.UpdateIsUpdated();
```

### ExecuteSelection
`public void ExecuteSelection()`

**用途 / Purpose:** 执行 selection 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 QuestItemVM 实例
QuestItemVM questItemVM = ...;
questItemVM.ExecuteSelection();
```

### ExecuteToggleQuestTrack
`public void ExecuteToggleQuestTrack()`

**用途 / Purpose:** 执行 toggle quest track 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 QuestItemVM 实例
QuestItemVM questItemVM = ...;
questItemVM.ExecuteToggleQuestTrack();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
QuestItemVM questItemVM = ...;
questItemVM.RefreshValues();
```

## 参见

- [本区域目录](../)