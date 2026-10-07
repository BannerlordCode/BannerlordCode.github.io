---
title: "SandboxMissionDifficultyModel"
description: "Auto-generated class reference for SandboxMissionDifficultyModel."
---
# SandboxMissionDifficultyModel

**Namespace:** SandBox.GameComponents
**Module:** SandBox.GameComponents
**Type:** `public class SandboxMissionDifficultyModel : MissionDifficultyModel`
**Base:** `MissionDifficultyModel`
**File:** `SandBox/GameComponents/SandboxMissionDifficultyModel.cs`

## Overview

`SandboxMissionDifficultyModel` applies the player's damage-taken difficulty setting, and it does so by picking one of three multipliers off the mission rather than computing anything. `GetDamageMultiplierOfCombatDifficulty` (`SandBox/GameComponents/SandboxMissionDifficultyModel.cs:13`) starts from `1f`, resolves a mounted victim to its rider first (`:16`), and then branches three ways: the player's own agent gets `Mission.Current.DamageToPlayerMultiplier` (`:21`), an agent from the player's own party gets `DamageToFriendsMultiplier` unless the attacker is the main agent, in which case `DamageFromPlayerToFriendsMultiplier` applies instead (`:56`, `:60`), and everybody else gets the untouched `1f`.

## Mental Model

This is a lookup against `Mission.Current`, so treat it as valid only inside a live mission. `Mission.cs:6334` calls it while resolving combat damage and passes the attacker as an optional argument — the default is `null`, and that default is meaningful: with no attacker, friendly fire always falls to the plain `DamageToFriendsMultiplier` branch (`:58`). A mod overriding this must reproduce that argument asymmetry or player-versus-friend damage will start using the wrong setting. The other trap is that the method assumes `Mission.Current` exists on the friendly-fire branches and dereferences it without a guard, while the `1f` default path is safe anywhere; calling it from a campaign behavior instead of from mission logic will therefore throw on exactly the cases that matter least.

## Key Methods

### GetDamageMultiplierOfCombatDifficulty
`public override float GetDamageMultiplierOfCombatDifficulty(Agent victimAgent, Agent attackerAgent = null)`

**Purpose:** Reads and returns the damage multiplier of combat difficulty value held by this instance.

```csharp
SandboxMissionDifficultyModel sandboxMissionDifficultyModel = ...;
var result = sandboxMissionDifficultyModel.GetDamageMultiplierOfCombatDifficulty(victimAgent, null);
```

## Usage Example

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    gameStarterObject.AddModel<MissionDifficultyModel>(new SandboxMissionDifficultyModel());
}
```

`MissionDifficultyModel` is declared as `MBGameModel<MissionDifficultyModel>` (`MissionDifficultyModel.cs:7`), so the generic `AddModel<T>` overload (`IGameStarter.cs:13`) accepts this instance. The stock game installs this same model through the same overload at `SandBoxSubModule.cs:35`.

## See Also

- [Area Index](../)