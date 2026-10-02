---
title: "CheatsHotKeyCategory"
description: "CheatsHotKeyCategory — class in TaleWorlds.Engine.InputSystem. 25 public members (0 static)."
---

<!-- v147-skeleton -->
# CheatsHotKeyCategory

**Namespace:** `TaleWorlds.Engine.InputSystem`  
**Module:** `TaleWorlds.Engine`  
**Type:** `public class CheatsHotKeyCategory : GameKeyContext`  
**Base:** `GameKeyContext`  
**Source:** `TaleWorlds.Engine/InputSystem/CheatsHotKeyCategory.cs`

## Overview

`CheatsHotKeyCategory` is a named type in the TaleWorlds.Engine.InputSystem namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends GameKeyContext, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `CheatsHotKeyCategory`.
- **Data and constants** (24): `CategoryId`, `MissionScreenHotkeyIncreaseCameraSpeed`, `MissionScreenHotkeyDecreaseCameraSpeed`, `ResetCameraSpeed`, `MissionScreenHotkeyIncreaseSlowMotionFactor`, `MissionScreenHotkeyDecreaseSlowMotionFactor`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CategoryId` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `EnterSlowMotion` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `MissionScreenHotkeyControlFollowedAgent` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `MissionScreenHotkeyDecreaseCameraSpeed` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `MissionScreenHotkeyDecreaseSlowMotionFactor` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `MissionScreenHotkeyGhostCam` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `MissionScreenHotkeyHealYourHorse` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `MissionScreenHotkeyHealYourSelf` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `MissionScreenHotkeyIncreaseCameraSpeed` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `MissionScreenHotkeyIncreaseSlowMotionFactor` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `MissionScreenHotkeyKillAllEnemyAgents` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `MissionScreenHotkeyKillAllEnemyHorses` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `MissionScreenHotkeyKillAllFriendlyAgents` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `MissionScreenHotkeyKillAllFriendlyHorses` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `MissionScreenHotkeyKillEnemyAgent` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `MissionScreenHotkeyKillEnemyHorse` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `MissionScreenHotkeyKillFriendlyAgent` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `MissionScreenHotkeyKillFriendlyHorse` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `MissionScreenHotkeyKillYourHorse` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `MissionScreenHotkeyKillYourSelf` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `MissionScreenHotkeySwitchAgentToAi` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `MissionScreenHotkeyTeleportMainAgent` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `Pause` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `ResetCameraSpeed` | const | Instance entry point. Takes no arguments. Returns `string`. Removes from or clears the collection this type owns. |

- Constructed as `public CheatsHotKeyCategory()`.

1 further public members follow the same patterns.
## Usage Example

```csharp
var cheatsHotKeyCategory = new CheatsHotKeyCategory();
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.Engine/InputSystem/CheatsHotKeyCategory.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [GameKeyContext](../../system/GameKeyContext/) — `TaleWorlds.InputSystem`.
- [HotKey](../../system/HotKey/) — `TaleWorlds.InputSystem`.

Section: [api/engine/](../) — the other types in this bucket.
