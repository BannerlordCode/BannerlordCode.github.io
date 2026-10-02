---
title: "VillageEncounter"
description: "VillageEncounter: a public class in TaleWorlds.CampaignSystem.Encounters, inheriting LocationEncounter; 2 exposed members (1 methods, 0 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/Encounters/VillageEncounter.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# VillageEncounter

**Namespace:** `TaleWorlds.CampaignSystem.Encounters`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class VillageEncounter : LocationEncounter`
**File:** `TaleWorlds.CampaignSystem/Encounters/VillageEncounter.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

VillageEncounter lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Encounters/VillageEncounter.cs. It is a public class, implementing/inheriting LocationEncounter; the inheritance chain is VillageEncounter → LocationEncounter. It exposes 2 public/protected members: 1 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: VillageEncounter lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.Encounters`, inheritance chain VillageEncounter → LocationEncounter. The surface is method-led (methods 1/2, properties 0/2), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Encounters/VillageEncounter.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `VillageEncounter` | `public VillageEncounter(Settlement settlement) : base(settlement)` | constructor |
| `CreateAndOpenMissionController` | `public override IMission CreateAndOpenMissionController(Location nextLocation, Location previousLocation = null, CharacterObject talkToChar = null, string playerSpecialSpawnTag = null)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface LocationEncounter](../LocationEncounter/)
- [same namespace CampaignBattleResult](../CampaignBattleResult/)
- [same namespace CastleEncounter](../CastleEncounter/)
- [same namespace HideoutEncounter](../HideoutEncounter/)
- [same namespace LocationEncounter](../LocationEncounter/)
