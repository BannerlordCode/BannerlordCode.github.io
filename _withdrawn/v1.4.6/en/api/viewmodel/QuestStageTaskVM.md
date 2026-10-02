---
title: "QuestStageTaskVM"
description: "QuestStageTaskVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.Quests, inheriting ViewModel; 9 exposed members (2 methods, 6 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestStageTaskVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# QuestStageTaskVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Quests`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class QuestStageTaskVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestStageTaskVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

QuestStageTaskVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestStageTaskVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is QuestStageTaskVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 9 public/protected members: 2 methods, 6 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: QuestStageTaskVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Quests`, inheritance chain QuestStageTaskVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 6/9, methods 2/9), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestStageTaskVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `QuestStageTaskVM` | `public QuestStageTaskVM(TextObject taskName, int currentProgress, int targetProgress, LogType type)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ExecuteLink` | `public void ExecuteLink(string link)` | method |
| `TaskName` | `public string TaskName` | property |
| `IsValid` | `public bool IsValid` | property |
| `CurrentProgress` | `public int CurrentProgress` | property |
| `TargetProgress` | `public int TargetProgress` | property |
| `NegativeTargetProgress` | `public int NegativeTargetProgress` | property |
| `ProgressType` | `public int ProgressType` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace QuestItemSortControllerVM](../QuestItemSortControllerVM/)
- [same namespace QuestItemVM](../QuestItemVM/)
- [same namespace QuestMarkerVM](../QuestMarkerVM/)
- [same namespace QuestStageVM](../QuestStageVM/)
