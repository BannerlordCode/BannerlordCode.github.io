---
title: "PlayerRequestUpgradeTroopEvent"
description: "PlayerRequestUpgradeTroopEvent: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting EventBase; 4 exposed members (0 methods, 3 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PlayerRequestUpgradeTroopEvent.cs."
---
# PlayerRequestUpgradeTroopEvent

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Party`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class PlayerRequestUpgradeTroopEvent : EventBase`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PlayerRequestUpgradeTroopEvent.cs`

## Overview

PlayerRequestUpgradeTroopEvent lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PlayerRequestUpgradeTroopEvent.cs. It is a public class, implementing/inheriting EventBase; the inheritance chain is PlayerRequestUpgradeTroopEvent → EventBase. It exposes 4 public/protected members: 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PlayerRequestUpgradeTroopEvent is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Party) the module directory; inheritance chain PlayerRequestUpgradeTroopEvent → EventBase. The surface is property-led (properties 3/4, methods 0/4), so it mostly exposes state for reading. EventBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PlayerRequestUpgradeTroopEvent.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SourceTroop` | `public CharacterObject SourceTroop` | property |
| `TargetTroop` | `public CharacterObject TargetTroop` | property |
| `Number` | `public int Number` | property |
| `PlayerRequestUpgradeTroopEvent` | `public PlayerRequestUpgradeTroopEvent(CharacterObject sourceTroop, CharacterObject targetTroop, int num)` | constructor |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace PartyCharacterVM](../PartyCharacterVM)
- [same namespace PartyCompositionVM](../PartyCompositionVM)
- [same namespace PartySortControllerVM](../PartySortControllerVM)
- [same namespace PartyTradeVM](../PartyTradeVM)
