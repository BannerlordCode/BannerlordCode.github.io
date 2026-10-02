---
title: "MapWeatherVisual"
description: "MapWeatherVisual — class in SandBox.View.Map.Visuals. 14 public members (0 static)."
---

<!-- v147-skeleton -->
# MapWeatherVisual

**Namespace:** `SandBox.View.Map.Visuals`  
**Module:** `SandBox.View`  
**Type:** `public class MapWeatherVisual : MapEntityVisual<WeatherNode>`  
**Base:** `MapEntityVisual`  
**Source:** `SandBox.View/Map/Visuals/MapWeatherVisual.cs`

## Overview

`MapWeatherVisual` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends MapEntityVisual, so the members it does not redeclare are inherited from there. 5 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `MapWeatherVisual`.
- **Instance members** (12): `Position`, `PrefabSpawnOffset`, `MaskPixelIndex`, `InteractionPositionForPlayer`, `AttachedTo`, `ToString`, ….
- **Extension points** (8): `InteractionPositionForPlayer`, `AttachedTo`, `ToString`, `OnMapClick`, `OnHover`, `OnOpenEncyclopedia`, ….
- **Data and constants** (1): `Prefab`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AttachedTo` | property (override) | Overrides the base member `MapEntityVisual` property. Read it for current state; a declared setter writes that state in place. |
| `GetVisualPosition` | method (override) | Overrides the base member. Takes no arguments. Returns `Vec3`. Read path: prefer it over reaching for the backing store. |
| `InteractionPositionForPlayer` | property (override) | Overrides the base member `CampaignVec2` property. Read it for current state; a declared setter writes that state in place. |
| `IsVisibleOrFadingOut` | method (override) | Overrides the base member. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OnHover` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMapClick` | method (override) | Overrides the base member. Takes 1 argument: `bool followModifierUsed`. Returns `bool`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnOpenEncyclopedia` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ToString` | method (override) | Overrides the base member. Takes no arguments. Returns `string`. |
| `MaskPixelIndex` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `Position` | property | Instance entry point `Vec2` property. Read it for current state; a declared setter writes that state in place. |
| `PrefabSpawnOffset` | property | Instance entry point `Vec2` property. Read it for current state; a declared setter writes that state in place. |
| `Tick` | method | Instance entry point. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `MapWeatherVisual` | ctor | Instance entry point. Takes 1 argument: `WeatherNode weatherNode`. Returns ``. |
| `Prefab` | field | Instance entry point `GameEntity` field — direct storage with no validation or notification. |

- Constructed as `public MapWeatherVisual(WeatherNode weatherNode)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: MapEntityVisual.
var mapWeatherVisual = new MapWeatherVisual(weatherNode);

// Lifecycle hooks this type declares:
//   public override CampaignVec2 InteractionPositionForPlayer
//   public override MapEntityVisual AttachedTo
//   public override string ToString()
//   public override bool OnMapClick(bool followModifierUsed)
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 8 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox.View/Map/Visuals/MapWeatherVisual.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MapEntityVisual](../MapEntityVisual/) — `SandBox.View.Map.Visuals`.
- [MapWeatherVisualManager](../MapWeatherVisualManager/) — `SandBox.View.Map.Managers`.

Section: [api/sandbox/](../) — the other types in this bucket.
