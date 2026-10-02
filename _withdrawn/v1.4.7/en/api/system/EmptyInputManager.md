---
title: "EmptyInputManager"
description: "EmptyInputManager — class in TaleWorlds.InputSystem. 37 public members (0 static)."
---

<!-- v147-skeleton -->
# EmptyInputManager

**Namespace:** `TaleWorlds.InputSystem`  
**Module:** `TaleWorlds.InputSystem`  
**Type:** `internal class EmptyInputManager : IInputManager`  
**Base:** `IInputManager`  
**Source:** `TaleWorlds.InputSystem/EmptyInputManager.cs`

## Overview

`EmptyInputManager` is an internal class in TaleWorlds.InputSystem. The engine constructs it and exposes it through public APIs; a mod can call the public surface above it but cannot `new` it or reference the type in a signature.

`EmptyInputManager` owns a subsystem: it holds the live set of objects of one kind, keeps them in sync with the world, and hands out references to them. Subsystems are shared — a second instance means a second, divergent copy of the truth.

It extends IInputManager, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Read a manager as the single owner of a collection, not as a utility bag. Everything that mutates the collection goes through its methods, and everything else reads the collections it exposes.

Because the instance is shared and long-lived, do not stash per-campaign scratch data on it. Keep it on the campaign object, the party or the hero you are working on.

Concretely, the surface breaks down like this:

- **Instance members** (37): `ClearKeys`, `GetClickKeys`, `GetClipboardText`, `GetControllerType`, `GetDesktopResolution`, `GetGyroX`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `ClearKeys` | method | Instance entry point. Takes no arguments. Removes from or clears the collection this type owns. |
| `GetClickKeys` | method | Instance entry point. Takes no arguments. Returns `InputKey[]`. Read path: prefer it over reaching for the backing store. |
| `GetClipboardText` | method | Instance entry point. Takes no arguments. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `GetControllerType` | method | Instance entry point. Takes no arguments. Returns `Input.ControllerTypes`. Read path: prefer it over reaching for the backing store. |
| `GetDesktopResolution` | method | Instance entry point. Takes no arguments. Returns `Vec2`. Read path: prefer it over reaching for the backing store. |
| `GetGyroX` | method | Instance entry point. Takes no arguments. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetGyroY` | method | Instance entry point. Takes no arguments. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetGyroZ` | method | Instance entry point. Takes no arguments. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetKeyState` | method | Instance entry point. Takes 1 argument: `InputKey key`. Returns `Vec2`. Read path: prefer it over reaching for the backing store. |
| `GetMouseDeltaZ` | method | Instance entry point. Takes no arguments. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetMouseMoveX` | method | Instance entry point. Takes no arguments. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetMouseMoveY` | method | Instance entry point. Takes no arguments. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetMousePositionX` | method | Instance entry point. Takes no arguments. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetMousePositionY` | method | Instance entry point. Takes no arguments. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetMouseScrollValue` | method | Instance entry point. Takes no arguments. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetMouseSensitivity` | method | Instance entry point. Takes no arguments. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetNormalizedMouseMoveX` | method | Instance entry point. Takes no arguments. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetNormalizedMouseMoveY` | method | Instance entry point. Takes no arguments. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetResolution` | method | Instance entry point. Takes no arguments. Returns `Vec2`. Read path: prefer it over reaching for the backing store. |
| `GetVirtualKeyCode` | method | Instance entry point. Takes 1 argument: `InputKey key`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `IsAnyTouchActive` | method | Instance entry point. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsControllerConnected` | method | Instance entry point. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsKeyDown` | method | Instance entry point. Takes 1 argument: `InputKey key`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsKeyDownImmediate` | method | Instance entry point. Takes 1 argument: `InputKey key`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |

13 further public members follow the same patterns.
## Usage Example

```csharp
// EmptyInputManager is internal: the engine creates it, a mod cannot.
// Use it through whatever the engine exposes, and read the members below.
//   ClearKeys()
//     void
//   GetClickKeys()
//     InputKey[]
//   GetClipboardText()
//     string
//   GetControllerType()
//     Input.ControllerTypes
//   GetDesktopResolution()
//     Vec2
```

## Risks and Boundaries

- Never construct a manager yourself when the engine already owns one; the duplicate will drift from the live state.
- Do not mutate the collection while enumerating it — materialise a list first if a callback can add or remove entries.
- Most managers are only valid between campaign start and campaign end.
- The declaration in `TaleWorlds.InputSystem/EmptyInputManager.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/system/](../) — the other types in this bucket.
