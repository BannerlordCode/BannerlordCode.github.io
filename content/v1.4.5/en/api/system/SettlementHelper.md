---
title: "SettlementHelper: distance-aware settlement queries and campaign transitions"
description: "SettlementHelper searches campaign settlements, towns, villages, castles, and hideouts, and exposes a few state-changing helpers for party and notable lifecycle work in v1.4.5."
---
# SettlementHelper

**Namespace:** `Helpers`
<br>**Module:** `TaleWorlds.CampaignSystem`
<br>**Type:** `public static class SettlementHelper`
<br>**Base:** `System.Object`
<br>**Source:** `bin/TaleWorlds.CampaignSystem/Helpers/SettlementHelper.cs`

## One-sentence responsibility

`SettlementHelper` provides distance-aware and filtered settlement searches for campaign systems, plus a small set of explicit party, notable, garrison, and spawn-support operations that can change world state.

## Mental Model

The query family iterates current campaign collections and delegates travel distance to `DistanceHelper` with a `MobileParty.NavigationType`. It returns the domain component that the caller asked for: `Town`, `Village`, `Hideout`, or a `Settlement`, and returns null when no candidate beats the initial distance bound. Random queries collect matching settlements before choosing one. The class also contains operational helpers that leave parties, create notables, or calculate garrison deltas; those are not interchangeable with the read-only searches.

## When to use and when not to use

- Use nearest queries when a quest, AI, UI, or travel operation needs a current candidate subject to a navigation capability and optional settlement predicate.
- Use `FindRandomSettlement` or `FindRandomHideout` when the caller explicitly wants a random current candidate and can handle null.
- Use `GetAllHeroesOfSettlement` when the caller needs leaders, heroes without parties, and optionally hero prisoners from the settlement roster.
- Use `GetGarrisonChangeExplainedNumber` for UI/model explanation; it combines recruitment behavior output and desertion, but it does not recruit troops itself.
- Do not treat the returned nearest settlement as an ownership decision or guaranteed route. The helper only compares current distances and filters.
- Do not call `TakeEnemyVillagersOutsideSettlements` or `SpawnNotablesIfNeeded` from repeated display refreshes. They can call Actions, move parties, and create heroes.

## Dependencies and call chain

```text
Quest / model / ViewModel
          |
          v
SettlementHelper -> Settlement.All / Town.AllTowns / Village.All / Hideout.All
          |
          +-> DistanceHelper + NavigationType
          +-> LeaveSettlementAction / EnterSettlementAction for explicit mutations
```

- [`Settlement`](../../campaign/Settlement), [`MobileParty`](../../campaign/MobileParty), [`Town`](../../campaign/Town), [`Village`](../../campaign/Village), and [`Hero`](../../campaign/Hero) own the objects returned or inspected.
- [`DistanceHelper`](../DistanceHelper) and the campaign `MapDistanceModel` determine reachable distance; `NavigationType` is a real input, not an optional label.
- [`LeaveSettlementAction`](../../campaign-ext/LeaveSettlementAction) and [`EnterSettlementAction`](../../campaign-ext/EnterSettlementAction) are the mutation boundaries used by the explicit lifecycle helpers.

## Public members by contract

| Group | Members | Source-confirmed behavior |
|---|---|---|
| Nearest queries | `FindNearestSettlementToSettlement`, `FindNearestSettlementToMobileParty`, `FindNearestSettlementToPoint`, `FindNearestHideoutToSettlement`, `FindNearestHideoutToMobileParty`, `FindNearestTownToSettlement`, `FindNearestTownToMobileParty`, `FindNearestCastleToSettlement`, `FindNearestCastleToMobileParty`, `FindNearestVillageToSettlement`, `FindNearestVillageToMobileParty` | Iterate the current collection, apply the optional predicate, compare distance, and return the matching component or null. Settlement-to-point uses map position distance; party/settlement searches use `DistanceHelper`. |
| Fortification and iteration | `FindNearestFortificationToSettlement`, `FindNearestFortificationToMobileParty`, `FindFurthestFortificationToSettlement`, `FindNextSettlementAroundMobileParty` | Compare town and castle candidates, return the closer or furthest result, or return the next matching `Settlement.All` index. The continuation method returns `-1` when no later candidate is within `maxDistance`. |
| Random and faction selection | `FindRandomSettlement`, `FindRandomHideout`, `GetRandomTown` | Choose from filtered current collections. `GetRandomTown` includes towns or villages and can filter by a `Clan`; it assumes a valid campaign collection and a non-empty candidate range. |
| Spawn and inspection | `GetBestSettlementToSpawnAround`, `GetAllHeroesOfSettlement`, `GetRandomStuff` | Score safe settlements for a hero, enumerate party leaders/settlement heroes/optional hero prisoners, or return a carried item ID from a gender-specific rotating list. `GetRandomStuff` advances a process-local static index on every call; these methods do not by themselves spawn the hero or move the party. |
| Garrison and neighbors | `IsGarrisonStarving`, `GetGarrisonChangeExplainedNumber`, `GetNeighborScoreForConsideringClan` | Read current food/model/neighbor state or compose explained garrison change from recruitment and desertion. |
| Explicit mutations | `TakeEnemyVillagersOutsideSettlements`, `SpawnNotablesIfNeeded` | Set parties to hold, call `LeaveSettlementAction.ApplyForParty`, and possibly call `EnterSettlementAction.ApplyForCharacterOnly` after model-driven notable selection. |

## Real example: find a reachable town without mutating the map

This follows the acquisition pattern used by campaign UI and StoryMode code. The predicate is applied to the same live settlement objects that the helper iterates:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements;

public static Town FindSafeTownForParty()
{
    MobileParty party = MobileParty.MainParty;
    return SettlementHelper.FindNearestTownToMobileParty(
        party,
        party.NavigationCapability,
        settlement => settlement.IsTown && !settlement.IsUnderSiege);
}
```

The result can be null and should be checked before assigning a movement target. It is a distance result, not a promise that the party can enter the town after another Action or tick.

## Search, sentinel, and mutation boundaries

Most nearest searches initialize their best distance to `Campaign.MapDiagonal * 2f`; no candidate that reaches that bound becomes the result. `FindNextSettlementAroundMobileParty` instead scans after `lastIndex` and returns `-1` when no candidate is close enough. `FindFurthestFortificationToSettlement` reports `float.MinValue` through `furthestDistance` if its candidate list is empty.

`FindNearestFortificationToSettlement` and its mobile-party counterpart compare nearest town and nearest castle, but their return type is `Settlement`. Handle both the returned settlement and the possibility that one side is null before dereferencing. Hideout and village methods return their component through the matching settlement and may also return null.

`TakeEnemyVillagersOutsideSettlements` can repeatedly call `LeaveSettlementAction.ApplyForParty` for hostile caravans or villagers and sets target parties to hold. `SpawnNotablesIfNeeded` uses `NotableSpawnModel`, random chance, occupation-specific counts, and `HeroCreator.CreateNotable` before calling `EnterSettlementAction`. These belong in campaign lifecycle code, not in a UI query.

## Risks and save boundaries

- Many methods require a live Campaign map and initialized `Settlement.All`, `Town.AllTowns`, or `Village.All`; do not call them during module construction or before campaign load finishes.
- Distance results depend on `NavigationType` and the current `DistanceHelper`/MapDistanceModel. Recheck after map state, ports, sea travel, or campaign time changes.
- `GetRandomTown` computes a random index from the count of town/village candidates. A null or empty campaign collection is outside its intended lifecycle boundary.
- `GetBestSettlementToSpawnAround` is a weighted heuristic using faction relation, settlement type, garrison strength, raids/sieges, ownership, seeded randomness, and two distance terms. It is not a universal spawn guarantee.
- `GetAllHeroesOfSettlement` may enumerate prisoner roster data; enumerate while the settlement and roster remain valid and do not save the iterator itself.
- The helper does not define save schema. Persist stable IDs or behavior state through the campaign owner, then reacquire settlements and heroes after load.

## Version note

This page follows v1.4.5 `SettlementHelper.cs`, including the `Campaign.MapDiagonal * 2f` nearest-search bound, `-1` continuation sentinel, garrison/desertion composition, and Action-backed party/notable mutations.

## Navigation

- [↑ API system index](../)
- [↔ MenuHelper](../MenuHelper)
- [↔ PerkHelper](../PerkHelper)
- [Related: Settlement](../../campaign/Settlement)
- [Related: MobileParty](../../campaign/MobileParty)
- [Related: Town](../../campaign/Town)
- [Related: Village](../../campaign/Village)
- [Related: DistanceHelper](../DistanceHelper)
- [中文页面](../../../../zh/api/system/SettlementHelper)
