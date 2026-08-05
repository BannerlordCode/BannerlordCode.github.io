---
title: "MapScene"
description: "The 1.4.5 Sandbox implementation of IMapScene: a native-backed campaign world-map scene with terrain, navigation, atmosphere, weather, and cache data."
---
# MapScene

**Namespace:** `SandBox`  
**Module:** `SandBox`  
**Type:** `public class MapScene : IMapScene`  
**Base:** [IMapScene](../../campaign/IMapScene)  
**Source:** `Modules.SandBox/SandBox/Sandbox/MapScene.cs`

## One-line responsibility

Owns the loaded Sandbox world-map `Scene` and adapts its native terrain/navigation data to Campaign's `IMapScene` contract.

## Mental model

`MapScene` is the concrete runtime object behind `Campaign.Current.MapSceneWrapper`. Its constructor only creates managed caches and a reader/writer lock. `Load` creates the native `Scene`, agent-renderer controller, map assets, terrain size, atmosphere/weather data, and navigation face indexes. `Campaign.LoadMapScene` then reads borders and calls `AfterLoad`. At Campaign teardown, `Destroy` releases the native agent renderer and scene resources.

Most mod code should use the interface, because Campaign and navigation helpers can supply the correct active implementation. Cast to `MapScene` only for Sandbox-only members such as `Scene`, `SetSnowAndRainDataWithDimension`, `ValidateAgentVisualsReseted`, or `SetupWaterWake`. This class is a runtime resource, not a save object and not a place to mutate campaign movement rules; those rules belong to [PartyNavigationModel](../../campaign/PartyNavigationModel).

## Dependency graph

- Provider: [MapSceneCreator](../MapSceneCreator) returns this type through [IMapSceneCreator](../../campaign/IMapSceneCreator).
- Holder: [Campaign](../../campaign/Campaign) stores it as `IMapScene MapSceneWrapper`.
- Load inputs: [PartyNavigationModel](../../campaign/PartyNavigationModel), active module scene assets, [Campaign](../../campaign/Campaign), and native `MBMapScene` functions.
- Consumers: [NavigationHelper](../../system/NavigationHelper), map weather/visual managers, [MobileParty](../../campaign/MobileParty), [Settlement](../../campaign/Settlement), and navigation caches.
- Contract: [IMapScene](../../campaign/IMapScene) lists the campaign-facing lifecycle and queries.

## Lifecycle and native state

| Member | Purpose and timing |
|---|---|
| `Scene` | The native scene used by Sandbox map visuals and entity instantiation. It is valid only after `Load` and before `Destroy`. |
| `MapScene()` | Initializes `_sceneLevels`, caches, and a `ReaderWriterLockSlim`; it does not load a scene. |
| `Load()` | Creates `Scene`, agent-renderer state, reads `Main_map`, applies navigation regions from `MapSceneHelper`, loads atmosphere and terrain indexes, and initializes Campaign late-AI state. Call only from Campaign startup. |
| `AfterLoad()` | Reserved post-load hook; Campaign calls it after deriving map borders and distance limits. |
| `Destroy()` | Destructs the agent-renderer controller and clears it. Treat all native scene data as invalid afterward. |
| `SetSceneLevels(List<string>)` | Seeds upgrade-level names before `Load`; `GetSceneLevel` resolves their native masks lazily. |
| `SetSnowAndRainDataWithDimension(Texture, int)` | Copies weather texture data and sets the dynamic snow texture; called by Sandbox weather setup after the scene is loaded. |
| `ValidateAgentVisualsReseted()` | Validates agent visuals against the current scene controller during map-screen transitions. |
| `DisableUnwalkableNavigationMeshes()` | Applies the active navigation model's invalid terrain ids to the native scene; it is part of load setup. |
| `SetupWaterWake(float, float)` | Configures native water-wake rendering; call only while the scene and renderer are live. |

## Terrain, atmosphere, and map data

| Members | What they provide |
|---|---|
| `GetTerrainSize`, `GetMapBorders` | Loaded map dimensions and campaign boundary values. `Campaign` uses the latter to calculate map diagonal and path cost limits. |
| `GetAtmosphereStates`, `SetAtmosphereColorgrade` | Atmosphere probe data and the terrain color-grade hook. The default color-grade method is empty in 1.4.5. |
| `GetTerrainTypeAtPosition`, `GetFaceTerrainType`, `GetTerrainTypeName` | Terrain classification at a campaign position/face and its display name. Validate faces before querying. |
| `GetTerrainHeightAndNormal`, `GetHeightAtPoint`, `GetGroundNormal`, `GetFaceVertexZ` | Surface height/normals for visuals and map placement. |
| `GetEnvironmentTerrainTypes`, `GetEnvironmentTerrainTypesCount` | Samples nearby terrain for scene/weather models. |
| `GetMapPatchAtPosition` | Maps a position to a battle terrain patch and normalized coordinates. |
| `AddNewEntityToMapScene` | Instantiates an active-module entity into the map scene at a campaign position. |
| `GetSiegeCampFrames` | Finds frames under a fortification's campaign entity tagged `map_camp_area_1` or `map_camp_area_2`. |
| `GetWinterTimeFactor`, `GetSnowAmountAtPosition`, `GetRainAmountAtPosition`, `GetWindAtPosition` | Reads loaded seasonal and texture-backed weather data. Weather arrays must have been initialized first. |
| `GetSceneXmlCrc`, `GetSceneNavigationMeshCrc` | Identifies the loaded map assets for navigation-cache validation. |

## Navigation mesh operations

`GetFaceIndex`, `GetFaceAtIndex`, and `GetNumberOfNavigationMeshFaces` expose the current face set. `GetNavigationMeshCenterPosition` reads centers by face or index. `GetNearestFaceCenterForPosition`, `GetNearestFaceCenterForPositionWithPath`, and `GetAccessiblePointNearPosition` find usable positions. `GetPathBetweenAIFaces` fills a `NavigationPath`; `GetPathDistanceBetweenAIFaces` computes a bounded distance; `IsLineToPointClear` checks a direct segment. `GetLastPointOnNavigationMeshFromPositionToDestination` returns the last reachable point when moving from a starting face toward a destination, while `GetLastPositionOnNavMeshFaceForPointAndDirection` returns the last position along a direction constrained to a specified face. All path calls pass excluded face groups and land/sea region-switch costs through to the native scene.

```csharp
Campaign campaign = Campaign.Current;
if (campaign != null && campaign.MapSceneWrapper != null && MobileParty.MainParty != null)
{
    IMapScene mapScene = campaign.MapSceneWrapper;
    CampaignVec2 from = MobileParty.MainParty.Position;
    PathFaceRecord start = mapScene.GetFaceIndex(in from);
    if (start.IsValid())
    {
        CampaignVec2 target = mapScene.GetAccessiblePointNearPosition(in from, 10f);
        PathFaceRecord end = mapScene.GetFaceIndex(in target);
        NavigationPath path = new NavigationPath();
        bool found = end.IsValid() && mapScene.GetPathBetweenAIFaces(
            start, end, from.ToVec2(), target.ToVec2(), 0.3f, path, null, 1f, 0, 0);
    }
}
```

The interface call above is the supported read path. A Sandbox-only caller can obtain `Scene` after checking `Campaign.MapSceneWrapper is MapScene`, but should not keep that native handle beyond the current map-screen lifecycle.

## Crash and save risks

- `Scene`, `_snowAndRainData`, `_windFlowMapData`, and terrain index arrays are initialized in phases. Calling weather, terrain, path, or entity methods before the relevant phase can cause null/native failures.
- `GetFaceTerrainType` asserts on an invalid `PathFaceRecord`; path records and face indices become stale when the map scene or navigation mesh changes.
- `GetSceneLevel` caches native masks under a reader/writer lock and assumes `_scene` exists. Supply the level list before loading and do not call it after destruction.
- `AddNewEntityToMapScene` requires a valid active-module entity id. It creates a native object and is not a save-safe substitute for a campaign entity.
- `SetSnowAndRainDataWithDimension` assumes a valid texture and matching dimensions; calling it repeatedly or after teardown can corrupt visual state.
- Native `Scene` and renderer handles cannot be serialized. Reacquire `Campaign.Current.MapSceneWrapper` after load and let Campaign recreate the wrapper.
- The class is not the movement policy. Changing scene region data without matching `PartyNavigationModel` rules can make map AI, pathfinding, and save-loaded positions disagree.

## Navigation

### ↑ Parent

- [Campaign extension index](../)
- [IMapScene](../../campaign/IMapScene)

### ↔ Siblings and related types

- [MapSceneCreator](../MapSceneCreator)
- [IMapSceneCreator](../../campaign/IMapSceneCreator)
- [Campaign](../../campaign/Campaign)
- [PartyNavigationModel](../../campaign/PartyNavigationModel)
- [NavigationHelper](../../system/NavigationHelper)
- [Mission](../../mission/Mission)
