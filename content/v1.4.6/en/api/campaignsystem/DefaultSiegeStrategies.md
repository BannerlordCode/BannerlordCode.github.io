---
title: "DefaultSiegeStrategies"
description: "DefaultSiegeStrategies: a public class in TaleWorlds.CampaignSystem; 10 exposed members (0 methods, 9 properties, 0 fields). Source: TaleWorlds.CampaignSystem/Siege/DefaultSiegeStrategies.cs."
---
# DefaultSiegeStrategies

**Namespace:** `TaleWorlds.CampaignSystem.Siege`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultSiegeStrategies`
**File:** `TaleWorlds.CampaignSystem/Siege/DefaultSiegeStrategies.cs`

## Overview

DefaultSiegeStrategies lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Siege/DefaultSiegeStrategies.cs. It is a public class; the inheritance chain is DefaultSiegeStrategies. It exposes 10 public/protected members: 9 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultSiegeStrategies is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.Siege) the module directory; inheritance chain DefaultSiegeStrategies. The surface is property-led (properties 9/10, methods 0/10), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Siege/DefaultSiegeStrategies.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PreserveStrength` | `public static SiegeStrategy PreserveStrength` | property |
| `PrepareAgainstAssault` | `public static SiegeStrategy PrepareAgainstAssault` | property |
| `CounterBombardment` | `public static SiegeStrategy CounterBombardment` | property |
| `PrepareAssault` | `public static SiegeStrategy PrepareAssault` | property |
| `BreachWalls` | `public static SiegeStrategy BreachWalls` | property |
| `WearOutDefenders` | `public static SiegeStrategy WearOutDefenders` | property |
| `Custom` | `public static SiegeStrategy Custom` | property |
| `IEnumerable` | `public static IEnumerable<SiegeStrategy>AllAttackerStrategies` | property |
| `IEnumerable` | `public static IEnumerable<SiegeStrategy>AllDefenderStrategies` | property |
| `DefaultSiegeStrategies` | `public DefaultSiegeStrategies()` | constructor |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BesiegerCamp](../BesiegerCamp)
- [same namespace ISiegeEventSide](../ISiegeEventSide)
- [same namespace ISiegeEventVisual](../ISiegeEventVisual)
- [same namespace PlayerSiege](../PlayerSiege)
