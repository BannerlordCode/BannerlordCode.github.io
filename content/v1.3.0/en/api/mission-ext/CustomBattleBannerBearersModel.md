---
title: "CustomBattleBannerBearersModel"
description: "Auto-generated class reference for CustomBattleBannerBearersModel."
---
# CustomBattleBannerBearersModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleBannerBearersModel : BattleBannerBearersModel`
**Base:** `BattleBannerBearersModel`
**File:** `TaleWorlds.MountAndBlade/CustomBattleBannerBearersModel.cs`

## Overview

`CustomBattleBannerBearersModel` is the editor-build implementation of the abstract `BattleBannerBearersModel`. One instance is constructed at module start by `EditorGame` and pushed into the model registry with `basicGameStarter.AddModel<BattleBannerBearersModel>(new CustomBattleBannerBearersModel())` (`EditorGame.cs:57`); the campaign build never registers it at all. From that point the instance lives for the whole session — it holds no per-mission state except three static caches. Missions read it through `MissionGameModels.Current.BattleBannerBearersModel`, which is populated once in the `MissionGameModels` constructor from `GetGameModel<BattleBannerBearersModel>()` (`MissionGameModels.cs:108`). Nothing constructs it per mission, so there is exactly one instance no matter how many battles run.

The nine overrides split into three unrelated jobs. Eligibility asks whether an agent *may* carry a banner. Priority asks which eligible agent *should*. Capacity asks whether a formation may deploy bearers at all, and how many. Reading them as one predicate is the usual source of confusion, because none of the three defers to the others the way the names suggest.

## Mental Model

`CanAgentBecomeBannerBearer` is the gate, and it is stricter than it looks. It caches a `MissionAgentSpawnLogic` in the static field `_missionSpawnLogic` (`CustomBattleBannerBearersModel.cs:163`) on first call and never clears it, then compares the candidate against `MissionAgentSpawnLogic.GetGeneralCharacterOfSide(team.Side)` so the side's general is excluded. It also requires `agent.IsAIControlled` (`CustomBattleBannerBearersModel.cs:57`), which is what keeps the player and every hero out of the bearer pool. `CanAgentPickUpAnyBanner` is a different, weaker test: it allows the main agent and heroes, and only asks that the agent is human, bannerless, assignable, not panicked, and not in an important combat action (`CustomBattleBannerBearersModel.cs:40`). A mod that swaps these two around in a subclass will let generals carry banners in normal play.

`GetAgentBannerBearingPriority` uses `0` as its "never" value, not as a low score (`CustomBattleBannerBearersModel.cs:66`). Anything nonzero competes, so returning `1` does not mean "weakly preferred", it means "eligible". It also applies a mounting-parity rule: an agent whose mount state disagrees with `Formation.CalculateHasSignificantNumberOfMounted` gets `0` (`CustomBattleBannerBearersModel.cs:73`). An agent already carrying a banner returns `int.MaxValue`, which is a lock-out sentinel, not a strong preference.

`CanFormationDeployBannerBearers` needs four things at once, and only the first is a count: a non-null `BannerBearerLogic` off the base class, at least `GetMinimumFormationTroopCountToBearBanners()` units, a banner object actually assigned to that formation, and at least one unit that passes `CanAgentBecomeBannerBearer` (`CustomBattleBannerBearersModel.cs:90`). `GetDesiredNumberOfBannerBearersForFormation` then collapses all of that to `0` or `1` — it can never return 2 (`CustomBattleBannerBearersModel.cs:104`), so "how many bearers" is not actually a tunable quantity in the stock model; only the gate is.

The static `_missionSpawnLogic` cache is a real lifetime mismatch: nothing in the 1.3.0 tree assigns `_missionSpawnLogic = null`, so from the second mission onward `CanAgentBecomeBannerBearer` asks a stale spawn logic which agent is the general. If the second mission has a different general, the wrong agent is excluded and the correct one competes anyway.

## Key Methods

### GetMinimumFormationTroopCountToBearBanners
`public override int GetMinimumFormationTroopCountToBearBanners()`

**Purpose:** Reads and returns the minimum formation troop count to bear banners value held by the this instance.

```csharp
// Obtain an instance of CustomBattleBannerBearersModel from the subsystem API first
CustomBattleBannerBearersModel customBattleBannerBearersModel = ...;
var result = customBattleBannerBearersModel.GetMinimumFormationTroopCountToBearBanners();
```

### GetBannerInteractionDistance
`public override float GetBannerInteractionDistance(Agent interactingAgent)`

**Purpose:** Reads and returns the banner interaction distance value held by the this instance.

```csharp
// Obtain an instance of CustomBattleBannerBearersModel from the subsystem API first
CustomBattleBannerBearersModel customBattleBannerBearersModel = ...;
var result = customBattleBannerBearersModel.GetBannerInteractionDistance(interactingAgent);
```

### CanBannerBearerProvideEffectToFormation
`public override bool CanBannerBearerProvideEffectToFormation(Agent agent, Formation formation)`

**Purpose:** Checks whether the this instance meets the preconditions for banner bearer provide effect to formation.

```csharp
// Obtain an instance of CustomBattleBannerBearersModel from the subsystem API first
CustomBattleBannerBearersModel customBattleBannerBearersModel = ...;
var result = customBattleBannerBearersModel.CanBannerBearerProvideEffectToFormation(agent, formation);
```

### CanAgentPickUpAnyBanner
`public override bool CanAgentPickUpAnyBanner(Agent agent)`

**Purpose:** Checks whether the this instance meets the preconditions for agent pick up any banner.

```csharp
// Obtain an instance of CustomBattleBannerBearersModel from the subsystem API first
CustomBattleBannerBearersModel customBattleBannerBearersModel = ...;
var result = customBattleBannerBearersModel.CanAgentPickUpAnyBanner(agent);
```

### CanAgentBecomeBannerBearer
`public override bool CanAgentBecomeBannerBearer(Agent agent)`

**Purpose:** Checks whether the this instance meets the preconditions for agent become banner bearer.

```csharp
// Obtain an instance of CustomBattleBannerBearersModel from the subsystem API first
CustomBattleBannerBearersModel customBattleBannerBearersModel = ...;
var result = customBattleBannerBearersModel.CanAgentBecomeBannerBearer(agent);
```

### GetAgentBannerBearingPriority
`public override int GetAgentBannerBearingPriority(Agent agent)`

**Purpose:** Reads and returns the agent banner bearing priority value held by the this instance.

```csharp
// Obtain an instance of CustomBattleBannerBearersModel from the subsystem API first
CustomBattleBannerBearersModel customBattleBannerBearersModel = ...;
var result = customBattleBannerBearersModel.GetAgentBannerBearingPriority(agent);
```

### CanFormationDeployBannerBearers
`public override bool CanFormationDeployBannerBearers(Formation formation)`

**Purpose:** Checks whether the this instance meets the preconditions for formation deploy banner bearers.

```csharp
// Obtain an instance of CustomBattleBannerBearersModel from the subsystem API first
CustomBattleBannerBearersModel customBattleBannerBearersModel = ...;
var result = customBattleBannerBearersModel.CanFormationDeployBannerBearers(formation);
```

### GetDesiredNumberOfBannerBearersForFormation
`public override int GetDesiredNumberOfBannerBearersForFormation(Formation formation)`

**Purpose:** Reads and returns the desired number of banner bearers for formation value held by the this instance.

```csharp
// Obtain an instance of CustomBattleBannerBearersModel from the subsystem API first
CustomBattleBannerBearersModel customBattleBannerBearersModel = ...;
var result = customBattleBannerBearersModel.GetDesiredNumberOfBannerBearersForFormation(formation);
```

### GetBannerBearerReplacementWeapon
`public override ItemObject GetBannerBearerReplacementWeapon(BasicCharacterObject agentCharacter)`

**Purpose:** Reads and returns the banner bearer replacement weapon value held by the this instance.

```csharp
// Obtain an instance of CustomBattleBannerBearersModel from the subsystem API first
CustomBattleBannerBearersModel customBattleBannerBearersModel = ...;
var result = customBattleBannerBearersModel.GetBannerBearerReplacementWeapon(agentCharacter);
```

## How to use

**Getting it.** There is no factory and no constructor call at mission time in 1.3.0. `Game.Current.ReplaceModel<T>` does not exist in this tree — that call belongs to a later release and will not compile here. Register a replacement from your `MBSubModuleBase.OnGameStart`, using the `BasicGameStarter.AddModel<T>(MBGameModel<T>)` overload (`BasicGameStarter.cs:47`), then read it back through `MissionGameModels.Current`.

```csharp
public class MyBannerBearersModel : BattleBannerBearersModel
{
    // One bearer instead of two, so small skirmishes still field a banner.
    public override int GetMinimumFormationTroopCountToBearBanners() => 1;

    // Cannot exceed 1 in the stock shape; override the gate instead.
    public override bool CanFormationDeployBannerBearers(Formation formation)
        => base.CanFormationDeployBannerBearers(formation) && formation.CountOfUnits >= 10;
}

public class MySubModule : MBSubModuleBase
{
    protected override void OnGameStart(Game game, IModDependencyResolver resolver)
    {
        base.OnGameStart(game, resolver);
        gameStarter.AddModel<BattleBannerBearersModel>(new MyBannerBearersModel());
    }
}
```

Read it inside a mission behavior or anywhere `Mission.Current` is alive:

```csharp
BattleBannerBearersModel model = MissionGameModels.Current.BattleBannerBearersModel;
Formation right = Mission.Current.ActiveFormation;
int bearers = model.GetDesiredNumberOfBannerBearersForFormation(right);
BannerComponent banner = model.GetActiveBanner(right);
```

**The mistake that costs you an hour.** Overriding `GetMinimumFormationTroopCountToBearBanners` alone and expecting a banner to appear. `CanFormationDeployBannerBearers` also requires `bannerBearerLogic.GetFormationBanner(formation) != null` (`CustomBattleBannerBearersModel.cs:90`), which is satisfied only when a `Banner` prefab was assigned to that formation in the mission XML. With no banner assigned the count override changes nothing at all and `GetDesiredNumberOfBannerBearersForFormation` keeps returning `0` no matter how low you set the threshold.

## See Also

- [BattleBannerBearersModel consumers in this bucket — MissionSiegeEnginesLogic](../MissionSiegeEnginesLogic)
- [BannerBearerLogic — the base-class property this model reads](../BannerBearerLogic)
- [MissionAgentSpawnLogic — supplies GetGeneralCharacterOfSide](../MissionAgentSpawnLogic)
- [Formation — the unit container every predicate filters](../../mission/Formation)
- [MissionDifficultyModel — the other single-method mission model](../MissionDifficultyModel)
- [Area Index](../)