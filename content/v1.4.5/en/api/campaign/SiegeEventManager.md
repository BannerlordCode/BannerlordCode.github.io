---
title: "SiegeEventManager"
description: "The campaign-owned registry and tick loop for persistent siege events in v1.4.5."
---
# SiegeEventManager

**Namespace:** `TaleWorlds.CampaignSystem.Siege`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class SiegeEventManager`  
**Base:** none  
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Siege/SiegeEventManager.cs`

## Responsibility

`SiegeEventManager` owns the campaign-wide collection of active `SiegeEvent` objects and gives the campaign loop one place to create, tick, remove, and repair them after loading.

## Mental model

This is a campaign service, not a per-settlement helper and not a second player-siege state store. A new campaign constructs one manager and exposes it as `Campaign.Current.SiegeEventManager`; the `Campaign` object saves it, calls `Tick(float)` every campaign tick, and calls `OnAfterLoad()` after the save graph has been restored. The manager owns the list, while each `SiegeEvent` owns the besieged settlement, besieger camp, siege engines, and finalization rules.

Use it to inspect campaign siege events or to enter the low-level creation path from a flow that has already finished the encounter. For normal player interaction, pair creation with [`PlayerSiege`](../PlayerSiege) and its preparation/menu workflow. Do not construct a second manager, replace the campaign property, or call `Tick` from a mission or UI callback.

## Lifecycle and dependencies

```text
Campaign.OnNewGameCreatedInternal
  -> new SiegeEventManager()
  -> Campaign.Current.SiegeEventManager
EncounterGameMenuBehavior
  -> StartSiegeEvent(Settlement, MobileParty)
  -> PlayerSiege.StartPlayerSiege(BattleSideEnum.Attacker)
  -> PlayerSiege.StartSiegePreparation()
Campaign.Tick
  -> SiegeEventManager.Tick(dt)
  -> SiegeEvent.Tick(dt)
SiegeEvent finalization
  -> settlement/camp cleanup
  -> manager removes ReadyToBeRemoved entries on the next tick
```

The `[SaveableField(1)]` list is registered as part of the `SiegeEventManager` save definition. `SiegeEvent` and its two sides therefore remain part of the campaign save graph; this is why an independently created manager or an event not added through `StartSiegeEvent` is unsafe.

Related entry points are [`Campaign`](../Campaign), [`SiegeEvent`](../SiegeEvent), [`Settlement`](../Settlement), [`MobileParty`](../MobileParty), and [`PlayerSiege`](../PlayerSiege). Save graph behavior is described by [`SaveManager`](../../save-system/SaveManager).

## Public members

### `SiegeEvents`

`public MBReadOnlyList<SiegeEvent> SiegeEvents { get; }`

Returns the manager's current event list through a read-only view. The view is useful for finding the event attached to a settlement, inspecting its side state, or building a map notification. It is not a copy and it is not a mutation API; do not retain it across code that may finalize or remove events and do not cast it back to a mutable list.

### `StartSiegeEvent`

`public SiegeEvent StartSiegeEvent(Settlement settlement, MobileParty besiegerParty)`

Constructs `SiegeEvent(settlement, besiegerParty)`, appends it to the saveable list, marks `settlement.Party` visually dirty, and returns the event. The method does not open the strategy menu or activate the player map state. Those steps belong to [`PlayerSiege.StartPlayerSiege`](../PlayerSiege) and [`PlayerSiege.StartSiegePreparation`](../PlayerSiege).

Call it only when the settlement and besieger are already part of a valid siege transition. The game menu flow first finishes `PlayerEncounter`, then calls this method with `Settlement.CurrentSettlement` and `MobileParty.MainParty`; it then starts the player workflow.

### `Tick`

`public void Tick(float dt)`

Visits each event. An event whose `ReadyToBeRemoved` flag is set is removed with swap-and-remove; every other event receives `Tick(dt)`. Removal can change ordering, so callers must not assume `SiegeEvents` has stable indices while the campaign is ticking.

This is an engine-owned update hook. Calling it manually can double-advance construction, bombardment, strategy decisions, and finalization timing.

### `OnAfterLoad`

`public void OnAfterLoad()`

Forwards the post-load repair hook to every loaded `SiegeEvent`. `Campaign.OnSessionStart` calls it after the save graph is loaded and before normal session activity resumes. Use save/load hooks for mod state repair; do not use this method as a substitute for starting a new siege.

## Real acquisition example

The following mirrors the campaign menu's player-siege entry, with guards for a settlement that is already under siege:

```csharp
Settlement settlement = Settlement.CurrentSettlement;
MobileParty besieger = MobileParty.MainParty;

if (settlement != null && settlement.IsFortification && !settlement.IsUnderSiege)
{
    SiegeEvent siegeEvent = Campaign.Current.SiegeEventManager.StartSiegeEvent(settlement, besieger);
    PlayerSiege.StartPlayerSiege(BattleSideEnum.Attacker);
    PlayerSiege.StartSiegePreparation();
}
```

For read-only inspection, use the campaign-owned instance and the returned read-only list:

```csharp
foreach (SiegeEvent siegeEvent in Campaign.Current.SiegeEventManager.SiegeEvents)
{
    Settlement settlement = siegeEvent.BesiegedSettlement;
    if (settlement != null && settlement == Settlement.CurrentSettlement)
    {
        PlayerSiege.StartSiegePreparation();
        break;
    }
}
```

## Failure and save boundaries

- A raw `new SiegeEvent(settlement, besiegerParty)` that is not added to this manager is invisible to the manager tick and save graph. Prefer `StartSiegeEvent` inside the same transition that establishes the settlement and besieger relationships.
- Starting another event for an already besieged settlement can leave multiple owners of the same settlement state. Check `Settlement.IsUnderSiege` and let the existing `Settlement.SiegeEvent` drive the workflow.
- Do not call `Tick` from `CampaignBehavior`, `MissionBehavior`, or a menu callback. `Campaign` already calls it; a second call advances time twice and can make siege-engine or map-event state inconsistent.
- Do not keep a `SiegeEvent` reference after finalization without rechecking `ReadyToBeRemoved` and `settlement.SiegeEvent`. The manager removes finalized entries on a later campaign tick.
- `OnAfterLoad` is part of the load lifecycle. Calling it on a partially restored event can dereference incomplete camp or settlement state.

## Navigation

- **Parent:** [Campaign API index](../)
- **Siblings:** [`SiegeEvent`](../SiegeEvent), [`PlayerSiege`](../PlayerSiege), [`SiegeStrategy`](../SiegeStrategy), [`SiegeState`](../SiegeState)
- **Related:** [`Campaign`](../Campaign), [`Settlement`](../Settlement), [`MobileParty`](../MobileParty), [`SaveManager`](../../save-system/SaveManager)
