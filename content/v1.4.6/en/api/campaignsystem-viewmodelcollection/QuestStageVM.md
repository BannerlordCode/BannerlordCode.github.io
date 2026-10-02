---
title: "QuestStageVM"
description: "QuestStageVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 12 exposed members (3 methods, 7 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestStageVM.cs."
---
# QuestStageVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Quests`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class QuestStageVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestStageVM.cs`

## Overview

QuestStageVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestStageVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is QuestStageVM → ViewModel. It exposes 12 public/protected members: 3 methods, 7 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: QuestStageVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Quests) the module directory; inheritance chain QuestStageVM → ViewModel. The surface is property-led (properties 7/12, methods 3/12), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestStageVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace QuestItemSortControllerVM](../QuestItemSortControllerVM)
- [same namespace QuestItemVM](../QuestItemVM)
- [same namespace QuestMarkerVM](../QuestMarkerVM)
- [same namespace QuestStageTaskVM](../QuestStageTaskVM)
