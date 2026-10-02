---
title: "CustomBattleFactory"
description: "CustomBattleFactory — class in TaleWorlds.MountAndBlade.View.CustomBattle. 4 public members (4 static)."
---

<!-- v147-skeleton -->
# CustomBattleFactory

**Namespace:** `TaleWorlds.MountAndBlade.View.CustomBattle`  
**Module:** `TaleWorlds.MountAndBlade.View`  
**Type:** `public static class CustomBattleFactory`  
**Source:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/CustomBattle/CustomBattleFactory.cs`

## Overview

`CustomBattleFactory` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Static entry points** (4): `StartCustomBattle`, `GetProviderCount`, `CollectProviders`, `CollectNextProvider`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CollectNextProvider` | method (static) | Static entry point. Takes 1 argument: `Type currentProviderType`. Returns `ICustomBattleProvider`. |
| `CollectProviders` | method (static) | Static entry point. Takes no arguments. Returns `List<ICustomBattleProvider>`. |
| `GetProviderCount` | method (static) | Static entry point. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `StartCustomBattle` | method (static) | Static entry point. Takes no arguments. |

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
CustomBattleFactory.StartCustomBattle();

// It declares no lifecycle hooks of its own; it only adds state and helpers.
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- The declaration in `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/CustomBattle/CustomBattleFactory.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ICustomBattleProvider](../ICustomBattleProvider/) — `TaleWorlds.MountAndBlade.View.CustomBattle`.

Section: [api/mission-ext/](../) — the other types in this bucket.
