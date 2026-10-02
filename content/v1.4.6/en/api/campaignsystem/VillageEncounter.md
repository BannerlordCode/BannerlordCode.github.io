---
title: "VillageEncounter"
description: "VillageEncounter: a public class in TaleWorlds.CampaignSystem, inheriting LocationEncounter; 2 exposed members (1 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/Encounters/VillageEncounter.cs."
---
# VillageEncounter

**Namespace:** `TaleWorlds.CampaignSystem.Encounters`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class VillageEncounter : LocationEncounter`
**File:** `TaleWorlds.CampaignSystem/Encounters/VillageEncounter.cs`

## Overview

VillageEncounter lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Encounters/VillageEncounter.cs. It is a public class, implementing/inheriting LocationEncounter; the inheritance chain is VillageEncounter → LocationEncounter. It exposes 2 public/protected members: 1 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: VillageEncounter is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.Encounters) the module directory; inheritance chain VillageEncounter → LocationEncounter. The surface is method-led (methods 1/2, properties 0/2), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Encounters/VillageEncounter.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `VillageEncounter` | `public VillageEncounter(Settlement settlement) : base(settlement)` | constructor |
| `CreateAndOpenMissionController` | `public override IMission CreateAndOpenMissionController(Location nextLocation, Location previousLocation = null, CharacterObject talkToChar = null, string playerSpecialSpawnTag = null)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface LocationEncounter](../LocationEncounter)
- [same namespace CampaignBattleResult](../CampaignBattleResult)
- [same namespace CastleEncounter](../CastleEncounter)
- [same namespace HideoutEncounter](../HideoutEncounter)
- [same namespace LocationEncounter](../LocationEncounter)
