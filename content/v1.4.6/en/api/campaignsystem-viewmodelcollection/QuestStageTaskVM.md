---
title: "QuestStageTaskVM"
description: "QuestStageTaskVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 9 exposed members (2 methods, 6 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestStageTaskVM.cs."
---
# QuestStageTaskVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Quests`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class QuestStageTaskVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestStageTaskVM.cs`

## Overview

QuestStageTaskVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestStageTaskVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is QuestStageTaskVM → ViewModel. It exposes 9 public/protected members: 2 methods, 6 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: QuestStageTaskVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Quests) the module directory; inheritance chain QuestStageTaskVM → ViewModel. The surface is property-led (properties 6/9, methods 2/9), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestStageTaskVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace QuestItemSortControllerVM](../QuestItemSortControllerVM)
- [same namespace QuestItemVM](../QuestItemVM)
- [same namespace QuestMarkerVM](../QuestMarkerVM)
- [same namespace QuestStageVM](../QuestStageVM)
