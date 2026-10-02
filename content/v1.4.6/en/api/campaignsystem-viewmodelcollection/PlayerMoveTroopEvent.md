---
title: "PlayerMoveTroopEvent"
description: "PlayerMoveTroopEvent: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting EventBase; 6 exposed members (0 methods, 5 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PlayerMoveTroopEvent.cs."
---
# PlayerMoveTroopEvent

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Party`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class PlayerMoveTroopEvent : EventBase`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PlayerMoveTroopEvent.cs`

## Overview

PlayerMoveTroopEvent lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PlayerMoveTroopEvent.cs. It is a public class, implementing/inheriting EventBase; the inheritance chain is PlayerMoveTroopEvent → EventBase. It exposes 6 public/protected members: 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PlayerMoveTroopEvent is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Party) the module directory; inheritance chain PlayerMoveTroopEvent → EventBase. The surface is property-led (properties 5/6, methods 0/6), so it mostly exposes state for reading. EventBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PlayerMoveTroopEvent.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Troop` | `public CharacterObject Troop` | property |
| `Amount` | `public int Amount` | property |
| `IsPrisoner` | `public bool IsPrisoner` | property |
| `FromSide` | `public PartyScreenLogic.PartyRosterSide FromSide` | property |
| `ToSide` | `public PartyScreenLogic.PartyRosterSide ToSide` | property |
| `PlayerMoveTroopEvent` | `public PlayerMoveTroopEvent(CharacterObject troop, PartyScreenLogic.PartyRosterSide fromSide, PartyScreenLogic.PartyRosterSide toSide, int amount, bool isPrisoner)` | constructor |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace PartyCharacterVM](../PartyCharacterVM)
- [same namespace PartyCompositionVM](../PartyCompositionVM)
- [same namespace PartySortControllerVM](../PartySortControllerVM)
- [same namespace PartyTradeVM](../PartyTradeVM)
