---
title: "DebugHotKeyCategory"
description: "DebugHotKeyCategory — class in TaleWorlds.Engine.InputSystem. 276 public members (0 static)."
---

<!-- v147-skeleton -->
# DebugHotKeyCategory

**Namespace:** `TaleWorlds.Engine.InputSystem`  
**Module:** `TaleWorlds.Engine`  
**Type:** `public class DebugHotKeyCategory : GameKeyContext`  
**Base:** `GameKeyContext`  
**Source:** `TaleWorlds.Engine/InputSystem/DebugHotKeyCategory.cs`

## Overview

`DebugHotKeyCategory` is a named type in the TaleWorlds.Engine.InputSystem namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends GameKeyContext, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `DebugHotKeyCategory`.
- **Data and constants** (275): `CategoryId`, `LeftMouseButton`, `RightMouseButton`, `SelectAll`, `Redo`, `Undo`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `A` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `AgentHotkeyCheckCollisionCapsule` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `AgentHotkeySwitchFaceAnimationDebug` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `AgentHotkeySwitchRender` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `AiClearDebugAgents` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `AiSelectDebugAgent1` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `AiSelectDebugAgent2` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `AiTestMissionControllerHotkeySpawnFormation` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `AnimationTestControllerHotkeyUseWeaponTesting` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `ApplicationHotkeyAnimationReload` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `ApplicationHotkeyIncreaseLossRatio` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `ApplicationHotkeyIncreasePingDelay` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `ApplicationHotkeySaveAllContentFilesWithType` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `B` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `BaseBattleMissionControllerHotkeyBecomePlayer` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `BaseBattleMissionControllerHotkeyDrawNavMeshLines` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `C` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `CameraControllerHotkeyMoveBackward` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `CameraControllerHotkeyMoveDownward` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `CameraControllerHotkeyMoveForward` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `CameraControllerHotkeyMoveLeft` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `CameraControllerHotkeyMoveRight` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `CameraControllerHotkeyMoveUpward` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `CameraControllerHotkeyPenCamera` | const | Instance entry point. Takes no arguments. Returns `string`. |

- Constructed as `public DebugHotKeyCategory()`.

252 further public members follow the same patterns.
## Usage Example

```csharp
var debugHotKeyCategory = new DebugHotKeyCategory();
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.Engine/InputSystem/DebugHotKeyCategory.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [GameKeyContext](../../system/GameKeyContext/) — `TaleWorlds.InputSystem`.
- [HotKey](../../system/HotKey/) — `TaleWorlds.InputSystem`.

Section: [api/engine/](../) — the other types in this bucket.
