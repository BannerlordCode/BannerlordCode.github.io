---
title: "GamepadNavigationScope"
description: "GamepadNavigationScope — class in TaleWorlds.GauntletUI.GamepadNavigation. 46 public members (0 static)."
---

<!-- v147-skeleton -->
# GamepadNavigationScope

**Namespace:** `TaleWorlds.GauntletUI.GamepadNavigation`  
**Module:** `TaleWorlds.GauntletUI`  
**Type:** `public class GamepadNavigationScope`  
**Source:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/GamepadNavigation/GamepadNavigationScope.cs`

## Overview

`GamepadNavigationScope` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `GamepadNavigationScope`.
- **Instance members** (45): `ScopeID`, `IsActiveScope`, `DoNotAutomaticallyFindChildren`, `ScopeMovements`, `AlternateScopeMovements`, `AlternateMovementStepSize`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AddWidget` | method | Instance entry point. Takes 1 argument: `Widget widget`. Adds to the collection or relation this type owns. |
| `AddWidgetAtIndex` | method | Instance entry point. Takes 2 arguments: `Widget widget`, `int index`. Adds to the collection or relation this type owns. |
| `AlternateMovementStepSize` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `AlternateScopeMovements` | property | Instance entry point `GamepadNavigationTypes` property. Read it for current state; a declared setter writes that state in place. |
| `ClearNavigatableWidgets` | method | Instance entry point. Takes no arguments. Removes from or clears the collection this type owns. |
| `DiscoveryAreaOffsetX` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `DiscoveryAreaOffsetY` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `DoNotAutoCollectChildScopes` | property | Instance entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `DoNotAutoGainNavigationOnInit` | property | Instance entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `DoNotAutomaticallyFindChildren` | property | Instance entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `DoNotAutoNavigateAfterSort` | property | Instance entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `DownNavigationScope` | property | Instance entry point `GamepadNavigationScope` property. Read it for current state; a declared setter writes that state in place. |
| `DownNavigationScopeID` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `ExtendChildrenCursorAreaBottom` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `ExtendChildrenCursorAreaLeft` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `ExtendChildrenCursorAreaRight` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `ExtendChildrenCursorAreaTop` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `ExtendDiscoveryAreaBottom` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `ExtendDiscoveryAreaLeft` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `ExtendDiscoveryAreaRight` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `ExtendDiscoveryAreaTop` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `FollowMobileTargets` | property | Instance entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `ForceGainNavigationBasedOnDirection` | property | Instance entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `ForceGainNavigationOnClosestChild` | property | Instance entry point `bool` property. Read it for current state; a declared setter writes that state in place. |

- Constructed as `public GamepadNavigationScope()`.

22 further public members follow the same patterns.
## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
var gamepadNavigationScope = new GamepadNavigationScope();

// It declares no lifecycle hooks of its own; it only adds state and helpers.
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- The declaration in `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/GamepadNavigation/GamepadNavigationScope.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [GamepadNavigationTypes](../GamepadNavigationTypes/) — `TaleWorlds.GauntletUI.GamepadNavigation`.
- [GauntletGamepadNavigationManager](../GauntletGamepadNavigationManager/) — `TaleWorlds.GauntletUI.GamepadNavigation`.
- [EventManager](../../core-extra/EventManager/) — `TaleWorlds.Library.EventSystem`.
- [Min](../../core-extra/Min/) — `TaleWorlds.LinQuick`.
- [GamepadNavigationHelper](../GamepadNavigationHelper/) — `TaleWorlds.GauntletUI.GamepadNavigation`.

Section: [api/gui/](../) — the other types in this bucket.
