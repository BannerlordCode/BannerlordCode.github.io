---
title: "SandBoxViewSubModule"
description: "SandBoxViewSubModule — class in SandBox.View. 13 public members (4 static)."
---

<!-- v147-skeleton -->
# SandBoxViewSubModule

**Namespace:** `SandBox.View`  
**Module:** `SandBox.View`  
**Type:** `public class SandBoxViewSubModule : MBSubModuleBase`  
**Base:** `MBSubModuleBase`  
**Source:** `SandBox.View/SandBoxViewSubModule.cs`

## Overview

`SandBoxViewSubModule` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends MBSubModuleBase, so the members it does not redeclare are inherited from there. 3 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Static entry points** (4): `SandBoxViewVisualManager`, `ConversationViewManager`, `MapConversationDataProvider`, `SetMapConversationDataProvider`.
- **Instance members** (9): `OnSubModuleLoad`, `OnSubModuleUnloaded`, `OnApplicationTick`, `OnCampaignStart`, `OnGameLoaded`, `OnAfterGameInitializationFinished`, ….
- **Extension points** (9): `OnSubModuleLoad`, `OnSubModuleUnloaded`, `OnApplicationTick`, `OnCampaignStart`, `OnGameLoaded`, `OnAfterGameInitializationFinished`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `BeginGameStart` | method (override) | Overrides the base member. Takes 1 argument: `Game game`. |
| `ConversationViewManager` | property (static) | Static entry point `ConversationViewManager` property. Read it for current state; a declared setter writes that state in place. |
| `MapConversationDataProvider` | property (static) | Static entry point `IMapConversationDataProvider` property. Read it for current state; a declared setter writes that state in place. |
| `OnAfterGameInitializationFinished` | method (override) | Overrides the base member. Takes 2 arguments: `Game game`, `object starterObject`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnCampaignStart` | method (override) | Overrides the base member. Takes 2 arguments: `Game game`, `object starterObject`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnGameEnd` | method (override) | Overrides the base member. Takes 1 argument: `Game game`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnGameLoaded` | method (override) | Overrides the base member. Takes 2 arguments: `Game game`, `object initializerObject`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnInitialState` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `SandBoxViewVisualManager` | property (static) | Static entry point `SandBoxViewVisualManager` property. Read it for current state; a declared setter writes that state in place. |
| `SetMapConversationDataProvider` | method (static) | Static entry point. Takes 1 argument: `IMapConversationDataProvider mapConversationDataProvider`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `OnApplicationTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnSubModuleLoad` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnSubModuleUnloaded` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: MBSubModuleBase.
SandBoxViewSubModule.SetMapConversationDataProvider(mapConversationDataProvider);

// Lifecycle hooks this type declares:
//   protected override void OnSubModuleLoad()
//   protected override void OnSubModuleUnloaded()
//   protected override void OnApplicationTick(float dt)
//   public override void OnCampaignStart(Game game, object starterObject)
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 9 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox.View/SandBoxViewSubModule.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [GameMenu](../../campaign/GameMenu/) — `TaleWorlds.CampaignSystem.GameMenus`.
- [ConversationViewManager](../ConversationViewManager/) — `SandBox.View.Conversation`.
- [MapEntityVisual](../MapEntityVisual/) — `SandBox.View.Map.Visuals`.
- [SettlementVisual](../SettlementVisual/) — `SandBox.View.Map.Visuals`.
- [SandBoxViewCreator](../SandBoxViewCreator/) — `SandBox.View`.
- [GameStateManager](../../core-extra/GameStateManager/) — `TaleWorlds.Core`.
- [SandBoxSaveHelper](../SandBoxSaveHelper/) — `SandBox`.
- [DefaultGameMenuOverlayProvider](../DefaultGameMenuOverlayProvider/) — `SandBox.View.Overlay`.
- [MissionNameMarkerFactory](../MissionNameMarkerFactory/) — `SandBox.ViewModelCollection.Missions.NameMarker`.
- [DefaultMissionNameMarkerHandler](../DefaultMissionNameMarkerHandler/) — `SandBox.View.Missions.NameMarkers`.

Section: [api/sandbox/](../) — the other types in this bucket.
