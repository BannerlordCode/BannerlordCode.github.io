---
title: "DistanceHelper"
description: "DistanceHelper is the campaign map-distance facade that delegates Settlement, MobileParty, and map-point queries to the active MapDistanceModel while accounting for navigation, ports, and land-sea transitions."
---
# DistanceHelper

**Namespace:** `Helpers`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class DistanceHelper`  
**Base:** none  
**Source:** `bin/TaleWorlds.CampaignSystem/Helpers/DistanceHelper.cs`

## One-sentence responsibility

It normalizes distance requests between settlements, mobile parties, and map points, then delegates them to the active `MapDistanceModel` while preserving port choices, navigation capabilities, land ratios, and maximum-distance decisions.

## Mental Model

`DistanceHelper` owns no route cache and moves no party. It reads the supplied `MobileParty.NavigationType`, compares land, naval, and mixed port approaches, and asks `Campaign.Current.Models.MapDistanceModel` for the candidate distances. The `out` values tell the caller whether the winning route starts from or targets a port and how the model classifies its land portion. The result is a calculation, not an executable path.

`SettlementHelper`, AI, and delayed-teleportation code call these methods repeatedly, so the same points can produce different results for different navigation capabilities. `float.MaxValue` means that no compatible candidate was found; it is not a normal map distance that can safely be squared or converted to travel time.

## When to use and when not to use

- Use it for campaign comparisons between settlements, parties, and map points, passing the caller's real navigation capability.
- Use an overload with `maxDistance` when the caller needs a threshold, and keep both the returned distance and `out landRatio` instead of reimplementing port and transition rules.
- Do not treat it as a pathfinder, a party-speed model, or a battle-distance calculator. Use [MapDistanceModel](../../campaign/MapDistanceModel) or the appropriate AI or party model for those rules.
- Do not call it before `Campaign.Current` exists, after an input entity has been removed, or with a navigation flag that the entity cannot actually use.

## Dependencies

```text
Campaign.Current.Models.MapDistanceModel
  -> DistanceHelper overload family
  -> SettlementHelper / AI / delayed teleportation
  -> distance, port flags, landRatio
```

- Rule provider: [MapDistanceModel](../../campaign/MapDistanceModel) and [GameModels](../../campaign/GameModels).
- Input entities: [Settlement](../../campaign/Settlement), [MobileParty](../../campaign/MobileParty), and [PartyBase](../../campaign/PartyBase).
- Typical consumer: [SettlementHelper](../SettlementHelper); higher-level systems still decide what the result means.

## Public members

| Member group | Members | Purpose and timing |
|---|---|---|
| Constant | `BirdFlyDistanceSquaredThresholdForMobilePartyToMobilePartyDistance` | A squared threshold used by party-distance comparisons; it is not a unit conversion for the distance-query results. |
| Settlement to settlement | The three ordinary `FindClosestDistanceFromSettlementToSettlement` overloads | Compare default, port-origin, port-target, and dual-port candidates; the full overload also returns both port flags and `landRatio`. |
| Party to settlement | The three distance overloads and the `maxDistance` overload of `FindClosestDistanceFromMobilePartyToSettlement` | Reuse settlement-entry logic when the party is currently in a settlement; otherwise query the party-to-settlement model distance and optionally try a target port. |
| Party to party | The three `FindClosestDistanceFromMobilePartyToMobileParty` overloads | Account for both current settlements, sea or land capabilities, and transition costs; the threshold overload returns `distance < maxDistance`. |
| Point and settlement | `FindClosestDistanceFromSettlementToPoint` and `FindClosestDistanceFromMapPointToSettlement` | Compare map points with settlements and report port and land-sea information. |
| Party to point | The two `FindClosestDistanceFromMobilePartyToPoint` overloads | Use settlement-entry logic for a party inside a settlement and direct map-model distance otherwise. |
| Exact party distance | `GetDistanceBetweenMobilePartyToMobileParty` | Uses current navigation faces, gate or port positions, and model transition adjustments; it can return `float.MaxValue` without valid entrances. |

## Real example

```csharp
using System.Linq;
using Helpers;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;

MobileParty party = MobileParty.MainParty;
Settlement target = Settlement.All.FirstOrDefault(settlement => settlement.IsTown && settlement != party.CurrentSettlement);

if (target != null)
{
    float distance = DistanceHelper.FindClosestDistanceFromMobilePartyToSettlement(
        party,
        target,
        party.NavigationCapability,
        out bool isTargetingPort,
        out float landRatio);
}
```

This follows the same acquisition shape used by `SettlementHelper`: the party comes from `MobileParty.MainParty`, its capability comes from the party, and the caller preserves the port and land-ratio outputs instead of assuming a land-only distance.

## Risks and save boundaries

- The helper does not mutate saved entities, but a wrong `NavigationType` can make AI, teleportation, or encounter checks select the wrong route. Do not use `Default` as a substitute for naval capability.
- `Settlement`, `MobileParty`, and `IMapPoint` must still belong to the active `Campaign`. Loading, destruction, or cross-campaign cached references can produce null or stale-position failures.
- Check for `float.MaxValue` before calculating travel time, squaring the result, or applying thresholds; an unreachable result can otherwise poison higher-level numeric logic.
- `landRatio` describes the model's current winning route. It is not persistent movement progress and must not be written into campaign state or saves.

## Version note

The v1.4.5 implementation includes ports and naval navigation in the same overload-selection logic and lets `MapDistanceModel` apply land-sea transition costs. Mod code should call the helper and active model instead of copying version-specific constants.

## Navigation

- [↑ API system index](../)
- [↔ SettlementHelper](../SettlementHelper)
- [Related: MapDistanceModel](../../campaign/MapDistanceModel)
- [Related: MobileParty](../../campaign/MobileParty)
