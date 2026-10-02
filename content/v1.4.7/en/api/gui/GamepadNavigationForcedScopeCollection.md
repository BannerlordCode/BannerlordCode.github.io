---
title: "GamepadNavigationForcedScopeCollection"
description: "GamepadNavigationForcedScopeCollection — class in TaleWorlds.GauntletUI.GamepadNavigation. 15 public members (0 static)."
---

<!-- v147-skeleton -->
# GamepadNavigationForcedScopeCollection

**Namespace:** `TaleWorlds.GauntletUI.GamepadNavigation`  
**Module:** `TaleWorlds.GauntletUI`  
**Type:** `public class GamepadNavigationForcedScopeCollection`  
**Source:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/GamepadNavigation/GamepadNavigationForcedScopeCollection.cs`

## Overview

`GamepadNavigationForcedScopeCollection` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `GamepadNavigationForcedScopeCollection`.
- **Instance members** (13): `IsEnabled`, `IsDisabled`, `CollectionID`, `CollectionOrder`, `ParentWidget`, `Scopes`, ….
- **Extension points** (1): `ToString`.
- **Data and constants** (1): `OnAvailabilityChanged`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `ToString` | method (override) | Overrides the base member. Takes no arguments. Returns `string`. |
| `ActiveScope` | property | Instance entry point `GamepadNavigationScope` property. Read it for current state; a declared setter writes that state in place. |
| `AddScope` | method | Instance entry point. Takes 1 argument: `GamepadNavigationScope scope`. Adds to the collection or relation this type owns. |
| `ClearScopes` | method | Instance entry point. Takes no arguments. Removes from or clears the collection this type owns. |
| `CollectionID` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `CollectionOrder` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `IsAvailable` | method | Instance entry point. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsDisabled` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsEnabled` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `ParentWidget` | property | Instance entry point `Widget` property. Read it for current state; a declared setter writes that state in place. |
| `PreviousScope` | property | Instance entry point `GamepadNavigationScope` property. Read it for current state; a declared setter writes that state in place. |
| `RemoveScope` | method | Instance entry point. Takes 1 argument: `GamepadNavigationScope scope`. Removes from or clears the collection this type owns. |
| `Scopes` | property | Instance entry point `List<GamepadNavigationScope>` property. Read it for current state; a declared setter writes that state in place. |
| `GamepadNavigationForcedScopeCollection` | ctor | Instance entry point. Takes no arguments. Returns ``. |
| `OnAvailabilityChanged` | field | Instance entry point `Action<GamepadNavigationForcedScopeCollection>` field — direct storage with no validation or notification. |

- Constructed as `public GamepadNavigationForcedScopeCollection()`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
var gamepadNavigationForcedScopeCollection = new GamepadNavigationForcedScopeCollection();

// Lifecycle hooks this type declares:
//   public override string ToString()
//   public Action<GamepadNavigationForcedScopeCollection> OnAvailabilityChanged
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/GamepadNavigation/GamepadNavigationForcedScopeCollection.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [GamepadNavigationScope](../GamepadNavigationScope/) — `TaleWorlds.GauntletUI.GamepadNavigation`.

Section: [api/gui/](../) — the other types in this bucket.
