---
title: "CustomBattleAgentStatCalculateModel"
description: "Auto-generated class reference for CustomBattleAgentStatCalculateModel."
---
# CustomBattleAgentStatCalculateModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleAgentStatCalculateModel : AgentStatCalculateModel`
**Base:** `AgentStatCalculateModel`
**File:** `TaleWorlds.MountAndBlade/CustomBattleAgentStatCalculateModel.cs`

## Overview

`CustomBattleAgentStatCalculateModel` is the editor-build implementation of the abstract `AgentStatCalculateModel`: it turns skills, equipment and banners into the numeric modifiers that drive combat. One instance is created at module start by `EditorGame` and registered with `basicGameStarter.AddModel<AgentStatCalculateModel>(new CustomBattleAgentStatCalculateModel())` (`EditorGame.cs:48`); the campaign build never registers this type, it registers `SandboxAgentStatCalculateModel` instead (`SandBoxSubModule.cs:32`). Mission code reads it through `MissionGameModels.Current.AgentStatCalculateModel`, populated once in the `MissionGameModels` constructor (`MissionGameModels.cs:99`).

It is stateless — no fields, no constructor — and every member is an `override`. Two members mutate the agent's driven properties rather than returning a value: `InitializeAgentStats` writes armour encumbrance and armour sums into `AgentDrivenProperties` (`CustomBattleAgentStatCalculateModel.cs:24`, `CustomBattleAgentStatCalculateModel.cs:26`, `CustomBattleAgentStatCalculateModel.cs:29`) and `UpdateAgentStats` does the same for bonuses and penalties. The rest return scalars.

## Mental Model

`GetWeaponDamageMultiplier` has **hard-coded per-skill coefficients that are not symmetric and not exposed**. One-handed gets `0.0015f` per effective skill point, two-handed `0.0016f`, bow `0.0011f`, polearm `0.0007f`, throwing `0.0006f` (`CustomBattleAgentStatCalculateModel.cs:81` through `CustomBattleAgentStatCalculateModel.cs:97`). Two-handed — the *slowest* skill in the game — has the *highest* damage coefficient, because it compensates for its wind-up; throwing is lowest. Any `SkillObject` that is not one of those five named ones falls through and contributes exactly nothing, even if `weapon.RelevantSkill` is set to it. The result is floored at `0f` (`CustomBattleAgentStatCalculateModel.cs:100`), never negative.

`GetSneakAttackMultiplier` reads a character's **campaign skill value** directly from `agent.Character.GetSkillValue(DefaultSkills.Roguery)` (`CustomBattleAgentStatCalculateModel.cs:116`), not the effective mission skill that the neighbouring methods use. In the editor build those are the same thing, but the pattern does not survive a campaign port. Note the flat `+ 0.5f` before the skill term (`CustomBattleAgentStatCalculateModel.cs:117`): every roguery user gets a 1.5× sneak multiplier even at skill 0, and daggers then triple it while throwing knives only double it (`CustomBattleAgentStatCalculateModel.cs:120`, `CustomBattleAgentStatCalculateModel.cs:124`).

Non-humans are handled by returning `float.MaxValue`, not by a branch on "is this a horse". `GetKnockBackResistance` computes a skill-scaled value for humans and returns `float.MaxValue` for anything else (`CustomBattleAgentStatCalculateModel.cs:133`, `CustomBattleAgentStatCalculateModel.cs:139`) — immovable. Any resistance override you write must preserve that, or horses start being knocked around by blows that were never meant to move them.

Two members are honest no-ops in this build: `GetDifficultyModifier` returns `1f` (`CustomBattleAgentStatCalculateModel.cs:14`) and `GetEquipmentStealthBonus` returns `0f` (`CustomBattleAgentStatCalculateModel.cs:106`). They are pass-throughs, not missing features.

The most interesting member is the private banner handler. It fetches the agent's active banner through the *banner bearers* model — `MissionGameModels.Current.BattleBannerBearersModel.GetActiveBanner(agent.Formation)` (`CustomBattleAgentStatCalculateModel.cs:401`) — and then uses `FactoredNumber` boxes to compose its effects: a `DecreasedRangedAccuracyPenalty` on `WeaponInaccuracy` and an `IncreasedTroopMovementSpeed` on `MaxSpeedMultiplier`, both applied through `BannerHelper.AddBannerBonusForBanner` into separate `FactoredNumber` instances before being written back (`CustomBattleAgentStatCalculateModel.cs:405` through `CustomBattleAgentStatCalculateModel.cs:413`). So a banner-bearer stat model and a bearer-capability model are coupled here: this class reads the *capability* model to apply the *stat* bonus, and a mod that replaces `CustomBattleBannerBearersModel` changes this one's behaviour too.

`SetMountedWeaponPenaltiesOnAgent` has the same FactoredNumber-free but sign-flipping structure, and it only applies when the computed penalty is positive — `if (num > 0f)` where `num = 0.3f - effectiveSkill * 0.003f` (`CustomBattleAgentStatCalculateModel.cs:421`, `CustomBattleAgentStatCalculateModel.cs:422`). Past 100 Riding skill the penalty vanishes rather than inverting into a bonus. Speed multipliers are reduced by `(1 - num)` and the accuracy wait time *increased* by `(1 + num)`, which is why the same `num` appears with opposite signs (`CustomBattleAgentStatCalculateModel.cs:427`, `CustomBattleAgentStatCalculateModel.cs:428`).

## How to use

**Getting it.** Register a replacement from a submodule using the real 1.3.0 API. `Game.Current.ReplaceModel<T>` does not exist in this tree — its occurrence count across `bannerlord-1.3.0`, `1.3.15` and `1.5.3` is zero — so the registration form is `BasicGameStarter.AddModel<T>`, whose signature is `public void AddModel<T>(MBGameModel<T> gameModel) where T : GameModel` (`BasicGameStarter.cs:47`). Note the generic argument is the **abstract** type; passing the concrete one registers an entry nothing will ever resolve.

```csharp
public class MyStatModel : AgentStatCalculateModel
{
    public override float GetDifficultyModifier() => 1.5f;   // base returns 1f

    public override float GetWeaponDamageMultiplier(Agent agent, WeaponComponentData weapon)
    {
        // Do not copy the base's if/else chain: an unlisted SkillObject contributes
        // nothing at all (CustomBattleAgentStatCalculateModel.cs:79-97).
        float baseValue = base.GetWeaponDamageMultiplier(agent, weapon);
        return baseValue * 1.2f;
    }
}

public class MySubModule : MBSubModuleBase
{
    protected override void OnGameStart(Game game, IModDependencyResolver resolver)
    {
        base.OnGameStart(game, resolver);
        gameStarter.AddModel<AgentStatCalculateModel>(new MyStatModel());
    }
}
```

Read the live instance from a mission:

```csharp
AgentStatCalculateModel stats = MissionGameModels.Current.AgentStatCalculateModel;
int eff = stats.GetEffectiveSkill(Agent.Main, DefaultSkills.OneHanded);
float mult = stats.GetWeaponDamageMultiplier(Agent.Main, Weapon.CurrentWeaponItem);
Debug.Print("one-handed eff=" + eff + " multiplier=" + mult, false);
```

**The mistake that registers a model nothing will ever read.** Calling `gameStarter.AddModel<CustomBattleAgentStatCalculateModel>(new MyStatModel())` instead of `AddModel<AgentStatCalculateModel>`. The generic parameter is the key `GetModel<T>` scans for (`BasicGameStarter.cs:29`), and `MissionGameModels` looks up `AgentStatCalculateModel` (`MissionGameModels.cs:99`) — so a registration under the concrete type compiles, loads without error, and leaves `MissionGameModels.Current.AgentStatCalculateModel` resolving to the game's own model. Every stat change you wrote is simply absent at runtime, with no diagnostic.

## Key Methods

### GetDifficultyModifier
`public override float GetDifficultyModifier()`

**Purpose:** Reads and returns the difficulty modifier value held by the this instance.

```csharp
// Obtain an instance of CustomBattleAgentStatCalculateModel from the subsystem API first
CustomBattleAgentStatCalculateModel customBattleAgentStatCalculateModel = ...;
var result = customBattleAgentStatCalculateModel.GetDifficultyModifier();
```

### CanAgentRideMount
`public override bool CanAgentRideMount(Agent agent, Agent targetMount)`

**Purpose:** Checks whether the this instance meets the preconditions for agent ride mount.

```csharp
// Obtain an instance of CustomBattleAgentStatCalculateModel from the subsystem API first
CustomBattleAgentStatCalculateModel customBattleAgentStatCalculateModel = ...;
var result = customBattleAgentStatCalculateModel.CanAgentRideMount(agent, targetMount);
```

### InitializeAgentStats
`public override void InitializeAgentStats(Agent agent, Equipment spawnEquipment, AgentDrivenProperties agentDrivenProperties, AgentBuildData agentBuildData)`

**Purpose:** Prepares the resources, state, or bindings required by agent stats.

```csharp
// Obtain an instance of CustomBattleAgentStatCalculateModel from the subsystem API first
CustomBattleAgentStatCalculateModel customBattleAgentStatCalculateModel = ...;
customBattleAgentStatCalculateModel.InitializeAgentStats(agent, spawnEquipment, agentDrivenProperties, agentBuildData);
```

### UpdateAgentStats
`public override void UpdateAgentStats(Agent agent, AgentDrivenProperties agentDrivenProperties)`

**Purpose:** Recalculates and stores the latest representation of agent stats.

```csharp
// Obtain an instance of CustomBattleAgentStatCalculateModel from the subsystem API first
CustomBattleAgentStatCalculateModel customBattleAgentStatCalculateModel = ...;
customBattleAgentStatCalculateModel.UpdateAgentStats(agent, agentDrivenProperties);
```

### GetWeaponDamageMultiplier
`public override float GetWeaponDamageMultiplier(Agent agent, WeaponComponentData weapon)`

**Purpose:** Reads and returns the weapon damage multiplier value held by the this instance.

```csharp
// Obtain an instance of CustomBattleAgentStatCalculateModel from the subsystem API first
CustomBattleAgentStatCalculateModel customBattleAgentStatCalculateModel = ...;
var result = customBattleAgentStatCalculateModel.GetWeaponDamageMultiplier(agent, weapon);
```

### GetEquipmentStealthBonus
`public override float GetEquipmentStealthBonus(Agent agent)`

**Purpose:** Reads and returns the equipment stealth bonus value held by the this instance.

```csharp
// Obtain an instance of CustomBattleAgentStatCalculateModel from the subsystem API first
CustomBattleAgentStatCalculateModel customBattleAgentStatCalculateModel = ...;
var result = customBattleAgentStatCalculateModel.GetEquipmentStealthBonus(agent);
```

### GetSneakAttackMultiplier
`public override float GetSneakAttackMultiplier(Agent agent, WeaponComponentData weapon)`

**Purpose:** Reads and returns the sneak attack multiplier value held by the this instance.

```csharp
// Obtain an instance of CustomBattleAgentStatCalculateModel from the subsystem API first
CustomBattleAgentStatCalculateModel customBattleAgentStatCalculateModel = ...;
var result = customBattleAgentStatCalculateModel.GetSneakAttackMultiplier(agent, weapon);
```

### GetKnockBackResistance
`public override float GetKnockBackResistance(Agent agent)`

**Purpose:** Reads and returns the knock back resistance value held by the this instance.

```csharp
// Obtain an instance of CustomBattleAgentStatCalculateModel from the subsystem API first
CustomBattleAgentStatCalculateModel customBattleAgentStatCalculateModel = ...;
var result = customBattleAgentStatCalculateModel.GetKnockBackResistance(agent);
```

### GetKnockDownResistance
`public override float GetKnockDownResistance(Agent agent, StrikeType strikeType = StrikeType.Invalid)`

**Purpose:** Reads and returns the knock down resistance value held by the this instance.

```csharp
// Obtain an instance of CustomBattleAgentStatCalculateModel from the subsystem API first
CustomBattleAgentStatCalculateModel customBattleAgentStatCalculateModel = ...;
var result = customBattleAgentStatCalculateModel.GetKnockDownResistance(agent, strikeType.Invalid);
```

### GetDismountResistance
`public override float GetDismountResistance(Agent agent)`

**Purpose:** Reads and returns the dismount resistance value held by the this instance.

```csharp
// Obtain an instance of CustomBattleAgentStatCalculateModel from the subsystem API first
CustomBattleAgentStatCalculateModel customBattleAgentStatCalculateModel = ...;
var result = customBattleAgentStatCalculateModel.GetDismountResistance(agent);
```

### GetBreatheHoldMaxDuration
`public override float GetBreatheHoldMaxDuration(Agent agent, float baseBreatheHoldMaxDuration)`

**Purpose:** Reads and returns the breathe hold max duration value held by the this instance.

```csharp
// Obtain an instance of CustomBattleAgentStatCalculateModel from the subsystem API first
CustomBattleAgentStatCalculateModel customBattleAgentStatCalculateModel = ...;
var result = customBattleAgentStatCalculateModel.GetBreatheHoldMaxDuration(agent, 0);
```

## Usage Example

```csharp
The `Game.Current.ReplaceModel<CustomBattleAgentStatCalculateModel>(...)` line previously on this page named an API that does not exist in `bannerlord-1.3.0` (zero occurrences of `ReplaceModel` in the tree). It also registered the concrete type, which would not have been read even if the call had compiled. The working form is:

```csharp
gameStarter.AddModel<AgentStatCalculateModel>(new MyStatModel());
```
```

## See Also

- [MissionDifficultyModel — the other single-method combat model in the same registry](../MissionDifficultyModel)
- [CustomBattleBannerBearersModel — the capability model whose GetActiveBanner this one reads](../CustomBattleBannerBearersModel)
- [MultiplayerAgentApplyDamageModel — the unused MP counterpart of the damage rules](../MultiplayerAgentApplyDamageModel)
- [Area Index](../)