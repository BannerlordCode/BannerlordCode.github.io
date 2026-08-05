---
title: "BlockadeBattleMapEvent"
description: "The MapEvent component for naval blockades and blockade sally-outs, including naval power checks, blockade lifting, and siege cleanup."
---
# BlockadeBattleMapEvent

**Namespace:** `TaleWorlds.CampaignSystem.MapEvents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class BlockadeBattleMapEvent : MapEventComponent`  
**Base:** [MapEventComponent](../MapEventComponent)  
**Source file:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapEvents/BlockadeBattleMapEvent.cs`

## One-sentence responsibility

It gives a blockade or blockade sally-out `MapEvent` sea-battle rules, opens the player blockade menu when needed, lifts a weak blockade, and finalizes the associated siege after a defender defeat.

## Mental Model

`BlockadeBattleMapEvent` is the naval encounter component attached to a siege-related `MapEvent`. `PlayerEncounter` and `DefaultEncounterModel` call `CreateBlockadeBattleMapEvent` with `isSallyOut` set according to the encounter. The factory initializes the event as `BlockadeBattle` or `BlockadeSallyOutBattle`, registers it with `Campaign.Current.MapEventManager`, and returns the component.

The component does more than label the event. During initialization it either opens `player_blockade_got_attacked` for the main party or checks whether the attacker's naval power exceeds the besieger camp by 20 percent. A successful check deactivates the blockade, finalizes the map event, and sends eligible non-player naval parties toward the besieged settlement port. When the defender loses, `OnFinalize` completes the related siege event.

## When to use and when not to use

- Read `PlayerEncounter.Battle?.Component` and `MapEvent.EventType` to identify an active blockade or blockade sally-out.
- Let `DefaultEncounterModel`, `PlayerEncounter`, or the corresponding manager encounter flow call the factory; do not hand-build the component for ordinary field battles.
- If code specifically needs a `BlockadeBattleMapEvent` component, the source-backed creation path is `BlockadeBattleMapEvent.CreateBlockadeBattleMapEvent(attackerParty, defenderParty, isSallyOut)`. Do not substitute `Campaign.Current.MapEventManager.StartBlockadeBattleMapEvent`: in v1.4.5 that manager method creates a raw `BlockadeBattle` `MapEvent` with `component == null`.
- Do not call `CheckLiftingBlockade` or `OnFinalize` yourself. They depend on initialized siege parties, event state, and the engine's finalization order.
- Do not assume `SimulationContext` is terrain-dependent: this component always returns `SeaBattle`.

## Dependencies

```text
PlayerEncounter / DefaultEncounterModel
  -> BlockadeBattleMapEvent.CreateBlockadeBattleMapEvent
  -> MapEvent.Initialize(BlockadeBattle or BlockadeSallyOutBattle)
  -> naval power vs BesiegerCamp
  -> deactivate blockade, port movement, or siege finalization
```

- Event host: [MapEvent](../MapEvent) owns sides, event state, and finalization.
- Encounter entry: [PlayerEncounter](../PlayerEncounter) and [DefaultEncounterModel](../DefaultEncounterModel) select the blockade component factory; [MapEventManager](../MapEventManager) records the event after the factory calls `OnMapEventCreated`.
- Siege input: [SiegeEvent](../SiegeEvent) and [BesiegerCamp](../BesiegerCamp) provide blockade state, besieger parties, and the besieged settlement.
- Presentation: `GameMenu.ActivateGameMenu("player_blockade_got_attacked")` sends a main-party attack into the blockade menu flow.
- Movement: `MobileParty.SetMoveGoToSettlement` is applied only to eligible non-player naval attackers after the blockade is lifted.

## State and operations

| Member | Meaning and timing |
|---|---|
| `MapEvent` | Inherited event reference used for event type, sides, state, and siege access. |
| `SimulationContext` | Always returns `SeaBattle`. |
| `CreateBlockadeBattleMapEvent` | Creates and registers a blockade or blockade sally-out event from the `isSallyOut` flag. |
| `OnInitialize` | Opens the player menu for a main-party defense or performs the initial blockade-lifting check. |
| `OnPartyAdded` | Rechecks blockade strength after later parties join, once initialization has finished and the defender is not the main party. |
| `CheckLiftingBlockade` | Compares attacker naval power with besieger power, deactivates and finalizes a weak blockade, and redirects eligible naval parties. |
| `OnFinalize` | Finalizes the related `SiegeEvent` when the defender side is defeated. |

## Real example

An encounter diagnostic can inspect the live component without triggering the blockade flow:

```csharp
using TaleWorlds.CampaignSystem.Encounters;
using TaleWorlds.CampaignSystem.MapEvents;

MapEvent battle = PlayerEncounter.Battle;
if (battle?.Component is BlockadeBattleMapEvent blockade)
{
    bool isSallyOut = battle.EventType == MapEvent.BattleTypes.BlockadeSallyOutBattle;
    MapEvent.PowerCalculationContext context = blockade.SimulationContext;
}
```

The source starts this component through the encounter model or player encounter. A mod that truly owns the same valid siege transition can call `CreateBlockadeBattleMapEvent`; otherwise prefer observing the active battle as above so `SiegeEvent`, party sides, port navigation, and event-manager registration stay consistent.

## Risks and save boundaries

- The power check assumes the defender leader has a live `SiegeEvent` and `BesiegerCamp`; applying this component outside a blockade can dereference invalid siege state.
- `OnInitialize` may open a game menu for the main party. Calling the factory from an unrelated tick or UI state can re-enter encounter flow unexpectedly.
- When naval power is greater than `besiegerPower * 1.2f`, the component finalizes the event and redirects parties. Observers must not continue using the old event as active state.
- `OnPartyAdded` can cause the blockade to lift after a later party joins. Do not cache the initial strength comparison as a permanent result.
- `OnFinalize` calls `SiegeEvent.FinalizeSiegeEvent` only for a defender defeat. Bypassing event finalization can leave siege and blockade state disagreeing across saves.
- The cached initialization flag is runtime coordination state. Save/load and event registration must use the engine path rather than copying the component or its private flag.

## Version note

This page follows v1.4.5 `BlockadeBattleMapEvent`, `PlayerEncounter.StartBattleInternal`, `DefaultEncounterModel.CreateMapEventComponentForEncounter`, `MapEventManager.OnMapEventCreated`, and `SiegeEvent.DeactivateBlockade`. The 1.2 naval-power threshold and menu ID are version-sensitive.

## Navigation

- Parent: [Campaign API](../)
- Siblings: [MapEventComponent](../MapEventComponent) · [ForceSuppliesEventComponent](../ForceSuppliesEventComponent) · [ForceVolunteersEventComponent](../ForceVolunteersEventComponent) · [SiegeAmbushEventComponent](../SiegeAmbushEventComponent)
- Related: [MapEvent](../MapEvent) · [PlayerEncounter](../PlayerEncounter) · [MapEventManager](../MapEventManager) · [SiegeEvent](../SiegeEvent) · [BesiegerCamp](../BesiegerCamp)
- Chinese: [BlockadeBattleMapEvent](../../../../zh/api/campaign/BlockadeBattleMapEvent)
