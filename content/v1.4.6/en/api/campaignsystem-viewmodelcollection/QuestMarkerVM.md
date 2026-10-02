---
title: "QuestMarkerVM"
description: "QuestMarkerVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 9 exposed members (2 methods, 6 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestMarkerVM.cs."
---
# QuestMarkerVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Quests`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class QuestMarkerVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestMarkerVM.cs`

## Overview

QuestMarkerVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestMarkerVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is QuestMarkerVM → ViewModel. It exposes 9 public/protected members: 2 methods, 6 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: QuestMarkerVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Quests) the module directory; inheritance chain QuestMarkerVM → ViewModel. The surface is property-led (properties 6/9, methods 2/9), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestMarkerVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `QuestTitle` | `public TextObject QuestTitle` | property |
| `QuestHintText` | `public TextObject QuestHintText` | property |
| `IssueQuestFlag` | `public CampaignUIHelper.IssueQuestFlags IssueQuestFlag` | property |
| `QuestMarkerVM` | `public QuestMarkerVM(CampaignUIHelper.IssueQuestFlags issueQuestFlag, TextObject questTitle = null, TextObject questHintText = null)` | constructor |
| `RefreshWith` | `public void RefreshWith(CampaignUIHelper.IssueQuestFlags issueQuestFlag, TextObject questTitle = null, TextObject questHintText = null)` | method |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `IsTrackMarker` | `public bool IsTrackMarker` | property |
| `QuestMarkerType` | `public int QuestMarkerType` | property |
| `QuestHint` | `public HintViewModel QuestHint` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace QuestItemSortControllerVM](../QuestItemSortControllerVM)
- [same namespace QuestItemVM](../QuestItemVM)
- [same namespace QuestStageTaskVM](../QuestStageTaskVM)
- [same namespace QuestStageVM](../QuestStageVM)
