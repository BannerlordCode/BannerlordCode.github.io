---
title: "GauntletSceneNotification"
description: "GauntletSceneNotification — class in TaleWorlds.MountAndBlade.GauntletUI.SceneNotification. 7 public members (2 static)."
---

<!-- v147-skeleton -->
# GauntletSceneNotification

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.SceneNotification`  
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`  
**Type:** `public class GauntletSceneNotification : GlobalLayer`  
**Base:** `GlobalLayer`  
**Source:** `TaleWorlds.MountAndBlade.GauntletUI/SceneNotification/GauntletSceneNotification.cs`

## Overview

`GauntletSceneNotification` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends GlobalLayer, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Static entry points** (2): `Current`, `Initialize`.
- **Instance members** (5): `IsActive`, `OnTick`, `OnFinalize`, `RegisterContextProvider`, `RemoveContextProvider`.
- **Extension points** (1): `OnTick`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Current` | property (static) | Static entry point `GauntletSceneNotification` property. Read it for current state; a declared setter writes that state in place. |
| `Initialize` | method (static) | Static entry point. Takes no arguments. |
| `OnTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `IsActive` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OnFinalize` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RegisterContextProvider` | method | Instance entry point. Takes 1 argument: `ISceneNotificationContextProvider provider`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `RemoveContextProvider` | method | Instance entry point. Takes 1 argument: `ISceneNotificationContextProvider provider`. Returns `bool`. Removes from or clears the collection this type owns. |

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: GlobalLayer.
GauntletSceneNotification.Initialize();

// Lifecycle hooks this type declares:
//   protected override void OnTick(float dt)
//   public void OnFinalize()
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.GauntletUI/SceneNotification/GauntletSceneNotification.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [GlobalLayer](../../gui/GlobalLayer/) — `TaleWorlds.ScreenSystem`.
- [SceneNotificationData](../../core-extra/SceneNotificationData/) — `TaleWorlds.Core`.
- [PopupSceneCameraPath](../PopupSceneCameraPath/) — `TaleWorlds.MountAndBlade.View.Scripts`.
- [InputRestrictions](../../gui/InputRestrictions/) — `TaleWorlds.ScreenSystem`.
- [AgentVisuals](../AgentVisuals/) — `TaleWorlds.MountAndBlade.View`.
- [BannerVisual](../BannerVisual/) — `TaleWorlds.MountAndBlade.View`.
- [BannerDebugInfo](../BannerDebugInfo/) — `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails`.
- [Ship](../../campaign/Ship/) — `TaleWorlds.CampaignSystem.Naval`.
- [PopupSceneShipSpawnPoint](../PopupSceneShipSpawnPoint/) — `TaleWorlds.MountAndBlade.View.SceneNotification`.
- [GameStateManager](../../core-extra/GameStateManager/) — `TaleWorlds.Core`.

Section: [api/mission-ext/](../) — the other types in this bucket.
