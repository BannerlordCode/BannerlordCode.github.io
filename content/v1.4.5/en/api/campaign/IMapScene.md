---
title: "IMapScene"
description: "The campaign map-scene contract for terrain queries, navigation meshes, borders, weather data, and map-scene lifecycle."
---
# IMapScene

**Namespace:** `TaleWorlds.CampaignSystem.Map`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public interface IMapScene`  
**Base:** none  
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Map/IMapScene.cs`

## One-line responsibility

Defines the campaign-facing boundary for reading and loading the world map scene without exposing the concrete Sandbox scene implementation.

## Mental model

`IMapScene` is a long-lived runtime service owned by the active [Campaign](../Campaign), not a save-data object and not a replacement for [PartyNavigationModel](../PartyNavigationModel). `Campaign.MapSceneWrapper` is the live holder. During campaign initialization, the registered [IMapSceneCreator](../IMapSceneCreator) creates a concrete wrapper; `Campaign.LoadMapScene` calls `SetSceneLevels`, `Load`, reads the borders, and then calls `AfterLoad`. Navigation helpers, map AI, weather, settlement visuals, and distance caches query this interface afterward.

Use it when code needs a terrain, navigation-mesh, border, path, weather, or CRC query. Use `PartyNavigationModel` when deciding whether a terrain is legal for a party; use `MapScene` only when Sandbox-specific engine access such as its `Scene` property is genuinely required. Do not construct or destroy the wrapper from an ordinary campaign tick, and do not retain it across campaign destruction or save-session replacement.

## Dependency graph

- Upstream lifecycle: [Campaign](../Campaign) owns `MapSceneWrapper` and invokes [IMapSceneCreator](../IMapSceneCreator).
- Concrete 1.4.5 implementation: [MapScene](../../campaign-ext/MapScene) is created by [MapSceneCreator](../../campaign-ext/MapSceneCreator).
- Rule dependency: [PartyNavigationModel](../PartyNavigationModel) supplies valid navigation terrain and is used by the concrete scene during `Load`.
- Consumers: [MobileParty](../MobileParty), [Settlement](../Settlement), [NavigationHelper](../../system/NavigationHelper), weather models, map visuals, and navigation caches.
- Adjacent runtime: [Mission](../../mission/Mission) owns battle scenes; this interface describes the campaign world-map scene, not a Mission scene.

## Lifecycle and ownership

| Member | Meaning and timing |
|---|---|
| `Load()` | Creates/loads the native map scene and initializes terrain, navigation, atmosphere, and cached map data. Called once during campaign map loading. |
| `AfterLoad()` | Finalizes the wrapper after `Campaign` has read borders and derived map dimensions. Treat it as an engine lifecycle callback. |
| `Destroy()` | Releases the native scene. No query is valid after this point. |

## Map and terrain queries

| Member | Use and boundary |
|---|---|
| `GetFaceIndex` | Converts a `CampaignVec2` into its navigation-mesh face; check `PathFaceRecord.IsValid()` before using the result. |
| `GetTerrainTypeAtPosition` / `GetFaceTerrainType` | Reads terrain at a position or face. These are queries, not movement permission checks. |
| `GetEnvironmentTerrainTypes` / `GetEnvironmentTerrainTypesCount` | Samples nearby terrain; the latter also returns the terrain at the origin. Weather and scene models use these samples. |
| `GetMapPatchAtPosition` | Returns the battle-scene patch and normalized coordinates for a campaign position. |
| `GetTerrainSize` | Returns the loaded map dimensions. It is not meaningful before `Load`. |
| `GetMapBorders` | Returns minimum position, maximum position, and maximum height used to derive campaign map limits. |
| `GetTerrainHeightAndNormal` / `GetHeightAtPoint` / `GetGroundNormal` | Reads height and surface orientation from the native scene. |
| `GetFaceVertexZ` | Reads the first vertex height of a valid navigation face. |
| `GetTerrainTypeName` | Converts the engine terrain enum to the concrete map terrain name. |

## Navigation queries

| Member | Use and boundary |
|---|---|
| `GetNearestFaceCenterForPosition` | Finds a nearby face center, optionally excluding terrain face groups. |
| `GetNearestFaceCenterForPositionWithPath` | Finds a reachable nearby center from an existing face with a maximum distance. |
| `GetAccessiblePointNearPosition` | Finds an accessible point near a campaign position. |
| `GetPathBetweenAIFaces` | Fills a `NavigationPath` between two valid faces, including land/sea region-switch costs. |
| `GetPathDistanceBetweenAIFaces` | Tests a path and returns its distance, bounded by `distanceLimit`. |
| `IsLineToPointClear` | Tests line-of-sight/path clearance from a valid face to a 2D destination. |
| `GetLastPointOnNavigationMeshFromPositionToDestination` | Clamps a movement ray to the last point still on the navigation mesh. |
| `GetLastPositionOnNavMeshFaceForPointAndDirection` | Returns the final position on a face along a direction. |
| `GetNavigationMeshCenterPosition(PathFaceRecord)` / `GetNavigationMeshCenterPosition(int)` | Reads a face center by record or index. |
| `GetFaceAtIndex` / `GetNumberOfNavigationMeshFaces` | Supports navigation-cache enumeration; indices are valid only for the current loaded scene and CRC. |

## Weather, atmosphere, and settlement support

- `GetWinterTimeFactor` reads the native scene's winter factor.
- `GetAtmosphereStates` and `SetAtmosphereColorgrade` expose atmosphere probes and terrain color-grade hooks.
- `GetSnowAmountAtPosition` and `GetRainAmountAtPosition` read the texture-backed weather values initialized by the concrete scene.
- `GetSceneLevel` and `SetSceneLevels` manage upgrade-level masks used by map entities. The list must be supplied before `Load`.
- `AddNewEntityToMapScene` instantiates a map entity at a `CampaignVec2`; the entity id must exist in an active module.
- `GetSiegeCampFrames` reads siege-camp frames for a fortification settlement.
- `GetSceneXmlCrc` and `GetSceneNavigationMeshCrc` identify the loaded scene for navigation-cache validation.

## Real acquisition example

The normal mod read path is the live wrapper already loaded by Campaign. It is safe for a map-aware callback after map initialization:

```csharp
Campaign campaign = Campaign.Current;
if (campaign != null && campaign.MapSceneWrapper != null && MobileParty.MainParty != null)
{
    IMapScene mapScene = campaign.MapSceneWrapper;
    CampaignVec2 position = MobileParty.MainParty.Position;
    PathFaceRecord face = mapScene.GetFaceIndex(in position);
    if (face.IsValid())
    {
        TerrainType terrain = mapScene.GetFaceTerrainType(face);
        Vec2 mapSize = mapScene.GetTerrainSize();
    }
}
```

## Crash and lifecycle risks

- Calling any query before `Campaign.LoadMapScene` finishes can dereference an uninitialized native `Scene`, weather arrays, or navigation data.
- A `PathFaceRecord` or navigation-cache entry belongs to the current scene and its CRC. Do not reuse it after a map reload, scene replacement, or a save-session transition.
- `Destroy` releases native resources. A cached `IMapScene`, `Scene`, `NavigationPath`, or map entity reference must not be used after Campaign teardown.
- `AddNewEntityToMapScene` requires a registered, loadable entity id and a loaded scene; invalid ids or wrong-phase calls can produce native failures.
- `GetFaceTerrainType`, path, height, and center methods assume valid face/index data. Validate `PathFaceRecord` and bounds before calling them.
- This interface has no save fields. Persisting native scene handles, face indices, CRCs, or `Scene` references in a behavior would make a save non-portable; recompute them after load instead.

## Navigation

### ↑ Parent

- [Campaign API index](./)
- [Campaign](../Campaign)

### ↔ Siblings and related types

- [IMapSceneCreator](../IMapSceneCreator)
- [MapScene](../../campaign-ext/MapScene)
- [MapSceneCreator](../../campaign-ext/MapSceneCreator)
- [PartyNavigationModel](../PartyNavigationModel)
- [NavigationHelper](../../system/NavigationHelper)
- [Mission](../../mission/Mission)
