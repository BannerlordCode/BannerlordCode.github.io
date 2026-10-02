---
title: "QuestsVM"
description: "QuestsVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 33 exposed members (8 methods, 23 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestsVM.cs."
---
# QuestsVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Quests`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class QuestsVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestsVM.cs`

## Overview

QuestsVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestsVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is QuestsVM → ViewModel. It exposes 33 public/protected members: 8 methods, 23 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: QuestsVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Quests) the module directory; inheritance chain QuestsVM → ViewModel. The surface is property-led (properties 23/33, methods 8/33), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestsVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `QuestsVM` | `public QuestsVM(Action closeQuestsScreen)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ExecuteOpenQuestGiverEncyclopedia` | `public void ExecuteOpenQuestGiverEncyclopedia()` | method |
| `ExecuteClose` | `public void ExecuteClose()` | method |
| `SetSelectedIssue` | `public void SetSelectedIssue(IssueBase issue)` | method |
| `SetSelectedQuest` | `public void SetSelectedQuest(QuestBase quest)` | method |
| `SetSelectedLog` | `public void SetSelectedLog(JournalLogEntry log)` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotKey)` | method |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | property |
| `SelectedQuest` | `public QuestItemVM SelectedQuest` | property |
| `MBBindingList` | `public MBBindingList<QuestItemVM>ActiveQuestsList` | property |
| `MBBindingList` | `public MBBindingList<QuestItemVM>OldQuestsList` | property |
| `CurrentQuestGiverHero` | `public HeroVM CurrentQuestGiverHero` | property |
| `TimeRemainingLbl` | `public string TimeRemainingLbl` | property |
| `IsThereAnyQuest` | `public bool IsThereAnyQuest` | property |
| `NoActiveQuestText` | `public string NoActiveQuestText` | property |
| `SortQuestsText` | `public string SortQuestsText` | property |
| `QuestGiverText` | `public string QuestGiverText` | property |
| `QuestTitleText` | `public string QuestTitleText` | property |
| `OldQuestsText` | `public string OldQuestsText` | property |
| `ActiveQuestsText` | `public string ActiveQuestsText` | property |
| `DoneLbl` | `public string DoneLbl` | property |
| `CurrentQuestTitle` | `public string CurrentQuestTitle` | property |
| `IsCurrentQuestGiverHeroHidden` | `public bool IsCurrentQuestGiverHeroHidden` | property |
| `MBBindingList` | `public MBBindingList<QuestStageVM>CurrentQuestStages` | property |
| `TimeRemainingHint` | `public HintViewModel TimeRemainingHint` | property |
| `OldQuestsHint` | `public HintViewModel OldQuestsHint` | property |
| `ActiveQuestsSortController` | `public QuestItemSortControllerVM ActiveQuestsSortController` | property |
| `OldQuestsSortController` | `public QuestItemSortControllerVM OldQuestsSortController` | property |
| `SelectorVM` | `public SelectorVM<SelectorItemVM>SortSelector` | property |
| `QuestCompletionType` | `public enum QuestCompletionType` | property |
| `QuestCompletionType` | `public enum QuestCompletionType` | nested type |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace QuestItemSortControllerVM](../QuestItemSortControllerVM)
- [same namespace QuestItemVM](../QuestItemVM)
- [same namespace QuestMarkerVM](../QuestMarkerVM)
- [same namespace QuestStageTaskVM](../QuestStageTaskVM)
