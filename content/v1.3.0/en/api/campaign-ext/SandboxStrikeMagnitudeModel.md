---
title: "SandboxStrikeMagnitudeModel"
description: "Auto-generated class reference for SandboxStrikeMagnitudeModel."
---
# SandboxStrikeMagnitudeModel

**Namespace:** SandBox.GameComponents
**Module:** SandBox.GameComponents
**Type:** `public class SandboxStrikeMagnitudeModel : StrikeMagnitudeCalculationModel`
**Base:** `StrikeMagnitudeCalculationModel`
**File:** `SandBox/GameComponents/SandboxStrikeMagnitudeModel.cs`

## Overview

`SandboxStrikeMagnitudeModel` converts a physical event — a swing, a thrust, a missile in flight, a shove — into the damage number the combat system then applies. Four separate magnitude methods exist because the four attacks are physically different (`SandBox/GameComponents/SandboxStrikeMagnitudeModel.cs:22`, `:53`, `:105`, `:111`), and the unarmed case is the one worth noting: it ignores the weapon entirely and returns momentum × progress × a managed parameter × 2 (`:107`). The armour maths is then a single shared formula in `ComputeRawDamage` (`:164`): magnitude is scaled by `50f / (50f + armorEffectiveness)`, and the three damage types each subtract a different fraction of armour — cutting loses `0.5f` of it, pierce `0.33f`, blunt `0.2f` (`:174`, `:177`, `:180`) — while the part that survives armour is blended with a per-type blunt factor. Mounted archery is hard-coded to a flat `100f` and never varies (`:18`).

## Mental Model

Read it as the damage formula itself, the layer below the other combat models. `MissionCombatMechanicsHelper.cs:684` calls `ComputeRawDamage` for every blow once the armour value has already been adjusted by `CalculateAdjustedArmorForBlow` at `:677`, and `SandboxAgentStatCalculateModel.cs:997` reads `CalculateHorseArcheryFactor` to set the horse-archery attribute — so replacing this model changes damage output and, indirectly, a driven property that other models read back. Three constraints decide how a replacement must be written. The magnitude methods take their inputs by `in` and return a scalar, so there is nowhere to store per-agent state between them. `ComputeRawDamage` asserts on an unrecognised `DamageTypes` value and returns `0f` rather than throwing (`:183`), which means an out-of-range enum from a mod is a silent zero-damage bug. And because the armour divisor is `50f / (50f + armor)`, the curve saturates: armour above roughly 200 effectiveness adds almost nothing, so scaling armour effectiveness is not a linear way to make a soldier tougher.

## Key Methods

### CalculateHorseArcheryFactor
`public override float CalculateHorseArcheryFactor(BasicCharacterObject characterObject)`

**Purpose:** Calculates the current value or result of horse archery factor.

```csharp
SandboxStrikeMagnitudeModel sandboxStrikeMagnitudeModel = ...;
var result = sandboxStrikeMagnitudeModel.CalculateHorseArcheryFactor(characterObject);
```

### CalculateStrikeMagnitudeForMissile
`public override float CalculateStrikeMagnitudeForMissile(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float missileSpeed)`

**Purpose:** Calculates the current value or result of strike magnitude for missile.

```csharp
SandboxStrikeMagnitudeModel sandboxStrikeMagnitudeModel = ...;
var result = sandboxStrikeMagnitudeModel.CalculateStrikeMagnitudeForMissile(attackInformation, collisionData, weapon, 0);
```

### CalculateStrikeMagnitudeForSwing
`public override float CalculateStrikeMagnitudeForSwing(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float swingSpeed, float impactPointAsPercent, float extraLinearSpeed)`

**Purpose:** Calculates the current value or result of strike magnitude for swing.

```csharp
SandboxStrikeMagnitudeModel sandboxStrikeMagnitudeModel = ...;
var result = sandboxStrikeMagnitudeModel.CalculateStrikeMagnitudeForSwing(attackInformation, collisionData, weapon, 0, 0, 0);
```

### CalculateStrikeMagnitudeForUnarmedAttack
`public override float CalculateStrikeMagnitudeForUnarmedAttack(in AttackInformation attackInformation, in AttackCollisionData collisionData, float progressEffect, float momentumRemaining)`

**Purpose:** Calculates the current value or result of strike magnitude for unarmed attack.

```csharp
SandboxStrikeMagnitudeModel sandboxStrikeMagnitudeModel = ...;
var result = sandboxStrikeMagnitudeModel.CalculateStrikeMagnitudeForUnarmedAttack(attackInformation, collisionData, 0, 0);
```

### CalculateStrikeMagnitudeForThrust
`public override float CalculateStrikeMagnitudeForThrust(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float thrustWeaponSpeed, float extraLinearSpeed, bool isThrown = false)`

**Purpose:** Calculates the current value or result of strike magnitude for thrust.

```csharp
SandboxStrikeMagnitudeModel sandboxStrikeMagnitudeModel = ...;
var result = sandboxStrikeMagnitudeModel.CalculateStrikeMagnitudeForThrust(attackInformation, collisionData, weapon, 0, 0, false);
```

### ComputeRawDamage
`public override float ComputeRawDamage(DamageTypes damageType, float magnitude, float armorEffectiveness, float absorbedDamageRatio)`

**Purpose:** Executes the ComputeRawDamage logic.

```csharp
SandboxStrikeMagnitudeModel sandboxStrikeMagnitudeModel = ...;
var result = sandboxStrikeMagnitudeModel.ComputeRawDamage(damageType, 0, 0, 0);
```

### GetBluntDamageFactorByDamageType
`public override float GetBluntDamageFactorByDamageType(DamageTypes damageType)`

**Purpose:** Reads and returns the blunt damage factor by damage type value held by this instance.

```csharp
SandboxStrikeMagnitudeModel sandboxStrikeMagnitudeModel = ...;
var result = sandboxStrikeMagnitudeModel.GetBluntDamageFactorByDamageType(damageType);
```

### CalculateAdjustedArmorForBlow
`public override float CalculateAdjustedArmorForBlow(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseArmor, BasicCharacterObject attackerCharacter, BasicCharacterObject attackerCaptainCharacter, BasicCharacterObject victimCharacter, BasicCharacterObject victimCaptainCharacter, WeaponComponentData weaponComponent)`

**Purpose:** Calculates the current value or result of adjusted armor for blow.

```csharp
SandboxStrikeMagnitudeModel sandboxStrikeMagnitudeModel = ...;
var result = sandboxStrikeMagnitudeModel.CalculateAdjustedArmorForBlow(attackInformation, collisionData, 0, attackerCharacter, attackerCaptainCharacter, victimCharacter, victimCaptainCharacter, weaponComponent);
```

## Usage Example

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    gameStarterObject.AddModel<StrikeMagnitudeCalculationModel>(new SandboxStrikeMagnitudeModel());
}
```

`StrikeMagnitudeCalculationModel` is declared as `MBGameModel<StrikeMagnitudeCalculationModel>` (`StrikeMagnitudeCalculationModel.cs:7`), so the generic `AddModel<T>` overload (`IGameStarter.cs:13`) accepts this instance. The stock game installs this same model through the same overload at `SandBoxSubModule.cs:33`.

## See Also

- [Area Index](../)