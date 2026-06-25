---
title: "QuestItemVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `QuestItemVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# QuestItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Quests
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class QuestItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Quests/QuestItemVM.cs`

## 概述

`QuestItemVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Quests`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Quests` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Quest` | `public QuestBase Quest { get; set; }` |
| `Issue` | `public IssueBase Issue { get; set; }` |
| `QuestLogEntry` | `public JournalLogEntry QuestLogEntry { get; set; }` |
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

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### UpdateIsUpdated
`public void UpdateIsUpdated()`

**用途 / Purpose:** 更新 `is updated` 的状态或数据。

### ExecuteSelection
`public void ExecuteSelection()`

**用途 / Purpose:** 执行 `selection` 操作或流程。

### ExecuteToggleQuestTrack
`public void ExecuteToggleQuestTrack()`

**用途 / Purpose:** 执行 `toggle quest track` 操作或流程。

## 使用示例

```csharp
var value = new QuestItemVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)