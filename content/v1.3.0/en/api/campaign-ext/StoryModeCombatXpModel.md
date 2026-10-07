---
title: "StoryModeCombatXpModel"
description: "Auto-generated class reference for StoryModeCombatXpModel."
---
# StoryModeCombatXpModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModeCombatXpModel : CombatXpModel`
**Base:** `CombatXpModel`
**File:** `StoryMode/GameComponents/StoryModeCombatXpModel.cs`

## Overview

`StoryModeCombatXpModel` exists for exactly one reason: hits in the training field must award nothing. Its single substantive override, `GetXpFromHit` (`StoryMode/GameComponents/StoryModeCombatXpModel.cs:31`), checks `Settlement.CurrentSettlement.IsTrainingField()` and returns a zero-valued `ExplainedNumber` instead of the normal calculation (`:35`). `CaptainRadius`, `GetSkillForWeapon` and `GetXpMultiplierFromShotDifficulty` are pure passthroughs to the sandbox model (`:20`, `:27`, `:43`).

## Mental Model

The condition is scoped to the settlement the player is currently in, not to the mission, which is what makes this override both small and easy to break. `Settlement.CurrentSettlement` is null during a field mission, so the check falls through and ordinary fights award XP normally; a mod that runs a training-ground-style encounter away from a settlement will find the XP flowing unless it adds its own condition. The consumers read the campaign model even from inside mission logic: `SimpleAgentOrigin.cs:213` calls `GetXpFromHit` when accumulating a troop's combat XP, and `BattleAgentLogic.cs:235` reads `CaptainRadius` from the same model to decide which captain's skill applies. Note the early return builds a fresh `ExplainedNumber` rather than returning zero as a float, so an override must preserve the return type's construction or the XP breakdown shown in the results screen loses its explain data.

## Key Properties

| Name | Signature |
|------|-----------|
| `CaptainRadius` | `public override float CaptainRadius { get; }` |

## Key Methods

### GetSkillForWeapon
`public override SkillObject GetSkillForWeapon(WeaponComponentData weapon, bool isSiegeEngineHit)`

**Purpose:** Reads and returns the skill for weapon value held by this instance.

```csharp
StoryModeCombatXpModel storyModeCombatXpModel = ...;
var result = storyModeCombatXpModel.GetSkillForWeapon(weapon, false);
```

### GetXpFromHit
`public override ExplainedNumber GetXpFromHit(CharacterObject attackerTroop, CharacterObject captain, CharacterObject attackedTroop, PartyBase party, int damage, bool isFatal, CombatXpModel.MissionTypeEnum missionType)`

**Purpose:** Reads and returns the xp from hit value held by this instance.

```csharp
StoryModeCombatXpModel storyModeCombatXpModel = ...;
var result = storyModeCombatXpModel.GetXpFromHit(attackerTroop, captain, attackedTroop, party, 0, false, missionType);
```

### GetXpMultiplierFromShotDifficulty
`public override float GetXpMultiplierFromShotDifficulty(float shotDifficulty)`

**Purpose:** Reads and returns the xp multiplier from shot difficulty value held by this instance.

```csharp
StoryModeCombatXpModel storyModeCombatXpModel = ...;
var result = storyModeCombatXpModel.GetXpMultiplierFromShotDifficulty(0);
```

## Usage Example

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    gameStarterObject.AddModel<CombatXpModel>(new StoryModeCombatXpModel());
}
```

`CombatXpModel` is declared as `MBGameModel<CombatXpModel>` (`CombatXpModel.cs:8`), so the generic `AddModel<T>` overload (`IGameStarter.cs:13`) accepts this instance. The stock game installs this same model through the same overload at `StoryModeSubModule.cs:96`.

## See Also

- [Area Index](../)