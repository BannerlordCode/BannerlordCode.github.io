---
title: "NavigationHelper"
description: "Static campaign-map facade that combines terrain rules and nav-mesh queries into validity checks, reachable-point sampling, land/sea transitions, and main-party interaction data."
---
# NavigationHelper

**Namespace:** `Helpers`
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class NavigationHelper`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/Helpers/NavigationHelper.cs`

## One-line responsibility

It does not move parties or save navigation state; it combines the current campaign's `PartyNavigationModel` rules with `MapSceneWrapper` queries to answer whether a point is navigable, where a reachable point may be, and how a land/sea transition should be represented.

## Mental model

Treat `NavigationHelper` as a static **query and sampling facade** for the campaign map, not as an injectable navigation service. It has no instance state or lifecycle. Every public entry reads `Campaign.Current`:

- `IsPositionValidForNavigationType` and `CanPlayerNavigateToPosition` send a `CampaignVec2` or navigation face to the current [`PartyNavigationModel`](../../campaign/PartyNavigationModel). The former checks terrain validity; the latter asks whether the player can navigate to a position and returns the selected navigation type.
- `GetClosestNavMeshFaceCenterPositionForPosition`, `FindPointAroundPosition`, `FindReachablePointAroundPosition`, and `FindPointInsideArea` repair or sample map positions. They do not place a party at the returned point.
- The two transition factories return [`EmbarkDisembarkData`](../EmbarkDisembarkData), leaving [`MapState`](../../campaign/MapState) and [`MobileParty`](../../campaign/MobileParty) to run the actual land/sea state machine.
- `GetInteractionDataForMainParty` only chooses a port or gate position and reports navigation capability. It does not open a settlement menu or execute a settlement Action.

Call it after the campaign and map scene are initialized. The wrong mental model is “teleport API” or “random API that always succeeds”: the sampling methods try at most 250 candidates and may return the center or `CampaignVec2.Invalid`; the caller remains responsible for any world-state mutation.

## Dependencies and call flow

- **Runtime inputs:** map-aware methods access `Campaign.Current.MapSceneWrapper`; terrain validity, invalid-terrain arrays, player navigation capability, and the land/sea threshold come from `Campaign.Current.Models.PartyNavigationModel`. Area path checks also use land/sea region-switch costs from `Campaign.Current.Models.MapDistanceModel`.
- **Position contract:** most inputs and outputs are [`CampaignVec2`](../../campaign/CampaignVec2), carrying coordinates, a navigation face, and `IsOnLand`; the `PathFaceRecord` overload only queries terrain after the face is valid.
- **Direct consumers:** [`MapState`](../../campaign/MapState) uses `CanPlayerNavigateToPosition` before setting main-party movement; [`MobileParty`](../../campaign/MobileParty) uses validity and sampling during movement, map changes, and land/sea transitions; [`Army`](../../campaign/Army) and [`MapEvent`](../../campaign/MapEvent) use reachable points to repair party positions.
- **Transition extension:** [`EmbarkDisembarkData`](../EmbarkDisembarkData) is the nested result type defined inside `NavigationHelper`, not a second state machine. Its consumers decide when to start, cancel, or finish a transition.
- **Save boundary:** the helper has no saveable state. Returned points are transient results of the current mesh and model rules; changing a `MobileParty`, `MapEvent`, or settlement must follow that object's lifecycle rather than treating the helper as persistence.

## Validity and player navigation

### `IsPositionValidForNavigationType`

```csharp
public static bool IsPositionValidForNavigationType(
    CampaignVec2 vec2,
    MobileParty.NavigationType navigationType);

public static bool IsPositionValidForNavigationType(
    PathFaceRecord face,
    MobileParty.NavigationType navigationType);
```

The `CampaignVec2` overload first checks `vec2.IsValid()` and then delegates to the face overload. The face overload reads the map `TerrainType` and delegates to `PartyNavigationModel.IsTerrainTypeValidForNavigationType`. It answers only whether the position is valid for the requested navigation type; it does not test distance, a complete path, or whether the player can currently start moving.

This is the base query used by position-repair flows in `MobilePartyHelper`, `Army`, `MapEvent`, and character creation. They check an old position first, then use `GetClosestNavMeshFaceCenterPositionForPosition` or `FindReachablePointAroundPosition` to find a replacement. An invalid `CampaignVec2` or invalid face returns `false` without a terrain lookup.

### `CanPlayerNavigateToPosition`

```csharp
public static bool CanPlayerNavigateToPosition(
    CampaignVec2 vec2,
    out MobileParty.NavigationType navigationType);
```

This is a thin wrapper over `Campaign.Current.Models.PartyNavigationModel.CanPlayerNavigateToPosition`. It returns the model result and the selected navigation type through `out`; it does not write `MobileParty.MainParty`'s move target. [`MapState.ProcessTravel`](../../campaign/MapState) calls it and then, only on success, passes the target to `MainParty.SetMoveGoToPoint`.

### `GetClosestNavMeshFaceCenterPositionForPosition`

```csharp
public static CampaignVec2 GetClosestNavMeshFaceCenterPositionForPosition(
    CampaignVec2 vec2,
    int[] excludedFaceIds);
```

It passes the position and excluded-face array to `MapSceneWrapper.GetNearestFaceCenterForPosition` and returns the nearest navigation-face center. `excludedFaceIds` is commonly obtained from `PartyNavigationModel.GetInvalidTerrainTypesForNavigationType`; it is an array, not a single face ID. The method finds geometry only. It does not guarantee that the returned center suits the party, has a path to a target, or crosses a land/sea boundary correctly.

## Land/sea transitions

### `GetEmbarkDisembarkDataForTick`

```csharp
public static EmbarkDisembarkData GetEmbarkDisembarkDataForTick(
    CampaignVec2 position,
    Vec2 direction);
```

The implementation finds the navigation-mesh edge in the movement direction, then builds transition endpoints using `PartyNavigationModel.GetEmbarkDisembarkThresholdDistance()`. If the end point is invalid it returns `EmbarkDisembarkData.Invalid`; if only the start is invalid, it uses the input position as the start. This version serves ordinary party movement ticks and leaves both dead-zone flags `false`.

### `GetEmbarkAndDisembarkDataForPlayer`

```csharp
public static EmbarkDisembarkData GetEmbarkAndDisembarkDataForPlayer(
    CampaignVec2 position,
    Vec2 direction,
    CampaignVec2 moveTargetPointOfTheParty,
    bool isMoveTargetOnLand);
```

It starts with the tick calculation. If both transition sides initially resolve to the same navigable category, it recalculates from the navigation-mesh center at the player's target. It then compares the target's distance to the edge with the transition threshold and sets `IsTargetingTheDeadZone` and `IsTargetingOwnSideOfTheDeadZone`. `MapState.ProcessTravel` uses those flags to replace an ambiguous click with an explicit start or end point; do not change the returned booleans to force an embark.

Both methods return the nested [`EmbarkDisembarkData`](../EmbarkDisembarkData). Check `IsValidTransition` before reading its positions; the invalid sentinel contains invalid `CampaignVec2` values that must not be sent to another navigation query.

## Random points and reachable paths

### `FindPointAroundPosition`

```csharp
public static CampaignVec2 FindPointAroundPosition(
    CampaignVec2 centerPosition,
    MobileParty.NavigationType navigationCapability,
    float maxDistance,
    float minDistance = 0f,
    bool requirePath = true,
    bool useUniformDistribution = false);
```

It tries up to 250 random points in a circle around the center. The search radius is clamped to the map borders; a candidate needs a valid navigation face, a path check through `MapSceneWrapper.GetPathDistanceBetweenAIFaces` when `requirePath` is `true`, and a positive `IsPositionValidForNavigationType` result. `useUniformDistribution` changes how the radius is sampled.

The failure behavior matters: when `maxDistance <= 0` or no candidate succeeds in 250 attempts, the method returns the original `centerPosition`. A non-`Invalid` result therefore does not prove that a new point was found, and `requirePath = false` does not prove a path exists.

### `FindReachablePointAroundPosition`

There are two entries:

```csharp
public static CampaignVec2 FindReachablePointAroundPosition(
    CampaignVec2 center,
    int[] excludedFaceIds,
    float maxDistance,
    float minDistance = 0f,
    bool useUniformDistribution = false);

public static CampaignVec2 FindReachablePointAroundPosition(
    CampaignVec2 center,
    MobileParty.NavigationType navigationCapability,
    float maxDistance,
    float minDistance = 0f,
    bool useUniformDistribution = false);
```

The navigation-type overload obtains invalid terrain IDs from `PartyNavigationModel` and delegates to the array overload. The array overload requires a valid candidate face and a successful `GetPathDistanceBetweenAIFaces` check; it returns the original center when the radius is non-positive or no candidate succeeds. It is the common entry used when parties spawn, repair positions after a map change, relocate for map events, or regroup an army.

### `FindPointInsideArea`

The simple overload samples a rectangle up to 250 times:

```csharp
public static CampaignVec2 FindPointInsideArea(
    Vec2 minBorder,
    Vec2 maxBorder,
    MobileParty.NavigationType navigationCapability);
```

The source creates each candidate with `isOnLand: true`, then checks the requested navigation type. It is therefore suitable for land-rectangle sampling; a `NavigationType.Naval` argument does not turn it into a sea sampler. When no valid point is found it returns `CampaignVec2.Invalid`.

The center-based overload adds distance and optional path constraints:

```csharp
public static CampaignVec2 FindPointInsideArea(
    Vec2 minBorders,
    Vec2 maxBorders,
    CampaignVec2 center,
    MobileParty.NavigationType navigationCapability,
    float maxDistance,
    float minDistance = 0f,
    bool requirePathFromCenter = false);
```

It normalizes the two rectangle axes, limits `maxDistance` to the farthest corner, and samples around the center. A candidate must pass navigation validity and strict border checks. With `requirePathFromCenter == true`, it also checks the path using the navigation type and region-switch costs. If 250 attempts fail, the source fires `Debug.FailedAssert` and falls back to the simple rectangle overload; callers must still check the returned point.

### `IsPointInsideBorders`

```csharp
public static bool IsPointInsideBorders(
    Vec2 point,
    Vec2 minBorders,
    Vec2 maxBorders);
```

All four comparisons are strict. A point exactly on a minimum or maximum edge returns `false`. This method checks only a 2D rectangle; it does not validate a face, terrain, path, or the global map bounds, so it is normally combined with the navigation checks used by `FindPointInsideArea`.

## Main-party settlement interaction

### `GetInteractionDataForMainParty`

```csharp
public static void GetInteractionDataForMainParty(
    Settlement settlement,
    out bool canNavigate,
    out MobileParty.NavigationType bestNavigationType,
    out bool isTargetingPort);
```

When the main party is at sea and the settlement has a port, it selects `settlement.PortPosition` and sets `isTargetingPort` to `true`. Otherwise it selects `settlement.GatePosition` and sets the flag to `false`. It then calls `CanPlayerNavigateToPosition` to fill `canNavigate` and `bestNavigationType`. It does not null-check the settlement or enter it; the caller must provide an initialized settlement from the current campaign.

## Real example: inspect the main party target

This uses the live `Campaign.Current`, `MobileParty.MainParty`, and `MoveTargetPoint` and only queries navigation. It does not bypass `MapState.ProcessTravel` to write movement state.

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Helpers;
using TaleWorlds.CampaignSystem.Party;

Campaign campaign = Campaign.Current;
MobileParty party = MobileParty.MainParty;
CampaignVec2 target = party.MoveTargetPoint;

if (campaign != null && target.IsValid() &&
    NavigationHelper.CanPlayerNavigateToPosition(
        target, out MobileParty.NavigationType navigationType))
{
    MobileParty.NavigationType selectedType = navigationType;
    CampaignVec2 inspectedTarget = target;
}
```

If the intent is to move the player, pass the target through [`MapState.ProcessTravel`](../../campaign/MapState) instead of changing `MoveTargetPoint` after a successful helper query.

## Real example: find a reachable point for the current party

Game spawn, map-change, and event-repair paths start with a real `MobileParty.Position` or settlement gate and let the helper sample; the caller still decides how to use the point.

```csharp
using TaleWorlds.CampaignSystem.Helpers;
using TaleWorlds.CampaignSystem.Party;

MobileParty party = MobileParty.MainParty;
CampaignVec2 candidate = NavigationHelper.FindReachablePointAroundPosition(
    party.Position,
    party.NavigationCapability,
    8f,
    1f);

if (candidate.IsValid())
{
    float distanceFromParty = candidate.Distance(party.Position);
}
```

The example does not write `candidate` directly to `party.Position`: teleport, map-event relocation, and party initialization each have lifecycle constraints, so their established caller should own the write.

## Do not use it this way

- Do not call these methods during module loading before `Campaign.Current`, `MapSceneWrapper`, or `PartyNavigationModel` exists; the static facade does not wait for map initialization.
- Do not treat `IsPositionValidForNavigationType` as a path query or `CanPlayerNavigateToPosition` as a method that sets a move target.
- Do not ignore `CampaignVec2.Invalid`, center fallback, or the 250-attempt limit; every random entry allows “no new point found.”
- Do not use the simple `FindPointInsideArea` overload as a sea sampler; its source constructs candidates with the land-side flag set.
- Do not cache samples across saves, map scenes, or model replacements. Results depend on the current mesh, terrain rules, random source, and region-switch costs.
- Do not treat `GetInteractionDataForMainParty` as a settlement-entry API; it chooses a port or gate and computes navigation capability, while the settlement state and Action own entry.

## Risks and version boundary

The main risk is mistaking a query result for a state mutation. Passing invalid geometry into a later face or path query can fail, treating sampling failure as a valid coordinate can place a party or map event incorrectly, and writing a party position directly can skip event, attached-party, or land/sea-transition state. Check `IsValid()` or the relevant boolean first, then let the lifecycle-owning object perform the final write.

All public entries depend on the v1.4.5 `Campaign.Current`, map scene, and model implementations. Replacing `PartyNavigationModel` changes terrain validity, player navigation types, invalid-terrain arrays, and the land/sea threshold; replacing `MapDistanceModel` changes region-switch costs used by path sampling. This page describes v1.4.5 `NavigationHelper.cs`, not stable random results or fixed boundary distances across versions or model replacements.

## ↑ Parent navigation

- [System API index](../)
- [EmbarkDisembarkData](../EmbarkDisembarkData): the data contract returned by this class's land/sea factories.

## ↔ Siblings and related types

- [MobilePartyHelper](../MobilePartyHelper): party helper flows that use validity and reachable-point queries.
- [CampaignVec2](../../campaign/CampaignVec2): navigation position, face, and land/sea side.
- [PartyNavigationModel](../../campaign/PartyNavigationModel): terrain, navigation capability, and transition rules.
- [MobileParty](../../campaign/MobileParty): movement, transitions, spawning, and position state.
- [MapState](../../campaign/MapState): final movement entry for a player map target.
- [Campaign](../../campaign/Campaign): provider of the live map scene and model set.
- Chinese/English: [NavigationHelper](../../../../zh/api/system/NavigationHelper)
