---
title: "QuestItemVM"
description: "QuestItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 27 exposed members (4 methods, 20 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestItemVM.cs."
---
# QuestItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Quests`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class QuestItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestItemVM.cs`

## Overview

QuestItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is QuestItemVM → ViewModel. It exposes 27 public/protected members: 4 methods, 20 properties, 3 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: QuestItemVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Quests) the module directory; inheritance chain QuestItemVM → ViewModel. The surface is property-led (properties 20/27, methods 4/27), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Quest` | `public QuestBase Quest` | property |
| `Issue` | `public IssueBase Issue` | property |
| `QuestLogEntry` | `public JournalLogEntry QuestLogEntry` | property |
| `QuestItemVM` | `public QuestItemVM(JournalLogEntry questLogEntry, Action<QuestItemVM>onSelection, QuestsVM.QuestCompletionType completion)` | constructor |
| `QuestItemVM` | `public QuestItemVM(QuestBase quest, Action<QuestItemVM>onSelection)` | constructor |
| `QuestItemVM` | `public QuestItemVM(IssueBase issue, Action<QuestItemVM>onSelection)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `UpdateIsUpdated` | `public void UpdateIsUpdated()` | method |
| `ExecuteSelection` | `public void ExecuteSelection()` | method |
| `ExecuteToggleQuestTrack` | `public void ExecuteToggleQuestTrack()` | method |
| `Name` | `public string Name` | property |
| `CompletionTypeAsInt` | `public int CompletionTypeAsInt` | property |
| `IsMainQuest` | `public bool IsMainQuest` | property |
| `IsNavalQuest` | `public bool IsNavalQuest` | property |
| `IsCompletedSuccessfully` | `public bool IsCompletedSuccessfully` | property |
| `IsCompleted` | `public bool IsCompleted` | property |
| `IsUpdated` | `public bool IsUpdated` | property |
| `IsSelected` | `public bool IsSelected` | property |
| `IsRemainingDaysHidden` | `public bool IsRemainingDaysHidden` | property |
| `IsTracked` | `public bool IsTracked` | property |
| `IsTrackable` | `public bool IsTrackable` | property |
| `RemainingDaysText` | `public string RemainingDaysText` | property |
| `RemainingDaysTextCombined` | `public string RemainingDaysTextCombined` | property |
| `RemainingDays` | `public int RemainingDays` | property |
| `QuestGiverHero` | `public HeroVM QuestGiverHero` | property |
| `IsQuestGiverHeroHidden` | `public bool IsQuestGiverHeroHidden` | property |
| `MBBindingList` | `public MBBindingList<QuestStageVM>Stages` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace QuestItemSortControllerVM](../QuestItemSortControllerVM)
- [same namespace QuestMarkerVM](../QuestMarkerVM)
- [same namespace QuestStageTaskVM](../QuestStageTaskVM)
- [same namespace QuestStageVM](../QuestStageVM)
