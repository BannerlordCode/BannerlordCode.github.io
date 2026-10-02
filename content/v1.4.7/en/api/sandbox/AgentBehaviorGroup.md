---
title: "AgentBehaviorGroup"
description: "AgentBehaviorGroup — class in SandBox.Missions.AgentBehaviors. 19 public members (0 static)."
---

<!-- v147-skeleton -->
# AgentBehaviorGroup

**Namespace:** `SandBox.Missions.AgentBehaviors`  
**Module:** `SandBox`  
**Type:** `public abstract class AgentBehaviorGroup`  
**Source:** `SandBox/Missions/AgentBehaviors/AgentBehaviorGroup.cs`

## Overview

`AgentBehaviorGroup` is a named type in the SandBox.Missions.AgentBehaviors namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `AgentBehaviorGroup`.
- **Instance members** (15): `OwnerAgent`, `ScriptedBehavior`, `IsActive`, `Mission`, `DisableScriptedBehavior`, `DisableAllBehaviors`, ….
- **Extension points** (7): `Tick`, `ConversationTick`, `OnAgentRemoved`, `OnActivate`, `OnDeactivate`, `GetScore`, ….
- **Data and constants** (3): `Navigator`, `Behaviors`, `CheckBehaviorTimer`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `ConversationTick` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. |
| `ForceThink` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `float inSeconds`. |
| `GetScore` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `bool isSimulation`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `OnAgentRemoved` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `Agent agent`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `Tick` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 2 arguments: `float dt`, `bool isSimulation`. Called from the owner’s update loop — do not assume a frame boundary. |
| `DisableAllBehaviors` | method | Instance entry point. Takes no arguments. |
| `DisableScriptedBehavior` | method | Instance entry point. Takes no arguments. |
| `GetActiveBehavior` | method | Instance entry point. Takes no arguments. Returns `AgentBehavior`. Read path: prefer it over reaching for the backing store. |
| `IsActive` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `Mission` | property | Instance entry point `Mission` property. Read it for current state; a declared setter writes that state in place. |
| `OnActivate` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnDeactivate` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OwnerAgent` | property | Instance entry point `Agent` property. Read it for current state; a declared setter writes that state in place. |
| `ScriptedBehavior` | property | Instance entry point `AgentBehavior` property. Read it for current state; a declared setter writes that state in place. |
| `CheckBehaviorTime` | property | Protected — for subclasses only `float` property. Read it for current state; a declared setter writes that state in place. |
| `Behaviors` | field | Instance entry point `List<AgentBehavior>` field — direct storage with no validation or notification. |
| `Navigator` | field | Instance entry point `AgentNavigator` field — direct storage with no validation or notification. |
| `AgentBehaviorGroup` | ctor | Protected — for subclasses only. Takes 2 arguments: `AgentNavigator navigator`, `Mission mission`. Returns ``. |
| `CheckBehaviorTimer` | field | Protected — for subclasses only `Timer` field — direct storage with no validation or notification. |

- Constructed as `protected AgentBehaviorGroup(AgentNavigator navigator, Mission mission)`.

## Usage Example

```csharp
// AgentBehaviorGroup is read through its properties:
//   OwnerAgent : Agent
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 7 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox/Missions/AgentBehaviors/AgentBehaviorGroup.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [AgentBehavior](../AgentBehavior/) — `SandBox.Missions.AgentBehaviors`.

Section: [api/sandbox/](../) — the other types in this bucket.
