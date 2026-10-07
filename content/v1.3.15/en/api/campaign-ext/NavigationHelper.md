---
title: "NavigationHelper"
description: "Auto-generated class reference for NavigationHelper."
---
# NavigationHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class NavigationHelper`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Helpers/NavigationHelper.cs`

## Overview

`NavigationHelper` is the campaign-map geometry toolbox, and it lives in the global `Helpers` namespace (`NavigationHelper.cs:8`), not under `TaleWorlds.*` — a mod that does not reference the `Helpers` namespace will not see it in IntelliSense. It is `public static class NavigationHelper` (`NavigationHelper.cs:11`) with fourteen public statics, two private helpers, and one nested type.

The public surface splits into three jobs. *Validation*: `IsPositionValidForNavigationType` in two overloads (`NavigationHelper.cs:14`, `NavigationHelper.cs:20`) and `IsPointInsideBorders` (`NavigationHelper.cs:232`) answer yes/no questions about a `CampaignVec2`. *Projection*: `CanPlayerNavigateToPosition` (`NavigationHelper.cs:32`) and `GetClosestNavMeshFaceCenterPositionForPosition` (`NavigationHelper.cs:38`) map a requested position onto something reachable. *Search*: `FindPointAroundPosition` (`NavigationHelper.cs:137`), the two `FindReachablePointAroundPosition` overloads (`NavigationHelper.cs:174`, `NavigationHelper.cs:200`) and the two `FindPointInsideArea` overloads (`NavigationHelper.cs:207`, `NavigationHelper.cs:238`) hunt for a legal map position by rejection sampling.

The embark half is separate. `GetEmbarkDisembarkDataForTick` (`NavigationHelper.cs:44`) and `GetEmbarkAndDisembarkDataForPlayer` (`NavigationHelper.cs:60`) both return a nested `EmbarkDisembarkData` (`NavigationHelper.cs:304`), which describes a shoreline crossing: where the nav-mesh edge is, where the party enters, where it leaves, and whether the order is aimed into the beach's dead zone. The actual geometry is computed by the private `CalculateTransitionStartAndEndPosition` (`NavigationHelper.cs:107`).

## Mental Model

Think of every method here as **"ask the nav-mesh a question, get an answer or get the input back unchanged"**. There is no exception-based failure mode, no `TryX` suffix, no null on failure. That design is the source of every trap below, and it is worth being explicit about because the method names do not hint at it:

- **Nothing works outside a live campaign.** Every method reaches `Campaign.Current.Models.PartyNavigationModel` and `Campaign.Current.MapSceneWrapper` (`NavigationHelper.cs:25`, `NavigationHelper.cs:34`, `NavigationHelper.cs:113`). There is no null check. Call any of them from a menu screen, a save-game loader or a main-menu mod and you get a `NullReferenceException` on the first line, not a `false`.
- **A failed search returns the centre you passed in.** `FindPointAroundPosition` seeds its result with `campaignVec = centerPosition` (`NavigationHelper.cs:141`) and only overwrites it inside the loop; the `int[] excludedFaceIds` overload does the same at `NavigationHelper.cs:176`. After a call you cannot distinguish "found a spot exactly at the centre" from "tried 250 times and gave up" — you must compare the result against the input yourself.
- **The search is capped at 250 samples, and `maxDistance` may be silently reduced first.** All four search methods clamp against the map borders and rewrite your radius (`NavigationHelper.cs:150`, `NavigationHelper.cs:185`, and a second clamp against the centre's distance to the box corners at `NavigationHelper.cs:254`) before sampling. Near a map corner your effective radius can be a fraction of what you passed, and with only 250 tries the chance of finding a legal point drops sharply — so a "search failed" result is usually a *geometric* failure, not a bug in your caller.
- **`FindPointInsideArea` can assert and recurse.** The seven-argument overload ends with `Debug.FailedAssert("Point should not be invalid!", …)` (`NavigationHelper.cs:280`) and, if the result is still invalid, calls back into the three-argument overload (`NavigationHelper.cs:281`). In a debug build you get a logged failure every time it cannot place a point; in a release build the assert is compiled out and you silently get the recursive result.
- **`IsPointInsideBorders` is exclusive on all four edges.** The test is `point.x < maxBorders.x && point.y < maxBorders.y && point.x > minBorders.x && point.y > minBorders.y` (`NavigationHelper.cs:234`) — a point exactly on the border is *outside*. Pass min/max swapped and everything reads as outside, because there is no normalisation of the two corners.
- **`EmbarkDisembarkData` is a mutable struct-of-public-fields with a shared singleton.** The members are plain public fields (`NavigationHelper.cs:321` through `NavigationHelper.cs:336`), not properties, and `Invalid` is one shared `static readonly` instance (`NavigationHelper.cs:318`). Nothing stops a caller from writing `data.IsValidTransition = true` on the object `GetEmbarkDisembarkDataForTick` returned from its failure path — and if that object *is* the `Invalid` singleton you have mutated global state for the rest of the process. Copy it before you touch it.
- **`GetEmbarkDisembarkDataForPlayer` refines, it does not recompute.** It starts from `GetEmbarkDisembarkDataForTick` (`NavigationHelper.cs:63`) and only re-aims when the start and end faces disagree about navigability, then only fills `IsTargetingTheDeadZone` when a distance comparison favours the far side. Treat the two dead-zone flags as "maybe", not as answers, unless you have also checked `IsValidTransition`.
- **`CanPlayerNavigateToPosition` has an `out` parameter** (`NavigationHelper.cs:32`). It is not a pure predicate; you must declare a `MobileParty.NavigationType` local to receive the capability the model picked.

## How to use

### Getting one

Nothing to obtain — it is `public static class NavigationHelper` in the `Helpers` namespace (`NavigationHelper.cs:11`), so add `using Helpers;` and call it directly. Call it only from inside a running campaign (a `CampaignBehaviorBase` event handler, a mission logic, or a settlement/party event), never from a menu or a save-game hook, because `Campaign.Current` is dereferenced unconditionally.

### Typical use

```csharp
using Helpers;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;
using TaleWorlds.Library;

public static class AmbushSitePicker
{
    public static CampaignVec2 PickNearSettlement(Settlement target, MobileParty raider)
    {
        // Validation first: cheap, and it tells you whether a search is worth running.
        MobileParty.NavigationType capability;
        CampaignVec2 around = target.Location;
        if (!NavigationHelper.CanPlayerNavigateToPosition(around, out capability))
        {
            return CampaignVec2.Invalid;
        }

        // Failure is signalled by the result equalling the input — check for it.
        CampaignVec2 spot = NavigationHelper.FindPointAroundPosition(
            around, capability, maxDistance: 4f, minDistance: 2f, requirePath: true);

        if (spot == CampaignVec2.Invalid || spot == around)
        {
            return CampaignVec2.Invalid;
        }

        // Clamp to a safe box; the exclusive edge test means border points read as outside.
        Vec2 min = new Vec2(around.X - 4f, around.Y - 4f);
        Vec2 max = new Vec2(around.X + 4f, around.Y + 4f);
        return NavigationHelper.FindPointInsideArea(min, max, around, capability, 4f);
    }
}
```

## Key Methods

### IsPositionValidForNavigationType
`public static bool IsPositionValidForNavigationType(CampaignVec2 vec2, MobileParty.NavigationType navigationType)`

**Purpose:** Determines whether the this instance is in the position valid for navigation type state or condition.

```csharp
// Static call; no instance required
NavigationHelper.IsPositionValidForNavigationType(vec2, navigationType);
```

### IsPositionValidForNavigationType
`public static bool IsPositionValidForNavigationType(PathFaceRecord face, MobileParty.NavigationType navigationType)`

**Purpose:** Determines whether the this instance is in the position valid for navigation type state or condition.

```csharp
// Static call; no instance required
NavigationHelper.IsPositionValidForNavigationType(face, navigationType);
```

### CanPlayerNavigateToPosition
`public static bool CanPlayerNavigateToPosition(CampaignVec2 vec2, out MobileParty.NavigationType navigationType)`

**Purpose:** Checks whether the this instance meets the preconditions for player navigate to position.

```csharp
// Static call; no instance required
NavigationHelper.CanPlayerNavigateToPosition(vec2, navigationType);
```

### GetClosestNavMeshFaceCenterPositionForPosition
`public static CampaignVec2 GetClosestNavMeshFaceCenterPositionForPosition(CampaignVec2 vec2, int excludedFaceIds)`

**Purpose:** Reads and returns the closest nav mesh face center position for position value held by the this instance.

```csharp
// Static call; no instance required
NavigationHelper.GetClosestNavMeshFaceCenterPositionForPosition(vec2, 0);
```

### GetEmbarkDisembarkDataForTick
`public static NavigationHelper.EmbarkDisembarkData GetEmbarkDisembarkDataForTick(CampaignVec2 position, Vec2 direction)`

**Purpose:** Reads and returns the embark disembark data for tick value held by the this instance.

```csharp
// Static call; no instance required
NavigationHelper.GetEmbarkDisembarkDataForTick(position, direction);
```

### GetEmbarkAndDisembarkDataForPlayer
`public static NavigationHelper.EmbarkDisembarkData GetEmbarkAndDisembarkDataForPlayer(CampaignVec2 position, Vec2 direction, CampaignVec2 moveTargetPointOfTheParty, bool isMoveTargetOnLand)`

**Purpose:** Reads and returns the embark and disembark data for player value held by the this instance.

```csharp
// Static call; no instance required
NavigationHelper.GetEmbarkAndDisembarkDataForPlayer(position, direction, moveTargetPointOfTheParty, false);
```

### FindPointAroundPosition
`public static CampaignVec2 FindPointAroundPosition(CampaignVec2 centerPosition, MobileParty.NavigationType navigationCapability, float maxDistance, float minDistance = 0f, bool requirePath = true, bool useUniformDistribution = false)`

**Purpose:** Looks up the matching point around position in the current collection or scope.

```csharp
// Static call; no instance required
NavigationHelper.FindPointAroundPosition(centerPosition, navigationCapability, 0, 0, false, false);
```

### FindReachablePointAroundPosition
`public static CampaignVec2 FindReachablePointAroundPosition(CampaignVec2 center, int excludedFaceIds, float maxDistance, float minDistance = 0f, bool useUniformDistribution = false)`

**Purpose:** Looks up the matching reachable point around position in the current collection or scope.

```csharp
// Static call; no instance required
NavigationHelper.FindReachablePointAroundPosition(center, 0, 0, 0, false);
```

### FindReachablePointAroundPosition
`public static CampaignVec2 FindReachablePointAroundPosition(CampaignVec2 center, MobileParty.NavigationType navigationCapability, float maxDistance, float minDistance = 0f, bool useUniformDistribution = false)`

**Purpose:** Looks up the matching reachable point around position in the current collection or scope.

```csharp
// Static call; no instance required
NavigationHelper.FindReachablePointAroundPosition(center, navigationCapability, 0, 0, false);
```

### FindPointInsideArea
`public static CampaignVec2 FindPointInsideArea(Vec2 minBorder, Vec2 maxBorder, MobileParty.NavigationType navigationCapability)`

**Purpose:** Looks up the matching point inside area in the current collection or scope.

```csharp
// Static call; no instance required
NavigationHelper.FindPointInsideArea(minBorder, maxBorder, navigationCapability);
```

### IsPointInsideBorders
`public static bool IsPointInsideBorders(Vec2 point, Vec2 minBorders, Vec2 maxBorders)`

**Purpose:** Determines whether the this instance is in the point inside borders state or condition.

```csharp
// Static call; no instance required
NavigationHelper.IsPointInsideBorders(point, minBorders, maxBorders);
```

### FindPointInsideArea
`public static CampaignVec2 FindPointInsideArea(Vec2 minBorders, Vec2 maxBorders, CampaignVec2 center, MobileParty.NavigationType navigationCapability, float maxDistance, float minDistance = 0f, bool requirePathFromCenter = false)`

**Purpose:** Looks up the matching point inside area in the current collection or scope.

```csharp
// Static call; no instance required
NavigationHelper.FindPointInsideArea(minBorders, maxBorders, center, navigationCapability, 0, 0, false);
```

## Usage Example

```csharp
// NavigationHelper has no Initialize(). Validate first, then search.
MobileParty.NavigationType capability;
CampaignVec2 start = someSettlement.Location;

if (NavigationHelper.CanPlayerNavigateToPosition(start, out capability))
{
    CampaignVec2 spot = NavigationHelper.FindPointAroundPosition(
        start, capability, maxDistance: 3f, minDistance: 1f);
}
```

## See Also

- [Area Index](../)
- [Campaign System](../../campaign/)