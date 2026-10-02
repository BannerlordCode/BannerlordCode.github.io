---
title: "TeleportHeroAction"
description: "TeleportHeroAction: a public class in TaleWorlds.CampaignSystem; 9 exposed members (7 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem/Actions/TeleportHeroAction.cs."
---
# TeleportHeroAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class TeleportHeroAction`
**File:** `TaleWorlds.CampaignSystem/Actions/TeleportHeroAction.cs`

## Overview

TeleportHeroAction lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Actions/TeleportHeroAction.cs. It is a public class; the inheritance chain is TeleportHeroAction. It exposes 9 public/protected members: 7 methods, 1 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TeleportHeroAction is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.Actions) the module directory; inheritance chain TeleportHeroAction. The surface is method-led (methods 7/9, properties 1/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Actions/TeleportHeroAction.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ApplyImmediateTeleportToSettlement` | `public static void ApplyImmediateTeleportToSettlement(Hero heroToBeMoved, Settlement targetSettlement)` | method |
| `ApplyImmediateTeleportToParty` | `public static void ApplyImmediateTeleportToParty(Hero heroToBeMoved, MobileParty party)` | method |
| `ApplyImmediateTeleportToPartyAsPartyLeader` | `public static void ApplyImmediateTeleportToPartyAsPartyLeader(Hero heroToBeMoved, MobileParty party)` | method |
| `ApplyDelayedTeleportToSettlement` | `public static void ApplyDelayedTeleportToSettlement(Hero heroToBeMoved, Settlement targetSettlement)` | method |
| `ApplyDelayedTeleportToParty` | `public static void ApplyDelayedTeleportToParty(Hero heroToBeMoved, MobileParty party)` | method |
| `ApplyDelayedTeleportToSettlementAsGovernor` | `public static void ApplyDelayedTeleportToSettlementAsGovernor(Hero heroToBeMoved, Settlement targetSettlement)` | method |
| `ApplyDelayedTeleportToPartyAsPartyLeader` | `public static void ApplyDelayedTeleportToPartyAsPartyLeader(Hero heroToBeMoved, MobileParty party)` | method |
| `TeleportationDetail` | `public enum TeleportationDetail` | property |
| `TeleportationDetail` | `public enum TeleportationDetail` | nested type |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AddCompanionAction](../AddCompanionAction)
- [same namespace AddHeroToPartyAction](../AddHeroToPartyAction)
- [same namespace AdoptHeroAction](../AdoptHeroAction)
- [same namespace ApplyHeirSelectionAction](../ApplyHeirSelectionAction)
