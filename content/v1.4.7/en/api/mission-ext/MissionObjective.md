---
title: "MissionObjective"
description: "MissionObjective — class in TaleWorlds.MountAndBlade.Missions.Objectives. 26 public members (1 static)."
---

<!-- v147-skeleton -->
# MissionObjective

**Namespace:** `TaleWorlds.MountAndBlade.Missions.Objectives`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public abstract class MissionObjective`  
**Source:** `TaleWorlds.MountAndBlade/Missions/Objectives/MissionObjective.cs`

## Overview

`MissionObjective` is a named type in the TaleWorlds.MountAndBlade.Missions.Objectives namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `MissionObjective`.
- **Static entry points** (1): `CreateGenericObjectiveBuilder`.
- **Instance members** (23): `UniqueId`, `Name`, `Description`, `IsActive`, `IsStarted`, `IsCompleted`, ….
- **Extension points** (12): `UniqueId`, `Name`, `Description`, `GetCurrentProgress`, `IsActivationRequirementsMet`, `IsCompletionRequirementsMet`, ….
- **Data and constants** (1): `OnUpdated`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CreateGenericObjectiveBuilder` | method (static) | Static entry point. Takes 4 arguments: `Mission mission`, `string id`, `TextObject name`, `TextObject description`. Returns `MissionObjective.GenericMissionObjectiveBuilder`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `Description` | property (abstract) | Abstract — a subclass must supply it `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `GetCurrentProgress` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Returns `MissionObjectiveProgressInfo`. Read path: prefer it over reaching for the backing store. |
| `Name` | property (abstract) | Abstract — a subclass must supply it `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `UniqueId` | property (abstract) | Abstract — a subclass must supply it `string` property. Read it for current state; a declared setter writes that state in place. |
| `AddTarget` | method | Instance entry point. Takes 1 argument: `MissionObjectiveTarget target`. Adds to the collection or relation this type owns. |
| `ClearTargets` | method | Instance entry point. Takes no arguments. Removes from or clears the collection this type owns. |
| `GenericMissionObjectiveBuilder` | property | Instance entry point `struct` property. Read it for current state; a declared setter writes that state in place. |
| `GetTargetsCopy` | method | Instance entry point. Takes no arguments. Returns `MBReadOnlyList<MissionObjectiveTarget>`. Read path: prefer it over reaching for the backing store. |
| `IsActivationRequirementsMet` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsActive` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsCompleted` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsCompletionRequirementsMet` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsStarted` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `Mission` | property | Instance entry point `Mission` property. Read it for current state; a declared setter writes that state in place. |
| `ObjectiveGiver` | property | Instance entry point `BasicCharacterObject` property. Read it for current state; a declared setter writes that state in place. |
| `OnComplete` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnStart` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnTargetAdded` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `MissionObjectiveTarget target`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnTargetRemoved` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `MissionObjectiveTarget target`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnTargetsCleared` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnTick` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RemoveTarget` | method | Instance entry point. Takes 1 argument: `MissionObjectiveTarget target`. Removes from or clears the collection this type owns. |
| `SetObjectiveGiver` | method | Instance entry point. Takes 1 argument: `BasicCharacterObject objectiveGiver`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |

- Constructed as `public MissionObjective(Mission mission)`.

2 further public members follow the same patterns.
## Usage Example

```csharp
// Static entry points on MissionObjective:
MissionObjective.CreateGenericObjectiveBuilder(mission, id, name, description);
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 12 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade/Missions/Objectives/MissionObjective.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MissionObjectiveTarget](../MissionObjectiveTarget/) — `TaleWorlds.MountAndBlade.Missions.Objectives`.
- [MissionObjectiveProgressInfo](../MissionObjectiveProgressInfo/) — `TaleWorlds.MountAndBlade.Missions.Objectives`.
- [GenericMissionObjective](../GenericMissionObjective/) — `TaleWorlds.MountAndBlade.Missions.Objectives`.
- [GenericMissionObjectiveTarget](../GenericMissionObjectiveTarget/) — `TaleWorlds.MountAndBlade.Missions.Objectives`.

Section: [api/mission-ext/](../) — the other types in this bucket.
