---
title: "SandboxAgentApplyDamageModel"
description: "SandboxAgentApplyDamageModel — class in SandBox.GameComponents. 33 public members (0 static)."
---

<!-- v147-skeleton -->
# SandboxAgentApplyDamageModel

**Namespace:** `SandBox.GameComponents`  
**Module:** `SandBox`  
**Type:** `public class SandboxAgentApplyDamageModel : AgentApplyDamageModel`  
**Base:** `AgentApplyDamageModel`  
**Source:** `SandBox/GameComponents/SandboxAgentApplyDamageModel.cs`

## Overview

`SandboxAgentApplyDamageModel` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

It extends AgentApplyDamageModel, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Instance members** (33): `IsDamageIgnored`, `ApplyDamageAmplifications`, `ApplyDamageScaling`, `ApplyDamageReductions`, `ApplyGeneralDamageModifiers`, `DecideCrushedThrough`, ….
- **Extension points** (33): `IsDamageIgnored`, `ApplyDamageAmplifications`, `ApplyDamageScaling`, `ApplyDamageReductions`, `ApplyGeneralDamageModifiers`, `DecideCrushedThrough`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `ApplyDamageAmplifications` | method (override) | Overrides the base member. Takes 3 arguments: `in AttackInformation attackInformation`, `in AttackCollisionData collisionData`, `float baseDamage`. Returns `float`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `ApplyDamageReductions` | method (override) | Overrides the base member. Takes 3 arguments: `in AttackInformation attackInformation`, `in AttackCollisionData collisionData`, `float baseDamage`. Returns `float`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `ApplyDamageScaling` | method (override) | Overrides the base member. Takes 3 arguments: `in AttackInformation attackInformation`, `in AttackCollisionData collisionData`, `float baseDamage`. Returns `float`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `ApplyGeneralDamageModifiers` | method (override) | Overrides the base member. Takes 3 arguments: `in AttackInformation attackInformation`, `in AttackCollisionData collisionData`, `float baseDamage`. Returns `float`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `CalculateAlternativeAttackDamage` | method (override) | Overrides the base member. Takes 3 arguments: `in AttackInformation attackInformation`, `in AttackCollisionData collisionData`, `WeaponComponentData weapon`. Returns `float`. |
| `CalculateDefendedBlowStunMultipliers` | method (override) | Overrides the base member. Takes 7 arguments: `Agent attackerAgent`, `Agent defenderAgent`, `CombatCollisionResult collisionResult`, `WeaponComponentData attackerWeapon`, …. |
| `CalculateHullFireDamage` | method (override) | Overrides the base member. Takes 2 arguments: `float baseFireDamage`, `IShipOrigin shipOrigin`. Returns `float`. |
| `CalculatePassiveAttackDamage` | method (override) | Overrides the base member. Takes 3 arguments: `BasicCharacterObject attackerCharacter`, `in AttackCollisionData collisionData`, `float baseDamage`. Returns `float`. |
| `CalculateRemainingMomentum` | method (override) | Overrides the base member. Takes 7 arguments: `float originalMomentum`, `in Blow b`, `in AttackCollisionData collisionData`, `Agent attacker`, …. Returns `float`. |
| `CalculateSailFireDamage` | method (override) | Overrides the base member. Takes 4 arguments: `Agent attackerAgent`, `IShipOrigin shipOrigin`, `float baseDamage`, `bool damageFromShipMachine`. Returns `float`. |
| `CalculateShieldDamage` | method (override) | Overrides the base member. Takes 2 arguments: `in AttackInformation attackInformation`, `float baseDamage`. Returns `float`. |
| `CalculateStaggerThresholdDamage` | method (override) | Overrides the base member. Takes 2 arguments: `Agent defenderAgent`, `in Blow blow`. Returns `float`. |
| `CanWeaponDealSneakAttack` | method (override) | Overrides the base member. Takes 2 arguments: `in AttackInformation attackInformation`, `WeaponComponentData weapon`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `CanWeaponDismount` | method (override) | Overrides the base member. Takes 4 arguments: `Agent attackerAgent`, `WeaponComponentData attackerWeapon`, `in Blow blow`, `in AttackCollisionData collisionData`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `CanWeaponIgnoreFriendlyFireChecks` | method (override) | Overrides the base member. Takes 1 argument: `WeaponComponentData weapon`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `CanWeaponKnockback` | method (override) | Overrides the base member. Takes 4 arguments: `Agent attackerAgent`, `WeaponComponentData attackerWeapon`, `in Blow blow`, `in AttackCollisionData collisionData`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `CanWeaponKnockDown` | method (override) | Overrides the base member. Takes 5 arguments: `Agent attackerAgent`, `Agent victimAgent`, `WeaponComponentData attackerWeapon`, `in Blow blow`, …. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `DecideAgentDismountedByBlow` | method (override) | Overrides the base member. Takes 5 arguments: `Agent attackerAgent`, `Agent victimAgent`, `in AttackCollisionData collisionData`, `WeaponComponentData attackerWeapon`, …. Returns `bool`. |
| `DecideAgentKnockedBackByBlow` | method (override) | Overrides the base member. Takes 5 arguments: `Agent attackerAgent`, `Agent victimAgent`, `in AttackCollisionData collisionData`, `WeaponComponentData attackerWeapon`, …. Returns `bool`. |
| `DecideAgentKnockedDownByBlow` | method (override) | Overrides the base member. Takes 5 arguments: `Agent attackerAgent`, `Agent victimAgent`, `in AttackCollisionData collisionData`, `WeaponComponentData attackerWeapon`, …. Returns `bool`. |
| `DecideAgentShrugOffBlow` | method (override) | Overrides the base member. Takes 3 arguments: `Agent victimAgent`, `in AttackCollisionData collisionData`, `in Blow blow`. Returns `bool`. |
| `DecideCrushedThrough` | method (override) | Overrides the base member. Takes 7 arguments: `Agent attackerAgent`, `Agent defenderAgent`, `float totalAttackEnergy`, `Agent.UsageDirection attackDirection`, …. Returns `bool`. |
| `DecideMissileWeaponFlags` | method (override) | Overrides the base member. Takes 3 arguments: `Agent attackerAgent`, `in MissionWeapon missileWeapon`, `ref WeaponFlags missileWeaponFlags`. |
| `DecideMountRearedByBlow` | method (override) | Overrides the base member. Takes 5 arguments: `Agent attackerAgent`, `Agent victimAgent`, `in AttackCollisionData collisionData`, `WeaponComponentData attackerWeapon`, …. Returns `bool`. |

9 further public members follow the same patterns.
## Usage Example

```csharp
SandboxAgentApplyDamageModel.IsDamageIgnored(theTarget, theTarget);
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- 33 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox/GameComponents/SandboxAgentApplyDamageModel.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [AgentApplyDamageModel](../../mission-ext/AgentApplyDamageModel/) — `TaleWorlds.MountAndBlade.ComponentInterfaces`.
- [DefaultPerks](../../campaign/DefaultPerks/) — `TaleWorlds.CampaignSystem.CharacterDevelopment`.
- [BattleBannerBearersModel](../../mission-ext/BattleBannerBearersModel/) — `TaleWorlds.MountAndBlade.ComponentInterfaces`.
- [ExplainedNumber](../../campaign/ExplainedNumber/) — `TaleWorlds.CampaignSystem`.
- [BannerHelper](../../core-extra/BannerHelper/) — `MBHelpers`.

Section: [api/sandbox/](../) — the other types in this bucket.
