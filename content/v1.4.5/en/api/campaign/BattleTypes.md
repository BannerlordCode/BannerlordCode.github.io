---
title: "MapEvent.BattleTypes: battle-flow kind"
description: "The v1.4.5 nested enum that tells MapEvent, encounter models, settlement party selection, and siege logic which Campaign battle flow is active."
---
# MapEvent.BattleTypes

**Namespace:** `TaleWorlds.CampaignSystem.MapEvents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public enum MapEvent.BattleTypes` (nested in `MapEvent`)  
**Base:** `System.Enum` (underlying type `int`)  
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapEvents/MapEvent.cs`

## Responsibility

This nested enum classifies the Campaign battle flow stored by [MapEvent](../MapEvent). It selects the encounter component and settlement/siege party rules, and lets Campaign code distinguish raids, assaults, sally-outs, hideouts, and blockade battles. It is **not** an independent `BattleTypes` class or a namespace-level enum: mod code should refer to it as `MapEvent.BattleTypes`.

## Mental model

`MapEvent.BattleTypes` is a label owned by one `MapEvent`, not a factory and not a Mission scene identifier. `MapEvent._mapEventType` is saveable, while `MapEvent.EventType` exposes the current value. [StartBattleAction](../../campaign-ext/StartBattleAction) chooses the value from the attacker, defender, settlement, current siege, and naval context, then passes it into `EncounterModel.CreateMapEventComponentForEncounter` when a new event is needed. The component and `MapEvent.Initialize(...)` establish the rest of the event state before it is registered with `Campaign.Current.MapEventManager`.

The value can be affected by the current event context. During party addition, `MapEvent` can change a siege assault to `SiegeOutside`, or turn an existing siege/blockade event into `SallyOut` or `BlockadeSallyOutBattle` when a garrison party joins. Always read `mapEvent.EventType` at the point of use instead of caching the type from the creation path.

`SiegeEvent` uses the same nested type to select involved parties from the besieger camp and besieged settlement. Its `GetCurrentBattleType()` reads the current leader party's `MapEvent.EventType` and falls back to `MapEvent.BattleTypes.Siege` when no map event is attached. This is why a siege object and a siege map battle must be treated as related but different Campaign objects.

## When to use it, and when not to

- **Use it to branch on current Campaign state:** Read `MapEvent.EventType` and handle the type-specific rules before applying rewards, UI, party selection, or diagnostics.
- **Use it with the existing API:** `StartBattleAction.Apply` or its explicit wrappers choose the type and create/join the correct event; `MapEventManager.StartSiegeMapEvent` and sibling methods are the direct manager paths for specific map events.
- **Do not instantiate it as a type:** `BattleTypes` has no independent object lifecycle. Write `MapEvent.BattleTypes.Raid`, not `new BattleTypes()` or a fictional `TaleWorlds.CampaignSystem.MapEvents.BattleTypes` class.
- **Do not treat it as a Mission type:** `Siege`, `SallyOut`, and `BlockadeBattle` are Campaign event classifications. Mission projection is a later boundary handled by the player encounter and campaign mission code.
- **Do not write `MapEvent.EventType`:** `EventType` is a getter over private state. Forcing a different value would skip component initialization, party selection, settlement transitions, and siege bookkeeping.
- **Do not assume `None` means a normal empty battle:** it is the default value for `MapEvent.Initialize` and is also used by the siege-ambush component path. Inspect the component and event context when `None` is observed.

## Dependencies

The key dependency flow is:

1. [StartBattleAction](../../campaign-ext/StartBattleAction) and [EncounterModel](../EncounterModel) choose `MapEvent.BattleTypes` and pass it into `MapEvent.Initialize(...)`, which exposes it through `MapEvent.EventType`.
2. `MapEvent.BattleTypes` selects the [MapEventComponent](../MapEventComponent), simulation rules, and settlement party selection.
3. [SiegeEvent](../SiegeEvent) uses the type in `GetInvolvedPartiesForEventType(...)`.
4. `MapEvent.FinalizeEventAux()` passes the type to `SiegeEvent.OnBeforeSiegeEventEnd(...)` and `CampaignEventDispatcher.SiegeCompleted(...)`.

- **Creation and selection:** [StartBattleAction](../../campaign-ext/StartBattleAction), [EncounterModel](../EncounterModel), [MapEventManager](../MapEventManager), and the event components under the MapEvents namespace.
- **Owner and readers:** [MapEvent](../MapEvent) exposes `EventType`; [MapEventSide](../MapEventSide), [Settlement](../Settlement), and encounter models use the value to select parties and simulation behavior.
- **Siege boundary:** [SiegeEvent](../SiegeEvent), `BesiegerCamp`, and the besieged [Settlement](../Settlement) use the type to merge involved parties and interpret who won a siege-related battle.
- **Player boundary:** [CampaignMission](../CampaignMission) and [Mission](../../mission/Mission) consume the Campaign event through an encounter; the enum itself does not create a Mission.
- **Persistence:** `MapEvent._mapEventType` is marked `[SaveableField(110)]`; [SaveManager](../../save-system/SaveManager) restores it as part of the `MapEvent` object graph.

## Values and call timing

The source declares no explicit numeric assignments, so v1.4.5 values are sequential:

| Value | Numeric value | Meaning and source-backed timing |
|---|---:|---|
| `None` | `0` | Default/sentinel passed by `MapEvent.Initialize` when no specific type is supplied. `SiegeAmbushEventComponent.CreateSiegeAmbushEvent` uses that default; `StartBattleAction.Apply` begins with it and resolves a concrete type from context. |
| `FieldBattle` | `1` | Open-party battle, and the fallback for a village encounter or a battle with no settlement. Used by `ApplyStartBattle` and `FieldBattleEventComponent`. |
| `Raid` | `2` | A settlement raid. `ApplyStartRaid` and `RaidEventComponent.CreateRaidEvent` use it; raid component finalization handles the village damage and raid-specific completion. |
| `IsForcingVolunteers` | `3` | Village encounter that forces volunteers. The matching component changes the village to its forced-volunteers state on initialization and returns it to normal on finalization. |
| `IsForcingSupplies` | `4` | Village encounter that forces supplies. The matching component owns the forced-supplies village state and completion callback. |
| `Siege` | `5` | Assault against a fortified settlement. `MapEventManager.StartSiegeMapEvent` and `StartBattleAction.ApplyStartAssaultAgainstWalls` use it; `SiegeEvent` interprets it as an assault when finalizing siege state. |
| `Hideout` | `6` | Hideout battle. `HideoutEventComponent.CreateHideoutEvent` uses it and supplies hideout-specific end-state handling. |
| `SallyOut` | `7` | The garrison/defender sallying from a settlement against besiegers. It is used by `ApplyStartSallyOut` and `MapEventManager.StartSallyOutMapEvent`. |
| `SiegeOutside` | `8` | A battle outside a besieged settlement, selected when the parties are interacting around a siege but the defender is not the settlement party. `StartBattleAction.Apply` and `StartSiegeOutsideMapEvent` use it. |
| `BlockadeBattle` | `9` | Naval battle against a blockade. `StartBattleAction.Apply` selects it for an attacker at sea targeting a port; the `CreateBlockadeBattleMapEvent` overload with `isSallyOut: false` creates the component path. |
| `BlockadeSallyOutBattle` | `10` | Naval sally-out against a blockade. The same blockade component factory uses `isSallyOut: true`, and `StartBattleAction.Apply` selects it for the matching garrison/port context. |

**Related `MapEvent` members.**

`MapEvent.EventType` is the public current-type getter. The boolean helpers `IsFieldBattle`, `IsRaid`, `IsForcingVolunteers`, `IsForcingSupplies`, `IsSiegeAssault`, `IsHideoutBattle`, `IsSallyOut`, `IsSiegeOutside`, `IsBlockade`, and `IsBlockadeSallyOut` compare that private field against the corresponding nested enum value. `MapEvent.SimulationContext` and event components then use the selected flow to choose simulation rules; none of these helpers changes the event.

## Real API examples

### Branch on the player's current map event

This reads the real Campaign acquisition path and keeps the nested type qualification explicit. The `default` branch makes the code reviewable when a later game version adds a value.

```csharp
using TaleWorlds.CampaignSystem.MapEvents;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Library;

MapEvent mapEvent = MobileParty.MainParty?.MapEvent;
if (mapEvent != null && !mapEvent.IsFinalized)
{
    MapEvent.BattleTypes battleType = mapEvent.EventType;
    switch (battleType)
    {
        case MapEvent.BattleTypes.FieldBattle:
        case MapEvent.BattleTypes.Siege:
        case MapEvent.BattleTypes.SiegeOutside:
            Debug.Print($"Land battle flow: {battleType}");
            break;
        case MapEvent.BattleTypes.Raid:
            Debug.Print("Raid flow");
            break;
        case MapEvent.BattleTypes.BlockadeBattle:
        case MapEvent.BattleTypes.BlockadeSallyOutBattle:
            Debug.Print($"Blockade flow: {battleType}");
            break;
        default:
            Debug.Print($"Other map-event flow: {battleType}");
            break;
    }
}
```

### Start an assault through the real Action path

`StartBattleAction.ApplyStartAssaultAgainstWalls` is the source-backed wrapper for the `Siege` value. It accepts a real `MobileParty` and its current `BesiegedSettlement`; it internally passes `attackerParty.Party`, `settlement.Party`, and `MapEvent.BattleTypes.Siege` to the encounter model path.

```csharp
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;

MobileParty attackerParty = MobileParty.MainParty;
Settlement settlement = attackerParty.BesiegedSettlement;
if (settlement != null && attackerParty.IsActive && settlement.Party.IsActive)
{
    StartBattleAction.ApplyStartAssaultAgainstWalls(attackerParty, settlement);
}
```

### Query the current type from a siege object

`SiegeEvent` is separate from `MapEvent`, but its public methods consume this nested enum. Reacquire it from the current settlement and ask for the current type before enumerating parties.

```csharp
using System.Collections.Generic;
using TaleWorlds.CampaignSystem.MapEvents;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Siege;
using TaleWorlds.CampaignSystem.Settlements;

Settlement settlement = MobileParty.MainParty.BesiegedSettlement;
SiegeEvent siegeEvent = settlement?.SiegeEvent;
if (siegeEvent != null && !siegeEvent.ReadyToBeRemoved)
{
    MapEvent.BattleTypes battleType = siegeEvent.GetCurrentBattleType();
    List<PartyBase> parties = siegeEvent.GetInvolvedPartiesForEventType(battleType);
    int involvedPartyCount = parties.Count;
}
```

## Risks and save/version boundaries

- **Nested-type mistake:** `BattleTypes` is declared inside `MapEvent`. A standalone `BattleTypes` reference documents or compiles against the wrong type; use `MapEvent.BattleTypes` everywhere.
- **Stale classification:** Party addition can change the private event type for siege-outside, sally-out, and blockade-sally-out flows. Read `EventType` immediately before branching and do not cache it across a join or map-event transition.
- **Wrong creation layer:** An enum value alone cannot create sides, components, position, visual state, events, or save registration. Use `StartBattleAction`, the encounter model, event component factory, or `MapEventManager` path appropriate to the flow.
- **Siege nulls:** `Settlement.SiegeEvent` is null when no siege exists or after siege cleanup. Do not call `GetCurrentBattleType` or `GetInvolvedPartiesForEventType` without reacquiring and checking the current siege object.
- **Blockade versus sally-out:** `BlockadeBattle` and `BlockadeSallyOutBattle` share a component but have opposite participant directions. Sending the wrong boolean or treating one as the other can select the wrong parties and winner handling.
- **`None` is not a completion state:** A `None` event can be a default/special initialization path. Do not award results or assume a normal field battle from the enum value alone.
- **Finalization and saves:** `MapEventManager` removes finalized events after `WaitingRemoval`, while `MapEvent` and `SiegeEvent` are part of the Campaign save graph. Do not persist runtime object references or keep a `BattleTypes` integer as a cross-version save contract.

## Version note

This page follows the v1.4.5 decompiled `MapEvent.cs`, `StartBattleAction.cs`, `MapEventManager.cs`, event components, and `SiegeEvent.cs`. The nested type and its values are source facts for this version; verify the creation/finalization callers before using the page for another Bannerlord release.

## Navigation

- **Parent:** [Campaign API](../)
- **Siblings:** [MapEvent](../MapEvent) · [MapEventState](../MapEventState) · [MapEventManager](../MapEventManager) · [SiegeEvent](../SiegeEvent)
- **Related:** [StartBattleAction](../../campaign-ext/StartBattleAction) · [EncounterModel](../EncounterModel) · [CampaignEvents](../CampaignEvents) · [CampaignMission](../CampaignMission) · [Mission](../../mission/Mission) · [SaveManager](../../save-system/SaveManager)
- **Language mirror:** [中文页面](../../../../zh/api/campaign/BattleTypes)
