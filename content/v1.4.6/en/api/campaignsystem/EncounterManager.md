---
title: "EncounterManager"
description: "EncounterManager: a public class in TaleWorlds.CampaignSystem; 5 exposed members (4 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem/EncounterManager.cs."
---
# EncounterManager

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class EncounterManager`
**File:** `TaleWorlds.CampaignSystem/EncounterManager.cs`

## Overview

EncounterManager lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/EncounterManager.cs. It is a public class; the inheritance chain is EncounterManager. It exposes 5 public/protected members: 4 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EncounterManager is a top-level type in TaleWorlds.CampaignSystem, namespace matching the module directory; inheritance chain EncounterManager. The surface is method-led (methods 4/5, properties 1/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/EncounterManager.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EncounterModel` | `public static EncounterModel EncounterModel` | property |
| `Tick` | `public static void Tick(float dt)` | method |
| `HandleEncounterForMobileParty` | `public static void HandleEncounterForMobileParty(MobileParty mobileParty, float dt)` | method |
| `StartPartyEncounter` | `public static void StartPartyEncounter(PartyBase attackerParty, PartyBase defenderParty)` | method |
| `StartSettlementEncounter` | `public static void StartSettlementEncounter(MobileParty attackerParty, Settlement settlement)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionNotes](../ActionNotes)
- [same namespace AIBehaviorData](../AIBehaviorData)
- [same namespace Army](../Army)
- [same namespace AtmosphereGrid](../AtmosphereGrid)
