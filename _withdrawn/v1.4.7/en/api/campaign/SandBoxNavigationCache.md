---
title: "SandBoxNavigationCache"
description: "SandBoxNavigationCache — class in TaleWorlds.CampaignSystem.Map.DistanceCache. 17 public members (0 static)."
---

<!-- v147-skeleton -->
# SandBoxNavigationCache

**Namespace:** `TaleWorlds.CampaignSystem.Map.DistanceCache`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class SandBoxNavigationCache : NavigationCache<Settlement>, MapDistanceModel.INavigationCache`  
**Base:** `NavigationCache`  
**Source:** `TaleWorlds.CampaignSystem/Map/DistanceCache/SandBoxNavigationCache.cs`

## Overview

`SandBoxNavigationCache` owns a subsystem: it holds the live set of objects of one kind, keeps them in sync with the world, and hands out references to them. Subsystems are shared — a second instance means a second, divergent copy of the truth.

It extends NavigationCache, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Read a manager as the single owner of a collection, not as a utility bag. Everything that mutates the collection goes through its methods, and everything else reads the collections it exposes.

Because the instance is shared and long-lived, do not stash per-campaign scratch data on it. Keep it on the campaign object, the party or the hero you are working on.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `SandBoxNavigationCache`.
- **Instance members** (16): `GetCacheElement`, `GetCacheElement`, `GetSceneXmlCrcValues`, `GetNavMeshFaceCount`, `GetNavMeshFaceCenterPosition`, `GetFaceRecordAtIndex`, ….
- **Extension points** (15): `GetCacheElement`, `GetCacheElement`, `GetSceneXmlCrcValues`, `GetNavMeshFaceCount`, `GetNavMeshFaceCenterPosition`, `GetFaceRecordAtIndex`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetSceneXmlCrcValues` | method (override) | Overrides the base member. Takes 2 arguments: `out uint sceneXmlCrc`, `out uint sceneNavigationMeshCrc`. Read path: prefer it over reaching for the backing store. |
| `CheckBeingNeighbor` | method (override) | Overrides the base member. Takes 6 arguments: `List<Settlement> settlementsToConsider`, `Settlement settlement1`, `Settlement settlement2`, `bool useGate1`, …. Returns `bool`. |
| `GetAllRegisteredSettlements` | method (override) | Overrides the base member. Takes no arguments. Returns `List<Settlement>`. Read path: prefer it over reaching for the backing store. |
| `GetCacheElement` | method (override) | Overrides the base member. Takes 1 argument: `string settlementId`. Returns `Settlement`. Read path: prefer it over reaching for the backing store. |
| `GetCacheElement` | method (override) | Overrides the base member. Takes 2 arguments: `Settlement settlement`, `bool isPortUsed`. Returns `NavigationCacheElement<Settlement>`. Read path: prefer it over reaching for the backing store. |
| `GetClosestSettlementsToPositionInCache` | method (override) | Overrides the base member. Takes 2 arguments: `Vec2 checkPosition`, `List<Settlement> settlements`. Returns `IEnumerable<Settlement>`. Read path: prefer it over reaching for the backing store. |
| `GetExcludedFaceIds` | method (override) | Overrides the base member. Takes no arguments. Returns `int[]`. Read path: prefer it over reaching for the backing store. |
| `GetFaceRecordAtIndex` | method (override) | Overrides the base member. Takes 1 argument: `int faceIndex`. Returns `PathFaceRecord`. Read path: prefer it over reaching for the backing store. |
| `GetFaceRecordForPoint` | method (override) | Overrides the base member. Takes 2 arguments: `Vec2 position`, `out bool isOnRegion1`. Read path: prefer it over reaching for the backing store. |
| `GetNavMeshFaceCenterPosition` | method (override) | Overrides the base member. Takes 1 argument: `int faceIndex`. Returns `Vec2`. Read path: prefer it over reaching for the backing store. |
| `GetNavMeshFaceCount` | method (override) | Overrides the base member. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetRealDistanceAndLandRatioBetweenSettlements` | method (override) | Overrides the base member. Takes 3 arguments: `NavigationCacheElement<Settlement> settlement1`, `NavigationCacheElement<Settlement> settlement2`, `out float landRatio`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetRealPathDistanceFromPositionToSettlement` | method (override) | Overrides the base member. Takes 5 arguments: `Vec2 checkPosition`, `PathFaceRecord currentFaceRecord`, `float maxDistanceToLookForPathDetection`, `Settlement currentSettlementToLook`, …. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetRegionSwitchCostTo0` | method (override) | Overrides the base member. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetRegionSwitchCostTo1` | method (override) | Overrides the base member. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `FinalizeInitialization` | method | Instance entry point. Takes no arguments. |
| `SandBoxNavigationCache` | ctor | Instance entry point. Takes 1 argument: `MobileParty.NavigationType navigationType`. Returns ``. |

- Constructed as `public SandBoxNavigationCache(MobileParty.NavigationType navigationType)`.

## Usage Example

```csharp
// Reach the one live instance through the engine; do not construct a second copy.
var sandBoxNavigationCache = new SandBoxNavigationCache(navigationType);
```

## Risks and Boundaries

- Never construct a manager yourself when the engine already owns one; the duplicate will drift from the live state.
- Do not mutate the collection while enumerating it — materialise a list first if a callback can add or remove entries.
- Most managers are only valid between campaign start and campaign end.
- 15 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/Map/DistanceCache/SandBoxNavigationCache.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [NavigationCache](../NavigationCache/) — `TaleWorlds.CampaignSystem.Map.DistanceCache`.
- [IMapScene](../IMapScene/) — `TaleWorlds.CampaignSystem.Map`.
- [MobileParty](../MobileParty/) — `TaleWorlds.CampaignSystem.Party`.
- [NavigationCacheElement](../NavigationCacheElement/) — `TaleWorlds.CampaignSystem.Map.DistanceCache`.

Section: [api/campaign/](../) — the other types in this bucket.
