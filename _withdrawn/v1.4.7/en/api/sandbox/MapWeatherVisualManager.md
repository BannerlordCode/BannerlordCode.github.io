---
title: "MapWeatherVisualManager"
description: "MapWeatherVisualManager — class in SandBox.View.Map.Managers. 14 public members (1 static)."
---

<!-- v147-skeleton -->
# MapWeatherVisualManager

**Namespace:** `SandBox.View.Map.Managers`  
**Module:** `SandBox.View`  
**Type:** `public class MapWeatherVisualManager : EntityVisualManagerBase<WeatherNode>`  
**Base:** `EntityVisualManagerBase`  
**Source:** `SandBox.View/Map/Managers/MapWeatherVisualManager.cs`

## Overview

`MapWeatherVisualManager` owns a subsystem: it holds the live set of objects of one kind, keeps them in sync with the world, and hands out references to them. Subsystems are shared — a second instance means a second, divergent copy of the truth.

It extends EntityVisualManagerBase, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

Read a manager as the single owner of a collection, not as a utility bag. Everything that mutates the collection goes through its methods, and everything else reads the collections it exposes.

Because the instance is shared and long-lived, do not stash per-campaign scratch data on it. Keep it on the campaign object, the party or the hero you are working on.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `MapWeatherVisualManager`.
- **Static entry points** (1): `Current`.
- **Instance members** (10): `Priority`, `OnVisualTick`, `SetRainData`, `SetCloudData`, `OnInitialize`, `GetRainPrefabFromPool`, ….
- **Extension points** (4): `Priority`, `OnVisualTick`, `OnInitialize`, `GetVisualOfEntity`.
- **Data and constants** (2): `DefaultCloudHeight`, `OpenSeaStormCloudHeight`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Current` | property (static) | Static entry point `MapWeatherVisualManager` property. Read it for current state; a declared setter writes that state in place. |
| `GetVisualOfEntity` | method (override) | Overrides the base member. Takes 1 argument: `WeatherNode entity`. Returns `MapEntityVisual<WeatherNode>`. Read path: prefer it over reaching for the backing store. |
| `OnVisualTick` | method (override) | Overrides the base member. Takes 3 arguments: `MapScreen screen`, `float realDt`, `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `Priority` | property (override) | Overrides the base member `int` property. Read it for current state; a declared setter writes that state in place. |
| `OnInitialize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `GetBlizzardPrefabFromPool` | method | Instance entry point. Takes no arguments. Returns `GameEntity`. Read path: prefer it over reaching for the backing store. |
| `GetRainPrefabFromPool` | method | Instance entry point. Takes no arguments. Returns `GameEntity`. Read path: prefer it over reaching for the backing store. |
| `ReleaseBlizzardPrefab` | method | Instance entry point. Takes 1 argument: `GameEntity prefab`. |
| `ReleaseRainPrefab` | method | Instance entry point. Takes 1 argument: `GameEntity prefab`. |
| `SetCloudData` | method | Instance entry point. Takes 2 arguments: `int dataIndex`, `byte value`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetRainData` | method | Instance entry point. Takes 2 arguments: `int dataIndex`, `byte value`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `DefaultCloudHeight` | const | Instance entry point. Takes no arguments. Returns `int`. |
| `OpenSeaStormCloudHeight` | const | Instance entry point. Takes no arguments. Returns `int`. |
| `MapWeatherVisualManager` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public MapWeatherVisualManager()`.

## Usage Example

```csharp
// Reach the one live instance through the engine; do not construct a second copy.
var mapWeatherVisualManager = MapWeatherVisualManager.Current;
// Read the live state through mapWeatherVisualManager.Priority.
```

## Risks and Boundaries

- Never construct a manager yourself when the engine already owns one; the duplicate will drift from the live state.
- Do not mutate the collection while enumerating it — materialise a list first if a callback can add or remove entries.
- Most managers are only valid between campaign start and campaign end.
- 4 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox.View/Map/Managers/MapWeatherVisualManager.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [EntityVisualManagerBase](../EntityVisualManagerBase/) — `SandBox.View.Map.Managers`.
- [SandBoxViewSubModule](../SandBoxViewSubModule/) — `SandBox.View`.
- [MapWeatherVisual](../MapWeatherVisual/) — `SandBox.View.Map.Visuals`.
- [MapScreen](../MapScreen/) — `SandBox.View.Map`.
- [IMapScene](../../campaign/IMapScene/) — `TaleWorlds.CampaignSystem.Map`.
- [MapEntityVisual](../MapEntityVisual/) — `SandBox.View.Map.Visuals`.

Section: [api/sandbox/](../) — the other types in this bucket.
