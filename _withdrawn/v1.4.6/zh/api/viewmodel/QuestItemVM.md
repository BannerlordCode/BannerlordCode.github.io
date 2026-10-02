---
title: "QuestItemVM"
description: "QuestItemVM：TaleWorlds.CampaignSystem.ViewModelCollection.Quests 的 public 类，继承 ViewModel；公开成员 27 个（方法 4、属性 20、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestItemVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# QuestItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Quests`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class QuestItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

QuestItemVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestItemVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 QuestItemVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 27 个：4 方法、20 属性、3 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：QuestItemVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Quests`，继承链 QuestItemVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 20/27，方法 4/27），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Quest` | `public QuestBase Quest` | 属性 |
| `Issue` | `public IssueBase Issue` | 属性 |
| `QuestLogEntry` | `public JournalLogEntry QuestLogEntry` | 属性 |
| `QuestItemVM` | `public QuestItemVM(JournalLogEntry questLogEntry, Action<QuestItemVM>onSelection, QuestsVM.QuestCompletionType completion)` | 构造函数 |
| `QuestItemVM` | `public QuestItemVM(QuestBase quest, Action<QuestItemVM>onSelection)` | 构造函数 |
| `QuestItemVM` | `public QuestItemVM(IssueBase issue, Action<QuestItemVM>onSelection)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `UpdateIsUpdated` | `public void UpdateIsUpdated()` | 方法 |
| `ExecuteSelection` | `public void ExecuteSelection()` | 方法 |
| `ExecuteToggleQuestTrack` | `public void ExecuteToggleQuestTrack()` | 方法 |
| `Name` | `public string Name` | 属性 |
| `CompletionTypeAsInt` | `public int CompletionTypeAsInt` | 属性 |
| `IsMainQuest` | `public bool IsMainQuest` | 属性 |
| `IsNavalQuest` | `public bool IsNavalQuest` | 属性 |
| `IsCompletedSuccessfully` | `public bool IsCompletedSuccessfully` | 属性 |
| `IsCompleted` | `public bool IsCompleted` | 属性 |
| `IsUpdated` | `public bool IsUpdated` | 属性 |
| `IsSelected` | `public bool IsSelected` | 属性 |
| `IsRemainingDaysHidden` | `public bool IsRemainingDaysHidden` | 属性 |
| `IsTracked` | `public bool IsTracked` | 属性 |
| `IsTrackable` | `public bool IsTrackable` | 属性 |
| `RemainingDaysText` | `public string RemainingDaysText` | 属性 |
| `RemainingDaysTextCombined` | `public string RemainingDaysTextCombined` | 属性 |
| `RemainingDays` | `public int RemainingDays` | 属性 |
| `QuestGiverHero` | `public HeroVM QuestGiverHero` | 属性 |
| `IsQuestGiverHeroHidden` | `public bool IsQuestGiverHeroHidden` | 属性 |
| `MBBindingList` | `public MBBindingList<QuestStageVM>Stages` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 QuestItemSortControllerVM](../QuestItemSortControllerVM/)
- [同命名空间 QuestMarkerVM](../QuestMarkerVM/)
- [同命名空间 QuestStageTaskVM](../QuestStageTaskVM/)
- [同命名空间 QuestStageVM](../QuestStageVM/)
