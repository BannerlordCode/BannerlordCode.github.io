---
title: "MissionGameModels — mission-scoped combat model bundle"
description: "Source-backed v1.4.5 guide to MissionGameModels construction, Current binding and clearing, mission-only model lookup, combat/damage/morale/deployment/siege consumers, and null-reference boundaries."
---
# MissionGameModels

**Namespace:** TaleWorlds.MountAndBlade  
**Module:** TaleWorlds.MountAndBlade  
**Type:** `public sealed class MissionGameModels : GameModelsManager`  
**Base:** `GameModelsManager`  
**Source path:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionGameModels.cs`

## One-line responsibility

Bind the active game's mission model list into fast mission-runtime properties for agent stats, weather, damage, morale, deployment, spawning, banners, formations, pickup rules, ships, and siege engine calculations.

## Mental model

`MissionGameModels` is the mission-side sibling of campaign `GameModels`. It is built from `gameStarter.Models` during `MBGameManager.OnGameStart` by `Game.Current.AddGameModelsManager<MissionGameModels>(gameStarter.Models)`. Its constructor sets `MissionGameModels.Current = this`, then calls `GetSpecificGameBehaviors()` to pull concrete models with `GetGameModel<T>()`.

The lookup comes from [GameModelsManager](../../campaign/GameModels): it walks the model list from the end and returns the last model assignable to the requested type, or null. That gives the usual "later model wins" behavior, but it also means any mission model not registered before the manager is built remains null.

This object is not [Campaign.Current.Models](../../campaign/GameModels). Campaign models calculate campaign economy, diplomacy, encounter menu, and save-world rules. Mission models calculate live mission combat and scene behavior. Do not cache `MissionGameModels.Current` across game end; `MBGameManager.OnGameEnd` calls `MissionGameModels.Clear()`, which sets `Current` to null.

## When to use it / when not to

Use it inside mission code, mission behaviors, mission views, or combat helpers when you need the active mission's model implementation. Typical consumers are [Mission](../../mission/Mission), `MissionCombatMechanicsHelper`, `SandboxAgentStatCalculateModel`, tournament logic, order-of-battle UI, siege engine logic, and item pickup logic.

Do not use it from campaign hourly ticks as if it were always available. Do not store it in static fields. Do not replace campaign rules through this manager; use [CampaignGameStarter](../../campaign/CampaignGameStarter).`AddModel` for campaign models and mission game starters for mission models before `MBGameManager` builds `MissionGameModels`.

## Dependencies and call chain

| Edge | Source-backed meaning |
|------|-----------------------|
| Construction | `MBGameManager.OnGameStart` calls `Game.Current.AddGameModelsManager<MissionGameModels>(gameStarter.Models)`. |
| Cleanup | `MBGameManager.OnGameEnd` calls `MissionGameModels.Clear()`, so `Current` becomes null. |
| Model source | `GameModelsManager.GetGameModel<T>()` returns the last matching model from `gameStarter.Models`. |
| Mission runtime | [Mission](../../mission/Mission) calls models for camera zoom, weather effects, deployment-finished stat initialization, hit reactions, killed/unconscious decisions, particles, friendly-fire exceptions, and damage multipliers. |
| Mission state | [MissionState](../../campaign-ext/MissionState) activates/deactivates/finalizes the mission that consumes these models. |
| Campaign boundary | [Campaign](../../campaign/Campaign) and [GameModels](../../campaign/GameModels) own campaign rules; `MissionGameModels` does not persist campaign state. |
| Siege | [SiegeEventManager](../../campaign/SiegeEventManager) owns campaign siege state; `MissionSiegeEngineCalculationModel` only calculates mission-side siege engine values. |

## Crash, lifecycle, thread, and null-reference risks

- `MissionGameModels.Current` is null before `OnGameStart` builds it and after `OnGameEnd` clears it.
- Individual properties can be null if no matching model was registered. Source call sites are mixed: some use null-conditional checks, but many assume the model exists.
- A cached property can point to an old model bundle after game end or reload. Reacquire `MissionGameModels.Current` in the mission phase where you use it.
- It is not a save root. Store persistent decisions in campaign behavior data, not in mission model instances.
- Missing combat models can crash late: damage, morale, deployment, and siege consumers often run deep inside mission tick or hit processing.

## Key public members

| Member | Use, side effect, timing |
|--------|--------------------------|
| `Current` | Static current mission model manager; set by constructor, cleared by `Clear()`. |
| `AgentStatCalculateModel` | Agent skills, movement, encumbrance, camera zoom, stat initialization, weapon inaccuracy; heavily used by `Mission` and sandbox models. |
| `ApplyWeatherEffectsModel` | Optional mission weather effects; `Mission` checks for null before applying. |
| `StrikeMagnitudeModel` | Raw and adjusted strike magnitude, missile/swing/thrust calculations; used by combat mechanics. |
| `AgentApplyDamageModel` | Damage, collision reactions, friendly-fire exceptions, knockdown/dismount decisions. |
| `AgentDecideKilledOrUnconsciousModel` | Determines killed/unconscious probabilities during agent damage resolution. |
| `MissionDifficultyModel` | Combat difficulty damage multipliers; some call sites null-check. |
| `BattleMoraleModel` | Formation and casualty morale calculations, including banner interactions. |
| `BattleInitializationModel` | Deployment and order-of-battle permissions, used by mission screen/order-of-battle UI. |
| `BattleSpawnModel` | Battle spawn behavior and reinforcement choices. |
| `BattleBannerBearersModel` | Banner bearer selection and banner interactions. |
| `FormationArrangementsModel` | Formation arrangement rules. |
| `AutoBlockModel` | Auto-block decisions for combat. |
| `DamageParticleModel` | Blood/sweat/missile impact particle selection during hit handling. |
| `ItemPickupModel` | Mission item pickup permissions and behavior. |
| `MissionShipParametersModel` | Mission ship parameters for naval scenes. |
| `MissionSiegeEngineCalculationModel` | Mission-side siege engine calculations, not campaign siege ownership. |
| `Clear()` | Static cleanup; sets `Current` to null at game end. |

## Real C# examples

### Read a mission model only while a mission is alive

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.ComponentInterfaces;

public sealed class MainAgentSkillProbe : MissionBehavior
{
    public override MissionBehaviorType BehaviorType => MissionBehaviorType.Logic;

    public override void OnMissionTick(float dt)
    {
        Agent agent = Mission.Current?.MainAgent;
        AgentStatCalculateModel statModel = MissionGameModels.Current?.AgentStatCalculateModel;
        if (agent == null || statModel == null)
        {
            return;
        }

        int athletics = statModel.GetEffectiveSkill(agent, DefaultSkills.Athletics);
        float maxCameraZoom = statModel.GetMaxCameraZoom(agent);
    }
}
```

The null guards matter because `Current` and specific model properties are lifecycle-bound.

### Register mission models before the manager is built

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.ComponentInterfaces;

public sealed class MyMissionModelSubModule : MBSubModuleBase
{
    protected override void OnGameStart(Game game, IGameStarter gameStarterObject)
    {
        if (gameStarterObject is BasicGameStarter basicGameStarter)
        {
            basicGameStarter.AddModel<BattleMoraleModel>(new CustomBattleMoraleModel());
        }
    }
}
```

`MissionGameModels` pulls from `gameStarter.Models` when `MBGameManager.OnGameStart` builds the manager. Register after that point and the cached property will not update.

## Navigation

**Parent**

- [Mission-ext API index](../)
- [Mission](../../mission/Mission)

**Sibling**

- [AgentStatCalculateModel](../AgentStatCalculateModel)
- [AgentApplyDamageModel](../AgentApplyDamageModel)
- [BattleMoraleModel](../BattleMoraleModel)
- [BattleInitializationModel](../BattleInitializationModel)
- [BattleSpawnModel](../BattleSpawnModel)
- [MissionSiegeEngineCalculationModel](../MissionSiegeEngineCalculationModel)

**Related / children**

- [MissionState](../../campaign-ext/MissionState)
- [GameStateManager](../../core-extra/GameStateManager)
- [Campaign GameModels](../../campaign/GameModels)
- [CampaignGameStarter](../../campaign/CampaignGameStarter)
- [SiegeEventManager](../../campaign/SiegeEventManager)
