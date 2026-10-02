---
title: "PlayerSiege"
description: "PlayerSiege: a public class in TaleWorlds.CampaignSystem; 9 exposed members (5 methods, 4 properties, 0 fields). Source: TaleWorlds.CampaignSystem/Siege/PlayerSiege.cs."
---
# PlayerSiege

**Namespace:** `TaleWorlds.CampaignSystem.Siege`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class PlayerSiege`
**File:** `TaleWorlds.CampaignSystem/Siege/PlayerSiege.cs`

## Overview

PlayerSiege lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Siege/PlayerSiege.cs. It is a public class; the inheritance chain is PlayerSiege. It exposes 9 public/protected members: 5 methods, 4 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PlayerSiege is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.Siege) the module directory; inheritance chain PlayerSiege. The surface is method-led (methods 5/9, properties 4/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Siege/PlayerSiege.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BesiegerCamp](../BesiegerCamp)
- [same namespace DefaultSiegeStrategies](../DefaultSiegeStrategies)
- [same namespace ISiegeEventSide](../ISiegeEventSide)
- [same namespace ISiegeEventVisual](../ISiegeEventVisual)
