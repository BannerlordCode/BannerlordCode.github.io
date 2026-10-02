---
title: "NavigationCache"
description: "NavigationCache — class in TaleWorlds.CampaignSystem.Map.DistanceCache. 37 public members (0 static)."
---

<!-- v147-skeleton -->
# NavigationCache

**Namespace:** `TaleWorlds.CampaignSystem.Map.DistanceCache`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class NavigationCache<T> where T : ISettlementDataHolder`  
**Base:** `ISettlementDataHolder`  
**Source:** `TaleWorlds.CampaignSystem/Map/DistanceCache/NavigationCache.cs`

## Overview

`NavigationCache` owns a subsystem: it holds the live set of objects of one kind, keeps them in sync with the world, and hands out references to them. Subsystems are shared — a second instance means a second, divergent copy of the truth.

It extends ISettlementDataHolder, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

Read a manager as the single owner of a collection, not as a utility bag. Everything that mutates the collection goes through its methods, and everything else reads the collections it exposes.

Because the instance is shared and long-lived, do not stash per-campaign scratch data on it. Keep it on the campaign object, the party or the hero you are working on.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `NavigationCache`.
- **Instance members** (34): `MaximumDistanceBetweenTwoConnectedSettlements`, `FinalizeCacheInitialization`, `GetNeighbors`, `GetClosestSettlementToFaceIndex`, `GenerateCacheData`, `GetSettlementToSettlementDistanceWithLandRatio`, ….
- **Extension points** (15): `GetRealDistanceAndLandRatioBetweenSettlements`, `GetCacheElement`, `GetCacheElement`, `GetFaceRecordForPoint`, `GetNavMeshFaceCount`, `GetNavMeshFaceCenterPosition`, ….
- **Data and constants** (2): `AgentRadius`, `ExtraCostMultiplierForNeighborDetection`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetSceneXmlCrcValues` | method (abstract) | Abstract — a subclass must supply it. Takes 2 arguments: `out uint sceneXmlCrc`, `out uint sceneNavigationMeshCrc`. Read path: prefer it over reaching for the backing store. |
| `CheckBeingNeighbor` | method (abstract) | Abstract — a subclass must supply it. Takes 6 arguments: `List<T> settlementsToConsider`, `T settlement1`, `T settlement2`, `bool useGate1`, …. Returns `bool`. |
| `Deserialize` | method | Instance entry point. Takes 1 argument: `string path`. |
| `GenerateCacheData` | method | Instance entry point. Takes no arguments. |
| `GetAllRegisteredSettlements` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. Returns `List<T>`. Read path: prefer it over reaching for the backing store. |
| `GetCacheElement` | method (abstract) | Abstract — a subclass must supply it. Takes 1 argument: `string settlementId`. Returns `T`. Read path: prefer it over reaching for the backing store. |
| `GetCacheElement` | method (abstract) | Abstract — a subclass must supply it. Takes 2 arguments: `T settlement`, `bool isPortUsed`. Returns `NavigationCacheElement<T>`. Read path: prefer it over reaching for the backing store. |
| `GetClosestSettlementsToPositionInCache` | method (abstract) | Abstract — a subclass must supply it. Takes 2 arguments: `Vec2 checkPosition`, `List<T> settlements`. Returns `IEnumerable<T>`. Read path: prefer it over reaching for the backing store. |
| `GetClosestSettlementToFaceIndex` | method | Instance entry point. Takes 2 arguments: `int faceId`, `out bool isAtSea`. Returns `T`. Read path: prefer it over reaching for the backing store. |
| `GetExcludedFaceIds` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. Returns `int[]`. Read path: prefer it over reaching for the backing store. |
| `GetFaceRecordAtIndex` | method (abstract) | Abstract — a subclass must supply it. Takes 1 argument: `int faceIndex`. Returns `PathFaceRecord`. Read path: prefer it over reaching for the backing store. |
| `GetFaceRecordForPoint` | method (abstract) | Abstract — a subclass must supply it. Takes 2 arguments: `Vec2 position`, `out bool isOnRegion1`. Read path: prefer it over reaching for the backing store. |
| `GetNavMeshFaceCenterPosition` | method (abstract) | Abstract — a subclass must supply it. Takes 1 argument: `int faceIndex`. Returns `Vec2`. Read path: prefer it over reaching for the backing store. |
| `GetNavMeshFaceCount` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetNeighbors` | method | Instance entry point. Takes 1 argument: `T settlement`. Returns `MBReadOnlyList<T>`. Read path: prefer it over reaching for the backing store. |
| `GetRealDistanceAndLandRatioBetweenSettlements` | method (abstract) | Abstract — a subclass must supply it. Takes 3 arguments: `NavigationCacheElement<T> settlement1`, `NavigationCacheElement<T> settlement2`, `out float landRatio`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetRealPathDistanceFromPositionToSettlement` | method (abstract) | Abstract — a subclass must supply it. Takes 5 arguments: `Vec2 checkPosition`, `PathFaceRecord currentFaceRecord`, `float maxDistanceToLookForPathDetection`, `T currentSettlementToLook`, …. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetRegionSwitchCostTo0` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetRegionSwitchCostTo1` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetSettlementsDistanceCacheFileForCapability` | method | Instance entry point. Takes 2 arguments: `string moduleId`, `out string filePath`. Returns `bool`. Read path: prefer it over reaching for the backing store. |
| `MaximumDistanceBetweenTwoConnectedSettlements` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `Serialize` | method | Instance entry point. Takes 1 argument: `string path`. |
| `AddNeighbor` | method | Protected — for subclasses only. Takes 2 arguments: `T settlement1`, `T settlement2`. Adds to the collection or relation this type owns. |
| `CheckBeingNeighbor` | method | Protected — for subclasses only. Takes 3 arguments: `List<T> settlementsToConsider`, `T settlement1`, `T settlement2`. Returns `bool`. |

- Constructed as `protected NavigationCache(MobileParty.NavigationType navigationType)`.

13 further public members follow the same patterns.
## Usage Example

```csharp
// Reach the one live instance through the engine; do not construct a second copy.
var navigationCache = new NavigationCache(navigationType);
// Read the live state through navigationCache.MaximumDistanceBetweenTwoConnectedSettlements.
```

## Risks and Boundaries

- Never construct a manager yourself when the engine already owns one; the duplicate will drift from the live state.
- Do not mutate the collection while enumerating it — materialise a list first if a callback can add or remove entries.
- Most managers are only valid between campaign start and campaign end.
- 15 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/Map/DistanceCache/NavigationCache.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ISettlementDataHolder](../ISettlementDataHolder/) — `TaleWorlds.CampaignSystem.Map.DistanceCache`.
- [LinQuick](../../core-extra/LinQuick/) — `TaleWorlds.LinQuick`.
- [MobileParty](../MobileParty/) — `TaleWorlds.CampaignSystem.Party`.
- [NavigationCacheElement](../NavigationCacheElement/) — `TaleWorlds.CampaignSystem.Map.DistanceCache`.
- [ModuleHelper](../../modulemanager/ModuleHelper/) — `TaleWorlds.ModuleManager`.

Section: [api/campaign/](../) — the other types in this bucket.
