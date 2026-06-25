---
title: "CombatXpModel"
description: "Auto-generated class reference for CombatXpModel."
---
# CombatXpModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CombatXpModel : MBGameModel<CombatXpModel>`
**Base:** `MBGameModel<CombatXpModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/CombatXpModel.cs`

## Overview

`CombatXpModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `CombatXpModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `CaptainRadius` | `public abstract float CaptainRadius { get; }` |

## Key Methods

### GetSkillForWeapon
`public abstract SkillObject GetSkillForWeapon(WeaponComponentData weapon, bool isSiegeEngineHit)`

**Purpose:** Reads and returns the skill for weapon value held by the this instance.

```csharp
// Obtain an instance of CombatXpModel from the subsystem API first
CombatXpModel combatXpModel = ...;
var result = combatXpModel.GetSkillForWeapon(weapon, false);
```

### GetXpFromHit
`public abstract ExplainedNumber GetXpFromHit(CharacterObject attackerTroop, CharacterObject captain, CharacterObject attackedTroop, PartyBase attackerParty, int damage, bool isFatal, MissionTypeEnum missionType)`

**Purpose:** Reads and returns the xp from hit value held by the this instance.

```csharp
// Obtain an instance of CombatXpModel from the subsystem API first
CombatXpModel combatXpModel = ...;
var result = combatXpModel.GetXpFromHit(attackerTroop, captain, attackedTroop, attackerParty, 0, false, missionType);
```

### GetXpMultiplierFromShotDifficulty
`public abstract float GetXpMultiplierFromShotDifficulty(float shotDifficulty)`

**Purpose:** Reads and returns the xp multiplier from shot difficulty value held by the this instance.

```csharp
// Obtain an instance of CombatXpModel from the subsystem API first
CombatXpModel combatXpModel = ...;
var result = combatXpModel.GetXpMultiplierFromShotDifficulty(0);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
CombatXpModel instance = ...;
```

## See Also

- [Area Index](../)