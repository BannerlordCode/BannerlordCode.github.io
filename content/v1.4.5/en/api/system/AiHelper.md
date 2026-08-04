---
title: "AiHelper"
description: "The Campaign AI navigation facade that selects land, naval, or mixed navigation for MobileParty targets using ports and the active MapDistanceModel."
---
# AiHelper

**Namespace:** `Helpers`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class AiHelper`  
**Base:** `System.Object`  
**Source:** `bin/TaleWorlds.CampaignSystem/Helpers/AiHelper.cs`

## Responsibility in one sentence

`AiHelper` lets Campaign AI compare land, naval, and mixed distances from a mobile party to a settlement or another mobile party, returning a recommended `MobileParty.NavigationType`, a distance, and whether the winning settlement route starts from a port.

## Mental model: navigation candidates, not movement or pathfinding

This class owns no instance state. It does not create parties, set AI behavior, or move a party on the map. Both public methods initialize their outputs to `NavigationType.None` and `float.MaxValue`, then use [DistanceHelper](../DistanceHelper) and the active [MapDistanceModel](../../campaign/MapDistanceModel) to compare candidates allowed by the source party's land and naval capabilities.

The settlement method also accounts for:

- the party already being at the target settlement; it returns zero and chooses Default or Naval according to `isTargetingPort`;
- whether `isTargetingPort` asks for a port approach; naval distance is multiplied by an amplifier derived from ship speed, safe-sailing duration, ship crew capacity, and party size;
- a source settlement's port; when one exists, the method compares port and non-port mixed routes and reports the winning origin through `isFromPort`.

The party-to-party method compares Default, Naval, and All. Both methods use an internal `Campaign.MapDiagonal * 5f` feasibility cutoff. Treat `None` and `float.MaxValue` as “no usable navigation result,” not as an executable route.

## When to use it, and when not to

- **Use it:** before an AI behavior creates a `GoToSettlement`, patrol, army-following, or party-approach decision, when it needs a navigation type and distance score.
- **Use it:** to diagnose why a live Campaign party selected land, naval, or mixed navigation.
- **Do not use it:** to move a party, change `MobileParty.Ai`, create ships, or guarantee eventual reachability. Those belong to party AI, navigation, and existing Campaign behaviors.
- **Do not copy its naval constants:** the amplifier depends on `Campaign.Current`, ship state, and replaceable distance rules; those details can drift between versions.
- **Do not call it without a live Campaign, source party, and target settlement:** the method reads Campaign and model state; `out` values cannot make null inputs safe.

## Method 1: mobile party to settlement

### GetBestNavigationTypeAndAdjustedDistanceOfSettlementForMobileParty

```csharp
public static void GetBestNavigationTypeAndAdjustedDistanceOfSettlementForMobileParty(
    MobileParty mobileParty,
    Settlement settlement,
    bool isTargetingPort,
    out MobileParty.NavigationType bestNavigationType,
    out float bestNavigationDistance,
    out bool isFromPort)
```

It compares routes to a settlement under the source party's capabilities. The returned distance already applies the party's naval cost adjustment; it is not the raw geometric distance from `MapDistanceModel`.

The game AI first acquires a real party and target settlement, then skips the behavior when the returned type is `None`:

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Library;
using Helpers;

public static void InspectSettlementNavigation()
{
    if (Campaign.Current == null)
    {
        return;
    }

    MobileParty mobileParty = MobileParty.MainParty;
    Settlement target = Campaign.Current.Settlements
        .FirstOrDefault(settlement => settlement.HasPort && !settlement.IsUnderSiege);
    if (mobileParty == null || target == null)
    {
        return;
    }

    bool isTargetingPort = target.HasPort && mobileParty.HasNavalNavigationCapability;
    AiHelper.GetBestNavigationTypeAndAdjustedDistanceOfSettlementForMobileParty(
        mobileParty,
        target,
        isTargetingPort,
        out MobileParty.NavigationType navigationType,
        out float distance,
        out bool isFromPort);

    if (navigationType != MobileParty.NavigationType.None)
    {
        Debug.Print($"{navigationType}: {distance}, fromPort={isFromPort}");
    }
}
```

When the result is `None`, let the higher-level AI choose another target or wait; do not send `float.MaxValue` to a movement command.

## Method 2: mobile party to mobile party

### GetBestNavigationTypeAndDistanceOfMobilePartyForMobileParty

```csharp
public static void GetBestNavigationTypeAndDistanceOfMobilePartyForMobileParty(
    MobileParty mobileParty,
    MobileParty toMobileParty,
    out MobileParty.NavigationType bestNavigationType,
    out float bestNavigationDistance)
```

This method returns only the recommended navigation type and distance, without a port-origin flag. It still adjusts naval candidates using ship durability, safe-sailing duration, available crew capacity, and attached-party population. The target party is not automatically an attack or encounter permission.

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Library;
using Helpers;

public static void InspectPartyNavigation()
{
    if (Campaign.Current == null)
    {
        return;
    }

    MobileParty mobileParty = MobileParty.MainParty;
    MobileParty otherParty = MobileParty.All
        .FirstOrDefault(candidate => candidate != mobileParty && candidate.IsActive);
    if (mobileParty == null || otherParty == null)
    {
        return;
    }

    AiHelper.GetBestNavigationTypeAndDistanceOfMobilePartyForMobileParty(
        mobileParty,
        otherParty,
        out MobileParty.NavigationType navigationType,
        out float distance);
    Debug.Print($"Target {otherParty.Name}: {navigationType}, {distance}");
}
```

When the result is `None`, the AI score should abandon the approach rather than treating the sentinel distance as a valid plan.

## Dependencies

- [MobileParty](../../campaign/MobileParty) supplies `NavigationType`, land/naval capability, position, ships, member roster, and attached parties; AiHelper reads those live values.
- [Settlement](../../campaign/Settlement) supplies port, siege, and target-position state; it does not perform movement.
- [DistanceHelper](../DistanceHelper) delegates the source/target map-distance combinations to the active rules model.
- [MapDistanceModel](../../campaign/MapDistanceModel) is the distance-rule provider. `AiHelper` adds party-specific naval costs and must not cache or replace the model result.
- [Campaign](../../campaign/Campaign) supplies `Campaign.Current`, `MapDiagonal`, speed estimates, and `CampaignShipDamageModel`; these require an initialized Campaign.
- Vanilla [Army](../../campaign/Army), `AiVisitSettlementBehavior`, `AiPatrollingBehavior`, and `AiMilitaryBehavior` use the result to construct later AI behavior. AiHelper does not own that behavior lifecycle.

## Risks and version notes

- The `out` values are always assigned, but that does not validate the inputs. Check Campaign, party, and settlement before calling, then check for `NavigationType.None`.
- `isTargetingPort` expresses target intent, not a hard “naval only” switch. The method can still compare mixed routes and return `All` when that is cheaper.
- The distance changes with ship hit points, crew capacity, attached-party count, and safe-sailing duration. It cannot be converted directly to an arrival time without the relevant speed model.
- Map events, sieges, blockades, and the party's current settlement can change the candidates. The result is a point-in-time calculation and should not be cached across ticks or saves.
- The v1.4.5 naval amplifier is an internal source rule. Call AiHelper/DistanceHelper instead of copying constants across versions.

## Navigation

- Up: [`api/system`](../)
- Siblings: [DistanceHelper](../DistanceHelper) · [TownHelpers](../TownHelpers) · [MobilePartyHelper](../MobilePartyHelper)
- Related: [MobileParty](../../campaign/MobileParty) · [Settlement](../../campaign/Settlement) · [MapDistanceModel](../../campaign/MapDistanceModel) · [Campaign](../../campaign/Campaign) · [Army](../../campaign/Army)
- 中文：[AiHelper](../../../../zh/api/system/AiHelper)

