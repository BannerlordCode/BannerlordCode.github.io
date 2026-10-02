---
title: "ArrangementOrder"
description: "ArrangementOrder: a public struct in TaleWorlds.MountAndBlade; 34 exposed members (22 methods, 2 properties, 8 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/ArrangementOrder.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ArrangementOrder

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public struct ArrangementOrder`
**File:** `TaleWorlds.MountAndBlade/ArrangementOrder.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

ArrangementOrder lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/ArrangementOrder.cs. It is a public struct; the inheritance chain is ArrangementOrder. It exposes 34 public/protected members: 22 methods, 2 properties, 8 fields, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ArrangementOrder lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain ArrangementOrder. The surface is method-led (methods 22/34, properties 2/34), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/ArrangementOrder.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetUnitSpacingOf` | `public static int GetUnitSpacingOf(ArrangementOrder.ArrangementOrderEnum a)` | method |
| `GetUnitLooseness` | `public static bool GetUnitLooseness(ArrangementOrder.ArrangementOrderEnum a)` | method |
| `ArrangementOrder` | `public ArrangementOrder(ArrangementOrder.ArrangementOrderEnum orderEnum)` | constructor |
| `GetMovementSpeedRestriction` | `public void GetMovementSpeedRestriction(out float? runRestriction, out float? walkRestriction)` | method |
| `GetArrangement` | `public IFormationArrangement GetArrangement(Formation formation)` | method |
| `OnApply` | `public unsafe void OnApply(Formation formation)` | method |
| `SoftUpdate` | `public void SoftUpdate(Formation formation)` | method |
| `GetShieldDirectionOfUnit` | `public static Agent.UsageDirection GetShieldDirectionOfUnit(Formation formation, Agent unit, ArrangementOrder.ArrangementOrderEnum orderEnum)` | method |
| `GetUnitSpacing` | `public int GetUnitSpacing()` | method |
| `Rearrange` | `public void Rearrange(Formation formation)` | method |
| `RearrangeAux` | `public void RearrangeAux(Formation formation, bool isDirectly)` | method |
| `TransposeLineFormation` | `public unsafe static void TransposeLineFormation(Formation formation)` | method |
| `OnCancel` | `public void OnCancel(Formation formation)` | method |
| `TickOccasionally` | `public void TickOccasionally(Formation formation)` | method |
| `OrderType` | `public OrderType OrderType` | property |
| `GetNativeEnum` | `public ArrangementOrder.ArrangementOrderEnum GetNativeEnum()` | method |
| `Equals` | `public override bool Equals(object obj)` | method |
| `GetHashCode` | `public override int GetHashCode()` | method |
| `!` | `public static bool operator !` | operator |
| `operator` | `public static bool operator` | operator |
| `OnOrderPositionChanged` | `public void OnOrderPositionChanged(Formation formation, Vec2 previousOrderPosition)` | method |
| `GetArrangementOrderDefensiveness` | `public static int GetArrangementOrderDefensiveness(ArrangementOrder.ArrangementOrderEnum orderEnum)` | method |
| `GetArrangementOrderDefensivenessChange` | `public static int GetArrangementOrderDefensivenessChange(ArrangementOrder.ArrangementOrderEnum previousOrderEnum, ArrangementOrder.ArrangementOrderEnum nextOrderEnum)` | method |
| `CalculateFormationDirectionEnforcingFactorForRank` | `public float CalculateFormationDirectionEnforcingFactorForRank(int formationRankIndex, int rankCount)` | method |
| `ArrangementOrderCircle` | `public static readonly ArrangementOrder ArrangementOrderCircle` | field |
| `ArrangementOrderColumn` | `public static readonly ArrangementOrder ArrangementOrderColumn` | field |
| `ArrangementOrderLine` | `public static readonly ArrangementOrder ArrangementOrderLine` | field |
| `ArrangementOrderLoose` | `public static readonly ArrangementOrder ArrangementOrderLoose` | field |
| `ArrangementOrderScatter` | `public static readonly ArrangementOrder ArrangementOrderScatter` | field |
| `ArrangementOrderShieldWall` | `public static readonly ArrangementOrder ArrangementOrderShieldWall` | field |
| `ArrangementOrderSkein` | `public static readonly ArrangementOrder ArrangementOrderSkein` | field |
| `ArrangementOrderSquare` | `public static readonly ArrangementOrder ArrangementOrderSquare` | field |
| `ArrangementOrderEnum` | `public enum ArrangementOrderEnum` | property |
| `ArrangementOrderEnum` | `public enum ArrangementOrderEnum` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
