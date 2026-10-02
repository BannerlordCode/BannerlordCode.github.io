---
title: "ChangeShipOwnerAction"
description: "ChangeShipOwnerAction: a public class in TaleWorlds.CampaignSystem; 7 exposed members (5 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem/Actions/ChangeShipOwnerAction.cs."
---
# ChangeShipOwnerAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class ChangeShipOwnerAction`
**File:** `TaleWorlds.CampaignSystem/Actions/ChangeShipOwnerAction.cs`

## Overview

ChangeShipOwnerAction lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Actions/ChangeShipOwnerAction.cs. It is a public class; the inheritance chain is ChangeShipOwnerAction. It exposes 7 public/protected members: 5 methods, 1 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ChangeShipOwnerAction is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.Actions) the module directory; inheritance chain ChangeShipOwnerAction. The surface is method-led (methods 5/7, properties 1/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Actions/ChangeShipOwnerAction.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ApplyByTransferring` | `public static void ApplyByTransferring(PartyBase newOwner, Ship ship)` | method |
| `ApplyByTrade` | `public static void ApplyByTrade(PartyBase newOwner, Ship ship)` | method |
| `ApplyByLooting` | `public static void ApplyByLooting(PartyBase newOwner, Ship ship)` | method |
| `ApplyByProduction` | `public static void ApplyByProduction(PartyBase newOwner, Ship ship)` | method |
| `ApplyByMobilePartyCreation` | `public static void ApplyByMobilePartyCreation(PartyBase newOwner, Ship ship)` | method |
| `ShipOwnerChangeDetail` | `public enum ShipOwnerChangeDetail` | property |
| `ShipOwnerChangeDetail` | `public enum ShipOwnerChangeDetail` | nested type |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AddCompanionAction](../AddCompanionAction)
- [same namespace AddHeroToPartyAction](../AddHeroToPartyAction)
- [same namespace AdoptHeroAction](../AdoptHeroAction)
- [same namespace ApplyHeirSelectionAction](../ApplyHeirSelectionAction)
