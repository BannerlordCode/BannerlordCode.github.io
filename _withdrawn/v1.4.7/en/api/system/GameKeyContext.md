---
title: "GameKeyContext"
description: "GameKeyContext — class in TaleWorlds.InputSystem. 11 public members (0 static)."
---

<!-- v147-skeleton -->
# GameKeyContext

**Namespace:** `TaleWorlds.InputSystem`  
**Module:** `TaleWorlds.InputSystem`  
**Type:** `public abstract class GameKeyContext`  
**Source:** `TaleWorlds.InputSystem/GameKeyContext.cs`

## Overview

`GameKeyContext` is a named type in the TaleWorlds.InputSystem namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `GameKeyContext`.
- **Instance members** (10): `GameKeyCategoryId`, `Type`, `RegisteredGameKeys`, `RegisterHotKey`, `RegisterGameKey`, `RegisterGameAxisKey`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GameKeyCategoryId` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `GameKeyContextType` | property | Instance entry point `enum` property. Read it for current state; a declared setter writes that state in place. |
| `GetGameKey` | method | Instance entry point. Takes 1 argument: `int gameKeyId`. Returns `GameKey`. Read path: prefer it over reaching for the backing store. |
| `GetHotKey` | method | Instance entry point. Takes 1 argument: `string hotKeyId`. Returns `HotKey`. Read path: prefer it over reaching for the backing store. |
| `GetHotKeyId` | method | Instance entry point. Takes 1 argument: `string hotKeyId`. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `RegisteredGameKeys` | property | Instance entry point `MBReadOnlyList<GameKey>` property. Read it for current state; a declared setter writes that state in place. |
| `Type` | property | Instance entry point `GameKeyContext.GameKeyContextType` property. Read it for current state; a declared setter writes that state in place. |
| `RegisterGameAxisKey` | method | Protected — for subclasses only. Takes 2 arguments: `GameAxisKey gameKey`, `bool addIfMissing`. Returns `internal void`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `RegisterGameKey` | method | Protected — for subclasses only. Takes 2 arguments: `GameKey gameKey`, `bool addIfMissing`. Returns `internal void`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `RegisterHotKey` | method | Protected — for subclasses only. Takes 2 arguments: `HotKey gameKey`, `bool addIfMissing`. Returns `internal void`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `GameKeyContext` | ctor | Protected — for subclasses only. Takes 3 arguments: `string id`, `int gameKeysCount`, `GameKeyContext.GameKeyContextType type`. Returns ``. |

- Constructed as `protected GameKeyContext(string id, int gameKeysCount, GameKeyContext.GameKeyContextType type = GameKeyContext.GameKeyContextType.Default)`.

## Usage Example

```csharp
// GameKeyContext is read through its properties:
//   GameKeyCategoryId : string
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.InputSystem/GameKeyContext.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [GameKey](../GameKey/) — `TaleWorlds.InputSystem`.
- [HotKey](../HotKey/) — `TaleWorlds.InputSystem`.
- [GameAxisKey](../GameAxisKey/) — `TaleWorlds.InputSystem`.

Section: [api/system/](../) — the other types in this bucket.
