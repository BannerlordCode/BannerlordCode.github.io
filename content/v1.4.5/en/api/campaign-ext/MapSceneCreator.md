---
title: "MapSceneCreator"
description: "The Sandbox IMapSceneCreator implementation that constructs the concrete MapScene used by Campaign's world map."
---
# MapSceneCreator

**Namespace:** `SandBox`  
**Module:** `SandBox`  
**Type:** `public class MapSceneCreator : IMapSceneCreator`  
**Base:** [IMapSceneCreator](../campaign/IMapSceneCreator)  
**Source:** `Modules.SandBox/SandBox/Sandbox/MapSceneCreator.cs`

## One-line responsibility

Provides the Sandbox concrete map-scene wrapper when Campaign initializes the strategic world map.

## Mental model

`MapSceneCreator` is a tiny adapter in the module startup chain. `SandBoxSubModule.OnGameInitializationFinished` assigns one to `Campaign.MapSceneCreator`; Campaign later invokes its explicit `IMapSceneCreator.CreateMapScene` implementation. That call returns a new [MapScene](./MapScene), but does not load it. Campaign owns the next steps: scene levels, `Load`, borders, derived map limits, and `AfterLoad`.

Use it as a reference for the default provider or replace the creator only when implementing a complete map-scene backend. For normal mod code, query the already loaded `Campaign.Current.MapSceneWrapper` through [IMapScene](../campaign/IMapScene); constructing `MapSceneCreator` yourself bypasses the Campaign lifecycle.

## Dependency graph

- Registered by `SandBoxSubModule` on [Campaign](../campaign/Campaign).
- Implements [IMapSceneCreator](../campaign/IMapSceneCreator).
- Creates [MapScene](./MapScene), which implements [IMapScene](../campaign/IMapScene).
- Its product is consumed by [PartyNavigationModel](../campaign/PartyNavigationModel), [NavigationHelper](../system/NavigationHelper), map weather, and map visuals.

## Public entry

### `CreateMapScene()`

The method is an explicit interface implementation, so the useful call is through an `IMapSceneCreator` reference. It returns `(IMapScene)new MapScene()`. No scene file is read at this point; the caller must continue with the Campaign lifecycle.

## Real acquisition path

```csharp
Campaign campaign = Campaign.Current;
if (campaign != null && campaign.MapSceneCreator != null && campaign.MapSceneWrapper != null)
{
    IMapSceneCreator creator = campaign.MapSceneCreator;
    bool usingSandboxProvider = creator is MapSceneCreator;
    IMapScene mapScene = campaign.MapSceneWrapper;
    Vec2 terrainSize = mapScene.GetTerrainSize();
}
```

This inspects the creator actually registered by Sandbox and reads the already-owned wrapper. Do not call `creator.CreateMapScene()` here: Campaign must own the returned instance and run its full load sequence.

## Risks

- Calling the factory manually creates an unowned wrapper whose native scene is not loaded or destroyed by Campaign.
- Changing `Campaign.MapSceneCreator` after `MapSceneWrapper` exists has no effect on the live map.
- A custom replacement must implement all `IMapScene` lifecycle and query methods; returning a shell breaks navigation and weather consumers.

## Navigation

### ↑ Parent

- [Campaign API index](../campaign/)
- [IMapSceneCreator](../campaign/IMapSceneCreator)

### ↔ Siblings and related types

- [MapScene](./MapScene)
- [IMapScene](../campaign/IMapScene)
- [Campaign](../campaign/Campaign)
- [PartyNavigationModel](../campaign/PartyNavigationModel)
