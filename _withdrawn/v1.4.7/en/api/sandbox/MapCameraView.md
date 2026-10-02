---
title: "MapCameraView"
description: "MapCameraView — class in SandBox.View.Map. 43 public members (0 static)."
---

<!-- v147-skeleton -->
# MapCameraView

**Namespace:** `SandBox.View.Map`  
**Module:** `SandBox.View`  
**Type:** `public class MapCameraView : MapView`  
**Base:** `MapView`  
**Source:** `SandBox.View/Map/MapCameraView.cs`

## Overview

`MapCameraView` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends MapView, so the members it does not redeclare are inherited from there. 15 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `MapCameraView`.
- **Instance members** (41): `CurrentCameraFollowMode`, `CameraFastMoveMultiplier`, `CameraBearing`, `MaximumCameraHeight`, `CameraBearingVelocity`, `CameraDistance`, ….
- **Extension points** (36): `CurrentCameraFollowMode`, `CameraFastMoveMultiplier`, `CameraBearing`, `MaximumCameraHeight`, `CameraBearingVelocity`, `CameraDistance`, ….
- **Data and constants** (1): `_customMaximumCameraHeight`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Camera` | property (virtual) | Virtual — override it to change behaviour for every caller `Camera` property. Read it for current state; a declared setter writes that state in place. |
| `CameraAnimationInProgress` | property (virtual) | Virtual — override it to change behaviour for every caller `bool` property. Read it for current state; a declared setter writes that state in place. |
| `CameraDistance` | property (virtual) | Virtual — override it to change behaviour for every caller `float` property. Read it for current state; a declared setter writes that state in place. |
| `CameraFastMoveMultiplier` | property (virtual) | Virtual — override it to change behaviour for every caller `float` property. Read it for current state; a declared setter writes that state in place. |
| `CameraFrame` | property (virtual) | Virtual — override it to change behaviour for every caller `MatrixFrame` property. Read it for current state; a declared setter writes that state in place. |
| `FastMoveCameraToMainParty` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. |
| `FastMoveCameraToPosition` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 2 arguments: `CampaignVec2 target`, `bool isInMenu`. |
| `HandleLeftMouseButtonClick` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `bool isMouseActive`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `HandleMouse` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 4 arguments: `bool rightMouseButtonPressed`, `float verticalCameraInput`, `float mouseMoveY`, `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `Initialize` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. |
| `IsCameraLockedToPlayerParty` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OnActivate` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 2 arguments: `bool leftButtonDraggingMode`, `Vec3 clickedPosition`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnBeforeTick` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `in MapCameraView.InputInformation inputInformation`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnEscapeMenuToggled` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `bool isOpened`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnExit` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnRefreshMapSiegeOverlayRequired` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `bool isMapSiegeOverlayViewNull`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnSetMapSiegeOverlayState` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 2 arguments: `bool isActive`, `bool isMapSiegeOverlayViewNull`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ProcessCameraInput` | property (virtual) | Virtual — override it to change behaviour for every caller `bool` property. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ResetCamera` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 2 arguments: `bool resetDistance`, `bool teleportToMainParty`. Removes from or clears the collection this type owns. |
| `SetCameraMode` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `MapCameraView.CameraFollowMode cameraMode`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SiegeEngineClick` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `MatrixFrame siegeEngineFrame`. |
| `StartCameraAnimation` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 2 arguments: `CampaignVec2 targetPosition`, `float animationStopDuration`. |
| `TeleportCameraToMainParty` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. |
| `AdditionalElevation` | property (virtual) | Virtual — override it to change behaviour for every caller `float` property. Read it for current state; a declared setter writes that state in place. |

- Constructed as `public MapCameraView()`.

19 further public members follow the same patterns.
## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: MapView.
var mapCameraView = new MapCameraView();

// Lifecycle hooks this type declares:
//   public virtual void OnActivate(bool leftButtonDraggingMode, Vec3 clickedPosition)
//   protected internal override void OnFinalize()
//   public void OnFastMoveCameraMovementStart()
//   public virtual void OnExit()
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 36 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox.View/Map/MapCameraView.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MobileParty](../../campaign/MobileParty/) — `TaleWorlds.CampaignSystem.Party`.
- [IMapScene](../../campaign/IMapScene/) — `TaleWorlds.CampaignSystem.Map`.
- [Min](../../core-extra/Min/) — `TaleWorlds.LinQuick`.
- [PlayerSiege](../../campaign/PlayerSiege/) — `TaleWorlds.CampaignSystem.Siege`.
- [EventManager](../../core-extra/EventManager/) — `TaleWorlds.Library.EventSystem`.
- [MapScreen](../MapScreen/) — `SandBox.View.Map`.
- [Town](../../campaign/Town/) — `TaleWorlds.CampaignSystem.Settlements`.
- [SiegeEvent](../../campaign/SiegeEvent/) — `TaleWorlds.CampaignSystem.Siege`.
- [BesiegerCamp](../../campaign/BesiegerCamp/) — `TaleWorlds.CampaignSystem.Siege`.

Section: [api/sandbox/](../) — the other types in this bucket.
