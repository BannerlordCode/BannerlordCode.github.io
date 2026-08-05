---
title: "MapEventState: MapEvent lifecycle phase"
description: "The independent v1.4.5 enum used by MapEvent to distinguish initial, active-waiting, and waiting-for-removal phases."
---
# MapEventState

**Namespace:** `TaleWorlds.CampaignSystem.MapEvents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public enum MapEventState`  
**Base:** `System.Enum` (underlying type `int`)  
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapEvents/MapEventState.cs`

## Responsibility

This independent enum labels the lifecycle phase held by a [MapEvent](../MapEvent). It is a read-only signal for code that needs to distinguish an initialized event from an event that has already completed and is waiting for the manager to remove it.

## Mental model

`MapEventState` is not a manager, a battle result, or an instruction to start a fight. `MapEvent` owns the value in its saveable `_state` field and exposes it through `MapEvent.State`; that property has a public getter but a private setter. A mod normally reads the state from an event acquired through `MobileParty.MainParty?.MapEvent`, `Campaign.Current.MapEventManager.MapEvents`, or a Campaign event callback.

In v1.4.5 the lifecycle follows this sequence:

1. A newly constructed `MapEvent` has the CLR default `Begin`.
2. `MapEvent.Initialize(...)` completes internal setup and sets `Wait`.
3. `BeginWait()` also sets `Wait` when the event is resumed into its waiting phase.
4. `FinalizeEventAux()` sets `WaitingRemoval` after finalization begins.
5. `MapEventManager.Tick()` removes the finalized event from its collection.

The source does not explicitly assign `State = MapEventState.Begin`. `Begin` is the zero/default enum value held before the internal initialization path writes `Wait`. A registered event should normally be observed after `Initialize`, so `Wait` is the useful active-event state. `WaitingRemoval` is also not the same as “the object no longer exists”: `MapEventManager` removes finalized events on its next manager tick.

## When to use it, and when not to

- **Use it to gate reads:** Check `State == MapEventState.Wait` when a behavior must act only while a map event is active, and check `IsFinalized` before touching event-owned sides or parties.
- **Use it at event boundaries:** `MapEventEnded` is dispatched after `FinalizeEventAux` changes the state to `WaitingRemoval`. Read the scalar result you need in that callback and keep a stable ID, not the event object.
- **Do not set it:** `MapEvent.State` is privately set. Do not use reflection or a copied enum value to force a battle into or out of a phase; finalization also updates parties, settlement state, siege state, results, and event notifications.
- **Do not use `Begin` as a public start signal:** It is the CLR default before `MapEvent.Initialize`, not a mod-facing method or a guaranteed phase of a registered battle.
- **Do not confuse it with `BattleState`:** `MapEventState` describes lifecycle and removal; `BattleState` describes resolution such as attacker or defender victory. A `Wait` event can still have no winner.

## Dependencies

The key dependency flow is:

- `Campaign.Current` exposes [MapEventManager](../MapEventManager), whose event collection provides the `MapEvent.State` read path.
- [StartBattleAction](../../campaign-ext/StartBattleAction) and [EncounterModel](../EncounterModel) create the event and reach its internal `Initialize(...)` call, which sets `Wait`.
- `MapEvent.FinalizeEventAux()` sets `WaitingRemoval` and dispatches [CampaignEvents](../CampaignEvents).`MapEventEnded`.
- The next [MapEventManager](../MapEventManager) tick removes the finalized event.

- **Upstream:** [Campaign](../Campaign), [MapEventManager](../MapEventManager), [StartBattleAction](../../campaign-ext/StartBattleAction), and [EncounterModel](../EncounterModel) establish the Campaign event lifecycle.
- **Adjacent state:** [MapEvent](../MapEvent) owns the enum value; [MapEventSide](../MapEventSide), [MapEventParty](../MapEventParty), [Settlement](../Settlement), and [SiegeEvent](../SiegeEvent) are among the objects whose cleanup follows finalization.
- **Downstream:** [CampaignEvents](../CampaignEvents) exposes `MapEventStarted` and `MapEventEnded`; [CampaignBehaviorBase](../CampaignBehaviorBase) is the normal mod listener lifetime.
- **Persistence:** `MapEvent._state` is marked `[SaveableField(101)]`. [SaveManager](../../save-system/SaveManager) restores the Campaign graph, while visual/cache objects are rebuilt separately.

## Values and timing

The source declares no explicit numeric assignments, so the v1.4.5 underlying `int` values are sequential:

| Value | Numeric value | Meaning and safe timing |
|---|---:|---|
| `Begin` | `0` | CLR default for a newly allocated `MapEvent` before internal initialization. It is not explicitly assigned by `MapEvent.cs`; do not use it as a reliable “battle has started” callback. |
| `Wait` | `1` | Active map-event phase. `MapEvent.Initialize(...)` assigns it after sides, position, component, and event data are prepared; `BeginWait()` also assigns it. Use this for active-event checks. |
| `WaitingRemoval` | `2` | Finalization has run far enough to mark the event for removal. `MapEvent.IsFinalized` is true, `CampaignEvents.MapEventEnded` is dispatched immediately after the assignment, and `MapEventManager.Tick()` removes the event later. |

**The only public member that carries this enum.**

`MapEvent.State` is the public read path. Its setter is private, so the enum is an observation contract rather than a mutation API. `MapEvent.IsFinalized` is the narrower boolean equivalent of `State == MapEventState.WaitingRemoval`; use it when the code only needs to decide whether the event is still retained by the manager.

## Real API examples

### Read the player's current active event

`MobileParty.MainParty?.MapEvent` is the real acquisition path used by Campaign code. The guard avoids main-menu, loading, and post-Campaign access, and the state check avoids consuming an event that is already in teardown.

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.MapEvents;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Library;

MapEvent mapEvent = MobileParty.MainParty?.MapEvent;
if (mapEvent != null && mapEvent.State == MapEventState.Wait)
{
    PartyBase attacker = mapEvent.AttackerSide.LeaderParty;
    PartyBase defender = mapEvent.DefenderSide.LeaderParty;
    Debug.Print($"Active {mapEvent.EventType}: {attacker?.Name} vs {defender?.Name}");
}
```

### Observe the removal boundary from a Campaign behavior

`CampaignEvents.MapEventEnded` is the source-backed callback boundary. At this point the event has `WaitingRemoval`; copy the data needed by the mod and do not retain the `MapEvent` reference for later ticks.

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.MapEvents;
using TaleWorlds.Library;
using TaleWorlds.SaveSystem;

public sealed class MapEventStateBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.MapEventEnded.AddNonSerializedListener(this, OnMapEventEnded);
    }

    public override void SyncData(IDataStore dataStore)
    {
    }

    private void OnMapEventEnded(MapEvent mapEvent)
    {
        if (mapEvent.State == MapEventState.WaitingRemoval)
        {
            string eventType = mapEvent.EventType.ToString();
            Debug.Print($"Map event ended: {eventType}");
        }
    }
}
```

## Risks and save/version boundaries

- **Wrong lifecycle phase:** `Campaign.Current`, `MobileParty.MainParty`, and `MapEventManager.MapEvents` are Campaign-owned. Access them only after Campaign initialization and before `Campaign.OnDestroy`; otherwise the singleton or event can be null.
- **Premature finalization:** Calling `FinalizeEvent` while a Mission, pursuit, siege, or loot flow still uses the event can remove side relationships too early. Use the relevant encounter/Action flow instead of changing the enum.
- **Stale references:** After `WaitingRemoval`, `MapEventManager` will remove the event and side/party references can be cleared or reassigned. Copy stable values in `MapEventEnded` and reacquire current objects later.
- **Save mismatch:** The source uses implicit enum numbering. Do not create a custom save contract that assumes `0`, `1`, and `2` will keep the same meaning in another game version; persist your own stable identifiers or booleans and reacquire the current event after load.
- **State is not battle resolution:** Do not grant prisoners, loot, renown, or settlement ownership merely because the state is `Wait` or `WaitingRemoval`. Use the winner/result and the official Campaign completion path.

## Version note

This page follows the v1.4.5 source in `Bannerlord.Source`. The enum is independent in this version, while its lifecycle meaning is defined by `MapEvent.cs` and `MapEventManager.cs`; recheck those callers when targeting another Bannerlord version.

## Navigation

- **Parent:** [Campaign API](../)
- **Siblings:** [MapEvent](../MapEvent) · [BattleTypes](../BattleTypes) · [MapEventManager](../MapEventManager)
- **Related:** [CampaignEvents](../CampaignEvents) · [CampaignBehaviorBase](../CampaignBehaviorBase) · [SiegeEvent](../SiegeEvent) · [StartBattleAction](../../campaign-ext/StartBattleAction) · [Mission](../../mission/Mission)
- **Language mirror:** [中文页面](../../../../zh/api/campaign/MapEventState)
