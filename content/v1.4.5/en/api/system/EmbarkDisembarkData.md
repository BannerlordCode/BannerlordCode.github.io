---
title: "EmbarkDisembarkData"
description: "Carries the nav-mesh edge, transition endpoints, and dead-zone flags for a land/sea navigation transition, produced by NavigationHelper factories."
---
# EmbarkDisembarkData

**Namespace:** `Helpers`
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EmbarkDisembarkData` (nested inside `NavigationHelper`)
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/Helpers/NavigationHelper.cs`

## One-line responsibility

It passes the geometry of one land/sea navigation transition from `NavigationHelper` to `MapState` and `MobileParty`: it does not embark or disembark a party, but reports the edge, the transition endpoints, and whether the player's target is in the dead zone.

## Mental model

Treat this as a short-lived result for one movement calculation, not as a configurable navigation service. `NavigationHelper.GetEmbarkDisembarkDataForTick` calculates a transition from the current position and direction using `Campaign.Current.MapSceneWrapper` and `Campaign.Current.Models.PartyNavigationModel`. The player-specific `GetEmbarkAndDisembarkDataForPlayer` starts with that calculation, then uses the player's move target to classify a dead-zone target. `MapState.ProcessTravel` may replace the player's target with a transition endpoint, while `MobileParty.CheckTransitionParallel` uses the result to decide whether to initialize the actual transition.

For a mod, this means the useful operation is normally reading a factory result for navigation observation or diagnostics. It is not a replacement for `MapState.ProcessTravel` or the `MobileParty` transition state machine. Do not infer that a party has embarked merely because `IsValidTransition` is true: that flag says the geometry can be evaluated, not that a transition has started or finished.

## Dependencies, sources, and consumers

1. `NavigationHelper.GetEmbarkDisembarkDataForTick(position, direction)` searches the navigation mesh in the movement direction and uses `PartyNavigationModel.GetEmbarkDisembarkThresholdDistance()` to build candidate points on both sides of the edge. It returns [`Invalid`](#invalid) when no usable transition is found.
2. `NavigationHelper.GetEmbarkAndDisembarkDataForPlayer(...)` first performs the tick calculation. If both sides initially resolve to the same navigation category, it recalculates from the navigation face at the player's move target and then checks whether the target is close enough to be in the dead zone.
3. [`MapState.ProcessTravel`](../../campaign/MapState) calls the player factory for the main party. When the target is in the dead zone, it chooses `TransitionStartPosition` or `TransitionEndPosition`, then still delegates the final navigation decision to `NavigationHelper.CanPlayerNavigateToPosition` and `MobileParty.SetMoveGoToPoint`.
4. [`MobileParty`](../../campaign/MobileParty) reads the result during movement and in `CheckTransitionParallel`. It initializes the internal transition only when the result is valid, the target is not on the party's own dead-zone face, the terrain model permits the switch, and the distance conditions are met.

The geometry uses [`CampaignVec2`](../../campaign/CampaignVec2), so each position carries both 2D coordinates and its land/sea side through `IsOnLand`. Whether that terrain is navigable for a party belongs to [`PartyNavigationModel`](../../campaign/PartyNavigationModel), not to this data class.

## Key members

### `Invalid`

`public static readonly EmbarkDisembarkData Invalid`

A shared sentinel for “no usable transition.” The source initializes it with `IsValidTransition == false`, all three positions set to `CampaignVec2.Invalid`, and both dead-zone flags set to `false`. Check `IsValidTransition` before reading a position's `Face` or `Distance`, or passing it on as a move target.

### `IsValidTransition`

`public bool IsValidTransition`

Indicates that the `TransitionEndPosition` passed the validity check. The tick factory creates a valid result only when the end position is valid. If both candidate endpoints land on the current navigation face, the internal calculation invalidates both and the factory returns `Invalid`. This means “safe to evaluate further,” not “the transition has begun.”

### `NavMeshEdgePosition`

`public CampaignVec2 NavMeshEdgePosition`

The navigation-mesh edge reached from the current position along the movement direction, represented on the current land/sea side. `MobileParty.CheckTransitionParallel` uses it to compare the party's distance to the edge with the start-to-edge threshold before starting a transition.

### `TransitionStartPosition` and `TransitionEndPosition`

```csharp
public CampaignVec2 TransitionStartPosition;
public CampaignVec2 TransitionEndPosition;
```

The start is on the party's current side and the end is on the opposite land/sea side. They are derived from the edge and `GetEmbarkDisembarkThresholdDistance()`. If the calculated start is invalid, the tick factory falls back to the input `position`; the end must still be valid or the result becomes `Invalid`. When handling a player dead-zone target, `MapState.ProcessTravel` uses the start for a transition that has not begun and the end for one already in progress.

### `IsTargetingTheDeadZone`

`public bool IsTargetingTheDeadZone`

Set only during the player-specific target evaluation. It means the player's target is in the ambiguous land/sea boundary, so `MapState.ProcessTravel` replaces the raw click target with an explicit transition start or end. The tick factory returns this flag as `false`.

### `IsTargetingOwnSideOfTheDeadZone`

`public bool IsTargetingOwnSideOfTheDeadZone`

Set when the target is in the dead zone and its navigation face is still the same face as the transition start. `MobileParty` uses this to avoid repeatedly initializing a transition on the party's own side and to decide whether an existing transition should be cancelled. The flag has meaning only when `IsTargetingTheDeadZone` is also true.

### Constructor

```csharp
public EmbarkDisembarkData(
    bool isValid,
    CampaignVec2 navMeshEdgePosition,
    CampaignVec2 transitionStartPosition,
    CampaignVec2 transitionEndPosition,
    bool isTargetingTheDeadZone,
    bool isTargetingOwnSideOfTheDeadZone);
```

The constructor is public, but it only assigns the fields. It does not query the map, validate navigation faces, or keep the flags logically consistent. Unless a diagnostic test specifically needs a synthetic value, do not `new` one to drive game movement.

## Real acquisition example: read a player transition

This path uses the live main party and its actual move target. It is appropriate for map-navigation diagnostics; it does not replace the normal movement-setting flow, which should go through [`MapState.ProcessTravel`](../../campaign/MapState).

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Helpers;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Library;

MobileParty party = MobileParty.MainParty;
CampaignVec2 target = party.MoveTargetPoint;

Campaign campaign = Campaign.Current;
if (campaign != null && party.HasNavalNavigationCapability && target.IsValid())
{
    Vec2 direction = (target.ToVec2() - party.Position.ToVec2()).Normalized();
    NavigationHelper.EmbarkDisembarkData data =
        NavigationHelper.GetEmbarkAndDisembarkDataForPlayer(
            party.Position, direction, target, target.IsOnLand);

    if (data.IsValidTransition && !data.IsTargetingOwnSideOfTheDeadZone)
    {
        CampaignVec2 edge = data.NavMeshEdgePosition;
        CampaignVec2 end = data.TransitionEndPosition;
        bool needsExplicitTransition = data.IsTargetingTheDeadZone;
    }
}
```

`target.IsOnLand` comes from the real `CampaignVec2` target; it should not be replaced with a guessed constant. The example only reads the result. It does not call the internal `InitializeNavigationTransitionParallel`, because that belongs to `MobileParty`'s state machine.

## When not to use it

- Do not save or restore it as navigation state. It is an ephemeral calculation based on the current map mesh, direction, and model threshold, not a save contract.
- Do not call either factory before a campaign and map scene are active. The factories access `Campaign.Current.MapSceneWrapper` and `Campaign.Current.Models.PartyNavigationModel`; a missing runtime context can cause null access or invalid map queries.
- Do not pass `Invalid` as an ordinary coordinate to `SetMoveGoToPoint`, and do not read a position's `Face` or distance before checking `IsValidTransition`.
- Do not change the booleans to fake an embark/disembark result. The `MapState` and `MobileParty` state machines decide whether and when a terrain transition starts, completes, or is cancelled.
- Do not cache a result across movement ticks and assume it remains correct. The party position, direction, target face, or model threshold may change, making the edge and endpoints stale.

## Risks and version boundary

The common failure is not an exception from the fields themselves; it is feeding invalid geometry into a later navigation operation. An invalid `CampaignVec2` can make a subsequent navigation-face query fail, while incorrect dead-zone handling can make the main party repeatedly cancel and restart at a land/sea boundary. Read in the order “validate first, then inspect positions,” and leave final navigation validation to `CanPlayerNavigateToPosition` and `SetMoveGoToPoint`.

This page follows the v1.4.5 `NavigationHelper.cs` source. `EmbarkDisembarkData` owns no save fields, events, or model replacement. It depends on the live `Campaign`, map scene, and `PartyNavigationModel` implementation. If a mod replaces `PartyNavigationModel`, its terrain rules and threshold can change how often a valid result or dead-zone result appears; do not hard-code assumptions from the default model.

## ↑ Parent navigation

- [System API index](../)
- [NavigationHelper](../NavigationHelper)

## ↔ Siblings and related types

- [CampaignVec2](../../campaign/CampaignVec2): position validity, `Face`, and land/sea side.
- [PartyNavigationModel](../../campaign/PartyNavigationModel): source of terrain rules, naval capability, and transition threshold.
- [MobileParty](../../campaign/MobileParty): movement ticks, transition start/cancel logic, and main-party state.
- [MapState](../../campaign/MapState): converts a player map target into a navigation request and handles the dead zone.
- [System API index](../)
