---
title: "BehaviorSets"
description: "BehaviorSets — class in SandBox.Missions.AgentBehaviors. 13 public members (13 static)."
---

<!-- v147-skeleton -->
# BehaviorSets

**Namespace:** `SandBox.Missions.AgentBehaviors`  
**Module:** `SandBox`  
**Type:** `public class BehaviorSets`  
**Source:** `SandBox/Missions/AgentBehaviors/BehaviorSets.cs`

## Overview

`BehaviorSets` is a named type in the SandBox.Missions.AgentBehaviors namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Static entry points** (13): `AddQuestCharacterBehaviors`, `AddWandererBehaviors`, `AddOutdoorWandererBehaviors`, `AddIndoorWandererBehaviors`, `AddFixedCharacterBehaviors`, `AddPatrollingThugBehaviors`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AddBodyguardBehaviors` | method (static) | Static entry point. Takes 1 argument: `IAgent agent`. Adds to the collection or relation this type owns. |
| `AddCompanionBehaviors` | method (static) | Static entry point. Takes 1 argument: `IAgent agent`. Adds to the collection or relation this type owns. |
| `AddFirstCompanionBehavior` | method (static) | Static entry point. Takes 1 argument: `IAgent agent`. Adds to the collection or relation this type owns. |
| `AddFixedCharacterBehaviors` | method (static) | Static entry point. Takes 1 argument: `IAgent agent`. Adds to the collection or relation this type owns. |
| `AddFixedGuardBehaviors` | method (static) | Static entry point. Takes 1 argument: `IAgent agent`. Adds to the collection or relation this type owns. |
| `AddIndoorWandererBehaviors` | method (static) | Static entry point. Takes 1 argument: `IAgent agent`. Adds to the collection or relation this type owns. |
| `AddOutdoorWandererBehaviors` | method (static) | Static entry point. Takes 1 argument: `IAgent agent`. Adds to the collection or relation this type owns. |
| `AddPatrollingGuardBehaviors` | method (static) | Static entry point. Takes 1 argument: `IAgent agent`. Adds to the collection or relation this type owns. |
| `AddPatrollingThugBehaviors` | method (static) | Static entry point. Takes 1 argument: `IAgent agent`. Adds to the collection or relation this type owns. |
| `AddQuestCharacterBehaviors` | method (static) | Static entry point. Takes 1 argument: `IAgent agent`. Adds to the collection or relation this type owns. |
| `AddStandGuardBehaviors` | method (static) | Static entry point. Takes 1 argument: `IAgent agent`. Adds to the collection or relation this type owns. |
| `AddWandererBehaviors` | method (static) | Static entry point. Takes 1 argument: `IAgent agent`. Adds to the collection or relation this type owns. |
| `StealthAgentBehaviors` | method (static) | Static entry point. Takes 1 argument: `IAgent agent`. |

## Usage Example

```csharp
// Static entry points on BehaviorSets:
BehaviorSets.AddQuestCharacterBehaviors(agent);
BehaviorSets.AddWandererBehaviors(agent);
BehaviorSets.AddOutdoorWandererBehaviors(agent);
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `SandBox/Missions/AgentBehaviors/BehaviorSets.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [AlarmedBehaviorGroup](../AlarmedBehaviorGroup/) — `SandBox.Missions.AgentBehaviors`.
- [FleeBehavior](../FleeBehavior/) — `SandBox.Missions.AgentBehaviors`.
- [CautiousBehavior](../CautiousBehavior/) — `SandBox.Missions.AgentBehaviors`.

Section: [api/sandbox/](../) — the other types in this bucket.
