---
title: "AgentPathNavMeshChecker"
description: "AgentPathNavMeshChecker: a public class in TaleWorlds.MountAndBlade.Source.Objects.Siege; 6 exposed members (3 methods, 1 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/Source/Objects/Siege/AgentPathNavMeshChecker.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AgentPathNavMeshChecker

**Namespace:** `TaleWorlds.MountAndBlade.Source.Objects.Siege`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class AgentPathNavMeshChecker`
**File:** `TaleWorlds.MountAndBlade/Source/Objects/Siege/AgentPathNavMeshChecker.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

AgentPathNavMeshChecker lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Source/Objects/Siege/AgentPathNavMeshChecker.cs. It is a public class; the inheritance chain is AgentPathNavMeshChecker. It exposes 6 public/protected members: 3 methods, 1 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AgentPathNavMeshChecker lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Source.Objects.Siege`, inheritance chain AgentPathNavMeshChecker. The surface is method-led (methods 3/6, properties 1/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Source/Objects/Siege/AgentPathNavMeshChecker.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `AgentPathNavMeshChecker` | `public AgentPathNavMeshChecker(Mission mission, MatrixFrame pathFrameToCheck, float radiusToCheck, int navMeshId, BattleSideEnum teamToCollect, AgentPathNavMeshChecker.Direction directionToCollect, float maxDistanceCheck, float agentMoveTime)` | constructor |
| `Tick` | `public void Tick(float dt)` | method |
| `TickOccasionally` | `public void TickOccasionally(float dt)` | method |
| `HasAgentsUsingPath` | `public bool HasAgentsUsingPath()` | method |
| `Direction` | `public enum Direction` | property |
| `Direction` | `public enum Direction` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
