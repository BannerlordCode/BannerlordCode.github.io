---
title: "CombatSimulationModel"
description: "Resolves map-battle advantages, simulated hits, siege progress, and pursuit timing without owning MapEvent state."
---
# CombatSimulationModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class CombatSimulationModel : MBGameModel<CombatSimulationModel>`  
**Base:** `MBGameModel<CombatSimulationModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CombatSimulationModel.cs`  
**Default:** `TaleWorlds.CampaignSystem.GameComponents/DefaultCombatSimulationModel.cs`

## One-line job

`CombatSimulationModel` supplies deterministic policy for map-battle simulation: hit damage, battle advantage, siege equipment progress, simulation ticks, pursuit rounds, and blunt-damage chance. It computes an outcome input; it does not create or finish a `MapEvent`.

## Mental Model

`MapEvent` owns battle participants and state. During a simulated round it asks the model for advantages and hit results, then applies casualties, morale, rewards, and completion through its own lifecycle. Siege code uses the same model for equipment progress and settlement advantage. The model may read troop, party, ship, and settlement data, but mutation belongs to `MapEvent`, Actions, and battle behaviors.

```text
MapEvent / parties / troops / siege state
              |
              v
Campaign.Current.Models.CombatSimulationModel
              |
              +--> advantage / hit / tick / pursuit queries
              |
              v
MapEvent applies casualties and outcome -> rewards / Actions / events
```

## Dependencies

### Upstream

| Type | Relation |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | Owns the registered simulation policy. |
| [`MapEvent`](../../campaign/MapEvent) | Owns battle sides, morale, rounds, and completion. |
| [`PartyBase`](../../campaign/PartyBase) / `CharacterObject` | Supply troop and party inputs. |
| `SiegeEvent` / `Settlement` | Supply siege progress and defender context. |

### Downstream

| Type | Relation |
| --- | --- |
| `MapEvent` | Calls `SimulateHit`, `GetBattleAdvantage`, tick, and pursuit methods. |
| `BesiegerCamp` | Uses settlement advantage and equipment progress. |
| [`BattleMoraleModel`](../../mission-ext/BattleMoraleModel) | Handles mission morale separately from map simulation. |
| Battle reward Actions | Apply the result after the event resolves. |

## Key contract

| Member | Purpose | Timing |
| --- | --- | --- |
| `SimulateHit` | Return explained simulated damage for troop or ship combat. | Map-event round |
| `GetBattleAdvantage` | Explain attacker and defender advantage. | Round setup |
| `GetSimulationTicksForBattleRound` | Schedule each side's next simulation tick. | Map-event clock |
| `GetPursuitRoundCount` | Choose pursuit rounds after a victory. | Battle conclusion |
| `GetSettlementAdvantage` | Score the settlement side in siege simulation. | Siege tick |
| `GetNumberOfEquipmentsBuilt` / `GetMaximumSiegeEquipmentProgress` | Control siege equipment progress. | Besieger camp |

## Real access path

```csharp
public ExplainedNumber Simulate(MapEvent battle, CharacterObject attacker,
    CharacterObject defender, PartyBase attackerParty, PartyBase defenderParty)
{
    CombatSimulationModel model = Campaign.Current.Models.CombatSimulationModel;
    (int attackerTicks, int defenderTicks) = model.GetSimulationTicksForBattleRound(battle);
    ExplainedNumber hit = model.SimulateHit(
        attacker, defender, attackerParty, defenderParty,
        strikerAdvantage: 0f, battle, strikerSideMorale: 50f, struckSideMorale: 50f);
    return hit;
}
```

`MapEvent` uses the result to apply casualties and later calls `GetPursuitRoundCount`. A caller should not apply the same damage a second time.

## Replacement rules

- Preserve non-negative damage and bounded hit chances.
- Keep tick counts finite and positive so a battle cannot stall or spin forever.
- Delegate to vanilla before adding a troop, terrain, or naval factor.
- Return `ExplainedNumber` factors without mutating the `MapEvent`.
- Keep ship overloads distinct from troop overloads; their casualty out-parameter has a separate contract.

## Risks and debugging order

1. Double casualties occur when a mod applies `SimulateHit` and lets `MapEvent` apply it again.
2. A zero tick interval can lock the campaign clock in a battle loop.
3. Siege advantage changes AI decisions and equipment progress, not just a display number.
4. Map simulation is not Mission combat; do not call mission-only Agent APIs here.
5. Keep version-specific naval inputs by delegating to the installed default implementation.

## Navigation

- [Campaign-ext models family](../models/)
- [MapEvent](../../campaign/MapEvent)
- [SiegeEvent](../SiegeEvent)
- [PartyBase](../../campaign/PartyBase)
- [BattleMoraleModel](../../mission-ext/BattleMoraleModel)
