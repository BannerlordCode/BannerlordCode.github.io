---
title: "ConversationAggressivePartyItemVM"
description: "ConversationAggressivePartyItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.Conversation, inheriting ViewModel; 6 exposed members (2 methods, 3 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Conversation/ConversationAggressivePartyItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ConversationAggressivePartyItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Conversation`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ConversationAggressivePartyItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Conversation/ConversationAggressivePartyItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

ConversationAggressivePartyItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Conversation/ConversationAggressivePartyItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is ConversationAggressivePartyItemVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 6 public/protected members: 2 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ConversationAggressivePartyItemVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Conversation`, inheritance chain ConversationAggressivePartyItemVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 3/6, methods 2/6), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Conversation/ConversationAggressivePartyItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ConversationAggressivePartyItemVM` | `public ConversationAggressivePartyItemVM(MobileParty party, CharacterObject leader = null)` | constructor |
| `ExecuteShowPartyTooltip` | `public void ExecuteShowPartyTooltip()` | method |
| `ExecuteHideTooltip` | `public void ExecuteHideTooltip()` | method |
| `LeaderVisual` | `public CharacterImageIdentifierVM LeaderVisual` | property |
| `HealthyAmount` | `public int HealthyAmount` | property |
| `MBBindingList` | `public MBBindingList<QuestMarkerVM>Quests` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ConversationItemVM](../ConversationItemVM/)
- [same namespace MissionConversationVM](../MissionConversationVM/)
- [same namespace PersuasionOptionVM](../PersuasionOptionVM/)
- [same namespace PersuasionVM](../PersuasionVM/)
