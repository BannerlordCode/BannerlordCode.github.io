---
title: "DefaultCombatXpModel"
description: "Auto-generated class reference for DefaultCombatXpModel."
---
# DefaultCombatXpModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCombatXpModel : CombatXpModel`
**Base:** `CombatXpModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCombatXpModel.cs`

## Overview

`DefaultCombatXpModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultCombatXpModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `CaptainRadius` | `public override float CaptainRadius { get; }` |

## Key Methods

### GetSkillForWeapon
`public override SkillObject GetSkillForWeapon(WeaponComponentData weapon, bool isSiegeEngineHit)`

**Purpose:** Reads and returns the skill for weapon value held by the this instance.

```csharp
// Obtain an instance of DefaultCombatXpModel from the subsystem API first
DefaultCombatXpModel defaultCombatXpModel = ...;
var result = defaultCombatXpModel.GetSkillForWeapon(weapon, false);
```

### GetXpFromHit
`public override ExplainedNumber GetXpFromHit(CharacterObject attackerTroop, CharacterObject captain, CharacterObject attackedTroop, PartyBase party, int damage, bool isFatal, CombatXpModel.MissionTypeEnum missionType)`

**Purpose:** Reads and returns the xp from hit value held by the this instance.

```csharp
// Obtain an instance of DefaultCombatXpModel from the subsystem API first
DefaultCombatXpModel defaultCombatXpModel = ...;
var result = defaultCombatXpModel.GetXpFromHit(attackerTroop, captain, attackedTroop, party, 0, false, missionType);
```

### GetXpMultiplierFromShotDifficulty
`public override float GetXpMultiplierFromShotDifficulty(float shotDifficulty)`

**Purpose:** Reads and returns the xp multiplier from shot difficulty value held by the this instance.

```csharp
// Obtain an instance of DefaultCombatXpModel from the subsystem API first
DefaultCombatXpModel defaultCombatXpModel = ...;
var result = defaultCombatXpModel.GetXpMultiplierFromShotDifficulty(0);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultCombatXpModel>(new MyDefaultCombatXpModel());
```

## See Also

- [Area Index](../)