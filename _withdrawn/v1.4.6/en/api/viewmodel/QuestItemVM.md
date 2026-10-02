---
title: "QuestItemVM"
description: "QuestItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.Quests, inheriting ViewModel; 27 exposed members (4 methods, 20 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# QuestItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Quests`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class QuestItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

QuestItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is QuestItemVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 27 public/protected members: 4 methods, 20 properties, 3 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: QuestItemVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Quests`, inheritance chain QuestItemVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 20/27, methods 4/27), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace QuestItemSortControllerVM](../QuestItemSortControllerVM/)
- [same namespace QuestMarkerVM](../QuestMarkerVM/)
- [same namespace QuestStageTaskVM](../QuestStageTaskVM/)
- [same namespace QuestStageVM](../QuestStageVM/)
