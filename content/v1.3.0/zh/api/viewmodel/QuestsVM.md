---
title: "QuestsVM"
description: "QuestsVM 的自动生成类参考。"
---
# QuestsVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Quests
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class QuestsVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestsVM.cs`

## 概述

`QuestsVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Quests`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Quests` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `SelectedQuest` | `public QuestItemVM SelectedQuest { get; set; }` |
| `ActiveQuestsList` | `public MBBindingList<QuestItemVM> ActiveQuestsList { get; set; }` |
| `OldQuestsList` | `public MBBindingList<QuestItemVM> OldQuestsList { get; set; }` |
| `CurrentQuestGiverHero` | `public HeroVM CurrentQuestGiverHero { get; set; }` |
| `TimeRemainingLbl` | `public string TimeRemainingLbl { get; set; }` |
| `IsThereAnyQuest` | `public bool IsThereAnyQuest { get; set; }` |
| `NoActiveQuestText` | `public string NoActiveQuestText { get; set; }` |
| `SortQuestsText` | `public string SortQuestsText { get; set; }` |
| `QuestGiverText` | `public string QuestGiverText { get; set; }` |
| `QuestTitleText` | `public string QuestTitleText { get; set; }` |
| `OldQuestsText` | `public string OldQuestsText { get; set; }` |
| `ActiveQuestsText` | `public string ActiveQuestsText { get; set; }` |
| `DoneLbl` | `public string DoneLbl { get; set; }` |
| `CurrentQuestTitle` | `public string CurrentQuestTitle { get; set; }` |
| `IsCurrentQuestGiverHeroHidden` | `public bool IsCurrentQuestGiverHeroHidden { get; set; }` |
| `CurrentQuestStages` | `public MBBindingList<QuestStageVM> CurrentQuestStages { get; set; }` |
| `TimeRemainingHint` | `public HintViewModel TimeRemainingHint { get; set; }` |
| `OldQuestsHint` | `public HintViewModel OldQuestsHint { get; set; }` |
| `ActiveQuestsSortController` | `public QuestItemSortControllerVM ActiveQuestsSortController { get; set; }` |
| `OldQuestsSortController` | `public QuestItemSortControllerVM OldQuestsSortController { get; set; }` |
| `SortSelector` | `public SelectorVM<SelectorItemVM> SortSelector { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 QuestsVM 实例
QuestsVM questsVM = ...;
questsVM.RefreshValues();
```

### ExecuteOpenQuestGiverEncyclopedia
`public void ExecuteOpenQuestGiverEncyclopedia()`

**用途 / Purpose:** 执行 open quest giver encyclopedia 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 QuestsVM 实例
QuestsVM questsVM = ...;
questsVM.ExecuteOpenQuestGiverEncyclopedia();
```

### ExecuteClose
`public void ExecuteClose()`

**用途 / Purpose:** 执行 close 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 QuestsVM 实例
QuestsVM questsVM = ...;
questsVM.ExecuteClose();
```

### SetSelectedIssue
`public void SetSelectedIssue(IssueBase issue)`

**用途 / Purpose:** 为 selected issue 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 QuestsVM 实例
QuestsVM questsVM = ...;
questsVM.SetSelectedIssue(issue);
```

### SetSelectedQuest
`public void SetSelectedQuest(QuestBase quest)`

**用途 / Purpose:** 为 selected quest 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 QuestsVM 实例
QuestsVM questsVM = ...;
questsVM.SetSelectedQuest(quest);
```

### SetSelectedLog
`public void SetSelectedLog(JournalLogEntry log)`

**用途 / Purpose:** 为 selected log 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 QuestsVM 实例
QuestsVM questsVM = ...;
questsVM.SetSelectedLog(log);
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 QuestsVM 实例
QuestsVM questsVM = ...;
questsVM.OnFinalize();
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 done input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 QuestsVM 实例
QuestsVM questsVM = ...;
questsVM.SetDoneInputKey(hotKey);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
QuestsVM questsVM = ...;
questsVM.RefreshValues();
```

## 参见

- [本区域目录](../)