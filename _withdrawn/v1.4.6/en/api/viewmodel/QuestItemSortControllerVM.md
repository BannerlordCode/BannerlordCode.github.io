---
title: "QuestItemSortControllerVM"
description: "QuestItemSortControllerVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.Quests, inheriting ViewModel; 7 exposed members (1 methods, 3 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestItemSortControllerVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# QuestItemSortControllerVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Quests`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class QuestItemSortControllerVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestItemSortControllerVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

QuestItemSortControllerVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestItemSortControllerVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is QuestItemSortControllerVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 7 public/protected members: 1 methods, 3 properties, 1 constructors, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: QuestItemSortControllerVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Quests`, inheritance chain QuestItemSortControllerVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 3/7, methods 1/7), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestItemSortControllerVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CurrentSortOption` | `public QuestItemSortControllerVM.QuestItemSortOption? CurrentSortOption` | property |
| `QuestItemSortControllerVM` | `public QuestItemSortControllerVM(ref MBBindingList<QuestItemVM>listToControl)` | constructor |
| `SortByOption` | `public void SortByOption(QuestItemSortControllerVM.QuestItemSortOption sortOption)` | method |
| `IsThereAnyQuest` | `public bool IsThereAnyQuest` | property |
| `QuestItemSortOption` | `public enum QuestItemSortOption` | property |
| `QuestItemSortOption` | `public enum QuestItemSortOption` | nested type |
| `JournalLogIndex` | `protected enum JournalLogIndex` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace QuestItemVM](../QuestItemVM/)
- [same namespace QuestMarkerVM](../QuestMarkerVM/)
- [same namespace QuestStageTaskVM](../QuestStageTaskVM/)
- [same namespace QuestStageVM](../QuestStageVM/)
