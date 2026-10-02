---
title: "PlayerSiege"
description: "PlayerSiege: a public class in TaleWorlds.CampaignSystem.Siege; 9 exposed members (5 methods, 4 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/Siege/PlayerSiege.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PlayerSiege

**Namespace:** `TaleWorlds.CampaignSystem.Siege`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class PlayerSiege`
**File:** `TaleWorlds.CampaignSystem/Siege/PlayerSiege.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

PlayerSiege lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Siege/PlayerSiege.cs. It is a public class; the inheritance chain is PlayerSiege. It exposes 9 public/protected members: 5 methods, 4 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PlayerSiege lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.Siege`, inheritance chain PlayerSiege. The surface is method-led (methods 5/9, properties 4/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Siege/PlayerSiege.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `PlayerSiegeEvent` | `public static SiegeEvent PlayerSiegeEvent` | property |
| `BesiegedSettlement` | `public static Settlement BesiegedSettlement` | property |
| `PlayerSide` | `public static BattleSideEnum PlayerSide` | property |
| `IsRebellion` | `public static bool IsRebellion` | property |
| `StartSiegePreparation` | `public static void StartSiegePreparation()` | method |
| `OnSiegeEventFinalized` | `public static void OnSiegeEventFinalized(bool besiegerPartyDefeated)` | method |
| `StartPlayerSiege` | `public static void StartPlayerSiege(BattleSideEnum playerSide, bool isSimulation = false, Settlement settlement = null)` | method |
| `FinalizePlayerSiege` | `public static void FinalizePlayerSiege()` | method |
| `StartSiegeMission` | `public static void StartSiegeMission(Settlement settlement = null)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace BesiegerCamp](../BesiegerCamp/)
- [same namespace DefaultSiegeStrategies](../DefaultSiegeStrategies/)
- [same namespace ISiegeEventSide](../ISiegeEventSide/)
- [same namespace ISiegeEventVisual](../ISiegeEventVisual/)
