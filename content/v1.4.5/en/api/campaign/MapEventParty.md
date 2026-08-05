---
title: "MapEventParty"
description: "The v1.4.5 Campaign record that binds one PartyBase to a MapEvent side, tracks its battle roster and casualties, and carries outcome data into Campaign resolution."
---
# MapEventParty

**Namespace:** `TaleWorlds.CampaignSystem.MapEvents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class MapEventParty`  
**Base:** `object` (implicit)  
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapEvents/MapEventParty.cs`

## Responsibility in one sentence

This record is the Campaign-side battle ledger for one `PartyBase`: it keeps a flattened troop view tied to unique descriptors, records casualties and contribution, and exposes the rosters and reward values used when the owning `MapEvent` resolves.

## Mental model

`MapEventParty` is not a second `PartyBase`, and it is not a generic `TroopRoster`. It is one participant entry inside a [MapEventSide](../MapEventSide). The side creates it with the actual `PartyBase`, then the entry snapshots that party's `MemberRoster` into a `FlattenedTroopRoster`. During simulation or a player Mission, unique troop descriptors identify the same logical men while the entry records wounded, killed, routed, hit XP, morale effects, loot destinations, and battle contribution.

The constructor is internal. `MapEvent.Initialize` creates the two sides; `MapEventSide.AddPartyInternal` creates a `MapEventParty`, adds it to that side's party list, and calls `MapEvent.AddInvolvedPartyInternal` for event bookkeeping. The object does not expose a `MapEvent` or `MapEventSide` property. To determine its side, enumerate `mapEvent.PartiesOnSide(BattleSideEnum.Attacker)` or `mapEvent.PartiesOnSide(BattleSideEnum.Defender)`, or use the bound `PartyBase.Side`; do not infer a side from list position or from the party's current world location.

The roster has two layers. `Party` and its live `MemberRoster`, `PrisonRoster`, and `ItemRoster` are the Campaign party state. `Troops` is the event's flattened allocation view, rebuilt by `Update()` and consumed by `MapEventSide` and `PartyGroupTroopSupplier`. Mission agents are created from that allocation view, but the Campaign party remains the authority for the final roster. Calling the public callback methods yourself can apply casualties, XP, or morale twice; normal callers are the Mission supplier and the map-event simulation code.

Use this type to read a participant's event-time state during an active event or to consume final values at the documented Campaign boundary. Do not construct it, cache it after finalization, use an old `UniqueTroopDescriptor` in a later battle, or treat its public setters and callbacks as general-purpose party mutation APIs.

## Dependency graph

```text
StartBattleAction / EncounterModel ── MapEvent ── MapEventSide
                                                   └─ MapEventParty ── PartyBase
                                                                    ├─ MemberRoster / PrisonRoster / ItemRoster
                                                                    ├─ FlattenedTroopRoster
                                                                    └─ casualty / loot / reward ledger
MapEventSide ── PartyGroupTroopSupplier ── Mission agents
MapEvent ── BattleRewardModel / CombatXpModel / PartyTrainingModel
MapEvent ── CampaignEvents.MapEventStarted / MapEventEnded
MapEventSide.Clear ── removes event-time MapEventParty records
```

**Creation and side binding:** [MapEvent](../MapEvent) creates [MapEventSide](../MapEventSide); the side creates this record from a real [PartyBase](../PartyBase).  
**Roster and Mission bridge:** [PartyGroupTroopSupplier](../PartyGroupTroopSupplier) calls the side's mission preparation and allocation methods; `PartyGroupAgentOrigin` routes agent casualty and hit callbacks back through the supplier.  
**Outcome rules:** [BattleRewardModel](../BattleRewardModel) calculates morale and loot choices; [CombatXpModel](../CombatXpModel) calculates hit XP; [PartyTrainingModel](../PartyTrainingModel) is used when XP is committed.  
**Actions, events, and save:** `StartBattleAction` starts the containing event; Campaign events bracket the event; `MapEventSide` stores these entries in the saveable event graph and clears them during finalization.

## Creation, binding, and side semantics

The binding chain is concrete and one-way:

1. A supported battle-start path creates or finds a `MapEvent`. `StartBattleAction` may call `EncounterModel` and a concrete component factory before the event exists.
2. `MapEvent.Initialize` creates a defender `MapEventSide` and an attacker `MapEventSide`, each with a leader `PartyBase`.
3. `MapEventSide.AddPartyInternal(party)` constructs `new MapEventParty(party)`, appends it to `_battleParties`, then calls `MapEvent.AddInvolvedPartyInternal`.
4. The map event and side recalculate strength, visibility, troop setup, and event positions. Additional parties join through the side/encounter flow and receive the same binding treatment.
5. The entry's `Party` never changes through a public setter. The `MapEventParty` itself has no public side reference; use the containing event and `BattleSideEnum` when side identity matters.

This means a party roster and a map-event roster are related but not interchangeable. A party can leave the event, become inactive, or be redirected to a settlement prison roster while the event is resolving. Reacquire the current entry from the active `MapEvent` at the point where the value is needed.

## State and roster members

| Members | Meaning and timing |
|---|---|
| `Party`, `IsNpcParty` | The real `PartyBase` participant and whether it is not `PartyBase.MainParty`. `Party` is the identity key used by `MapEventSide` and reward distribution. |
| `HealthyManCountAtStart` | The party's healthy count captured by the internal constructor after the first `Update()`. It is used to distribute mission or simulation troop capacity; it is not the current count. |
| `Troops` | The current `FlattenedTroopRoster` event view. Its `UniqueTroopDescriptor` values are the keys used by suppliers and casualty callbacks; they are valid only for this event's current allocation. |
| `ParticipatingTroopCount`, `HasTroopLimit` | The side's mission/simulation allocation writes the participating count. `HasTroopLimit` is true only when a non-negative participating count is lower than the starting healthy count. Read after mission preparation, not during initial construction. |
| `WoundedInBattle`, `DiedInBattle`, `RoutedInBattle` | Event casualty rosters. They are updated by the corresponding troop callbacks and are used by Campaign resolution and post-battle logic. |
| `ContributionToBattle` | Starts at `1`, then grows from hit XP and ship score-hit calculations. It participates in reward and loot-share calculations; it is not a general party strength value. |
| `Ships` | Read-only ship collection from `Party.Ships` for naval events. It is meaningful only while the party and event are valid. |
| `GainedRenown`, `GainedRenownExplained` | Final renown result and its explanation, assigned when the event calculates winner shares. The Campaign commits positive renown through `GainRenownAction`. |
| `GainedInfluence`, `GainedInfluenceExplained` | Final influence result and explanation. The Campaign commits it through the battle-specific influence action. |
| `GainedMorale`, `GainedMoraleExplained` | Final morale result and explanation. Mobile parties receive the committed value as recent-events morale. |
| `PlunderedGold`, `GoldLost` | Gold amounts staged for resolution. `MapEvent` commits them through `GiveGoldAction` or party-trade gold handling, then resets both values to zero. Do not set them merely to display a number. |

### Loot destination properties

The three loot-destination properties, `RosterToReceiveLootMembers`, `RosterToReceiveLootPrisoners`, and `RosterToReceiveLootItems`, deliberately switch by party identity:

- For `PartyBase.MainParty`, `RosterToReceiveLootMembers`, `RosterToReceiveLootPrisoners`, and `RosterToReceiveLootItems` return the corresponding rosters from `PlayerEncounter.Current`.
- For an NPC party, members go to `Party.MemberRoster`, items go to `Party.ItemRoster`, and prisoners go to `Party.PrisonRoster`, except a militia or garrison party redirects prisoners to its home settlement's party prison roster.

These properties describe where the Campaign resolution will place loot. They are not a general inventory service and should only be read while the corresponding player encounter or party is active.

## Methods by responsibility

### Read the event ledger

`ToString()` returns `Party.Name`. `GetTroop(UniqueTroopDescriptor)` returns the descriptor's `CharacterObject`, and `GetTroopState(UniqueTroopDescriptor)` returns its `RosterTroopState`. Obtain descriptors from the current `PartyGroupTroopSupplier` or event side; do not save one and apply it to a later event.

`Update()` rebuilds `_roster` from `Party.MemberRoster`. Heroes already present in `WoundedInBattle` or `DiedInBattle` are excluded; regular troops are added with their current count and wounded count. The side calls it when preparing a mission or simulation unless troop allocations are locked. Calling it after allocation can invalidate the relationship between ready troops, allocated descriptors, and Mission agents.

### Receive Mission and simulation callbacks

`OnTroopKilled`, `OnTroopWounded`, and `OnTroopRouted` update the flattened roster and the live party roster. They also populate the corresponding casualty roster; hero and regular-troop handling is intentionally different. `OnTroopScoreHit` queries `Campaign.Current.Models.CombatXpModel`, adds non-team-kill XP to the flattened entry, raises the hero combat-hit event for heroes, and increases contribution. `OnRoundEnd` asks `BattleRewardModel` for a mobile party's morale change.

The naval callbacks apply the same Campaign boundary to ships: `OnShipSunk` changes mobile-party morale through `BattleRewardModel`, `OnShipDamaged` applies ship damage and morale, and `OnShipScoreHit` increases contribution based on damage and crew capacity.

`SetRenownInfluenceAndMoraleOnBattleEnd` stores the three explained final values supplied by `MapEvent` after reward calculation. It is a result-transfer method, not a way to award renown, influence, or morale immediately. The internal commit methods then use `GainRenownAction`, the battle influence action, mobile-party morale, `GiveGoldAction`, `PartyTrainingModel`, and related Campaign logic.

## Real acquisition path

Read a participant through the active player's `MapEvent` and a side list. This preserves the event-to-side-to-party relationship and avoids the internal constructor:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.MapEvents;
using TaleWorlds.CampaignSystem.Party;

public static void PrintAttackerLedger()
{
    MapEvent mapEvent = MapEvent.PlayerMapEvent;
    if (mapEvent == null || mapEvent.IsFinalized)
    {
        return;
    }

    foreach (MapEventParty participant in mapEvent.PartiesOnSide(BattleSideEnum.Attacker))
    {
        PartyBase party = participant.Party;
        Debug.Print($"{party.Name}: start={participant.HealthyManCountAtStart}, wounded={participant.WoundedInBattle.TotalManCount}, killed={participant.DiedInBattle.TotalManCount}");
    }
}
```

When the side matters for one participant, use the event's side collection rather than a cached `MapEventParty`:

```csharp
MapEvent mapEvent = MobileParty.MainParty?.MapEvent;
if (mapEvent != null && !mapEvent.IsFinalized)
{
    foreach (MapEventParty participant in mapEvent.PartiesOnSide(BattleSideEnum.Defender))
    {
        if (participant.Party.Side == BattleSideEnum.Defender)
        {
            int allocatedAtStart = participant.HealthyManCountAtStart;
            Debug.Print($"Defender {participant.Party.Name}: {allocatedAtStart}");
        }
    }
}
```

The second check is intentionally redundant for a normal event: it demonstrates that side identity comes from the containing event and the bound `PartyBase`, not from a property on `MapEventParty`.

## Mission and Campaign settlement boundary

`SandBoxMissions` provides the real Mission bridge. Its battle and hideout/siege entry points construct suppliers such as:

```csharp
IMissionTroopSupplier attackers = new PartyGroupTroopSupplier(
    MapEvent.PlayerMapEvent,
    BattleSideEnum.Attacker,
    null,
    null);
```

The v1.4.5 source also constructs a defender supplier with `BattleSideEnum.Defender` and can pass a real priority `FlattenedTroopRoster` or an allocation predicate that receives both `UniqueTroopDescriptor` and `MapEventParty`. The supplier resolves the event side, calls `MakeReadyForMission`, allocates descriptors, and creates `PartyGroupAgentOrigin` objects. Agent death, wounds, routing, and score hits then flow back through `PartyGroupTroopSupplier` to `MapEventSide` and this record.

The settlement boundary is therefore:

- **Mission:** scene, Agent, Team, allocation, and combat presentation. A Mission callback can identify the originating party through `PartyGroupAgentOrigin.Party`, but it must not treat the Agent roster as the persistent Campaign roster.
- **Campaign:** `MapEventParty` casualty rosters, `Party.MemberRoster`, contribution, reward shares, loot destinations, XP, morale, gold, and final party cleanup.
- **Finalization:** `MapEvent` calculates rewards, calls `SetRenownInfluenceAndMoraleOnBattleEnd`, commits the result through Actions and Models, dispatches `MapEventEnded`, and eventually clears both side lists. Read and copy the values before discarding the event-time reference.

AI simulation can use the same `MapEventSide` and `MapEventParty` callbacks without opening a Mission. A Mission is not evidence that a `MapEventParty` owns the battle; it is only one consumer of the Campaign event ledger.

## Events, Actions, Models, and save behavior

- **Action:** [StartBattleAction](../../campaign-ext/StartBattleAction) starts the containing `MapEvent`; it does not expose a public `MapEventParty` constructor. Party roster changes and gold/reward commits remain in the owning Campaign protocol and Actions.
- **Events:** `CampaignEvents.MapEventStarted`, party-added dispatch, and `CampaignEvents.MapEventEnded` define the event window. Read participants in the start or active-event callbacks, and consume final casualty/reward data at the end boundary.
- **Models:** `CombatXpModel.GetXpFromHit` supplies hit XP; `BattleRewardModel` supplies round and ship morale and loot calculations; `PartyTrainingModel` is used when the internal XP commit runs. The entry stores results but does not replace these Models.
- **Actions:** final commits use `GainRenownAction`, the battle influence action, and `GiveGoldAction`; direct changes to the entry's staged values do not replace those side effects.
- **Save:** `MapEventSide._battleParties` is saveable, and `MapEventParty` marks `Party`, `_roster`, casualty rosters, participation values, and gold fields with save metadata. The source also contains load compatibility for older versions of routed and explained reward data. Do not serialize a custom reference to this object; save stable party identifiers and reacquire the active entry after Campaign load.

## Risks and cleanup

- **Invalid descriptor:** `GetTroop`, `GetTroopState`, and callback methods index the current flattened roster. A descriptor from another event, from before `Update()`, or from after allocation cleanup can fail or update the wrong logical phase.
- **Manual casualty callbacks:** Calling `OnTroopKilled`, `OnTroopWounded`, `OnTroopRouted`, or `OnTroopScoreHit` from a behavior duplicates the Mission/simulation result and can remove, wound, XP, or reward the same troop twice.
- **Unsafe `Update()`:** Rebuilding the flattened roster after `PartyGroupTroopSupplier` has allocated troops can desynchronize `_allocatedTroops`, `PartyGroupAgentOrigin`, and casualty callbacks.
- **Player loot rosters:** The main-party loot properties dereference `PlayerEncounter.Current`; use them only during the active player encounter. NPC militia and garrison prisoners use the home settlement prison roster, not necessarily `Party.PrisonRoster`.
- **Direct result writes:** Setting `PlunderedGold` or `GoldLost`, or treating explained reward fields as immediate currency, can duplicate or bypass the later `MapEvent` commit. Read them at the reward boundary unless a controlled engine-compatible extension owns the entire flow.
- **Finalization:** After `MapEventEnded`, `MapEventSide.Clear` removes the entries. Do not cache a `MapEventParty`, its rosters, or its `PartyGroupTroopSupplier` for later ticks, saves, or another battle.
- **Mission confusion:** `Mission.Current` can be null for AI simulation even though a `MapEventParty` is active. Conversely, a Mission Agent can be removed before Campaign result commit; use the Campaign callback chain for persistent outcomes.

## Version note

This page follows the v1.4.5 decompiled source. Naval callbacks, reward models, save migration fields, and Mission supplier behavior can change between versions; recheck `MapEventParty`, `MapEventSide`, `PartyGroupTroopSupplier`, and `SandBoxMissions` for the target version.

## Navigation

- ↑ Parent: [Campaign API](../)
- ↔ Siblings: [MapEvent](../MapEvent) · [MapEventSide](../MapEventSide) · [PartyBase](../PartyBase)
- Roster and Mission bridge: [TroopRoster](../TroopRoster) · [PartyGroupTroopSupplier](../PartyGroupTroopSupplier) · [Mission](../../mission/Mission)
- Outcome rules: [BattleRewardModel](../BattleRewardModel) · [CombatXpModel](../CombatXpModel) · [PartyTrainingModel](../PartyTrainingModel)
- Related: [Campaign](../Campaign) · [CampaignEvents](../CampaignEvents) · [StartBattleAction](../../campaign-ext/StartBattleAction)
- 中文: [MapEventParty](../../../../zh/api/campaign/MapEventParty)
