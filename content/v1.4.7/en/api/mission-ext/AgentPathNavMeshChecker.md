---
title: "AgentPathNavMeshChecker"
description: "AgentPathNavMeshChecker — class in TaleWorlds.MountAndBlade.Source.Objects.Siege. 5 public members (0 static)."
---

<!-- v147-skeleton -->
# AgentPathNavMeshChecker

**Namespace:** `TaleWorlds.MountAndBlade.Source.Objects.Siege`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class AgentPathNavMeshChecker`  
**Source:** `TaleWorlds.MountAndBlade/Source/Objects/Siege/AgentPathNavMeshChecker.cs`

## Overview

`AgentPathNavMeshChecker` is a named type in the TaleWorlds.MountAndBlade.Source.Objects.Siege namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `AgentPathNavMeshChecker`.
- **Instance members** (4): `Tick`, `TickOccasionally`, `HasAgentsUsingPath`, `Direction`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Direction` | property | Instance entry point `enum` property. Read it for current state; a declared setter writes that state in place. |
| `HasAgentsUsingPath` | method | Instance entry point. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `Tick` | method | Instance entry point. Takes 1 argument: `float dt`. Called from the owner’s update loop — do not assume a frame boundary. |
| `TickOccasionally` | method | Instance entry point. Takes 1 argument: `float dt`. Called from the owner’s update loop — do not assume a frame boundary. |
| `AgentPathNavMeshChecker` | ctor | Instance entry point. Takes 8 arguments: `Mission mission`, `MatrixFrame pathFrameToCheck`, `float radiusToCheck`, `int navMeshId`, …. Returns ``. |

- Constructed as `public AgentPathNavMeshChecker(Mission mission, MatrixFrame pathFrameToCheck, float radiusToCheck, int navMeshId, BattleSideEnum teamToCollect, AgentPathNavMeshChecker.Direction directionToCollect, float maxDistanceCheck, float agentMoveTime)`.

## Usage Example

```csharp
var agentPathNavMeshChecker = new AgentPathNavMeshChecker(mission, pathFrameToCheck, radiusToCheck, navMeshId, teamToCollect, directionToCollect, maxDistanceCheck, agentMoveTime);
agentPathNavMeshChecker.Tick(dt);
// Read current state through agentPathNavMeshChecker.Direction.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.MountAndBlade/Source/Objects/Siege/AgentPathNavMeshChecker.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/mission-ext/](../) — the other types in this bucket.
