---
title: "MultiplayerBattleInitializationModel"
description: "Auto-generated class reference for MultiplayerBattleInitializationModel."
---
# MultiplayerBattleInitializationModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerBattleInitializationModel : BattleInitializationModel`
**Base:** `BattleInitializationModel`
**File:** `TaleWorlds.MountAndBlade/MultiplayerBattleInitializationModel.cs`

## Overview

`MultiplayerBattleInitializationModel` is a concrete `BattleInitializationModel` with a two-override body and, in this tree, **no instance anywhere**. It exists as a class in `TaleWorlds.MountAndBlade` but nothing constructs it: a tree-wide search for the type name returns only its own declaration file. The two `AddModel<BattleInitializationModel>` registrations that do exist are `CustomBattleInitializationModel` in the editor build (`EditorGame.cs:52`) and `SandboxBattleInitializationModel` in the campaign module (`SandBoxSubModule.cs:42`), so `MissionGameModels.Current.BattleInitializationModel` (`MissionGameModels.cs:106`) never resolves to this type in a shipped 1.3.0 game. Both of its overrides return the empty answer — `GetAllAvailableTroopTypes` returns `new List<FormationClass>()` (`MultiplayerBattleInitializationModel.cs:14`) and `CanPlayerSideDeployWithOrderOfBattleAux` returns `false` (`MultiplayerBattleInitializationModel.cs:20`) — which is consistent with it being a stub: were it registered, troop selection would offer nothing and order of battle would be permanently unavailable.

## Mental Model

It inherits the caching machinery from `BattleInitializationModel`, and that machinery is the part that matters if you ever subclass this. `CanPlayerSideDeployWithOrderOfBattle()` is not virtual; it wraps the protected abstract `CanPlayerSideDeployWithOrderOfBattleAux()` and memoises the answer in `_canPlayerSideDeployWithOOB`, guarded by `_isCanPlayerSideDeployWithOOBCached` (`BattleInitializationModel.cs:17`). The cache is only invalidated by `InitializeModel()` (`BattleInitializationModel.cs:28`), which in turn is only called from `MissionAgentSpawnLogic` at `MissionAgentSpawnLogic.cs:338`; `FinalizeModel()` at `MissionAgentSpawnLogic.cs:345` clears `_isInitialized` without touching the cached flag.

The practical consequence: the first caller of `CanPlayerSideDeployWithOrderOfBattle` before spawn init latches the value forever. The shipped callers are all over the place — `DeploymentMissionController.cs:206`, `BannerBearerLogic.cs:889`, `GeneralsAndCaptainsAssignmentLogic.cs:39`, `SPOrderOfBattleVM.cs:158` — and several of them can run before `InitializeModel`, so overriding `CanPlayerSideDeployWithOrderOfBattleAux` to return a mission-dependent answer will be silently ignored from that point on.

The other inherited member is abstract with a non-obvious effect when the override returns nothing. `GetAllAvailableTroopTypes` feeds the deployment and troop-picker UI; returning an empty list is not the same as "no restriction", it is "there are no troop types at all", and the UI renders an empty picker rather than falling back to a default.

## How to use

**Getting it.** There is nothing to obtain — no registration path in this tree creates it. To use it you must register it yourself, and you should understand what you are switching on before you do:

```csharp
public class MyBattleInit : BattleInitializationModel
{
    public override List<FormationClass> GetAllAvailableTroopTypes()
    {
        // NOT inherited from MultiplayerBattleInitializationModel: that returns an empty list.
        return new List<FormationClass> { FormationClass.Infantry, FormationClass.Archer };
    }

    protected override bool CanPlayerSideDeployWithOrderOfBattleAux()
    {
        return true;
    }
}

public class MySubModule : MBSubModuleBase
{
    protected override void OnGameStart(Game game, IModDependencyResolver resolver)
    {
        base.OnGameStart(game, resolver);
        gameStarter.AddModel<BattleInitializationModel>(new MyBattleInit());
    }
}
```

Read it in mission through the mission models manager, not through a fresh instance:

```csharp
BattleInitializationModel init = MissionGameModels.Current.BattleInitializationModel;
bool oob = init.CanPlayerSideDeployWithOrderOfBattle();   // memoised until InitializeModel()
```

**The mistake that produces a mission stuck in deployment.** Overriding `CanPlayerSideDeployWithOrderOfBattleAux` and expecting a live re-read each frame. Because the answer is cached behind `_isCanPlayerSideDeployWithOOBCached`, a value computed before `MissionAgentSpawnLogic` calls `InitializeModel()` is the value every later caller sees — including `DeploymentMissionController`, which branches on it to decide whether to advance past deployment.

## See Also

- [MissionDifficultyModel — sibling MBGameModel with the same registration shape](../MissionDifficultyModel)
- [CustomBattleAgentStatCalculateModel — another editor-build model in this area](../CustomBattleAgentStatCalculateModel)
- [MissionAgentContourControllerView — a view-layer model consumer in the same bucket](../MissionAgentContourControllerView)
- [Mission — where deployment state is driven](../../mission/Mission)
- [Area Index](../)

## Key Methods

### GetAllAvailableTroopTypes
`public override List<FormationClass> GetAllAvailableTroopTypes()`

**Purpose:** Reads and returns the all available troop types value held by the this instance.

```csharp
// Obtain an instance of MultiplayerBattleInitializationModel from the subsystem API first
MultiplayerBattleInitializationModel multiplayerBattleInitializationModel = ...;
var result = multiplayerBattleInitializationModel.GetAllAvailableTroopTypes();
```

## How to use

The existing `Game.Current.ReplaceModel<MultiplayerBattleInitializationModel>(...)` line in this page was wrong for 1.3.0: `ReplaceModel` does not appear anywhere in this tree. The registration API here is `BasicGameStarter.AddModel<BattleInitializationModel>` (`BasicGameStarter.cs:47`), which resolves the *abstract* type — registering `MultiplayerBattleInitializationModel` itself would satisfy the registry and then hand every caller an empty troop list.

```csharp
// Register the ABSTRACT type, not the concrete multiplayer stub.
gameStarter.AddModel<BattleInitializationModel>(new MyBattleInit());
```

## See Also

- [Area Index](../)