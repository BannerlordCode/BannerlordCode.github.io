---
title: "MissionDifficultyModel"
description: "Auto-generated class reference for MissionDifficultyModel."
---
# MissionDifficultyModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionDifficultyModel : MBGameModel<MissionDifficultyModel>`
**Base:** `MBGameModel<MissionDifficultyModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/MissionDifficultyModel.cs`

## Overview

`MissionDifficultyModel` is the abstract `MBGameModel<MissionDifficultyModel>` that owns exactly one decision: the float by which an incoming hit is scaled before damage is applied. It declares a single abstract member, `GetDamageMultiplierOfCombatDifficulty(Agent victimAgent, Agent attackerAgent = null)` (`MissionDifficultyModel.cs:10`). It has no constructor, no fields and no lifetime of its own — `MissionGameModels` resolves it once in its constructor through `GetGameModel<MissionDifficultyModel>()` (`MissionGameModels.cs:104`) and exposes it as `MissionGameModels.Current.MissionDifficultyModel`. Two implementations ship with the game: `DefaultMissionDifficultyModel`, used by the editor build, and `SandboxMissionDifficultyModel`, which the campaign module registers at `SandBoxSubModule.cs:35`.

The interesting part is who asks. Nothing calls the model during a hit. `Mission.GetDamageMultiplierOfCombatDifficulty` (`Mission.cs:6330`) forwards to the model at `Mission.cs:6334`, and it is that wrapper which combat code uses — `AttackInformation` at `AttackInformation.cs:186` and `MissionCombatMechanicsHelper` at `MissionCombatMechanicsHelper.cs:110`. So the multiplier is computed once when the attack information is assembled, not when damage lands.

## Mental Model

The whole contract is one asymmetry: the multiplier is keyed on **who is being hit**, not on who is attacking, except in one special case. Both shipped implementations start from `1f` and only move away from it for three situations — the main agent is the victim (`DamageToPlayerMultiplier`), a friendly is the victim (`DamageToFriendsMultiplier`), and a friendly is the victim *and* the main agent did the hitting (`DamageFromPlayerToFriendsMultiplier`).

The `attackerAgent` argument is optional and defaults to `null`, and it is only consulted inside the friendly branch. Pass `null` and you get the generic friendly multiplier; pass the main agent and you get the "player hit their own friendly" multiplier. Omitting the argument when you meant to pass the main agent is therefore a silent wrong-number bug, not a compile error.

Both implementations normalise the victim first with `victimAgent = victimAgent.IsMount ? victimAgent.RiderAgent : victimAgent` (`DefaultMissionDifficultyModel.cs:13`), and they do it **before** the `victimAgent != null` check on the following line. The null check is unreachable for a null argument: the dereference on line 13 throws `NullReferenceException` first. The parameter is declared non-optional, so the contract is "never null" — but nothing enforces it at the boundary.

The campaign and editor implementations diverge on what "friendly" means. `DefaultMissionDifficultyModel` asks `victimAgent.IsFriendOf(mission.MainAgent)`, which is a runtime agent relationship; `SandboxMissionDifficultyModel` compares `victimAgent.Origin.BattleCombatant` against `mainAgent.Origin.BattleCombatant` as `PartyBase` objects, so it treats two agents of the same party as friendly even if the agent-level friendship flag was never set. If you port a difficulty tweak between the two you are changing which hits get scaled, not just the size of the scale.

## How to use

**Getting it.** Register from `MBSubModuleBase.OnGameStart` through the model registry — `gameStarter.AddModel<MissionDifficultyModel>(new MyDifficultyModel())` (`BasicGameStarter.cs:47` is the overload that matters, because it takes an `MBGameModel<T>`). Read it back with `MissionGameModels.Current.MissionDifficultyModel`, never with `Game.Current.GetModel<T>()`, which does not exist in this tree.

```csharp
// MyDifficultyModel.cs -- e.g. "the player takes 60% of incoming damage"
public class MyDifficultyModel : MissionDifficultyModel
{
    public override float GetDamageMultiplierOfCombatDifficulty(Agent victimAgent, Agent attackerAgent = null)
    {
        // Normalise the mount, exactly as the shipped models do: the rider is the victim.
        Agent rider = victimAgent.IsMount ? victimAgent.RiderAgent : victimAgent;
        if (rider == null || rider.IsMainAgent)
        {
            return 0.6f;
        }
        return base.GetDamageMultiplierOfCombatDifficulty(victimAgent, attackerAgent);
    }
}

public class MySubModule : MBSubModuleBase
{
    protected override void OnGameStart(Game game, IModDependencyResolver resolver)
    {
        base.OnGameStart(game, resolver);
        gameStarter.AddModel<MissionDifficultyModel>(new MyDifficultyModel());
    }
}
```

And from a mission behavior, inside a live mission:

```csharp
float scale = Mission.Current.GetDamageMultiplierOfCombatDifficulty(victimAgent, attackerAgent);
damage = damage * scale;
```

**The mistake that produces an invisible bug.** Overriding the model and reading the argument the wrong way round, treating the first parameter as the attacker. The first parameter is the *victim*, and it is the only parameter that selects the branch in every shipped implementation. Passed the wrong agent your override silently applies the player-damage scalar to every hit in the battle, and nothing throws.

## Key Methods

### GetDamageMultiplierOfCombatDifficulty
`public abstract float GetDamageMultiplierOfCombatDifficulty(Agent victimAgent, Agent attackerAgent = null)`

**Purpose:** Reads and returns the damage multiplier of combat difficulty value held by the this instance.

```csharp
// Obtain an instance of MissionDifficultyModel from the subsystem API first
MissionDifficultyModel missionDifficultyModel = ...;
var result = missionDifficultyModel.GetDamageMultiplierOfCombatDifficulty(victimAgent, null);
```

## Registration order

`AddModel<T>` resolves `T` by scanning its list backwards (`BasicGameStarter.cs:49`) and hands the previously registered instance to the new model as `BaseModel` (`MBGameModel.cs:14`). Two consequences worth knowing: a mod registration added after the base game's wins without you having to remove anything, and if you want the stock behaviour instead of reimplementing it you call `base.GetDamageMultiplierOfCombatDifficulty(...)` — which routes through `MBGameModel<T>.BaseModel`, not through a virtual call you overrode.

## See Also

- [MissionCombatMechanicsHelper — one of the two in-mission callers](../MissionCombatMechanicsHelper)
- [ItemPickupModel — the sibling one-method model in the same registry](../ItemPickupModel)
- [CustomBattleBannerBearersModel — a multi-method model for contrast](../CustomBattleBannerBearersModel)
- [Mission — the wrapper that owns the forwarding call](../../mission/Mission)
- [Area Index](../)