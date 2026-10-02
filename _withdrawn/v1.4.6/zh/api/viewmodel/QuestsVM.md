---
title: "QuestsVM"
description: "QuestsVM：TaleWorlds.CampaignSystem.ViewModelCollection.Quests 的 public 类，继承 ViewModel；公开成员 33 个（方法 8、属性 23、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestsVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# QuestsVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Quests`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class QuestsVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestsVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

QuestsVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestsVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 QuestsVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 33 个：8 方法、23 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：QuestsVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Quests`，继承链 QuestsVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 23/33，方法 8/33），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestsVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `QuestsVM` | `public QuestsVM(Action closeQuestsScreen)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `ExecuteOpenQuestGiverEncyclopedia` | `public void ExecuteOpenQuestGiverEncyclopedia()` | 方法 |
| `ExecuteClose` | `public void ExecuteClose()` | 方法 |
| `SetSelectedIssue` | `public void SetSelectedIssue(IssueBase issue)` | 方法 |
| `SetSelectedQuest` | `public void SetSelectedQuest(QuestBase quest)` | 方法 |
| `SetSelectedLog` | `public void SetSelectedLog(JournalLogEntry log)` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotKey)` | 方法 |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | 属性 |
| `SelectedQuest` | `public QuestItemVM SelectedQuest` | 属性 |
| `MBBindingList` | `public MBBindingList<QuestItemVM>ActiveQuestsList` | 属性 |
| `MBBindingList` | `public MBBindingList<QuestItemVM>OldQuestsList` | 属性 |
| `CurrentQuestGiverHero` | `public HeroVM CurrentQuestGiverHero` | 属性 |
| `TimeRemainingLbl` | `public string TimeRemainingLbl` | 属性 |
| `IsThereAnyQuest` | `public bool IsThereAnyQuest` | 属性 |
| `NoActiveQuestText` | `public string NoActiveQuestText` | 属性 |
| `SortQuestsText` | `public string SortQuestsText` | 属性 |
| `QuestGiverText` | `public string QuestGiverText` | 属性 |
| `QuestTitleText` | `public string QuestTitleText` | 属性 |
| `OldQuestsText` | `public string OldQuestsText` | 属性 |
| `ActiveQuestsText` | `public string ActiveQuestsText` | 属性 |
| `DoneLbl` | `public string DoneLbl` | 属性 |
| `CurrentQuestTitle` | `public string CurrentQuestTitle` | 属性 |
| `IsCurrentQuestGiverHeroHidden` | `public bool IsCurrentQuestGiverHeroHidden` | 属性 |
| `MBBindingList` | `public MBBindingList<QuestStageVM>CurrentQuestStages` | 属性 |
| `TimeRemainingHint` | `public HintViewModel TimeRemainingHint` | 属性 |
| `OldQuestsHint` | `public HintViewModel OldQuestsHint` | 属性 |
| `ActiveQuestsSortController` | `public QuestItemSortControllerVM ActiveQuestsSortController` | 属性 |
| `OldQuestsSortController` | `public QuestItemSortControllerVM OldQuestsSortController` | 属性 |
| `SelectorVM` | `public SelectorVM<SelectorItemVM>SortSelector` | 属性 |
| `QuestCompletionType` | `public enum QuestCompletionType` | 属性 |
| `QuestCompletionType` | `public enum QuestCompletionType` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 QuestItemSortControllerVM](../QuestItemSortControllerVM/)
- [同命名空间 QuestItemVM](../QuestItemVM/)
- [同命名空间 QuestMarkerVM](../QuestMarkerVM/)
- [同命名空间 QuestStageTaskVM](../QuestStageTaskVM/)
