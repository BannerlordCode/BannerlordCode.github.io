---
title: "MapScreen"
description: "MapScreen — class in SandBox.View.Map. 99 public members (2 static)."
---

<!-- v147-skeleton -->
# MapScreen

**Namespace:** `SandBox.View.Map`  
**Module:** `SandBox.View`  
**Type:** `public class MapScreen : ScreenBase, IMapStateHandler, IGameStateListener, IChatLogHandlerScreen`  
**Base:** `ScreenBase, IMapStateHandler, IGameStateListener, IChatLogHandlerScreen`  
**Source:** `SandBox.View/Map/MapScreen.cs`

## Overview

`MapScreen` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends ScreenBase, IMapStateHandler, IGameStateListener, IChatLogHandlerScreen, so the members it does not redeclare are inherited from there. 34 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `MapScreen`.
- **Static entry points** (1): `Instance`.
- **Instance members** (90): `Input`, `IsReady`, `NavigationHandler`, `CurrentVisualOfTooltip`, `PrefabEntityCache`, `EncyclopediaScreenManager`, ….
- **Extension points** (12): `OnResume`, `OnPause`, `OnActivate`, `OnDeactivate`, `OnFocusChangeOnGameWindow`, `OnInitialize`, ….
- **Data and constants** (7): `DisableVisualTicks`, `MapTracksCampaignBehavior`, `EnemyPartyDecalColor`, `SameFactionPartyDecalColor`, `NeutralPartyDecalColor`, `AllyPartyDecalColor`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Instance` | property (static) | Static entry point `MapScreen` property. Read it for current state; a declared setter writes that state in place. |
| `OnFocusChangeOnGameWindow` | method (override) | Overrides the base member. Takes 1 argument: `bool focusGained`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnActivate` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnDeactivate` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnFrameTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnInitialize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnPause` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnPostFrameTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnResume` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ActiveLightMeshes` | property | Instance entry point `List<Mesh>` property. Read it for current state; a declared setter writes that state in place. |
| `AddArmyOverlay` | method | Instance entry point. Takes 1 argument: `MapScreen.MapOverlayType type`. Adds to the collection or relation this type owns. |
| `AddEncounterOverlay` | method | Instance entry point. Takes 1 argument: `GameMenu.MenuOverlayType type`. Adds to the collection or relation this type owns. |
| `BeginParleyWith` | method | Instance entry point. Takes 1 argument: `PartyBase party`. |
| `ClearGPUMemory` | method | Instance entry point. Takes no arguments. Removes from or clears the collection this type owns. |
| `CloseCampaignOptions` | method | Instance entry point. Takes no arguments. |
| `CloseEscapeMenu` | method | Instance entry point. Takes no arguments. |
| `CloseGameplayCheats` | method | Instance entry point. Takes no arguments. |
| `CloseMarriageOfferPopup` | method | Instance entry point. Takes no arguments. |
| `ContourMaskEntity` | property | Instance entry point `GameEntity` property. Read it for current state; a declared setter writes that state in place. |
| `CreateMenuViewContext` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `MenuContext menuContext`. Returns `MenuViewContext`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `CreatePeriodicUIEvent` | method | Instance entry point. Takes 2 arguments: `CampaignTime triggerPeriod`, `CampaignTime initialWait`. Returns `MBCampaignEvent`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `CreateSimulationScoreboardDatasource` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `BattleSimulation battleSimulation`. Returns `SPScoreboardVM`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `CurrentVisualOfTooltip` | property | Instance entry point `MapEntityVisual` property. Read it for current state; a declared setter writes that state in place. |

- Constructed as `public MapScreen(MapState mapState)`.

75 further public members follow the same patterns.
## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: ScreenBase, IMapStateHandler, IGameStateListener, IChatLogHandlerScreen.
var mapScreen = new MapScreen(mapState);

// Lifecycle hooks this type declares:
//   public void OnHoverMapEntity(MapEntityVisual mapEntityVisual)
//   protected override void OnResume()
//   protected override void OnPause()
//   protected override void OnActivate()
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 12 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox.View/Map/MapScreen.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [SceneLayer](../../engine/SceneLayer/) — `TaleWorlds.Engine.Screens`.
- [MapEntityVisual](../MapEntityVisual/) — `SandBox.View.Map.Visuals`.
- [MapCameraView](../MapCameraView/) — `SandBox.View.Map`.
- [CampaignMusicHandler](../CampaignMusicHandler/) — `SandBox.View`.
- [MapConversationView](../MapConversationView/) — `SandBox.View.Map`.
- [Utilities](../../engine/Utilities/) — `TaleWorlds.Engine`.
- [EventManager](../../core-extra/EventManager/) — `TaleWorlds.Library.EventSystem`.
- [InformationManager](../../core-extra/InformationManager/) — `TaleWorlds.Library`.
- [SandBoxViewCreator](../SandBoxViewCreator/) — `SandBox.View`.
- [GameMenu](../../campaign/GameMenu/) — `TaleWorlds.CampaignSystem.GameMenus`.

Section: [api/sandbox/](../) — the other types in this bucket.
