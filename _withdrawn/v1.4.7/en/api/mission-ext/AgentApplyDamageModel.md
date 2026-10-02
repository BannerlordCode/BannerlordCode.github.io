---
title: "AgentApplyDamageModel"
description: "AgentApplyDamageModel — class in TaleWorlds.MountAndBlade.ComponentInterfaces. 35 public members (0 static)."
---

<!-- v147-skeleton -->
# AgentApplyDamageModel

**Namespace:** `TaleWorlds.MountAndBlade.ComponentInterfaces`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public abstract class AgentApplyDamageModel : MBGameModel<AgentApplyDamageModel>`  
**Base:** `MBGameModel`  
**Source:** `TaleWorlds.MountAndBlade/ComponentInterfaces/AgentApplyDamageModel.cs`

## Overview

`AgentApplyDamageModel` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

It extends MBGameModel, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Instance members** (35): `CalculateDamage`, `IsDamageIgnored`, `ApplyDamageAmplifications`, `ApplyDamageScaling`, `ApplyDamageReductions`, `ApplyGeneralDamageModifiers`, ….
- **Extension points** (33): `IsDamageIgnored`, `ApplyDamageAmplifications`, `ApplyDamageScaling`, `ApplyDamageReductions`, `ApplyGeneralDamageModifiers`, `DecideMissileWeaponFlags`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `ApplyDamageAmplifications` | method (abstract) | Abstract — a subclass must supply it. Takes 3 arguments: `in AttackInformation attackInformation`, `in AttackCollisionData collisionData`, `float baseDamage`. Returns `float`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `ApplyDamageReductions` | method (abstract) | Abstract — a subclass must supply it. Takes 3 arguments: `in AttackInformation attackInformation`, `in AttackCollisionData collisionData`, `float baseDamage`. Returns `float`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `ApplyDamageScaling` | method (abstract) | Abstract — a subclass must supply it. Takes 3 arguments: `in AttackInformation attackInformation`, `in AttackCollisionData collisionData`, `float baseDamage`. Returns `float`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `ApplyGeneralDamageModifiers` | method (abstract) | Abstract — a subclass must supply it. Takes 3 arguments: `in AttackInformation attackInformation`, `in AttackCollisionData collisionData`, `float baseDamage`. Returns `float`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `CalculateAlternativeAttackDamage` | method (abstract) | Abstract — a subclass must supply it. Takes 3 arguments: `in AttackInformation attackInformation`, `in AttackCollisionData collisionData`, `WeaponComponentData weapon`. Returns `float`. |
| `CalculateDefendedBlowStunMultipliers` | method (abstract) | Abstract — a subclass must supply it. Takes 7 arguments: `Agent attackerAgent`, `Agent defenderAgent`, `CombatCollisionResult collisionResult`, `WeaponComponentData attackerWeapon`, …. |
| `CalculateHullFireDamage` | method (abstract) | Abstract — a subclass must supply it. Takes 2 arguments: `float baseFireDamage`, `IShipOrigin shipOrigin`. Returns `float`. |
| `CalculatePassiveAttackDamage` | method (abstract) | Abstract — a subclass must supply it. Takes 3 arguments: `BasicCharacterObject attackerCharacter`, `in AttackCollisionData collisionData`, `float baseDamage`. Returns `float`. |
| `CalculateRemainingMomentum` | method (abstract) | Abstract — a subclass must supply it. Takes 7 arguments: `float originalMomentum`, `in Blow b`, `in AttackCollisionData collisionData`, `Agent attacker`, …. Returns `float`. |
| `CalculateSailFireDamage` | method (abstract) | Abstract — a subclass must supply it. Takes 4 arguments: `Agent attackerAgent`, `IShipOrigin shipOrigin`, `float baseDamage`, `bool damageFromShipMachine`. Returns `float`. |
| `CalculateShieldDamage` | method (abstract) | Abstract — a subclass must supply it. Takes 2 arguments: `in AttackInformation attackInformation`, `float baseDamage`. Returns `float`. |
| `CalculateStaggerThresholdDamage` | method (abstract) | Abstract — a subclass must supply it. Takes 2 arguments: `Agent defenderAgent`, `in Blow blow`. Returns `float`. |
| `CanWeaponDealSneakAttack` | method (abstract) | Abstract — a subclass must supply it. Takes 2 arguments: `in AttackInformation attackInformation`, `WeaponComponentData weapon`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `CanWeaponDismount` | method (abstract) | Abstract — a subclass must supply it. Takes 4 arguments: `Agent attackerAgent`, `WeaponComponentData attackerWeapon`, `in Blow blow`, `in AttackCollisionData collisionData`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `CanWeaponIgnoreFriendlyFireChecks` | method (abstract) | Abstract — a subclass must supply it. Takes 1 argument: `WeaponComponentData weapon`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `CanWeaponKnockback` | method (abstract) | Abstract — a subclass must supply it. Takes 4 arguments: `Agent attackerAgent`, `WeaponComponentData attackerWeapon`, `in Blow blow`, `in AttackCollisionData collisionData`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `CanWeaponKnockDown` | method (abstract) | Abstract — a subclass must supply it. Takes 5 arguments: `Agent attackerAgent`, `Agent victimAgent`, `WeaponComponentData attackerWeapon`, `in Blow blow`, …. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `DecideAgentDismountedByBlow` | method (abstract) | Abstract — a subclass must supply it. Takes 5 arguments: `Agent attackerAgent`, `Agent victimAgent`, `in AttackCollisionData collisionData`, `WeaponComponentData attackerWeapon`, …. Returns `bool`. |
| `DecideAgentKnockedBackByBlow` | method (abstract) | Abstract — a subclass must supply it. Takes 5 arguments: `Agent attackerAgent`, `Agent victimAgent`, `in AttackCollisionData collisionData`, `WeaponComponentData attackerWeapon`, …. Returns `bool`. |
| `DecideAgentKnockedDownByBlow` | method (abstract) | Abstract — a subclass must supply it. Takes 5 arguments: `Agent attackerAgent`, `Agent victimAgent`, `in AttackCollisionData collisionData`, `WeaponComponentData attackerWeapon`, …. Returns `bool`. |
| `DecideAgentShrugOffBlow` | method (abstract) | Abstract — a subclass must supply it. Takes 3 arguments: `Agent victimAgent`, `in AttackCollisionData collisionData`, `in Blow blow`. Returns `bool`. |
| `DecideCrushedThrough` | method (abstract) | Abstract — a subclass must supply it. Takes 7 arguments: `Agent attackerAgent`, `Agent defenderAgent`, `float totalAttackEnergy`, `Agent.UsageDirection attackDirection`, …. Returns `bool`. |
| `DecideMissileWeaponFlags` | method (abstract) | Abstract — a subclass must supply it. Takes 3 arguments: `Agent attackerAgent`, `in MissionWeapon missileWeapon`, `ref WeaponFlags missileWeaponFlags`. |
| `DecideMountRearedByBlow` | method (abstract) | Abstract — a subclass must supply it. Takes 5 arguments: `Agent attackerAgent`, `Agent victimAgent`, `in AttackCollisionData collisionData`, `WeaponComponentData attackerWeapon`, …. Returns `bool`. |

11 further public members follow the same patterns.
## Usage Example

```csharp
AgentApplyDamageModel.CalculateDamage(theTarget, theTarget, baseDamage);
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- 33 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade/ComponentInterfaces/AgentApplyDamageModel.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/mission-ext/](../) — the other types in this bucket.
