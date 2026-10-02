---
title: "SandBoxHelpers"
description: "SandBoxHelpers — class in SandBox. 2 public members (2 static)."
---

<!-- v147-skeleton -->
# SandBoxHelpers

**Namespace:** `SandBox`  
**Module:** `SandBox`  
**Type:** `public static class SandBoxHelpers`  
**Source:** `SandBox/SandBoxHelpers.cs`

## Overview

`SandBoxHelpers` is a named type in the SandBox namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Static entry points** (2): `MissionHelper`, `MapSceneHelper`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `MapSceneHelper` | property (static) | Static entry point `class` property. Read it for current state; a declared setter writes that state in place. |
| `MissionHelper` | property (static) | Static entry point `class` property. Read it for current state; a declared setter writes that state in place. |

## Usage Example

```csharp
// SandBoxHelpers exposes no public members in SandBox.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `SandBox/SandBoxHelpers.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [AgentBehaviorGroup](../AgentBehaviorGroup/) — `SandBox.Missions.AgentBehaviors`.
- [GenericMissionEvent](../../mission-ext/GenericMissionEvent/) — `TaleWorlds.MountAndBlade.Objects`.
- [GenericMissionEventScript](../../mission-ext/GenericMissionEventScript/) — `TaleWorlds.MountAndBlade.Objects`.
- [PartyAgentOrigin](../../campaign/PartyAgentOrigin/) — `TaleWorlds.CampaignSystem.AgentOrigins`.
- [Controller](../../core-extra/Controller/) — `TaleWorlds.DotNet`.
- [SimpleAgentOrigin](../../campaign/SimpleAgentOrigin/) — `TaleWorlds.CampaignSystem.AgentOrigins`.
- [AgentVisuals](../../mission-ext/AgentVisuals/) — `TaleWorlds.MountAndBlade.View`.
- [AnimalSpawnSettings](../../mission-ext/AnimalSpawnSettings/) — `TaleWorlds.MountAndBlade.Objects`.
- [NavigationMeshDeactivator](../../mission-ext/NavigationMeshDeactivator/) — `TaleWorlds.MountAndBlade.Source.Objects`.
- [MobileParty](../../campaign/MobileParty/) — `TaleWorlds.CampaignSystem.Party`.

Section: [api/sandbox/](../) — the other types in this bucket.
