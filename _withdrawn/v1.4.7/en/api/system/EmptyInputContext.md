---
title: "EmptyInputContext"
description: "EmptyInputContext — class in TaleWorlds.InputSystem. 30 public members (0 static)."
---

<!-- v147-skeleton -->
# EmptyInputContext

**Namespace:** `TaleWorlds.InputSystem`  
**Module:** `TaleWorlds.InputSystem`  
**Type:** `public sealed class EmptyInputContext : IInputContext`  
**Base:** `IInputContext`  
**Source:** `TaleWorlds.InputSystem/EmptyInputContext.cs`

## Overview

`EmptyInputContext` is a named type in the TaleWorlds.InputSystem namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends IInputContext, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Instance members** (30): `GetPointerX`, `GetPointerY`, `GetPointerPosition`, `IsGameKeyDown`, `IsGameKeyDownImmediate`, `IsGameKeyPressed`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetClickKeys` | method | Instance entry point. Takes no arguments. Returns `InputKey[]`. Read path: prefer it over reaching for the backing store. |
| `GetControllerLeftStickState` | method | Instance entry point. Takes no arguments. Returns `Vec2`. Read path: prefer it over reaching for the backing store. |
| `GetControllerRightStickState` | method | Instance entry point. Takes no arguments. Returns `Vec2`. Read path: prefer it over reaching for the backing store. |
| `GetDeltaMouseScroll` | method | Instance entry point. Takes no arguments. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetGameKeyAxis` | method | Instance entry point. Takes 1 argument: `string gameAxisKey`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetIsControllerConnected` | method | Instance entry point. Takes no arguments. Returns `bool`. Read path: prefer it over reaching for the backing store. |
| `GetIsMouseActive` | method | Instance entry point. Takes no arguments. Returns `bool`. Read path: prefer it over reaching for the backing store. |
| `GetKeyState` | method | Instance entry point. Takes 1 argument: `InputKey key`. Returns `Vec2`. Read path: prefer it over reaching for the backing store. |
| `GetMouseMoveX` | method | Instance entry point. Takes no arguments. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetMouseMoveY` | method | Instance entry point. Takes no arguments. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetMousePositionPixel` | method | Instance entry point. Takes no arguments. Returns `Vec2`. Read path: prefer it over reaching for the backing store. |
| `GetMousePositionRanged` | method | Instance entry point. Takes no arguments. Returns `Vec2`. Read path: prefer it over reaching for the backing store. |
| `GetMouseSensitivity` | method | Instance entry point. Takes no arguments. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetPointerPosition` | method | Instance entry point. Takes no arguments. Returns `Vector2`. Read path: prefer it over reaching for the backing store. |
| `GetPointerX` | method | Instance entry point. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetPointerY` | method | Instance entry point. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `IsAltDown` | method | Instance entry point. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsControlDown` | method | Instance entry point. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsGameKeyDown` | method | Instance entry point. Takes 1 argument: `int gameKey`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsGameKeyDownImmediate` | method | Instance entry point. Takes 1 argument: `int gameKey`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsGameKeyPressed` | method | Instance entry point. Takes 1 argument: `int gameKey`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsGameKeyReleased` | method | Instance entry point. Takes 1 argument: `int gameKey`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsHotKeyDoublePressed` | method | Instance entry point. Takes 1 argument: `string hotKey`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsHotKeyDown` | method | Instance entry point. Takes 1 argument: `string hotKey`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |

6 further public members follow the same patterns.
## Usage Example

```csharp
// EmptyInputContext exposes no public members in TaleWorlds.InputSystem.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.InputSystem/EmptyInputContext.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/system/](../) — the other types in this bucket.
