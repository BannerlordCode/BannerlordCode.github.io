---
title: "RaidEventComponent"
description: "The MapEvent component that applies village or naval-raid damage, loot and production effects, and raid completion cleanup."
---

# RaidEventComponent

**Namespace:** `TaleWorlds.CampaignSystem.MapEvents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class RaidEventComponent : MapEventComponent`  
**Base:** [`MapEventComponent`](../MapEventComponent)  
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapEvents/RaidEventComponent.cs`

## One-line responsibility

`RaidEventComponent` owns the raid-specific damage, production rewards, settlement-state transitions, and completion notification for a raid [`MapEvent`](../MapEvent).

## Mental model

`CreateRaidEvent` creates and initializes a `MapEvent` with `MapEvent.BattleTypes.Raid`, attaches this component, assigns a militia party to the defender side when applicable, and registers the event with `Campaign.Current.MapEventManager`. During initialization it marks the settlement as being raided and resets damage/reward state. During updates, once the defender has no troops, the `RaidModel` calculates settlement damage and loot effects. Finalization restores or marks the settlement, raises `CampaignEvents.RaidCompletedEvent`, clears production rewards, and may send a non-player raiding party back to the settlement.

The component is therefore more than a read-only label: it is the stateful owner of raid progression. `RaidDamage` is a result of the component's simulation and settlement flow, not a public input for instantly damaging a village. `CreateComponentForOldSaves` restores the component's saved intermediate values without creating a duplicate event.

## When to use and when not to use

**Use it when:**

- Reading `RaidDamage`, the raid settlement, sides, or battle state from an active raid.
- Subscribing to `CampaignEvents.RaidCompletedEvent` for post-raid behavior that copies stable result values.
- Creating a supported raid through `CreateRaidEvent` when the caller owns valid attacker and defender `PartyBase` objects.

**Do not use it when:**

- Writing `RaidDamage` or directly setting village hit points. Let `RaidModel`, `ChangeVillageStateAction`, and the component update flow coordinate the effects.
- Treating a raid as a field battle. Its simulation context, settlement state, loot, and completion event are different.
- Calling `OnBeforeFinalize`, `OnFinalize`, or `Update` manually, or using a loaded component to create a new event.

## Dependencies and lifecycle

- **Base:** [`MapEventComponent`](../MapEventComponent) supplies the event owner and finish/finalize protocol.
- **Creator:** [`DefaultEncounterModel`](../DefaultEncounterModel), [`PlayerEncounter`](../PlayerEncounter), and raid encounter code call `CreateRaidEvent`.
- **Inputs:** attacker/defender [`PartyBase`](../PartyBase), `Settlement`, `RaidModel`, `BattleRewardModel`, and the defender's militia party.
- **Actions/events:** `ChangeVillageStateAction` applies BeingRaided/Looted/Normal state; `CampaignEvents.RaidCompletedEvent` publishes the winner and component after the pre-finalization work.
- **Consumers:** campaign issue and war behaviors, `StatisticsCampaignBehavior`, `KingdomManager`, and AI raid logic inspect the component and its completion event.
- **Persistence:** `RaidDamage`, next settlement damage, looted count, and production rewards are part of the save graph; old saves use the dedicated compatibility factory.

## Key members and timing

| Member | Purpose, side effect, and timing |
|---|---|
| `RaidDamage` | Accumulated raid damage, read after the update/result phase. It is private-set and must not be used as a mutation knob. |
| `AttackerSide`, `DefenderSide`, `MapEventSettlement`, `BattleState`, `IsPlayerMapEvent` | Short paths to the owning event's parties, settlement, result, and player boundary. They are valid only while the event is active. |
| `SimulationContext` | Returns `Village` for a normal raid and `NavalRaid` for a naval raid. |
| `CreateRaidEvent(PartyBase, PartyBase)` | Creates a Raid event, attaches it, initializes militia/settlement links, registers it, and returns the component. |
| `CreateComponentForOldSaves(MapEvent, float, int, float)` | Rebuilds a component with saved next damage, looted count, and `RaidDamage`; it does not register a second event. |
| `OnInitialize()` | Resets damage, marks the target as being raided, and initializes/clears the production reward map. |
| `Update(ref bool finish)` | Calculates damage and rewards after defenders are gone, using `Campaign.Current.Models.RaidModel`; host-only timing. |
| `OnBeforeFinalize()` | Restores or marks the settlement, raises `RaidCompletedEvent`, clears production rewards, and records militia resistance. |
| `OnFinalize()` | Resets resistance state and may send a non-player raiding party back toward the settlement. |

## Real acquisition example

Observe completion through the actual Campaign event rather than calling the component's finalization hooks:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.MapEvents;
using TaleWorlds.Core;

public sealed class RaidAuditBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.RaidCompletedEvent.AddNonSerializedListener(this, OnRaidCompleted);
    }

    public override void SyncData(IDataStore dataStore)
    {
    }

    private void OnRaidCompleted(BattleSideEnum winnerSide, RaidEventComponent raid)
    {
        float damage = raid.RaidDamage;
        CampaignTime now = CampaignTime.Now;
        InformationManager.DisplayMessage(new InformationMessage($"Raid damage: {damage} at {now}"));
    }
}
```

For an active read, use `Campaign.Current.MapEventManager.MapEvents` and select `mapEvent.Component as RaidEventComponent`; do not retain that reference after the event ends.

## Risks and crash boundaries

1. `RaidCompletedEvent` is raised during `OnBeforeFinalize`; listeners can read committed raid values, but should copy scalars/IDs and not keep the component or side objects for later ticks.
2. Directly changing village state or damage bypasses production rewards, looted item counts, militia resistance, and the raid party's post-raid movement.
3. Calling the old-save factory with a new `MapEvent` or wrong saved values creates a component whose settlement damage does not match the event save graph.
4. A raid component assumes a settlement target and valid attacker/defender sides. Creating it with arbitrary parties can null-reference while setting village state or militia MapEventSide.
5. A raid may be simulated without a Mission. Do not assume `Mission.Current`, Agents, or a player UI exists in `Update` or completion listeners.

## Version note

The v1.4.5 component stores intermediate settlement damage and loot data, emits `RaidCompletedEvent`, and supports old-save reconstruction. Raid Model formulas, naval-raid detection, and settlement actions can change across versions; recheck the source before applying custom raid logic.

## Navigation

- ↑ Parent: [Campaign API](../)
- ↔ Siblings: [`MapEventComponent`](../MapEventComponent) · [`FieldBattleEventComponent`](../FieldBattleEventComponent) · [`MapEvent`](../MapEvent)
- Related: [`MapEventManager`](../MapEventManager) · [`BattleTypes`](../BattleTypes) · [`CampaignEvents`](../CampaignEvents) · [`Settlement`](../Settlement)
- 中文: [RaidEventComponent](../../../../zh/api/campaign/RaidEventComponent)
