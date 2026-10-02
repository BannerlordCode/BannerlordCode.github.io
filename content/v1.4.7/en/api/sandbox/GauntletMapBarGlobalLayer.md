---
title: "GauntletMapBarGlobalLayer"
description: "GauntletMapBarGlobalLayer — class in SandBox.GauntletUI.Map. 19 public members (0 static)."
---

<!-- v147-skeleton -->
# GauntletMapBarGlobalLayer

**Namespace:** `SandBox.GauntletUI.Map`  
**Module:** `SandBox.GauntletUI`  
**Type:** `public class GauntletMapBarGlobalLayer : GlobalLayer`  
**Base:** `GlobalLayer`  
**Source:** `SandBox.GauntletUI/Map/GauntletMapBarGlobalLayer.cs`

## Overview

`GauntletMapBarGlobalLayer` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends GlobalLayer, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `GauntletMapBarGlobalLayer`.
- **Instance members** (10): `IsInArmyManagement`, `Initialize`, `OnFinalize`, `OnMapConversationStarted`, `OnMapConversationOver`, `Refresh`, ….
- **Extension points** (2): `OnTick`, `HandlePanelSwitchingInput`.
- **Data and constants** (8): `_dataSource`, `_gauntletLayer`, `_movie`, `_mapBarCategory`, `_mapScreen`, `_mapNavigationHandler`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `HandlePanelSwitchingInput` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `InputContext inputContext`. Returns `bool`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `Initialize` | method | Instance entry point. Takes 1 argument: `MapBarVM dataSource`. |
| `IsEscaped` | method | Instance entry point. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsInArmyManagement` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OnFinalize` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMapConversationOver` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMapConversationStarted` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `Refresh` | method | Instance entry point. Takes no arguments. |
| `_contextAlphaTarget` | property | Protected — for subclasses only `float` property. Read it for current state; a declared setter writes that state in place. |
| `GauntletMapBarGlobalLayer` | ctor | Instance entry point. Takes 3 arguments: `MapScreen mapScreen`, `INavigationHandler navigationHandler`, `float contextAlphaModifider`. Returns ``. |
| `_contextAlphaModifider` | field | Protected — for subclasses only `float` field — direct storage with no validation or notification. |
| `_dataSource` | field | Protected — for subclasses only `MapBarVM` field — direct storage with no validation or notification. |
| `_encyclopediaManager` | field | Protected — for subclasses only `MapEncyclopediaView` field — direct storage with no validation or notification. |
| `_gauntletLayer` | field | Protected — for subclasses only `GauntletLayer` field — direct storage with no validation or notification. |
| `_mapBarCategory` | field | Protected — for subclasses only `SpriteCategory` field — direct storage with no validation or notification. |
| `_mapNavigationHandler` | field | Protected — for subclasses only `INavigationHandler` field — direct storage with no validation or notification. |
| `_mapScreen` | field | Protected — for subclasses only `MapScreen` field — direct storage with no validation or notification. |
| `_movie` | field | Protected — for subclasses only `GauntletMovieIdentifier` field — direct storage with no validation or notification. |

- Constructed as `public GauntletMapBarGlobalLayer(MapScreen mapScreen, INavigationHandler navigationHandler, float contextAlphaModifider)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: GlobalLayer.
var gauntletMapBarGlobalLayer = new GauntletMapBarGlobalLayer(mapScreen, navigationHandler, contextAlphaModifider);

// Lifecycle hooks this type declares:
//   public void OnFinalize()
//   public void OnMapConversationStarted()
//   public void OnMapConversationOver()
//   protected override void OnTick(float dt)
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox.GauntletUI/Map/GauntletMapBarGlobalLayer.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [GlobalLayer](../../gui/GlobalLayer/) — `TaleWorlds.ScreenSystem`.
- [MapScreen](../MapScreen/) — `SandBox.View.Map`.
- [MapBarVM](../../viewmodel/MapBarVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar`.
- [MapBarShortcuts](../../viewmodel/MapBarShortcuts/) — `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar`.
- [ArmyManagementVM](../../viewmodel/ArmyManagementVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement`.
- [GameTextManager](../../core-extra/GameTextManager/) — `TaleWorlds.Core`.
- [UIContext](../../gui/UIContext/) — `TaleWorlds.GauntletUI`.
- [GameStateManager](../../core-extra/GameStateManager/) — `TaleWorlds.Core`.
- [InputRestrictions](../../gui/InputRestrictions/) — `TaleWorlds.ScreenSystem`.
- [MapConversationView](../MapConversationView/) — `SandBox.View.Map`.

Section: [api/sandbox/](../) — the other types in this bucket.
