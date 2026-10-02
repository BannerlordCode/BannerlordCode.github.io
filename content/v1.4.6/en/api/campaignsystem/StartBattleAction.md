---
title: "StartBattleAction"
description: "StartBattleAction: a public class in TaleWorlds.CampaignSystem; 5 exposed members (5 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/Actions/StartBattleAction.cs."
---
# StartBattleAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class StartBattleAction`
**File:** `TaleWorlds.CampaignSystem/Actions/StartBattleAction.cs`

## Overview

StartBattleAction lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Actions/StartBattleAction.cs. It is a public class; the inheritance chain is StartBattleAction. It exposes 5 public/protected members: 5 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: StartBattleAction is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.Actions) the module directory; inheritance chain StartBattleAction. The surface is method-led (methods 5/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Actions/StartBattleAction.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Apply` | `public static void Apply(PartyBase attackerParty, PartyBase defenderParty)` | method |
| `ApplyStartBattle` | `public static void ApplyStartBattle(MobileParty attackerParty, MobileParty defenderParty)` | method |
| `ApplyStartRaid` | `public static void ApplyStartRaid(MobileParty attackerParty, Settlement settlement)` | method |
| `ApplyStartSallyOut` | `public static void ApplyStartSallyOut(Settlement settlement, MobileParty defenderParty)` | method |
| `ApplyStartAssaultAgainstWalls` | `public static void ApplyStartAssaultAgainstWalls(MobileParty attackerParty, Settlement settlement)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AddCompanionAction](../AddCompanionAction)
- [same namespace AddHeroToPartyAction](../AddHeroToPartyAction)
- [same namespace AdoptHeroAction](../AdoptHeroAction)
- [same namespace ApplyHeirSelectionAction](../ApplyHeirSelectionAction)
