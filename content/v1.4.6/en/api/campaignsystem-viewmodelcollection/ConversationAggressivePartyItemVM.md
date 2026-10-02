---
title: "ConversationAggressivePartyItemVM"
description: "ConversationAggressivePartyItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 6 exposed members (2 methods, 3 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Conversation/ConversationAggressivePartyItemVM.cs."
---
# ConversationAggressivePartyItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Conversation`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ConversationAggressivePartyItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Conversation/ConversationAggressivePartyItemVM.cs`

## Overview

ConversationAggressivePartyItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Conversation/ConversationAggressivePartyItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is ConversationAggressivePartyItemVM → ViewModel. It exposes 6 public/protected members: 2 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ConversationAggressivePartyItemVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Conversation) the module directory; inheritance chain ConversationAggressivePartyItemVM → ViewModel. The surface is property-led (properties 3/6, methods 2/6), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Conversation/ConversationAggressivePartyItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ConversationAggressivePartyItemVM` | `public ConversationAggressivePartyItemVM(MobileParty party, CharacterObject leader = null)` | constructor |
| `ExecuteShowPartyTooltip` | `public void ExecuteShowPartyTooltip()` | method |
| `ExecuteHideTooltip` | `public void ExecuteHideTooltip()` | method |
| `LeaderVisual` | `public CharacterImageIdentifierVM LeaderVisual` | property |
| `HealthyAmount` | `public int HealthyAmount` | property |
| `MBBindingList` | `public MBBindingList<QuestMarkerVM>Quests` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ConversationItemVM](../ConversationItemVM)
- [same namespace MissionConversationVM](../MissionConversationVM)
- [same namespace PersuasionOptionVM](../PersuasionOptionVM)
- [same namespace PersuasionVM](../PersuasionVM)
