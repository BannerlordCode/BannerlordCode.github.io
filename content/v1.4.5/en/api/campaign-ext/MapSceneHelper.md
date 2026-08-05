---
title: "MapSceneHelper"
description: "The Sandbox helper that converts PartyNavigationModel terrain rules into the boolean region map consumed while loading MapScene."
---
# MapSceneHelper

**Namespace:** `SandBox.SandBoxHelpers`  
**Module:** `SandBox`  
**Type:** `public static class MapSceneHelper`  
**Base:** none  
**Source:** `Modules.SandBox/SandBox/Sandbox/SandBoxHelpers.cs`

## One-line responsibility

Builds the terrain-indexed land/region validity array that the concrete map scene passes to the native navigation mesh.

## Mental model

This is a pure conversion helper inside the Sandbox map-loading path. `MapScene.Load` receives the live [PartyNavigationModel](../campaign/PartyNavigationModel), calls `GetRegionMapping`, and passes the returned array to `Scene.SetNavMeshRegionMap`. The helper does not own navigation policy and does not alter the model; it translates every `TerrainType` enum value into `IsTerrainTypeValidForNavigationType(value, MobileParty.NavigationType.Default)`.

Use it when implementing a compatible map-scene loader that needs the same region map. Do not cache its result across a `PartyNavigationModel` replacement, and do not treat it as the API for deciding whether a particular party may move: ask the active model directly.

## Dependency graph

- Caller: [MapScene](./MapScene) during `Load`.
- Input policy: [PartyNavigationModel](../campaign/PartyNavigationModel).
- Input enum: [TerrainType](../core-extra/TerrainType).
- Runtime consumer: the native `Scene` navigation mesh, then [IMapScene](../campaign/IMapScene) and [NavigationHelper](../system/NavigationHelper).

## Public member

### `GetRegionMapping(PartyNavigationModel model)`

Returns a `bool[]` whose index is a `TerrainType` integer. The array length is one greater than the largest enum value. Each entry is filled by asking the supplied model whether that terrain is valid for `MobileParty.NavigationType.Default`. It has no side effect on the model; the caller owns the returned array.

```csharp
PartyNavigationModel navigationModel = Campaign.Current.Models.PartyNavigationModel;
bool[] regionMapping = SandBoxHelpers.MapSceneHelper.GetRegionMapping(navigationModel);
```

The normal game call is internal to `MapScene.Load`; a mod should usually query `Campaign.Current.MapSceneWrapper` instead of rebuilding the native map setup.

## Risks

- Passing `null` causes a null reference while the helper asks the model about each terrain.
- The result is not a persistent save value. Recompute it when the active model or map scene changes.
- Passing a model whose terrain rules do not match the loaded map can make native navigation disagree with campaign movement rules.

## Navigation

### ↑ Parent

- [Campaign extension index](./)
- [MapScene](./MapScene)

### ↔ Siblings and related types

- [PartyNavigationModel](../campaign/PartyNavigationModel)
- [IMapScene](../campaign/IMapScene)
- [NavigationHelper](../system/NavigationHelper)
