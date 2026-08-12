---
title: "BattleMoraleModel"
description: "A replaceable mission-layer model that converts agent incapacitation, panic, casualties and ship events inside a battle into directional morale changes for both sides."
---
# BattleMoraleModel

**Namespace:** `TaleWorlds.MountAndBlade.ComponentInterfaces`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public abstract class BattleMoraleModel : MBGameModel<BattleMoraleModel>`  
**Base:** `MBGameModel<BattleMoraleModel>`  
**Source:** `TaleWorlds.MountAndBlade/ComponentInterfaces/BattleMoraleModel.cs`  
**Default implementation:** `SandBox.GameComponents/SandboxBattleMoraleModel.cs` (and `CustomBattleMoraleModel` in `MountAndBlade`)

## One-line Responsibility

It answers "for this incapacitation, panic, casualty or ship event, how much should one side's morale rise and the other's fall", returning a directional morale delta. It does not move agents, does not trigger rout, and does not spawn or destroy any unit. The routing and panic systems consume these deltas as a shared rule, so a custom implementation changes the morale resolution seen by every reader, not a single UI number.

## Mental Model

This is the in-mission combat morale rule layer. `Mission` calls it on every tick, on every incapacitation/panic resolution, and on every ship event, converting "who was incapacitated, with what weapon, on which side" into two-sided deltas shaped like `(affected side max morale loss, affector side max morale gain)`. The routing logic and the [`Agent`](../../mission/Agent) panic/rout checks then consume those deltas.

The computation chain is: an incapacitation / panic / casualty / ship event enters as input, first goes through the abstract methods of `MissionGameModels.Current.BattleMoraleModel` to produce scale-level deltas, then `CalculateMoraleChangeToCharacter` lands the delta on a single character according to its `GetMoraleResistance`, and finally flows back into the morale accumulators of [`Agent`](../../mission/Agent) and [`Team`](../../mission/Team). The model only does math; it never mutates the world.

Use this model to change the "morale resolution result" seen by all consumers. If the goal is to directly rout, teleport or re-form units, use the public API of [`MissionBehavior`](../../mission/MissionBehavior), the corresponding `*Action`, or the state API of [`Agent`](../../mission/Agent); do not write `Position`, recruit units, modify `MobileParty` formation or trigger world changes inside a compute callback — that turns a read-only query into a side effect that re-runs every tick. The constants (`BaseMoraleLossOnKill = 4`, `BaseMoraleGainOnKill = 3`, `BaseMoraleLossOnPanic = 1.1`, `BaseMoraleGainOnPanic = 2`, melee multiplier `0.75` / ranged `0.5` / siege `0.25`, casualty factor rate `2`) are only the baseline of the default implementation; an override need not depend on them.

### Lifecycle and Registration

`MissionGameModels.Current.BattleMoraleModel` holds the active instance. The default instance is `SandboxBattleMoraleModel`, registered by the game during mission initialization through `IGameStarter.AddModel`; a custom model must also be registered before the mission system starts querying it. Early in module load, at the title screen, or with no active mission, `MissionGameModels.Current` is `null` and must not be read unconditionally in a static field initializer or a menu constructor — this differs from campaign models: **mission models live on `MissionGameModels.Current`, not on `Campaign.Current.Models`**. The instance is discarded with the mission lifecycle when the mission ends and is never written to the save.

## Dependencies

### Upstream

| Type | Relationship |
| --- | --- |
| [`Mission`](../../mission/Mission) | Provides the active mission and the `MissionGameModels.Current` registry; `CalculateCasualtiesFactor` reads the side's casualty ratio through `Mission.Current.GetRemovedAgentRatioForSide`. |
| [`Agent`](../../mission/Agent) | Provides the affected/affecting unit, along with its `Team`, `Formation`, `Character`, `Origin`, `HasMount`, etc. |
| [`Formation`](../../mission/Formation) | Provides the formation's `ArrangementOrder`, captain Perks and `GetAllUnits`, used for casualty factor and average morale. |
| [`AgentState`](../../core-extra/AgentState) | Represents the affected Agent's incapacitation state (e.g. `Unconscious`), deciding whether a "knock out only" hit applies a death-level morale shock. |
| [`KillingBlow`](../KillingBlow) | Carries the killing blow's weapon class, weapon flags and damage source, deciding the melee/ranged/siege weapon multiplier. |
| [`BattleSideEnum`](../../core-extra/BattleSideEnum) | Identifies attacker/defender; `CalculateCasualtiesFactor` and the initial-morale Perk branch take different paths by `Side`. |
| [`IShipOrigin`](../../core-extra/IShipOrigin) | Ship-origin interface, the input of the three naval-event methods. |

### Downstream

| Type | Relationship |
| --- | --- |
| [`MissionBehavior`](../../mission/MissionBehavior) | Morale computation is called by mission behaviors each tick/event; the result drives the panic and rout of [`Agent`](../../mission/Agent). |
| [`Team`](../../mission/Team) | The side is taken through `Team.Side`; the computed deltas are then written back into `Team`'s morale accumulator. |
| [`AgentApplyDamageModel`](../AgentApplyDamageModel) | A neighboring mission model; kills/damage are produced by it, and this model consumes its kill results to convert them into morale deltas. |
| [`AgentComponentExtensions`](../AgentComponentExtensions) | The default implementation reads current morale through `AgentComponentExtensions.GetMorale(agent)` (naval branch). |
| [`MissionGameModels`](../MissionGameModels) | The default implementation calls back into `BattleBannerBearersModel.GetActiveBanner`; part of the same mission-model registry. |

### Actions, Events and Save Boundary

The model itself dispatches no events and writes no save fields. Morale deltas are in-memory mission-runtime state, discarded when the mission ends; do not modify `Campaign`, gold, `MobileParty` formation, `MapEvent` or `SaveManager` data inside a callback. All world changes should go through [`MissionBehavior`](../../mission/MissionBehavior), `*Action` or the corresponding public API, keeping callbacks pure-query so results are deterministic for identical inputs — otherwise they desync from replayed campaign ticks.

## Member Contract

### Incapacitation / Panic: two-sided morale deltas (tuple return)

| Member | Purpose | When called & side effects |
| --- | --- | --- |
| `CalculateMaxMoraleChangeDueToAgentIncapacitated` | Given the affected Agent's state, the affector and the killing blow, returns `(affectedSideMaxMoraleLoss, affectorSideMaxMoraleGain)`: the affected side's max morale loss and the affector side's max morale gain. | Called on kill/knockout resolution; the default implementation scales by combat importance, `CalculateCasualtiesFactor`, weapon multiplier (melee `0.75` / ranged `0.5` / siege `0.25`) and both sides' Perks and banner effects; mutates no state. |
| `CalculateMaxMoraleChangeDueToAgentPanicked` | Given a panicking Agent, returns `(affectedSideMaxMoraleLoss, affectorSideMaxMoraleGain)`: its side's morale loss and the opponent's gain. | Called when a unit enters panic; the default scales by combat importance and casualty factor. |
| `CalculateMoraleChangeToCharacter` | Divides the scale-level max delta by the character's `GetMoraleResistance` to get the morale change that character actually takes. | Called before landing a delta on a single character; default `maxMoraleChange / Max(1, moraleResistance)`. |

### Initial morale and panic threshold

| Member | Purpose | When called & side effects |
| --- | --- | --- |
| `GetEffectiveInitialMorale` | Combines base morale with the party/army Perks (leadership, scouting, riding, tactics, …) into an effective initial morale. | Called when an Agent is spawned or the mission initializes; the default implementation reads heavily from `MobileParty` / `Army` and `Campaign.Current.Models.CharacterDevelopmentModel`. |
| `CanPanicDueToMorale` | Decides whether this Agent may panic from a morale breakdown (e.g. a high-Tier character with the `Leadership.LoyaltyAndHonor` Perk is exempt). | Called each tick to test the panic precondition; returning `false` means it never panics from morale. |

### Casualties and average morale

| Member | Purpose | When called & side effects |
| --- | --- | --- |
| `CalculateCasualtiesFactor` | Given `Mission.Current.GetRemovedAgentRatioForSide(side)`, yields the casualty factor (base `1 + casualtyRatio * 2`). | Called internally by the model when computing incapacitation/panic deltas; returns `1` when `side == -1` without reading the mission. |
| `GetAverageMorale` | Iterates the AI-controlled human units in the formation and returns the `0–100` average morale. | Called when a behavior needs formation-level morale; returns `0` when there are no units. |

### Naval events (ship morale)

| Member | Purpose | When called & side effects |
| --- | --- | --- |
| `CalculateMoraleChangeOnShipSunk` | Morale change when a ship sinks; the default implementation returns `0`. | Called on the ship-sunk event, with the sunk ship's `IShipOrigin` as input. |
| `CalculateMoraleOnRamming` | Returns the Agent's current morale on a ramming event; default `GetMorale(agent)`. | Called when a ram occurs, with `rammingShip` / `rammedShip` as the two ships' origins. |
| `CalculateMoraleOnShipsConnected` | Returns the Agent's current morale on a boarding (ships-connected) event; default `GetMorale(agent)`. | Called when two ships connect, with `ownerShip` / `targetShip` as the two ships' origins. |

## Real Access Path

The following code only queries the mission model registered in the current mission and unpacks the tuple result:

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.ComponentInterfaces;

public void InspectMoraleDeltas(
    Agent affected, AgentState state, Agent affector, in KillingBlow killingBlow)
{
    // MissionGameModels.Current needs an active Mission; it is null outside a mission / at the menu
    if (MissionGameModels.Current == null)
    {
        return;
    }

    BattleMoraleModel morale = MissionGameModels.Current.BattleMoraleModel;

    // Tuple return (affected side max morale loss, affector side max morale gain)
    (float affectedSideMaxMoraleLoss, float affectorSideMaxMoraleGain) =
        morale.CalculateMaxMoraleChangeDueToAgentIncapacitated(affected, state, affector, killingBlow);

    // Initial morale: baseMorale usually comes from the party/character base value
    float effective = morale.GetEffectiveInitialMorale(affected, baseMorale: 50f);
}
```

This result is suitable for debugging or a UI preview; ordinary routing logic should consume `Team`/`Agent` morale directly rather than re-resolving it itself.

## Safe Replacement Pattern

If you only want to add a bounded correction, keep the original model as a delegate and forward every abstract member in pairs:

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.ComponentInterfaces;

public sealed class ModBattleMoraleModel : BattleMoraleModel
{
    private readonly BattleMoraleModel _vanilla;

    public ModBattleMoraleModel(BattleMoraleModel vanilla)
    {
        _vanilla = vanilla;
    }

    public override (float affectedSideMaxMoraleLoss, float affectorSideMaxMoraleGain)
        CalculateMaxMoraleChangeDueToAgentIncapacitated(
            Agent affectedAgent, AgentState affectedAgentState, Agent affectorAgent, in KillingBlow killingBlow)
    {
        var result = _vanilla.CalculateMaxMoraleChangeDueToAgentIncapacitated(
            affectedAgent, affectedAgentState, affectorAgent, killingBlow);
        // e.g. weaken the affector side's morale gain by 10%
        return (result.affectedSideMaxMoraleLoss, result.affectorSideMaxMoraleGain * 0.9f);
    }

    public override (float affectedSideMaxMoraleLoss, float affectorSideMaxMoraleGain)
        CalculateMaxMoraleChangeDueToAgentPanicked(Agent agent)
        => _vanilla.CalculateMaxMoraleChangeDueToAgentPanicked(agent);

    public override float CalculateMoraleChangeToCharacter(Agent agent, float maxMoraleChange)
        => _vanilla.CalculateMoraleChangeToCharacter(agent, maxMoraleChange);

    public override float GetEffectiveInitialMorale(Agent agent, float baseMorale)
        => _vanilla.GetEffectiveInitialMorale(agent, baseMorale);

    public override bool CanPanicDueToMorale(Agent agent)
        => _vanilla.CanPanicDueToMorale(agent);

    public override float CalculateCasualtiesFactor(BattleSideEnum battleSide)
        => _vanilla.CalculateCasualtiesFactor(battleSide);

    public override float GetAverageMorale(Formation formation)
        => _vanilla.GetAverageMorale(formation);

    public override float CalculateMoraleChangeOnShipSunk(IShipOrigin shipOrigin)
        => _vanilla.CalculateMoraleChangeOnShipSunk(shipOrigin);

    public override float CalculateMoraleOnRamming(Agent agent, IShipOrigin rammingShip, IShipOrigin rammedShip)
        => _vanilla.CalculateMoraleOnRamming(agent, rammingShip, rammedShip);

    public override float CalculateMoraleOnShipsConnected(Agent agent, IShipOrigin ownerShip, IShipOrigin targetShip)
        => _vanilla.CalculateMoraleOnShipsConnected(agent, ownerShip, targetShip);
}
```

In practice, save the vanilla delegate during the module's model-registration phase; do not look yourself up again via `MissionGameModels.Current.BattleMoraleModel` after the model is already replaced, or you recurse. If the override must cover naval, culture and newer-version Perk rules, prefer delegating to the current-version vanilla model and then add your own bounded factors.

## Risks

1. **Mission does not yet exist:** `MissionGameModels.Current` is `null` at the title screen and during early module load; defer fetching the model until an in-mission hook.
2. **Mutating the world inside a callback:** reading/writing `Campaign`, gold, `MobileParty` formation, `MapEvent` or `SaveManager` during resolution corrupts the save or crashes.
3. **Spawning / destroying Agents:** `Spawn` / `Remove` of an Agent inside a callback breaks the mission tick and saved state.
4. **Recursive replacement:** calling yourself through `MissionGameModels.Current.BattleMoraleModel` after replacement causes infinite recursion.
5. **Non-determinism:** depending on random numbers or time desyncs morale from replayed campaign ticks; keep callbacks pure functions.
6. **Unbounded / negative values:** returning `NaN` or negative morale corrupts the panic/rout decision; both tuple components should be `Max(0, …)`.

## Version and Navigation

Both v1.3.15 and v1.4.5 include the abstract members above in the interface and default implementation; the more visible v1.4.5 difference is around the naval ship events (`IShipOrigin`, ramming, boarding). Cross-version implementations should delegate to the current-version vanilla model rather than copy the old formula into the new version.

- [Mission-ext API index](../)
- [↔ AgentApplyDamageModel](../AgentApplyDamageModel)
- [↔ MissionGameModels](../MissionGameModels)
- [Mission](../../mission/Mission)
- [Agent](../../mission/Agent)
- [Formation](../../mission/Formation)
- [Team](../../mission/Team)
- [MissionBehavior](../../mission/MissionBehavior)
- [AgentComponentExtensions](../AgentComponentExtensions)
- [AgentState](../../core-extra/AgentState)
- [KillingBlow](../KillingBlow)
- [BattleSideEnum](../../core-extra/BattleSideEnum)
- [IShipOrigin](../../core-extra/IShipOrigin)
- [Crash and save boundaries](../../../architecture/crash-boundaries)
