---
title: "SiegeQuerySystem"
description: "SiegeQuerySystem: a public class in TaleWorlds.MountAndBlade; 25 exposed members (4 methods, 20 properties, 0 fields). Source: TaleWorlds.MountAndBlade/SiegeQuerySystem.cs."
---
# SiegeQuerySystem

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class SiegeQuerySystem`
**File:** `TaleWorlds.MountAndBlade/SiegeQuerySystem.cs`

## Overview

SiegeQuerySystem lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/SiegeQuerySystem.cs. It is a public class; the inheritance chain is SiegeQuerySystem. It exposes 25 public/protected members: 4 methods, 20 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SiegeQuerySystem is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain SiegeQuerySystem. The surface is property-led (properties 20/25, methods 4/25), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/SiegeQuerySystem.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `LeftRegionMemberCount` | `public int LeftRegionMemberCount` | property |
| `LeftCloseAttackerCount` | `public int LeftCloseAttackerCount` | property |
| `MiddleRegionMemberCount` | `public int MiddleRegionMemberCount` | property |
| `MiddleCloseAttackerCount` | `public int MiddleCloseAttackerCount` | property |
| `RightRegionMemberCount` | `public int RightRegionMemberCount` | property |
| `RightCloseAttackerCount` | `public int RightCloseAttackerCount` | property |
| `InsideAttackerCount` | `public int InsideAttackerCount` | property |
| `LeftDefenderCount` | `public int LeftDefenderCount` | property |
| `MiddleDefenderCount` | `public int MiddleDefenderCount` | property |
| `RightDefenderCount` | `public int RightDefenderCount` | property |
| `SiegeQuerySystem` | `public SiegeQuerySystem(Team team, IEnumerable<SiegeLane>lanes)` | constructor |
| `Expire` | `public void Expire()` | method |
| `DeterminePositionAssociatedSide` | `public int DeterminePositionAssociatedSide(Vec3 position)` | method |
| `AreSidesRelated` | `public static bool AreSidesRelated(FormationAI.BehaviorSide side, int connectedSides)` | method |
| `SideDistance` | `public static int SideDistance(int connectedSides, int side)` | method |
| `LeftDefenderOrigin` | `public Vec3 LeftDefenderOrigin` | property |
| `MidDefenderOrigin` | `public Vec3 MidDefenderOrigin` | property |
| `RightDefenderOrigin` | `public Vec3 RightDefenderOrigin` | property |
| `LeftAttackerOrigin` | `public Vec3 LeftAttackerOrigin` | property |
| `MiddleAttackerOrigin` | `public Vec3 MiddleAttackerOrigin` | property |
| `RightAttackerOrigin` | `public Vec3 RightAttackerOrigin` | property |
| `LeftToMidDir` | `public Vec2 LeftToMidDir` | property |
| `MidToLeftDir` | `public Vec2 MidToLeftDir` | property |
| `MidToRightDir` | `public Vec2 MidToRightDir` | property |
| `RightToMidDir` | `public Vec2 RightToMidDir` | property |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
