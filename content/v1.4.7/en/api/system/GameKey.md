---
title: "GameKey"
description: "GameKey — class in TaleWorlds.InputSystem. 13 public members (0 static)."
---

<!-- v147-skeleton -->
# GameKey

**Namespace:** `TaleWorlds.InputSystem`  
**Module:** `TaleWorlds.InputSystem`  
**Type:** `public class GameKey`  
**Source:** `TaleWorlds.InputSystem/GameKey.cs`

## Overview

`GameKey` is a named type in the TaleWorlds.InputSystem namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (2): `GameKey`, `GameKey`.
- **Instance members** (11): `Id`, `StringId`, `GroupId`, `MainCategoryId`, `KeyboardKey`, `DefaultKeyboardKey`, ….
- **Extension points** (3): `ToString`, `Equals`, `GetHashCode`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Equals` | method (override) | Overrides the base member. Takes 1 argument: `object obj`. Returns `bool`. |
| `GetHashCode` | method (override) | Overrides the base member. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `ToString` | method (override) | Overrides the base member. Takes no arguments. Returns `string`. |
| `ControllerKey` | property | Instance entry point `Key` property. Read it for current state; a declared setter writes that state in place. |
| `DefaultControllerKey` | property | Instance entry point `Key` property. Read it for current state; a declared setter writes that state in place. |
| `DefaultKeyboardKey` | property | Instance entry point `Key` property. Read it for current state; a declared setter writes that state in place. |
| `GroupId` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `Id` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `KeyboardKey` | property | Instance entry point `Key` property. Read it for current state; a declared setter writes that state in place. |
| `MainCategoryId` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `StringId` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `GameKey` | ctor | Instance entry point. Takes 6 arguments: `int id`, `string stringId`, `string groupId`, `InputKey defaultKeyboardKey`, …. Returns ``. |
| `GameKey` | ctor | Instance entry point. Takes 5 arguments: `int id`, `string stringId`, `string groupId`, `InputKey defaultKeyboardKey`, …. Returns ``. |

- Constructed as `public GameKey(int id, string stringId, string groupId, InputKey defaultKeyboardKey, InputKey defaultControllerKey, string mainCategoryId = "")`.
- Constructed as `public GameKey(int id, string stringId, string groupId, InputKey defaultKeyboardKey, string mainCategoryId = "")`.

## Usage Example

```csharp
var gameKey = new GameKey(id, stringId, groupId, defaultKeyboardKey, defaultControllerKey, mainCategoryId);
gameKey.ToString();
// Read current state through gameKey.Id.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 3 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.InputSystem/GameKey.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/system/](../) — the other types in this bucket.
