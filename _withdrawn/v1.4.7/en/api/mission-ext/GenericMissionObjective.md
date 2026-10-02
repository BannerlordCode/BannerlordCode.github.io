---
title: "GenericMissionObjective"
description: "GenericMissionObjective — class in TaleWorlds.MountAndBlade.Missions.Objectives. 10 public members (0 static)."
---

<!-- v147-skeleton -->
# GenericMissionObjective

**Namespace:** `TaleWorlds.MountAndBlade.Missions.Objectives`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `internal class GenericMissionObjective : MissionObjective`  
**Base:** `MissionObjective`  
**Source:** `TaleWorlds.MountAndBlade/Missions/Objectives/GenericMissionObjective.cs`

## Overview

`GenericMissionObjective` is an internal class in TaleWorlds.MountAndBlade.Missions.Objectives. The engine constructs it and exposes it through public APIs; a mod can call the public surface above it but cannot `new` it or reference the type in a signature.

`GenericMissionObjective` is a named type in the TaleWorlds.MountAndBlade.Missions.Objectives namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends MissionObjective, so the members it does not redeclare are inherited from there. 3 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `GenericMissionObjective`.
- **Instance members** (9): `UniqueId`, `Name`, `Description`, `GetCurrentProgress`, `IsActivationRequirementsMet`, `IsCompletionRequirementsMet`, ….
- **Extension points** (9): `UniqueId`, `Name`, `Description`, `GetCurrentProgress`, `IsActivationRequirementsMet`, `IsCompletionRequirementsMet`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Description` | property (override) | Overrides the base member `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `GetCurrentProgress` | method (override) | Overrides the base member. Takes no arguments. Returns `MissionObjectiveProgressInfo`. Read path: prefer it over reaching for the backing store. |
| `Name` | property (override) | Overrides the base member `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `UniqueId` | property (override) | Overrides the base member `string` property. Read it for current state; a declared setter writes that state in place. |
| `IsActivationRequirementsMet` | method (override) | Overrides the base member. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsCompletionRequirementsMet` | method (override) | Overrides the base member. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OnComplete` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnStart` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `GenericMissionObjective` | ctor | Instance entry point. Takes 4 arguments: `Mission mission`, `string id`, `TextObject name`, `TextObject description`. Returns ``. |

- Constructed as `public GenericMissionObjective(Mission mission, string id, TextObject name, TextObject description)`.

## Usage Example

```csharp
// GenericMissionObjective is internal: the engine creates it, a mod cannot.
// Use it through whatever the engine exposes, and read the members below.
//   UniqueId
//     string
//   Name
//     TextObject
//   Description
//     TextObject
//   GetCurrentProgress()
//     MissionObjectiveProgressInfo
//   IsActivationRequirementsMet()
//     bool
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 9 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade/Missions/Objectives/GenericMissionObjective.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MissionObjective](../MissionObjective/) — `TaleWorlds.MountAndBlade.Missions.Objectives`.
- [MissionObjectiveTarget](../MissionObjectiveTarget/) — `TaleWorlds.MountAndBlade.Missions.Objectives`.
- [MissionObjectiveProgressInfo](../MissionObjectiveProgressInfo/) — `TaleWorlds.MountAndBlade.Missions.Objectives`.

Section: [api/mission-ext/](../) — the other types in this bucket.
