---
title: "MapEventManager"
description: "The Campaign-owned registry and tick coordinator for active MapEvent objects, including creation, lookup, save loading, and removal."
---

# MapEventManager

**Namespace:** `TaleWorlds.CampaignSystem.MapEvents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class MapEventManager`  
**Base:** none  
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapEvents/MapEventManager.cs`

## One-line responsibility

`MapEventManager` owns the active [`MapEvent`](../MapEvent) collection for a Campaign, drives their periodic update/removal boundary, and exposes the supported lookup and siege-event entry points.

## Mental model

`Campaign` creates and owns one manager through `Campaign.MapEventManager`. The manager stores a saveable `MBList<MapEvent>` and exposes it as a read-only `MBReadOnlyList`. Concrete event factories and encounter code call `OnMapEventCreated`; `Campaign.Tick()` calls the manager's internal `Tick`, which removes finalized events and updates raid/non-player events. On load, `OnAfterLoad` reattaches each event's component state.

This is a registry and lifecycle coordinator, not a global battle factory for every event type. Field battles and raids normally use `StartBattleAction` or a concrete component factory; the public `StartSiegeMapEvent`, `StartSallyOutMapEvent`, `StartSiegeOutsideMapEvent`, and `StartBlockadeBattleMapEvent` methods exist for their specific encounter flows. `MapEvents` is a snapshot-like read view, not a collection to mutate during enumeration.

## When to use and when not to use

**Use it when:**

- Looking up active events, filtering events between factions, or observing the current player event.
- Integrating a supported siege/sally-out flow whose source path already uses the manager.
- Reacquiring events after Campaign load instead of storing stale object references.

**Do not use it when:**

- Treating `MapEventManager` as a singleton with a public constructor. Construction is internal and the authoritative instance is `Campaign.Current.MapEventManager`.
- Adding an event by calling `OnMapEventCreated` on a manually initialized object. Creation, sides, component, and event type must be established together by the engine path.
- Calling `FinalizePlayerMapEvent` without a current player event; the source throws `MBNotFoundException` in that case.
- Removing items from `MapEvents` while iterating. Let `Campaign.Tick` remove finalized events.

## Dependencies and lifecycle

- **Owner:** [`Campaign`](../Campaign) creates the manager, loads it, saves it, and invokes its tick.
- **Registry:** [`MapEvent`](../MapEvent) objects are added by concrete event components or the manager's supported siege methods.
- **Consumers:** [`PlayerEncounter`](../PlayerEncounter), `DefaultEncounterModel`, campaign behaviors, and diagnostic code query the active list.
- **Downstream:** `MapEvent` updates sides/components; finalized events are removed, while Campaign events and settlement/siege code process results.
- **Persistence:** `_mapEvents` is a saveable field. `OnAfterLoad` repairs each map event; a mod should save stable IDs, not a cached manager or event object graph.

## Key members and timing

| Member | Purpose, side effect, and timing |
|---|---|
| `MapEvents` | Read-only view of active map events. It can change at the next Campaign tick or event callback. |
| `OnMapEventCreated(MapEvent)` | Adds an initialized event to the registry. It is a lifecycle boundary, not a general-purpose public constructor substitute. |
| `GetMapEvent(int attackerPartyIndex)` | Finds the first event whose attacker leader index matches. It is an index lookup, not a stable save ID. |
| `GetMapEventsBetweenFactions(IFaction, IFaction)` | Returns events containing the two factions on opposite sides; useful for read-only diplomacy diagnostics. |
| `FinalizePlayerMapEvent(MapEvent)` | Finalizes the main party's event and calls `PlayerEncounter.Finish`; requires a current player map event and correct encounter phase. |
| `StartSiegeMapEvent(...)`, `StartSallyOutMapEvent(...)`, `StartSiegeOutsideMapEvent(...)`, `StartBlockadeBattleMapEvent(...)` | Create and initialize their specific event type, register it, and return it. Use only in the corresponding encounter flow. |
| `Tick()` | Internal Campaign tick: removes `IsFinalized` events and updates raids/non-player events. Mods should schedule Campaign work, not call it. |
| `OnAfterLoad()` | Internal load repair that calls each event's `OnAfterLoad` after the save graph is rebuilt. |

## Real acquisition example

For a read-only diagnostic, reacquire the manager from the active Campaign and filter its current list:

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.MapEvents;

public static int CountActivePlayerEvents()
{
    MapEventManager manager = Campaign.Current.MapEventManager;
    return manager.MapEvents.Count(mapEvent => !mapEvent.IsFinalized && mapEvent.IsPlayerMapEvent);
}
```

For a field battle, use [`StartBattleAction`](../../campaign-ext/StartBattleAction), not a hand-built `MapEventManager` call. For a siege transition, follow the same manager entry used by `PlayerEncounter` and `DefaultEncounterModel` so the settlement and siege event are consistent.

## Risks and crash boundaries

1. `Campaign.Current` and `MapEventManager` are unavailable during module loading, the main menu, or after Campaign teardown. Guard the lifecycle before querying them.
2. `MapEvents` changes while Campaign ticks. Do not mutate the list, finalize an event during enumeration, or retain a reference across `MapEventEnded`.
3. `FinalizePlayerMapEvent` assumes `MobileParty.MainParty.MapEvent` and a valid `PlayerEncounter`; calling it in another phase throws or finalizes the wrong encounter.
4. Creating siege events without a matching `Settlement.SiegeEvent`, party side, or naval context can fail during `MapEvent.Initialize` and leave inconsistent save state.
5. The manager's save graph restores events and their components. Saving a custom reference to the manager or an event and using it after load can point at stale objects; reacquire through `Campaign.Current`.

## Version note

The v1.4.5 manager removes finalized events during its reverse-index tick and updates raids plus non-player events. Constructor visibility, update filtering, and siege entry points are version-sensitive; verify `Campaign.Tick`, `PlayerEncounter`, and `DefaultEncounterModel` when porting.

## Navigation

- ↑ Parent: [Campaign API](../)
- ↔ Siblings: [`MapEvent`](../MapEvent) · [`MapEventSide`](../MapEventSide) · [`Campaign`](../Campaign)
- Related: [`MapEventState`](../MapEventState) · [`StartBattleAction`](../../campaign-ext/StartBattleAction) · [`PlayerEncounter`](../PlayerEncounter) · [`CampaignEvents`](../CampaignEvents)
- 中文: [MapEventManager](../../../../zh/api/campaign/MapEventManager)
