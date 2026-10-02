---
title: "GameAxisKey"
description: "GameAxisKey — class in TaleWorlds.InputSystem. 10 public members (0 static)."
---

<!-- v147-skeleton -->
# GameAxisKey

**Namespace:** `TaleWorlds.InputSystem`  
**Module:** `TaleWorlds.InputSystem`  
**Type:** `public class GameAxisKey`  
**Source:** `TaleWorlds.InputSystem/GameAxisKey.cs`

## Overview

`GameAxisKey` is a named type in the TaleWorlds.InputSystem namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `GameAxisKey`.
- **Instance members** (9): `Id`, `AxisKey`, `DefaultAxisKey`, `PositiveKey`, `NegativeKey`, `Type`, ….
- **Extension points** (1): `ToString`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `ToString` | method (override) | Overrides the base member. Takes no arguments. Returns `string`. |
| `AxisKey` | property | Instance entry point `Key` property. Read it for current state; a declared setter writes that state in place. |
| `AxisType` | property | Instance entry point `enum` property. Read it for current state; a declared setter writes that state in place. |
| `DefaultAxisKey` | property | Instance entry point `Key` property. Read it for current state; a declared setter writes that state in place. |
| `GetAxisState` | method | Instance entry point. Takes 4 arguments: `bool isKeysAllowed`, `bool isMouseButtonAllowed`, `bool isMouseWheelAllowed`, `bool isControllerAllowed`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `Id` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `NegativeKey` | property | Instance entry point `GameKey` property. Read it for current state; a declared setter writes that state in place. |
| `PositiveKey` | property | Instance entry point `GameKey` property. Read it for current state; a declared setter writes that state in place. |
| `Type` | property | Instance entry point `GameAxisKey.AxisType` property. Read it for current state; a declared setter writes that state in place. |
| `GameAxisKey` | ctor | Instance entry point. Takes 5 arguments: `string id`, `InputKey axisKey`, `GameKey positiveKey`, `GameKey negativeKey`, …. Returns ``. |

- Constructed as `public GameAxisKey(string id, InputKey axisKey, GameKey positiveKey, GameKey negativeKey, GameAxisKey.AxisType type = GameAxisKey.AxisType.X)`.

## Usage Example

```csharp
var gameAxisKey = new GameAxisKey(id, axisKey, positiveKey, negativeKey, type);
gameAxisKey.GetAxisState(isKeysAllowed, isMouseButtonAllowed, isMouseWheelAllowed, isControllerAllowed);
// Read current state through gameAxisKey.Id.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.InputSystem/GameAxisKey.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [GameKey](../GameKey/) — `TaleWorlds.InputSystem`.

Section: [api/system/](../) — the other types in this bucket.
