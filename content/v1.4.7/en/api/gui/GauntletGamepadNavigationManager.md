---
title: "GauntletGamepadNavigationManager"
description: "GauntletGamepadNavigationManager — class in TaleWorlds.GauntletUI.GamepadNavigation. 14 public members (2 static)."
---

<!-- v147-skeleton -->
# GauntletGamepadNavigationManager

**Namespace:** `TaleWorlds.GauntletUI.GamepadNavigation`  
**Module:** `TaleWorlds.GauntletUI`  
**Type:** `public class GauntletGamepadNavigationManager`  
**Source:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/GamepadNavigation/GauntletGamepadNavigationManager.cs`

## Overview

`GauntletGamepadNavigationManager` owns a subsystem: it holds the live set of objects of one kind, keeps them in sync with the world, and hands out references to them. Subsystems are shared — a second instance means a second, divergent copy of the truth.

## Mental Model

Read a manager as the single owner of a collection, not as a utility bag. Everything that mutates the collection goes through its methods, and everything else reads the collections it exposes.

Because the instance is shared and long-lived, do not stash per-campaign scratch data on it. Keep it on the campaign object, the party or the hero you are working on.

Concretely, the surface breaks down like this:

- **Static entry points** (2): `Instance`, `Initialize`.
- **Instance members** (12): `IsTouchpadMouseEnabled`, `IsFollowingMobileTarget`, `IsHoldingDpadKeysForNavigation`, `IsCursorMovingForNavigation`, `IsInWrapMovement`, `LastTargetedWidget`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Initialize` | method (static) | Static entry point. Takes no arguments. |
| `Instance` | property (static) | Static entry point `GauntletGamepadNavigationManager` property. Read it for current state; a declared setter writes that state in place. |
| `AnyWidgetUsingNavigation` | property | Instance entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `IsCursorMovingForNavigation` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsFollowingMobileTarget` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsHoldingDpadKeysForNavigation` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsInWrapMovement` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsTouchpadMouseEnabled` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `LastTargetedWidget` | property | Instance entry point `Widget` property. Read it for current state; a declared setter writes that state in place. |
| `OnFinalize` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `SetAllDirty` | method | Instance entry point. Takes no arguments. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `TargetedWidgetHasAction` | property | Instance entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `TryNavigateTo` | method | Instance entry point. Takes 1 argument: `Widget widget`. Returns `bool`. |
| `Update` | method | Instance entry point. Takes 1 argument: `float dt`. Called from the owner’s update loop — do not assume a frame boundary. |

## Usage Example

```csharp
// Reach the one live instance through the engine; do not construct a second copy.
var gauntletGamepadNavigationManager = GauntletGamepadNavigationManager.Instance;
GauntletGamepadNavigationManager.Initialize();
// Read the live state through gauntletGamepadNavigationManager.IsTouchpadMouseEnabled.
```

## Risks and Boundaries

- Never construct a manager yourself when the engine already owns one; the duplicate will drift from the live state.
- Do not mutate the collection while enumerating it — materialise a list first if a callback can add or remove entries.
- Most managers are only valid between campaign start and campaign end.
- The declaration in `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/GamepadNavigation/GauntletGamepadNavigationManager.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [GamepadNavigationScopeCollection](../GamepadNavigationScopeCollection/) — `TaleWorlds.GauntletUI.GamepadNavigation`.
- [GamepadNavigationScope](../GamepadNavigationScope/) — `TaleWorlds.GauntletUI.GamepadNavigation`.
- [GamepadNavigationForcedScopeCollection](../GamepadNavigationForcedScopeCollection/) — `TaleWorlds.GauntletUI.GamepadNavigation`.
- [GamepadNavigationTypes](../GamepadNavigationTypes/) — `TaleWorlds.GauntletUI.GamepadNavigation`.
- [GamepadNavigationHelper](../GamepadNavigationHelper/) — `TaleWorlds.GauntletUI.GamepadNavigation`.

Section: [api/gui/](../) — the other types in this bucket.
