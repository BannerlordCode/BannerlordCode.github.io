---
title: "MissionConversationVM"
description: "MissionConversationVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.Conversation, inheriting ViewModel; 42 exposed members (11 methods, 30 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Conversation/MissionConversationVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionConversationVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Conversation`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class MissionConversationVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Conversation/MissionConversationVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

MissionConversationVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Conversation/MissionConversationVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MissionConversationVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 42 public/protected members: 11 methods, 30 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionConversationVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Conversation`, inheritance chain MissionConversationVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 30/42, methods 11/42), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Conversation/MissionConversationVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SelectedAnOptionOrLinkThisFrame` | `public bool SelectedAnOptionOrLinkThisFrame` | property |
| `MissionConversationVM` | `public MissionConversationVM(Func<string>getContinueInputText, bool isLinksDisabled = false)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `Tick` | `public void Tick(float dt)` | method |
| `OnConversationContinue` | `public void OnConversationContinue()` | method |
| `ExecuteLink` | `public void ExecuteLink(string link)` | method |
| `ExecuteConversedHeroLink` | `public void ExecuteConversedHeroLink()` | method |
| `Refresh` | `public void Refresh()` | method |
| `ExecuteCloseTooltip` | `public void ExecuteCloseTooltip()` | method |
| `ExecuteHeroTooltip` | `public void ExecuteHeroTooltip()` | method |
| `ExecuteFinalizeSelection` | `public void ExecuteFinalizeSelection()` | method |
| `ExecuteContinue` | `public void ExecuteContinue()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `Persuasion` | `public PersuasionVM Persuasion` | property |
| `PowerComparer` | `public PowerLevelComparer PowerComparer` | property |
| `Relation` | `public int Relation` | property |
| `MinRelation` | `public int MinRelation` | property |
| `MaxRelation` | `public int MaxRelation` | property |
| `DefenderLeader` | `public ConversationAggressivePartyItemVM DefenderLeader` | property |
| `AttackerLeader` | `public ConversationAggressivePartyItemVM AttackerLeader` | property |
| `MBBindingList` | `public MBBindingList<ConversationAggressivePartyItemVM>AttackerParties` | property |
| `MBBindingList` | `public MBBindingList<ConversationAggressivePartyItemVM>DefenderParties` | property |
| `MoreOptionText` | `public string MoreOptionText` | property |
| `GoldText` | `public string GoldText` | property |
| `PersuasionText` | `public string PersuasionText` | property |
| `IsCurrentCharacterValidInEncyclopedia` | `public bool IsCurrentCharacterValidInEncyclopedia` | property |
| `IsLoadingOver` | `public bool IsLoadingOver` | property |
| `IsPersuading` | `public bool IsPersuading` | property |
| `ContinueText` | `public string ContinueText` | property |
| `CurrentCharacterNameLbl` | `public string CurrentCharacterNameLbl` | property |
| `MBBindingList` | `public MBBindingList<ConversationItemVM>AnswerList` | property |
| `DialogText` | `public string DialogText` | property |
| `IsAggressive` | `public bool IsAggressive` | property |
| `SelectedSide` | `public int SelectedSide` | property |
| `RelationText` | `public string RelationText` | property |
| `IsRelationEnabled` | `public bool IsRelationEnabled` | property |
| `IsBannerEnabled` | `public bool IsBannerEnabled` | property |
| `CurrentSelectedAnswer` | `public ConversationItemVM CurrentSelectedAnswer` | property |
| `ConversedHeroBanner` | `public BannerImageIdentifierVM ConversedHeroBanner` | property |
| `RelationHint` | `public HintViewModel RelationHint` | property |
| `FactionHint` | `public HintViewModel FactionHint` | property |
| `GoldHint` | `public HintViewModel GoldHint` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ConversationAggressivePartyItemVM](../ConversationAggressivePartyItemVM/)
- [same namespace ConversationItemVM](../ConversationItemVM/)
- [same namespace PersuasionOptionVM](../PersuasionOptionVM/)
- [same namespace PersuasionVM](../PersuasionVM/)
