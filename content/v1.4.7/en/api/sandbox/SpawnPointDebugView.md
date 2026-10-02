---
title: "SpawnPointDebugView"
description: "SpawnPointDebugView — class in SandBox.View.Missions.SandBox. 9 public members (1 static)."
---

<!-- v147-skeleton -->
# SpawnPointDebugView

**Namespace:** `SandBox.View.Missions.SandBox`  
**Module:** `SandBox.View`  
**Type:** `public class SpawnPointDebugView : ScriptComponentBehavior`  
**Base:** `ScriptComponentBehavior`  
**Source:** `SandBox.View/Missions/SandBox/SpawnPointDebugView.cs`

## Overview

`SpawnPointDebugView` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends ScriptComponentBehavior, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Instance members** (7): `OnEditorInit`, `OnInit`, `GetTickRequirement`, `OnTick`, `OnEditorTick`, `OnSceneSave`, ….
- **Extension points** (7): `OnEditorInit`, `OnInit`, `GetTickRequirement`, `OnTick`, `OnEditorTick`, `OnSceneSave`, ….
- **Data and constants** (2): `ActivateDebugUI`, `ActivateDebugUIEditor`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetTickRequirement` | method (override) | Overrides the base member. Takes no arguments. Returns `ScriptComponentBehavior.TickRequirement`. Read path: prefer it over reaching for the backing store. |
| `OnCheckForProblems` | method (override) | Overrides the base member. Takes no arguments. Returns `bool`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnEditorInit` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnEditorTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnInit` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnSceneSave` | method (override) | Overrides the base member. Takes 1 argument: `string saveFolder`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ActivateDebugUI` | field (static) | Static entry point `bool` field — direct storage with no validation or notification. |
| `ActivateDebugUIEditor` | field | Instance entry point `bool` field — direct storage with no validation or notification. |

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: ScriptComponentBehavior.

// Lifecycle hooks this type declares:
//   protected override void OnEditorInit()
//   protected override void OnInit()
//   public override ScriptComponentBehavior.TickRequirement GetTickRequirement()
//   protected override void OnTick(float dt)
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 7 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox.View/Missions/SandBox/SpawnPointDebugView.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Town](../../campaign/Town/) — `TaleWorlds.CampaignSystem.Settlements`.
- [SpawnPointUnits](../SpawnPointUnits/) — `SandBox.View.Missions.SandBox`.
- [Chair](../Chair/) — `SandBox.Objects.Usables`.
- [Passage](../Passage/) — `SandBox.Objects.Usables`.
- [Min](../../core-extra/Min/) — `TaleWorlds.LinQuick`.
- [CommonAreaMarker](../CommonAreaMarker/) — `SandBox.Objects.AreaMarkers`.
- [WorkshopAreaMarker](../WorkshopAreaMarker/) — `SandBox.Objects.AreaMarkers`.
- [Alley](../../campaign/Alley/) — `TaleWorlds.CampaignSystem.Settlements`.
- [Workshop](../../campaign/Workshop/) — `TaleWorlds.CampaignSystem.Settlements.Workshops`.
- [NavigationMeshDeactivator](../../mission-ext/NavigationMeshDeactivator/) — `TaleWorlds.MountAndBlade.Source.Objects`.

Section: [api/sandbox/](../) — the other types in this bucket.
