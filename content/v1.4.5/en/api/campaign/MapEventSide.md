---
title: "MapEventSide"
description: "The attacker or defender container that groups MapEventParty records and owns event-side strength, casualty, and troop-allocation state."
---

# MapEventSide

**Namespace:** `TaleWorlds.CampaignSystem.MapEvents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class MapEventSide`  
**Base:** none  
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapEvents/MapEventSide.cs`

## One-line responsibility

`MapEventSide` groups the [`MapEventParty`](../MapEventParty) records for one attacker or defender side and coordinates that side's strength, casualties, simulation troops, and Mission allocation.

## Mental model

`MapEventSide` is created internally with an owning [`MapEvent`](../MapEvent), a `BattleSideEnum`, and a leader `PartyBase`. The event then exposes it as `AttackerSide` or `DefenderSide`. Its `Parties` list is the event's party view; it is not a second campaign party collection. `OtherSide` resolves the paired side through the same event.

The side has two kinds of state. Saveable fields contain leader/faction identity, casualty and reward values, side ratios, and the party records. Cached fields contain troop-priority lists, allocated/ready troop dictionaries, strength caches, simulation ships, and lock flags. `MakeReadyForSimulation` and `MakeReadyForMission` prepare those caches for the host's simulation or Mission supplier; they are not general-purpose roster editing APIs.

## When to use and when not to use

**Use it when:**

- Reading the attacker/defender party list, leader, current healthy count, casualty strength, or side-level result values.
- Inspecting which side contains `PartyBase.MainParty` or how a running event was classified.
- Writing a diagnostic that runs during the active event and releases references at `MapEventEnded`.

**Do not use it when:**

- Adding/removing a party by editing `Parties`. Membership belongs to encounter and `MapEvent` protocols.
- Calling `AllocateTroops`, `MakeReadyForMission`, `Clear`, `Surrender`, or `Route` to force a battle result. Mission suppliers and event resolution own these calls.
- Treating `StrengthRatio`, `RenownValue`, `InfluenceValue`, or casualty fields as direct mutation inputs. Models, Actions, and finalization calculate and commit their consequences.

## Dependencies and ownership

- **Owner:** [`MapEvent`](../MapEvent) creates the two sides, stores them in the save graph, and decides their lifecycle.
- **Children:** [`MapEventParty`](../MapEventParty) records bind each participating [`PartyBase`](../PartyBase) to this side.
- **Inputs:** `BattleSideEnum`, `MapEvent.BattleTypes`, `MilitaryPowerModel`, troop supplier Models, and the party rosters.
- **Consumers:** `PartyGroupTroopSupplier`, SandBox Mission setup, combat simulation, `PlayerEncounter`, and campaign reward behaviors consume the side's prepared data.
- **Persistence:** saveable side values and party records survive a Campaign save; allocation dictionaries and simulation lists are cached and rebuilt.

## Key members and timing

| Member | Purpose, side effect, and timing |
|---|---|
| `MapEvent`, `MissionSide`, `LeaderParty`, `OtherSide` | Identify the owning event, side, leader, and opposite side. These are valid only while the event is alive. |
| `Parties`, `TroopCount`, `HealthyTroopCountAtMapEventStart` | Read party membership and counts. The list is read-only; parties can leave before resolution. |
| `StrengthRatio`, `CasualtyStrength`, `RenownValue`, `InfluenceValue`, `TroopCasualties`, `ShipCasualties` | Side result and reward inputs stored by the event protocol; do not treat them as independent mod state. |
| `GetTotalHealthyHeroCountOfSide()`, `GetTotalHealthyTroopCountOfSide()`, `RecalculateMemberCountOfSide()`, `RecalculateStrengthOfSide()` | Read/recalculate current side measures. Results change as party rosters change. |
| `GetTroops()`, `GetAllocatedTroop(...)`, `GetReadyTroop(...)` | Read the simulation/Mission allocation cache only after the host has made the side ready. |
| `MakeReadyForSimulation(...)`, `MakeReadyForMission(...)`, `AllocateTroops(...)` | Prepare and lock event troop allocation for simulation or Mission. Host-owned calls with strong phase assumptions. |
| `OnTroopKilled/Wounded/Routed(...)`, `OnTroopScoreHit(...)` | Forward battle callbacks to the matching `MapEventParty`, updating casualties, XP, and contribution. |
| `HandleMapEventEnd()`, `CommitXpGains()`, `CommitRenownChanges()`, `CommitInfluenceChanges()`, `CommitMoraleChanges()`, `CommitGoldChanges()` | Apply end-of-event changes in the engine's order. Do not replay them from a listener. |

## Real acquisition example

This read-only query obtains the live player event through the real Campaign manager and checks the attacker side:

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.MapEvents;

public static int GetPlayerAttackerCount()
{
    MapEvent mapEvent = Campaign.Current.MapEventManager.MapEvents
        .FirstOrDefault(eventRecord => eventRecord.IsPlayerMapEvent);
    MapEventSide side = mapEvent?.AttackerSide;
    return side?.TroopCount ?? 0;
}
```

Use `DefenderSide` or `OtherSide` when the question is about the opposite side. Do not enumerate and mutate the side during the same tick that a Mission supplier is allocating troops.

## Risks and crash boundaries

1. `Parties` can contain records whose `PartyBase` is changing during retreat, destruction, or finalization. Snapshot the scalar data you need and stop using the side after `MapEventEnded`.
2. Allocation caches are not saveable truth. Calling `Update`, `Clear`, or an allocation method at the wrong phase can make a Mission spawn a different roster from the simulation or cause a missing troop lookup.
3. Side-level casualty and reward fields are written by the event protocol. Direct edits bypass party casualty rosters, XP, prisoners, loot, relations, and settlement consequences.
4. The `LeaderParty` may change when the original leader leaves. Never assume it remains the first party or keep a stale leader reference.
5. `OtherSide` requires a live event and a valid side; using it after removal or from a partially loaded object can reach invalid event state.

## Version note

The v1.4.5 implementation separates saveable side state from `[CachedData]` troop and ship allocation state. The Mission supplier and naval cache details are version-sensitive; recheck `MapEventSide`, `PartyGroupTroopSupplier`, and the target Mission code when porting.

## Navigation

- ↑ Parent: [Campaign API](../)
- ↔ Siblings: [`MapEvent`](../MapEvent) · [`MapEventParty`](../MapEventParty) · [`MapEventManager`](../MapEventManager)
- Related: [`MapEventState`](../MapEventState) · [`MapEventComponent`](../MapEventComponent) · [`PartyBase`](../PartyBase) · [`TroopRoster`](../TroopRoster)
- 中文: [MapEventSide](../../../../zh/api/campaign/MapEventSide)
