---
title: "StoryModeCombatXpModel"
description: "Auto-generated class reference for StoryModeCombatXpModel."
---
# StoryModeCombatXpModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModeCombatXpModel : CombatXpModel`
**Base:** `CombatXpModel`
**File:** `Modules.StoryMode/StoryMode/StoryMode.GameComponents/StoryModeCombatXpModel.cs`

## Overview

`StoryModeCombatXpModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `StoryModeCombatXpModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetSkillForWeapon
`public override SkillObject GetSkillForWeapon(WeaponComponentData weapon, bool isSiegeEngineHit)`

**Purpose:** Reads and returns the skill for weapon value held by the this instance.

```csharp
// Obtain an instance of StoryModeCombatXpModel from the subsystem API first
StoryModeCombatXpModel storyModeCombatXpModel = ...;
var result = storyModeCombatXpModel.GetSkillForWeapon(weapon, false);
```

### GetXpFromHit
`public override ExplainedNumber GetXpFromHit(CharacterObject attackerTroop, CharacterObject captain, CharacterObject attackedTroop, PartyBase attackerParty, int damage, bool isFatal, MissionTypeEnum missionType)`

**Purpose:** Reads and returns the xp from hit value held by the this instance.

```csharp
// Obtain an instance of StoryModeCombatXpModel from the subsystem API first
StoryModeCombatXpModel storyModeCombatXpModel = ...;
var result = storyModeCombatXpModel.GetXpFromHit(attackerTroop, captain, attackedTroop, attackerParty, 0, false, missionType);
```

### GetXpMultiplierFromShotDifficulty
`public override float GetXpMultiplierFromShotDifficulty(float shotDifficulty)`

**Purpose:** Reads and returns the xp multiplier from shot difficulty value held by the this instance.

```csharp
// Obtain an instance of StoryModeCombatXpModel from the subsystem API first
StoryModeCombatXpModel storyModeCombatXpModel = ...;
var result = storyModeCombatXpModel.GetXpMultiplierFromShotDifficulty(0);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<StoryModeCombatXpModel>(new MyStoryModeCombatXpModel());
```

## See Also

- [Area Index](../)