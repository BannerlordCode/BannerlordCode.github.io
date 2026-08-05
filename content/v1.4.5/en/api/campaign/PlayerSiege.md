---
title: "PlayerSiege"
description: "The static player-facing siege workflow facade: preparation menus, map-state activation, and siege missions."
---
# PlayerSiege

**Namespace:** `TaleWorlds.CampaignSystem.Siege`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class PlayerSiege`  
**Base:** none  
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Siege/PlayerSiege.cs`

## Responsibility

`PlayerSiege` translates the current player party's siege event into the menu, map-state, campaign-event, and siege-Mission transitions expected by the campaign UI.

## Mental model

This is a static workflow facade, not an object that stores an independent `PlayerSiegeEvent`. `PlayerSiegeEvent` first reads `MobileParty.MainParty.SiegeEvent`; if that is null, it falls back to `MobileParty.MainParty.CurrentSettlement.SiegeEvent`. The actual event is created by [`SiegeEventManager`](../SiegeEventManager), normally before `StartPlayerSiege` is called.

The normal order is: create the event, call `StartPlayerSiege`, open preparation with `StartSiegePreparation`, then call `StartSiegeMission` only for a valid wall-assault state. Finalization is normally initiated by [`SiegeEvent`](../SiegeEvent), which calls `OnSiegeEventFinalized` and then `FinalizePlayerSiege`. Do not call these methods as generic “start/stop siege” toggles from a mission view.

## Workflow and dependencies

```text
EncounterGameMenuBehavior
  -> Campaign.Current.SiegeEventManager.StartSiegeEvent(settlement, MobileParty.MainParty)
  -> PlayerSiege.StartPlayerSiege(BattleSideEnum.Attacker)
  -> PlayerSiege.StartSiegePreparation()
strategy menu / encounter consequences
  -> PlayerSiege.StartSiegeMission()
SiegeEvent.FinalizeSiegeEvent()
  -> PlayerSiege.OnSiegeEventFinalized(besiegerPartyDefeated)
  -> PlayerSiege.FinalizePlayerSiege()
```

`StartPlayerSiege` holds the main party when it is not the leader of an army, activates `MapState` for a non-simulation flow, and dispatches `OnPlayerSiegeStarted`. `FinalizePlayerSiege` marks the settlement visual dirty, holds the main party, and deactivates the map-state hook. The settlement and event are cleaned by `SiegeEvent.FinalizeSiegeEvent`, not by clearing a static field here.

The mission handoff uses [`CampaignMission`](../CampaignMission), [`Settlement.SiegeState`](../SiegeState), [`PlayerEncounter`](../PlayerEncounter), and [`MapState`](../MapState). Menu and campaign callbacks are observable through [`CampaignEvents`](../CampaignEvents).

## State properties

### `PlayerSiegeEvent`

`public static SiegeEvent PlayerSiegeEvent { get; }`

Resolves the event attached to the main party or its current settlement every time it is read. It can become null during finalization; treat it as a snapshot and recheck it before using the event.

### `BesiegedSettlement`

`public static Settlement BesiegedSettlement { get; }`

Returns `PlayerSiegeEvent?.BesiegedSettlement`. It is the settlement whose wall state, siege engines, and party visual state drive the player mission.

### `PlayerSide`

`public static BattleSideEnum PlayerSide { get; }`

Returns `Attacker` when `MobileParty.MainParty.BesiegerCamp` is non-null; otherwise it returns `Defender`. It reflects the current party relationship, so do not cache it before the siege event is established.

### `IsRebellion`

`public static bool IsRebellion { get; }`

Delegates to `BesiegedSettlement.IsUnderRebellionAttack()` when a settlement exists. It changes the finalization menu branch; it is not a command to start a rebellion.

## Methods and timing

### `StartPlayerSiege`

`public static void StartPlayerSiege(BattleSideEnum playerSide, bool isSimulation = false, Settlement settlement = null)`

Prepares the main party, optionally activates the map state, and dispatches `OnPlayerSiegeStarted`. The current v1.4.5 implementation does not create the event inside `SetPlayerSiegeEvent`; the caller must establish the event through `SiegeEventManager.StartSiegeEvent` first. The `playerSide` and `settlement` parameters are part of the public contract, but the workflow derives its later state from the live main-party and settlement relationships.

### `StartSiegePreparation`

`public static void StartSiegePreparation()`

Exits an existing menu context, if any, and activates `menu_siege_strategies`. Call it after a valid player siege event exists. It is a menu transition, not a replacement for event creation.

### `StartSiegeMission`

`public static void StartSiegeMission(Settlement settlement = null)`

For `Settlement.SiegeState.OnTheWalls`, collects prepared and active engines from both `ISiegeEventSide` values, obtains the wall level and center scene, and calls `CampaignMission.OpenSiegeMissionWithDeployment`. An invalid state triggers the source assertion; an `InTheLordsHall` state is not the wall-deployment path. A sally-out/ambush mission uses [`PlayerEncounter.StartSiegeAmbushMission`](../PlayerEncounter) instead.

### `OnSiegeEventFinalized`

`public static void OnSiegeEventFinalized(bool besiegerPartyDefeated)`

Chooses the post-siege menu behavior. Rebellions leave the menu; a defending player gets `siege_attacker_defeated` or `siege_attacker_left`; an attacking player in an army may leave the settlement and return to `army_wait`. The bool describes the final siege result and must come from the event finalization path.

### `FinalizePlayerSiege`

`public static void FinalizePlayerSiege()`

If an event still resolves, marks the besieged party visual state dirty, holds the main party, and calls `MapState.OnPlayerSiegeDeactivated`. It does not itself clear `Settlement.SiegeEvent`; that cleanup is owned by `SiegeEvent.FinalizeSiegeEvent` and `Settlement.FinalizeSiegeEvent`.

## Real player entry example

This is the same ordering used by the town-besiege menu consequence:

```csharp
Settlement settlement = Settlement.CurrentSettlement;

if (settlement != null && settlement.IsFortification && !settlement.IsUnderSiege)
{
    Campaign.Current.SiegeEventManager.StartSiegeEvent(settlement, MobileParty.MainParty);
    PlayerSiege.StartPlayerSiege(BattleSideEnum.Attacker);
    PlayerSiege.StartSiegePreparation();
}
```

Start the wall mission only after the preparation flow has left a live event and the settlement is still at the wall stage:

```csharp
Settlement settlement = PlayerSiege.BesiegedSettlement;

if (PlayerSiege.PlayerSiegeEvent != null &&
    settlement != null &&
    settlement.CurrentSiegeState == Settlement.SiegeState.OnTheWalls)
{
    PlayerSiege.StartSiegeMission();
}
```

## Failure boundaries

- `StartPlayerSiege` does not replace the missing event. Calling it before `SiegeEventManager.StartSiegeEvent` can activate menus and map state with no valid siege to consume.
- `PlayerSiegeEvent` can resolve through either the main party or the current settlement. A party leaving the settlement can change the result; re-read it at each transition instead of caching it across menus.
- Do not call `StartSiegeMission` for `InTheLordsHall`, `Invalid`, a finalized event, or a null settlement. The wall deployment inputs and scene are only valid for the `OnTheWalls` path.
- Do not call `FinalizePlayerSiege` as a shortcut to abandon a siege while a MapEvent or Mission is still active. The event finalization sequence must clear settlement references and dispatch campaign callbacks in order.
- `StartPlayerSiege(BattleSideEnum playerSide, isSimulation: true)` skips map-state activation but still dispatches the player-siege campaign event. Simulation code must not assume a visible `MapState` exists afterward.

## Navigation

- **Parent:** [Campaign API index](../)
- **Siblings:** [`SiegeEventManager`](../SiegeEventManager), [`SiegeEvent`](../SiegeEvent), [`SiegeState`](../SiegeState), [`CampaignMission`](../CampaignMission)
- **Related:** [`Settlement`](../Settlement), [`PlayerEncounter`](../PlayerEncounter), [`MapState`](../MapState), [`CampaignEvents`](../CampaignEvents)
