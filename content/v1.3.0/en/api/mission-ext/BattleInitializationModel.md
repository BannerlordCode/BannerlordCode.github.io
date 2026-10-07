---
title: "BattleInitializationModel"
description: "Auto-generated class reference for BattleInitializationModel."
---
# BattleInitializationModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class BattleInitializationModel : MBGameModel<BattleInitializationModel>`
**Base:** `MBGameModel<BattleInitializationModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/BattleInitializationModel.cs`

## Overview

`BattleInitializationModel` is the rule model behind the *order of battle* — the pre-battle screen where the player assembles generals, captains and formations. It is an abstract `MBGameModel<BattleInitializationModel>` (`BattleInitializationModel.cs:8`), so it is a process-wide singleton resolved once by `MissionGameModels` from the module's registered model list (`MissionGameModels.cs:106`), not something a mission owns. There are three shipped implementations and you replace it by registering your own: `CustomBattleInitializationModel`, `SandboxBattleInitializationModel` (`SandBoxSubModule.cs:42`) and `MultiplayerBattleInitializationModel`.

It exposes exactly two things. `GetAllAvailableTroopTypes()` (`BattleInitializationModel.cs:11`) asks which `FormationClass` values the player's troops can field — the vanilla implementation walks `Mission.Current.PlayerTeam.ActiveAgents` and classifies each character as infantry, ranged, cavalry or horse archer (`CustomBattleInitializationModel.cs:15`). `CanPlayerSideDeployWithOrderOfBattle()` (`BattleInitializationModel.cs:17`) is the yes/no gate the whole order-of-battle UI keys off, and it is called from at least seven places, including the deployment controller itself (`DeploymentMissionController.cs:206`), the general/captain assignment logic (`GeneralsAndCaptainsAssignmentLogic.cs:39`) and the order-of-battle view-model (`SPOrderOfBattleVM.cs:158`).

## Mental Model

The one non-abstract behaviour is a cache, and it is the thing to understand before you override anything. `CanPlayerSideDeployWithOrderOfBattle` calls `CanPlayerSideDeployWithOrderOfBattleAux` on the *first* call only and stores the answer (`BattleInitializationModel.cs:19`); every later call returns the stored value. Only `InitializeModel()` clears the flag (`BattleInitializationModel.cs:30`), and in the shipped wiring that happens in `MissionAgentSpawnLogic.OnBehaviorInitialize` (`MissionAgentSpawnLogic.cs:338`) — once, when behaviours initialise — and never again. So if your `...Aux` implementation depends on state that changes during the mission, as the vanilla one does (it reads the current player-controllable troop count), the answer is frozen at whatever it was the first time anything asked.

`MinimumTroopCountForPlayerDeployment = 20` (`BattleInitializationModel.cs:41`) is a trap. Nothing in the tree reads it. The shipped `CustomBattleInitializationModel` hard-codes the literal instead: `GetNumberOfPlayerControllableTroops() >= 20` (`CustomBattleInitializationModel.cs:46`). Changing the constant changes nothing; to move that threshold you must override `CanPlayerSideDeployWithOrderOfBattleAux` in your own subclass, which is also the only way to change the other half of the vanilla rule — `Mission.Current.IsSallyOutBattle` forces the answer to `false` (`CustomBattleInitializationModel.cs:41`).

Note the visibility split in the pair: `CanPlayerSideDeployWithOrderOfBattle` is `public` and is the cached facade, while `CanPlayerSideDeployWithOrderOfBattleAux` is `protected abstract` and is your override point (`BattleInitializationModel.cs:14`). Override the `Aux` one. If you shadow the public one instead, the `_isCanPlayerSideDeployWithOOBCached` flag stays `false` forever and your override is called on every query — usually harmless, but it silently loses the memoisation the base was written for.

`_isInitialized` (`BattleInitializationModel.cs:50`) is written by `InitializeModel` and `FinalizeModel` (`BattleInitializationModel.cs:37`) and read by nothing in this class. It is there for `GameModelsManager`, not for you.

## How to use

**Getting one.** Do not `new` it — register it in your module's `OnGameInitialization` with `gameStarter.AddModel<BattleInitializationModel>(new MyBattleInitializationModel())`, the same call the editor game uses (`EditorGame.cs:52`) and the same shape as the sandbox registration (`SandBoxSubModule.cs:42`). `MissionGameModels` picks it up through `GetGameModel<BattleInitializationModel>()` (`MissionGameModels.cs:106`), and callers reach it as `MissionGameModels.Current.BattleInitializationModel`.

**Typical use:**

```csharp
using System.Collections.Generic;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.ComponentInterfaces;

public class MyBattleInitializationModel : BattleInitializationModel
{
    public override List<FormationClass> GetAllAvailableTroopTypes()
    {
        // Same walk the vanilla model does: classify what the player actually fielded.
        List<FormationClass> available = new List<FormationClass>();

        foreach (Agent agent in Mission.Current.PlayerTeam.ActiveAgents)
        {
            BasicCharacterObject character = agent.Character;
            FormationClass cls;
            if (character.IsMounted)
            {
                cls = character.IsRanged ? FormationClass.HorseArcher : FormationClass.Cavalry;
            }
            else
            {
                cls = character.IsRanged ? FormationClass.Ranged : FormationClass.Infantry;
            }

            if (!available.Contains(cls))
            {
                available.Add(cls);
            }
        }

        return available;
    }

    protected override bool CanPlayerSideDeployWithOrderOfBattleAux()
    {
        if (Mission.Current == null || Mission.Current.IsSallyOutBattle)
        {
            return false;
        }

        // 12, not MinimumTroopCountForPlayerDeployment: the constant is unused.
        return Mission.Current.GetMissionBehavior<MissionAgentSpawnLogic>()
            .GetNumberOfPlayerControllableTroops() >= 12;
    }
}
```

To re-evaluate the cached answer mid-mission — after a reinforcement round, say — call `MissionGameModels.Current.BattleInitializationModel.InitializeModel()`; it is the only thing that resets the flag (`BattleInitializationModel.cs:30`).

**Most common mistake:** editing `MinimumTroopCountForPlayerDeployment` and expecting the order of battle to open.

```csharp
// Looks right, does nothing:
public const int MinimumTroopCountForPlayerDeployment = 5;
```

The shipped implementation compares against its own literal `20` (`CustomBattleInitializationModel.cs:46`), never the constant, so the deployment threshold in the game is unchanged and your edit is silently discarded. Override `CanPlayerSideDeployWithOrderOfBattleAux` instead — and remember the result is cached after the first query, so if you lower the threshold *after* the UI has already asked, the order of battle stays closed until `InitializeModel()` runs.

## Key Methods

### GetAllAvailableTroopTypes
`public abstract List<FormationClass> GetAllAvailableTroopTypes()`

**Purpose:** Reads and returns the all available troop types value held by the this instance.

```csharp
// Obtain an instance of BattleInitializationModel from the subsystem API first
BattleInitializationModel battleInitializationModel = ...;
var result = battleInitializationModel.GetAllAvailableTroopTypes();
```

### CanPlayerSideDeployWithOrderOfBattle
`public bool CanPlayerSideDeployWithOrderOfBattle()`

**Purpose:** Checks whether the this instance meets the preconditions for player side deploy with order of battle.

```csharp
// Obtain an instance of BattleInitializationModel from the subsystem API first
BattleInitializationModel battleInitializationModel = ...;
var result = battleInitializationModel.CanPlayerSideDeployWithOrderOfBattle();
```

### InitializeModel
`public void InitializeModel()`

**Purpose:** Prepares the resources, state, or bindings required by model.

```csharp
// Obtain an instance of BattleInitializationModel from the subsystem API first
BattleInitializationModel battleInitializationModel = ...;
battleInitializationModel.InitializeModel();
```

### FinalizeModel
`public void FinalizeModel()`

**Purpose:** Executes the FinalizeModel logic.

```csharp
// Obtain an instance of BattleInitializationModel from the subsystem API first
BattleInitializationModel battleInitializationModel = ...;
battleInitializationModel.FinalizeModel();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
BattleInitializationModel instance = ...;
```

## See Also

- [Area Index](../)
- [CustomBattleInitializationModel — the shipped implementation you are replacing](../CustomBattleInitializationModel)
- [MissionGameModels — resolves and publishes the instance](../MissionGameModels)
- [GeneralsAndCaptainsAssignmentLogic — a caller of the cached gate](../GeneralsAndCaptainsAssignmentLogic)
- [DeploymentMissionController — another caller, and the phase this gates](../DeploymentMissionController)
- [中文页面](../../../../zh/api/mission-ext/BattleInitializationModel)