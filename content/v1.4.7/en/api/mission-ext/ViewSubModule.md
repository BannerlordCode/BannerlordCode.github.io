---
title: "ViewSubModule"
description: "ViewSubModule — class in TaleWorlds.MountAndBlade.View. 15 public members (1 static)."
---

<!-- v147-skeleton -->
# ViewSubModule

**Namespace:** `TaleWorlds.MountAndBlade.View`  
**Module:** `TaleWorlds.MountAndBlade.View`  
**Type:** `public class ViewSubModule : MBSubModuleBase`  
**Base:** `MBSubModuleBase`  
**Source:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/ViewSubModule.cs`

## Overview

`ViewSubModule` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends MBSubModuleBase, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Static entry points** (1): `GameStateScreenManager`.
- **Instance members** (14): `OnSubModuleLoad`, `OnSubModuleUnloaded`, `OnBeforeInitialModuleScreenSetAsRoot`, `OnNewModuleLoad`, `OnApplicationTick`, `AfterAsyncTickTick`, ….
- **Extension points** (14): `OnSubModuleLoad`, `OnSubModuleUnloaded`, `OnBeforeInitialModuleScreenSetAsRoot`, `OnNewModuleLoad`, `OnApplicationTick`, `AfterAsyncTickTick`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `BeginGameStart` | method (override) | Overrides the base member. Takes 1 argument: `Game game`. |
| `DoLoading` | method (override) | Overrides the base member. Takes 1 argument: `Game game`. Returns `bool`. |
| `GameStateScreenManager` | property (static) | Static entry point `GameStateScreenManager` property. Read it for current state; a declared setter writes that state in place. |
| `OnCampaignStart` | method (override) | Overrides the base member. Takes 2 arguments: `Game game`, `object starterObject`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnGameEnd` | method (override) | Overrides the base member. Takes 1 argument: `Game game`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnGameInitializationFinished` | method (override) | Overrides the base member. Takes 1 argument: `Game game`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnGameLoaded` | method (override) | Overrides the base member. Takes 2 arguments: `Game game`, `object initializerObject`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMultiplayerGameStart` | method (override) | Overrides the base member. Takes 2 arguments: `Game game`, `object starterObject`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `AfterAsyncTickTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. |
| `OnApplicationTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnBeforeInitialModuleScreenSetAsRoot` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnGameStart` | method (override) | Overrides the base member. Takes 2 arguments: `Game game`, `IGameStarter gameStarterObject`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnNewModuleLoad` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnSubModuleLoad` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnSubModuleUnloaded` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: MBSubModuleBase.

// Lifecycle hooks this type declares:
//   protected override void OnSubModuleLoad()
//   protected override void OnSubModuleUnloaded()
//   protected override void OnBeforeInitialModuleScreenSetAsRoot()
//   protected override void OnNewModuleLoad()
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 14 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/ViewSubModule.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [GameKeyContext](../../system/GameKeyContext/) — `TaleWorlds.InputSystem`.
- [OrderOfBattleHotKeyCategory](../OrderOfBattleHotKeyCategory/) — `TaleWorlds.MountAndBlade.GameKeyCategory`.
- [CheatsHotKeyCategory](../../engine/CheatsHotKeyCategory/) — `TaleWorlds.Engine.InputSystem`.
- [PhotoModeHotKeyCategory](../PhotoModeHotKeyCategory/) — `TaleWorlds.MountAndBlade.GameKeyCategory`.
- [DefaultVisualOrderProvider](../DefaultVisualOrderProvider/) — `TaleWorlds.MountAndBlade.View.VisualOrders`.
- [Utilities](../../engine/Utilities/) — `TaleWorlds.Engine`.
- [CustomBattleFactory](../CustomBattleFactory/) — `TaleWorlds.MountAndBlade.View.CustomBattle`.
- [AvatarThumbnailCache](../AvatarThumbnailCache/) — `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails`.
- [BannerEditorTextureCache](../BannerEditorTextureCache/) — `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails`.
- [ItemThumbnailCache](../ItemThumbnailCache/) — `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails`.

Section: [api/mission-ext/](../) — the other types in this bucket.
