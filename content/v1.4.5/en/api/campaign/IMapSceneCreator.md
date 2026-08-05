---
title: "IMapSceneCreator"
description: "The campaign startup factory contract that supplies the IMapScene implementation used by Campaign.MapSceneWrapper."
---
# IMapSceneCreator

**Namespace:** `TaleWorlds.CampaignSystem.Map`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public interface IMapSceneCreator`  
**Base:** none  
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Map/IMapSceneCreator.cs`

## One-line responsibility

Creates the campaign's map-scene wrapper at the boundary between Campaign startup and a module's concrete map implementation.

## Mental model

This is a startup dependency, not a general-purpose factory to call every time a mod wants terrain data. `Campaign.MapSceneCreator` holds the registered creator. In 1.4.5, `SandBoxSubModule.OnGameInitializationFinished` installs `new MapSceneCreator()`; later `Campaign.LoadMapScene` calls `CreateMapScene`, configures scene levels, calls `Load`, reads borders, and calls `AfterLoad`. The resulting [IMapScene](../IMapScene) is exposed as `Campaign.MapSceneWrapper` and shared by navigation, weather, map AI, and visuals.

Use this contract when supplying a full custom map-scene implementation before Campaign map loading. For ordinary reads, use `Campaign.Current.MapSceneWrapper`. Do not call `CreateMapScene` from a tick or create a second wrapper beside the Campaign-owned one: two native map scenes would disagree about faces, borders, weather, and cache CRCs.

## Dependency graph

- Holder: [Campaign](../Campaign) exposes `MapSceneCreator` and `MapSceneWrapper`.
- Concrete provider: [MapSceneCreator](../../campaign-ext/MapSceneCreator) returns [MapScene](../../campaign-ext/MapScene).
- Consumer lifecycle: `Campaign.LoadMapScene` owns the `CreateMapScene -> SetSceneLevels -> Load -> GetMapBorders -> AfterLoad` sequence.
- Downstream readers: [IMapScene](../IMapScene), [PartyNavigationModel](../PartyNavigationModel), [MobileParty](../MobileParty), map weather and navigation caches.

## Public member

### `CreateMapScene()`

`IMapScene CreateMapScene()` returns a new wrapper. The method itself does not load the native map; Campaign immediately performs the rest of the lifecycle. A custom implementation must honor the complete `IMapScene` contract and keep its scene, face data, weather data, and CRCs internally consistent.

## Real registration example

The engine's Sandbox registration is the concrete acquisition path. A module that intentionally replaces the provider must do so before Campaign reaches `LoadMapScene`, and must preserve the lifecycle contract:

```csharp
public sealed class CustomMapSceneCreator : IMapSceneCreator
{
    public IMapScene CreateMapScene()
    {
        return new CustomMapScene();
    }
}

public class MapModule : MBSubModuleBase
{
    protected override void OnGameInitializationFinished(Game game)
    {
        Campaign campaign = game.GameType as Campaign;
        if (campaign != null)
        {
            campaign.MapSceneCreator = new CustomMapSceneCreator();
        }
    }
}
```

`CustomMapScene` must be a real `IMapScene` implementation. Replacing the creator after `MapSceneWrapper` exists does not replace the active scene.

## Crash and save risks

- A creator returning `null`, a partial implementation, or a wrapper that does not initialize native resources will fail during `Campaign.LoadMapScene`.
- The creator is used during startup; changing it after the wrapper has been created only changes a future factory call and leaves the live Campaign using the old wrapper.
- Do not save the creator, wrapper, native `Scene`, or face-cache objects. They are runtime resources and must be recreated after loading a save.
- `MapSceneWrapper` consumers assume one shared scene and matching XML/navigation CRCs. Returning a scene built from different assets can invalidate navigation caches and map behavior.

## Navigation

### ↑ Parent

- [Campaign API index](../)
- [Campaign](../Campaign)

### ↔ Siblings and related types

- [IMapScene](../IMapScene)
- [MapSceneCreator](../../campaign-ext/MapSceneCreator)
- [MapScene](../../campaign-ext/MapScene)
- [MBSubModuleBase](../../core/MBSubModuleBase)
