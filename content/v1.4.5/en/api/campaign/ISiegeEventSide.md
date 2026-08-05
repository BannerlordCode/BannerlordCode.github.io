---
title: "ISiegeEventSide"
description: "The common attacker/defender contract for parties, siege engines, strategy, bombardment, and finalization."
---
# ISiegeEventSide

**Namespace:** `TaleWorlds.CampaignSystem.Siege`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public interface ISiegeEventSide`  
**Base:** none  
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Siege/ISiegeEventSide.cs`

## Responsibility

`ISiegeEventSide` gives `SiegeEvent` one contract for its attacker and defender sides, even though the shipped implementations are different: [`BesiegerCamp`](../BesiegerCamp) represents the attacker and [`Settlement`](../Settlement) represents the defender.

## Mental model

Obtain a side from `SiegeEvent.GetSiegeEventSide(BattleSideEnum)`. The interface is a live view into one event side, not a detached snapshot and not a factory for a new side. Its properties expose the event, side, selected [`SiegeStrategy`](../SiegeStrategy), killed-troop count, engines, and active missiles; its methods let the event lifecycle enumerate parties, update side counters, resolve bombardment targets, and finalize the side.

The side contract exists so strategy and Mission code can work with either role. It does not make attacker and defender interchangeable in every semantic detail: `BesiegerCamp` filters blockade parties by naval capability, while `Settlement` obtains defenders from `EncounterModel`; both implementations use the supplied `MapEvent.BattleTypes` to decide involved parties.

## Lifecycle and dependencies

```text
SiegeEvent
  -> GetSiegeEventSide(Attacker | Defender)
  -> ISiegeEventSide.InitializeSiegeEventSide()
  -> strategy / construction / bombardment ticks
  -> ISiegeEventSide.FinalizeSiegeEvent()
```

`SiegeEvent` passes the side to `AdvanceStrategy`, `ConstructionTick`, `BombardTick`, and siege-engine helpers. `SiegeStrategyActionModel` reads `SiegeStrategy`; `MapEvent` consumes involved `PartyBase` values for siege, sally-out, and blockade battle types; [`PlayerSiege`](../PlayerSiege) passes both sides' prepared engines to [`CampaignMission`](../CampaignMission).

## Members by role

### Identity and state

- `SiegeEvent SiegeEvent { get; }` links back to the owning event.
- `SiegeStrategy SiegeStrategy { get; }` is the current strategy record used by the action model.
- `BattleSideEnum BattleSide { get; }` identifies attacker or defender.
- `int NumberOfTroopsKilledOnSide { get; }` is the event-side kill counter.
- `SiegeEvent.SiegeEnginesContainer SiegeEngines { get; }` owns construction, reserve, and deployment slots.
- `MBReadOnlyList<SiegeEvent.SiegeEngineMissile> SiegeEngineMissiles { get; }` exposes active missile records through a read-only view.

### Party enumeration

`GetInvolvedPartiesForEventType`, `GetNextInvolvedPartyForEventType`, and `HasInvolvedPartyForEventType` accept `MapEvent.BattleTypes`, defaulting to `Siege`. Use the default for a normal siege, and pass `BlockadeBattle` or another event type when matching a map event's actual party composition. The `ref int partyIndex` overload is an iterator protocol: preserve and update the index instead of assuming party list positions are permanent.

### Event updates

- `OnTroopsKilledOnSide(int killCount)` updates the side's kill counter.
- `AddSiegeEngineMissile` and `RemoveDeprecatedMissiles` manage missile records across bombardment ticks.
- `SetSiegeStrategy(SiegeStrategy strategy)` changes the live side's strategy reference; it does not execute an action immediately.
- `InitializeSiegeEventSide()` allocates side runtime state and default strategy data. It belongs to event construction/load repair.
- `GetAttackTarget(ISiegeEventSide siegeEventSide, SiegeEngineType siegeEngine, int siegeEngineSlot, out SiegeBombardTargets targetType, out int targetIndex)` asks the side to resolve a bombardment target and returns both target type and slot index.
- `FinalizeSiegeEvent()` releases or closes side-owned siege state as the parent event ends.

## Real inspection example

This reads the side corresponding to the player's current role and enumerates parties for the actual siege event type:

```csharp
SiegeEvent siegeEvent = PlayerSiege.PlayerSiegeEvent;

if (siegeEvent != null)
{
    ISiegeEventSide side = siegeEvent.GetSiegeEventSide(PlayerSiege.PlayerSide);

    foreach (PartyBase party in side.GetInvolvedPartiesForEventType(MapEvent.BattleTypes.Siege))
    {
        if (party.MobileParty != null)
        {
            MobileParty mobileParty = party.MobileParty;
            string partyId = mobileParty.StringId;
        }
    }
}
```

To choose a built-in strategy, use the role-specific registered object and the same live side:

```csharp
SiegeEvent siegeEvent = PlayerSiege.PlayerSiegeEvent;

if (siegeEvent != null && PlayerSiege.PlayerSide == BattleSideEnum.Attacker)
{
    siegeEvent.GetSiegeEventSide(BattleSideEnum.Attacker)
        .SetSiegeStrategy(DefaultSiegeStrategies.BreachWalls);
}
```

## Failure and save boundaries

- Do not implement or construct a side yourself for a normal mod workflow. The event's `BesiegerCamp` and `Settlement` carry saveable state, event links, and role-specific party rules.
- Do not pass the wrong `MapEvent.BattleTypes`. A blockade side intentionally excludes non-naval besiegers; using the default `Siege` list for a `BlockadeBattle` can produce a party set that does not match the map event.
- Do not call `InitializeSiegeEventSide` or `FinalizeSiegeEvent` from a Mission callback. They allocate and release parent-owned state and must remain paired with `SiegeEvent` lifecycle transitions.
- `SiegeEngineMissiles` and `SiegeEngines` are live event state. Do not mutate their internals while the event tick is resolving bombardment or while a siege Mission is reading deployment data.
- A side can outlive a particular menu phase but not the parent event. Recheck `side.SiegeEvent`, `settlement.SiegeEvent`, and `PlayerSiege.PlayerSiegeEvent` after finalization or load repair.

## Navigation

- **Parent:** [Campaign API index](../)
- **Siblings:** [`SiegeEvent`](../SiegeEvent), [`SiegeEventManager`](../SiegeEventManager), [`SiegeStrategy`](../SiegeStrategy), [`SiegeState`](../SiegeState)
- **Implementations:** [`BesiegerCamp`](../BesiegerCamp), [`Settlement`](../Settlement)
- **Related:** [`PlayerSiege`](../PlayerSiege), [`CampaignMission`](../CampaignMission), [`SiegeStrategyActionModel`](../SiegeStrategyActionModel)
