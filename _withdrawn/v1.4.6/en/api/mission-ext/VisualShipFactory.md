---
title: "VisualShipFactory"
description: "VisualShipFactory: a public class in TaleWorlds.MountAndBlade; 5 exposed members (5 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/VisualShipFactory.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# VisualShipFactory

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class VisualShipFactory`
**File:** `TaleWorlds.MountAndBlade/VisualShipFactory.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

VisualShipFactory lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/VisualShipFactory.cs. It is a public class; the inheritance chain is VisualShipFactory. It exposes 5 public/protected members: 5 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: VisualShipFactory lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain VisualShipFactory. The surface is method-led (methods 5/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/VisualShipFactory.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `InitializeShipEntityCache` | `public static void InitializeShipEntityCache(Scene scene)` | method |
| `DeregisterVisualShipCache` | `public static void DeregisterVisualShipCache()` | method |
| `CreateVisualShip` | `public static GameEntity CreateVisualShip(string shipPrefab, Scene scene, List<ShipVisualSlotInfo>upgrades, int shipSeed, float hitPointRatio, uint sailColor1 = 4294967295U, uint sailColor2 = 4294967295U, bool createPhysics = false)` | method |
| `CreateVisualShipForCampaign` | `public static GameEntity CreateVisualShipForCampaign(string shipPrefab, Scene scene, List<ShipVisualSlotInfo>upgrades, int shipSeed, string shipCustomSailPatternId, uint sailColor1 = 4294967295U, uint sailColor2 = 4294967295U)` | method |
| `RefreshUpgrades` | `public static void RefreshUpgrades(WeakGameEntity shipEntity, List<ShipVisualSlotInfo>upgrades)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
