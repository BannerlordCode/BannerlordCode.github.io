---
title: "QuestStageVM"
description: "QuestStageVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.Quests, inheriting ViewModel; 12 exposed members (3 methods, 7 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestStageVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# QuestStageVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Quests`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class QuestStageVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestStageVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

QuestStageVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestStageVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is QuestStageVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 12 public/protected members: 3 methods, 7 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: QuestStageVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Quests`, inheritance chain QuestStageVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 7/12, methods 3/12), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestStageVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `QuestStageVM` | `public QuestStageVM(JournalLog log, string dateString, bool isLastStage, Action onLogNotified, QuestStageTaskVM stageTask = null)` | constructor |
| `QuestStageVM` | `public QuestStageVM(JournalLog log, string description, string dateString, bool isLastStage, Action onLogNotified)` | constructor |
| `ExecuteResetUpdated` | `public void ExecuteResetUpdated()` | method |
| `ExecuteLink` | `public void ExecuteLink(string link)` | method |
| `UpdateIsNew` | `public void UpdateIsNew()` | method |
| `DateText` | `public string DateText` | property |
| `DescriptionText` | `public string DescriptionText` | property |
| `HasATask` | `public bool HasATask` | property |
| `IsNew` | `public bool IsNew` | property |
| `IsLastStage` | `public bool IsLastStage` | property |
| `IsTaskCompleted` | `public bool IsTaskCompleted` | property |
| `StageTask` | `public QuestStageTaskVM StageTask` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace QuestItemSortControllerVM](../QuestItemSortControllerVM/)
- [same namespace QuestItemVM](../QuestItemVM/)
- [same namespace QuestMarkerVM](../QuestMarkerVM/)
- [same namespace QuestStageTaskVM](../QuestStageTaskVM/)
