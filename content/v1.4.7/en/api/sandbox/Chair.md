---
title: "Chair"
description: "Chair — class in SandBox.Objects.Usables. 9 public members (0 static)."
---

<!-- v147-skeleton -->
# Chair

**Namespace:** `SandBox.Objects.Usables`  
**Module:** `SandBox`  
**Type:** `public class Chair : UsableMachine`  
**Base:** `UsableMachine`  
**Source:** `SandBox/Objects/Usables/Chair.cs`

## Overview

`Chair` is a named type in the SandBox.Objects.Usables namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends UsableMachine, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Instance members** (8): `OnInit`, `IsAgentFullySitting`, `CreateAIBehaviorObject`, `GetActionTextForStandingPoint`, `GetDescriptionText`, `GetBestPointAlternativeTo`, ….
- **Extension points** (6): `OnInit`, `CreateAIBehaviorObject`, `GetActionTextForStandingPoint`, `GetDescriptionText`, `GetBestPointAlternativeTo`, `GetOrder`.
- **Data and constants** (1): `ChairType`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CreateAIBehaviorObject` | method (override) | Overrides the base member. Takes no arguments. Returns `UsableMachineAIBase`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `GetActionTextForStandingPoint` | method (override) | Overrides the base member. Takes 1 argument: `UsableMissionObject usableGameObject`. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `GetBestPointAlternativeTo` | method (override) | Overrides the base member. Takes 2 arguments: `StandingPoint standingPoint`, `Agent agent`. Returns `StandingPoint`. Read path: prefer it over reaching for the backing store. |
| `GetDescriptionText` | method (override) | Overrides the base member. Takes 1 argument: `WeakGameEntity gameEntity`. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `GetOrder` | method (override) | Overrides the base member. Takes 1 argument: `BattleSideEnum side`. Returns `OrderType`. Read path: prefer it over reaching for the backing store. |
| `OnInit` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `IsAgentFullySitting` | method | Instance entry point. Takes 1 argument: `Agent usingAgent`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `SittableType` | property | Instance entry point `enum` property. Read it for current state; a declared setter writes that state in place. |
| `ChairType` | field | Instance entry point `Chair.SittableType` field — direct storage with no validation or notification. |

## Usage Example

```csharp
// Chair is read through its properties:
//   SittableType : enum
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 6 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox/Objects/Usables/Chair.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [UsablePlaceAI](../UsablePlaceAI/) — `SandBox.AI`.
- [AnimationPoint](../AnimationPoint/) — `SandBox.Objects.AnimationPoints`.

Section: [api/sandbox/](../) — the other types in this bucket.
