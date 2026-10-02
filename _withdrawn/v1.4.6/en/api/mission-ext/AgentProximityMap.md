---
title: "AgentProximityMap"
description: "AgentProximityMap: a public class in TaleWorlds.MountAndBlade; 5 exposed members (3 methods, 1 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/AgentProximityMap.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AgentProximityMap

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class AgentProximityMap`
**File:** `TaleWorlds.MountAndBlade/AgentProximityMap.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

AgentProximityMap lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/AgentProximityMap.cs. It is a public class; the inheritance chain is AgentProximityMap. It exposes 5 public/protected members: 3 methods, 1 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AgentProximityMap lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain AgentProximityMap. The surface is method-led (methods 3/5, properties 1/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/AgentProximityMap.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CanSearchRadius` | `public static bool CanSearchRadius(float searchRadius)` | method |
| `BeginSearch` | `public static AgentProximityMap.ProximityMapSearchStruct BeginSearch(Mission mission, Vec2 searchPos, float searchRadius, bool extendRangeByBiggestAgentCollisionPadding = false)` | method |
| `FindNext` | `public static void FindNext(Mission mission, ref AgentProximityMap.ProximityMapSearchStruct searchStruct)` | method |
| `ProximityMapSearchStruct` | `public struct ProximityMapSearchStruct` | property |
| `ProximityMapSearchStruct` | `public struct ProximityMapSearchStruct` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
