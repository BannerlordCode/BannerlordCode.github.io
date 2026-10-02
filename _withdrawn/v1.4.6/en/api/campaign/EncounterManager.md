---
title: "EncounterManager"
description: "EncounterManager: a public class in TaleWorlds.CampaignSystem; 5 exposed members (4 methods, 1 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/EncounterManager.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# EncounterManager

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class EncounterManager`
**File:** `TaleWorlds.CampaignSystem/EncounterManager.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

EncounterManager lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/EncounterManager.cs. It is a public class; the inheritance chain is EncounterManager. It exposes 5 public/protected members: 4 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EncounterManager lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem`, inheritance chain EncounterManager. The surface is method-led (methods 4/5, properties 1/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/EncounterManager.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `EncounterModel` | `public static EncounterModel EncounterModel` | property |
| `Tick` | `public static void Tick(float dt)` | method |
| `HandleEncounterForMobileParty` | `public static void HandleEncounterForMobileParty(MobileParty mobileParty, float dt)` | method |
| `StartPartyEncounter` | `public static void StartPartyEncounter(PartyBase attackerParty, PartyBase defenderParty)` | method |
| `StartSettlementEncounter` | `public static void StartSettlementEncounter(MobileParty attackerParty, Settlement settlement)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionNotes](../ActionNotes/)
- [same namespace AIBehaviorData](../AIBehaviorData/)
- [same namespace Army](../Army/)
- [same namespace AtmosphereGrid](../AtmosphereGrid/)
