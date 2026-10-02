---
title: "GamepadNavigationScopeCollection"
description: "GamepadNavigationScopeCollection — class in TaleWorlds.GauntletUI.GamepadNavigation. 6 public members (0 static)."
---

<!-- v147-skeleton -->
# GamepadNavigationScopeCollection

**Namespace:** `TaleWorlds.GauntletUI.GamepadNavigation`  
**Module:** `TaleWorlds.GauntletUI`  
**Type:** `internal class GamepadNavigationScopeCollection`  
**Source:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/GamepadNavigation/GamepadNavigationScopeCollection.cs`

## Overview

`GamepadNavigationScopeCollection` is an internal class in TaleWorlds.GauntletUI.GamepadNavigation. The engine constructs it and exposes it through public APIs; a mod can call the public surface above it but cannot `new` it or reference the type in a signature.

`GamepadNavigationScopeCollection` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `GamepadNavigationScopeCollection`.
- **Instance members** (5): `Source`, `AllScopes`, `UninitializedScopes`, `VisibleScopes`, `InvisibleScopes`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AllScopes` | property | Instance entry point `ReadOnlyCollection<GamepadNavigationScope>` property. Read it for current state; a declared setter writes that state in place. |
| `InvisibleScopes` | property | Instance entry point `ReadOnlyCollection<GamepadNavigationScope>` property. Read it for current state; a declared setter writes that state in place. |
| `Source` | property | Instance entry point `IGamepadNavigationContext` property. Read it for current state; a declared setter writes that state in place. |
| `UninitializedScopes` | property | Instance entry point `ReadOnlyCollection<GamepadNavigationScope>` property. Read it for current state; a declared setter writes that state in place. |
| `VisibleScopes` | property | Instance entry point `ReadOnlyCollection<GamepadNavigationScope>` property. Read it for current state; a declared setter writes that state in place. |
| `GamepadNavigationScopeCollection` | ctor | Instance entry point. Takes 4 arguments: `IGamepadNavigationContext source`, `Action<GamepadNavigationScope> onScopeNavigatableWidgetsChanged`, `Action<GamepadNavigationScope`, `bool> onScopeVisibilityChanged`. Returns ``. |

- Constructed as `public GamepadNavigationScopeCollection(IGamepadNavigationContext source, Action<GamepadNavigationScope> onScopeNavigatableWidgetsChanged, Action<GamepadNavigationScope, bool> onScopeVisibilityChanged)`.

## Usage Example

```csharp
// GamepadNavigationScopeCollection is internal: the engine creates it, a mod cannot.
// Use it through whatever the engine exposes, and read the members below.
//   Source
//     IGamepadNavigationContext
//   AllScopes
//     ReadOnlyCollection<GamepadNavigationScope>
//   UninitializedScopes
//     ReadOnlyCollection<GamepadNavigationScope>
//   VisibleScopes
//     ReadOnlyCollection<GamepadNavigationScope>
//   InvisibleScopes
//     ReadOnlyCollection<GamepadNavigationScope>
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- The declaration in `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/GamepadNavigation/GamepadNavigationScopeCollection.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [GamepadNavigationScope](../GamepadNavigationScope/) — `TaleWorlds.GauntletUI.GamepadNavigation`.

Section: [api/gui/](../) — the other types in this bucket.
