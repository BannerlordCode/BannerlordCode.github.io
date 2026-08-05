---
title: "MapEventParty"
description: "The map-event record that binds one PartyBase to a side, captures its battle roster, and accumulates casualties, contribution, loot, and rewards."
---

# MapEventParty

**Namespace:** `TaleWorlds.CampaignSystem.MapEvents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class MapEventParty`  
**Base:** none  
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapEvents/MapEventParty.cs`

## One-line responsibility

`MapEventParty` is the per-party battle record inside a [`MapEventSide`](../MapEventSide), linking one [`PartyBase`](../PartyBase) to its troop snapshot, casualties, contribution, loot destinations, and end-of-battle rewards.

## Mental model

The constructor is `internal` and is called by `MapEventSide` when a party joins an event. The object is not the party itself and does not replace `PartyBase.MemberRoster`; it is an event-scoped record built from that party's roster. `Update()` rebuilds the `FlattenedTroopRoster` snapshot, while callbacks such as `OnTroopKilled`, `OnTroopWounded`, and `OnTroopRouted` update both the event record and the party roster according to the battle protocol.

The record remains tied to the event side until the event resolves. `RosterToReceiveLootMembers`, `RosterToReceiveLootPrisoners`, and `RosterToReceiveLootItems` choose destinations differently for the player and NPC parties. This is why a map-event party is a useful read model for a battle, but a dangerous object to mutate outside the event's callback order.

## When to use and when not to use

**Use it when:**

- Reading which `PartyBase` participates on a side and how many men were present at the event start.
- Inspecting event-scoped casualties, participating troop limits, contribution, or explained renown/influence/morale after the relevant phase.
- Handling a battle-end callback that already supplies the event's legal timing.

**Do not use it when:**

- Adding or removing a party directly. Let [`MapEventSide`](../MapEventSide), encounter logic, and the relevant Action coordinate membership.
- Replacing the party's roster with `RosterToReceiveLoot...` properties. They are destinations selected by the engine, not disposable working rosters.
- Calling `Update()` or casualty callbacks to simulate a result. Those methods change the event snapshot and, for casualties, may change `PartyBase.MemberRoster`.

## Dependencies and ownership

- **Owner:** [`MapEventSide`](../MapEventSide) owns the list; [`MapEvent`](../MapEvent) owns both sides and the event lifecycle.
- **Bound object:** `Party` points to one `PartyBase`, which may be the main party, a MobileParty, a garrison, militia, or another settlement party.
- **Battle data:** `FlattenedTroopRoster`, `TroopRoster`, `ItemRoster`, `UniqueTroopDescriptor`, `MapEventSide`, and `BattleSideEnum` supply the per-event view.
- **Downstream:** `PlayerEncounter` consumes player loot destinations; `BattleRewardModel`, `CombatXpModel`, and campaign behaviors calculate rewards and consequences.
- **Persistence:** the record and its wounded/dead/routed rosters are part of the map-event save graph. Stable party identity is restored by the engine; do not persist a second object copy.

## Key members and timing

| Member | Purpose, side effect, and timing |
|---|---|
| `Party` | The owning `PartyBase`; available after the record is created and stable only while the event retains the party. |
| `Troops`, `HealthyManCountAtStart`, `ParticipatingTroopCount`, `HasTroopLimit` | Read the snapshot and Mission allocation boundary. `Troops` is not the live party roster. |
| `WoundedInBattle`, `DiedInBattle`, `RoutedInBattle` | Event-scoped casualty rosters filled by battle callbacks. Read them after the relevant callback/result phase. |
| `ContributionToBattle` | Contribution used by battle rewards and allocation logic; it is not a direct gold or renown grant. |
| `RosterToReceiveLootMembers/Prisoners/Items` | Resolve the legal destination for player or NPC loot. Access requires the player encounter and party lifecycle to be valid. |
| `Update()` | Rebuilds the flattened snapshot from `Party.MemberRoster`; call only at a host-defined synchronization point. |
| `OnTroopKilled/Wounded/Routed(...)` | Applies a battle result to the event snapshot and, where source code requires, the live party roster. Engine callbacks own their timing. |
| `OnRoundEnd(...)` and `OnTroopScoreHit(...)` | Update morale, XP, and contribution through Campaign Models; they are not arbitrary reward APIs. |
| `SetRenownInfluenceAndMoraleOnBattleEnd(...)` | Stores explained end results for later consumption; it does not itself award those values. |

## Real acquisition example

Read the player side from the active Campaign event and select the record by its `PartyBase`:

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.MapEvents;

public static int GetMainPartyStartingMen()
{
    MapEvent mapEvent = Campaign.Current.MapEventManager.MapEvents
        .FirstOrDefault(eventRecord => eventRecord.IsPlayerMapEvent);
    MapEventParty record = mapEvent?.PartiesOnSide(BattleSideEnum.Attacker)
        .FirstOrDefault(eventParty => eventParty.Party == PartyBase.MainParty);
    return record?.HealthyManCountAtStart ?? 0;
}
```

For a defender, use `BattleSideEnum.Defender`; always check that the record exists because a party can leave or be removed before resolution.

## Risks and crash boundaries

1. `Troops` is an event snapshot. Reading it as if it were the current `MemberRoster` can produce wrong counts after casualties, transfers, or troop allocation.
2. Casualty callbacks can mutate the live roster and use `UniqueTroopDescriptor` lookups. Calling them with a descriptor from another event can cause invalid roster access or duplicate losses.
3. Player loot properties route through `PlayerEncounter.Current`; reading them outside the player encounter can be null or semantically wrong, especially for AI battles.
4. Calling `Update()` after troop allocations are locked can erase the snapshot that the Mission supplier expects. Let `MapEventSide` own allocation and refresh timing.
5. Do not carry `MapEventParty`, `PartyBase`, or roster references past `MapEventEnded` into a save record. Store stable IDs or scalar results and reacquire the current party after load.

## Version note

The v1.4.5 implementation uses a `FlattenedTroopRoster` snapshot, saveable casualty rosters, and model-backed reward calculations. Constructor visibility, roster compatibility callbacks, and naval members may differ across versions; recheck the source before calling public callbacks directly.

## Navigation

- ↑ Parent: [Campaign API](../)
- ↔ Siblings: [`MapEvent`](../MapEvent) · [`MapEventSide`](../MapEventSide) · [`PartyBase`](../PartyBase)
- Related: [`TroopRoster`](../TroopRoster) · [`ItemRoster`](../ItemRoster) · [`PlayerEncounter`](../PlayerEncounter) · [`MapEventComponent`](../MapEventComponent)
- 中文: [MapEventParty](../../../../zh/api/campaign/MapEventParty)
