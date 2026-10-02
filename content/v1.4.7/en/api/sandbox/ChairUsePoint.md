---
title: "ChairUsePoint"
description: "ChairUsePoint — class in SandBox.Objects.AnimationPoints. 17 public members (0 static)."
---

<!-- v147-skeleton -->
# ChairUsePoint

**Namespace:** `SandBox.Objects.AnimationPoints`  
**Module:** `SandBox`  
**Type:** `public class ChairUsePoint : AnimationPoint`  
**Base:** `AnimationPoint`  
**Source:** `SandBox/Objects/AnimationPoints/ChairUsePoint.cs`

## Overview

`ChairUsePoint` is a named type in the SandBox.Objects.AnimationPoints namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends AnimationPoint, so the members it does not redeclare are inherited from there. 10 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Instance members** (14): `SetActionCodes`, `ShouldUpdateOnEditorVariableChanged`, `OnUse`, `OnTick`, `NearTableLoopAction`, `NearTablePairLoopAction`, ….
- **Extension points** (4): `SetActionCodes`, `ShouldUpdateOnEditorVariableChanged`, `OnUse`, `OnTick`.
- **Data and constants** (3): `NearTable`, `Drink`, `Eat`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnUse` | method (override) | Overrides the base member. Takes 2 arguments: `Agent userAgent`, `sbyte agentBoneIndex`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `SetActionCodes` | method (override) | Overrides the base member. Takes no arguments. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `ShouldUpdateOnEditorVariableChanged` | method (override) | Overrides the base member. Takes 1 argument: `string variableName`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `DrinkLeftHandItem` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `DrinkLoopAction` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `DrinkPairLoopAction` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `DrinkRightHandItem` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `EatLeftHandItem` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `EatLoopAction` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `EatPairLoopAction` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `EatRightHandItem` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `NearTableLoopAction` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `NearTablePairLoopAction` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `Drink` | field | Instance entry point `bool` field — direct storage with no validation or notification. |
| `Eat` | field | Instance entry point `bool` field — direct storage with no validation or notification. |
| `NearTable` | field | Instance entry point `bool` field — direct storage with no validation or notification. |

## Usage Example

```csharp
// ChairUsePoint is read through its properties:
//   NearTableLoopAction : string
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 4 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox/Objects/AnimationPoints/ChairUsePoint.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [AnimationPoint](../AnimationPoint/) — `SandBox.Objects.AnimationPoints`.

Section: [api/sandbox/](../) — the other types in this bucket.
