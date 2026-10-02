---
title: "TownEncounter"
description: "TownEncounter: a public class in TaleWorlds.CampaignSystem.Encounters, inheriting LocationEncounter; 2 exposed members (1 methods, 0 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/Encounters/TownEncounter.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TownEncounter

**Namespace:** `TaleWorlds.CampaignSystem.Encounters`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class TownEncounter : LocationEncounter`
**File:** `TaleWorlds.CampaignSystem/Encounters/TownEncounter.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

TownEncounter lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Encounters/TownEncounter.cs. It is a public class, implementing/inheriting LocationEncounter; the inheritance chain is TownEncounter → LocationEncounter. It exposes 2 public/protected members: 1 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TownEncounter lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.Encounters`, inheritance chain TownEncounter → LocationEncounter. The surface is method-led (methods 1/2, properties 0/2), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Encounters/TownEncounter.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `TownEncounter` | `public TownEncounter(Settlement settlement) : base(settlement)` | constructor |
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
