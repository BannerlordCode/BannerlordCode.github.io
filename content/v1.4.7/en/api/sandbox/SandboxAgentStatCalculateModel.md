---
title: "SandboxAgentStatCalculateModel"
description: "SandboxAgentStatCalculateModel — class in SandBox.GameComponents. 22 public members (1 static)."
---

<!-- v147-skeleton -->
# SandboxAgentStatCalculateModel

**Namespace:** `SandBox.GameComponents`  
**Module:** `SandBox`  
**Type:** `public class SandboxAgentStatCalculateModel : AgentStatCalculateModel`  
**Base:** `AgentStatCalculateModel`  
**Source:** `SandBox/GameComponents/SandboxAgentStatCalculateModel.cs`

## Overview

`SandboxAgentStatCalculateModel` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

It extends AgentStatCalculateModel, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Static entry points** (1): `CalculateMaximumSpeedMultiplier`.
- **Instance members** (21): `GetDifficultyModifier`, `CanAgentRideMount`, `InitializeAgentStats`, `InitializeMissionEquipment`, `UpdateAgentStats`, `GetEffectiveSkill`, ….
- **Extension points** (20): `GetDifficultyModifier`, `CanAgentRideMount`, `InitializeAgentStats`, `InitializeMissionEquipment`, `UpdateAgentStats`, `GetEffectiveSkill`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CalculateMaximumSpeedMultiplier` | method (static) | Static entry point. Takes 3 arguments: `int athletics`, `float baseWeight`, `float totalEncumbrance`. Returns `float`. |
| `CanAgentRideMount` | method (override) | Overrides the base member. Takes 2 arguments: `Agent agent`, `Agent targetMount`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `GetBreatheHoldMaxDuration` | method (override) | Overrides the base member. Takes 2 arguments: `Agent agent`, `float baseBreatheHoldMaxDuration`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetDifficultyModifier` | method (override) | Overrides the base member. Takes no arguments. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetDismountResistance` | method (override) | Overrides the base member. Takes 1 argument: `Agent agent`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetEffectiveArmorEncumbrance` | method (override) | Overrides the base member. Takes 2 arguments: `Agent agent`, `Equipment equipment`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetEffectiveMaxHealth` | method (override) | Overrides the base member. Takes 1 argument: `Agent agent`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetEffectiveSkill` | method (override) | Overrides the base member. Takes 2 arguments: `Agent agent`, `SkillObject skill`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetEnvironmentSpeedFactor` | method (override) | Overrides the base member. Takes 1 argument: `Agent agent`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetEquipmentStealthBonus` | method (override) | Overrides the base member. Takes 1 argument: `Agent agent`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetInteractionDistance` | method (override) | Overrides the base member. Takes 1 argument: `Agent agent`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetKnockBackResistance` | method (override) | Overrides the base member. Takes 1 argument: `Agent agent`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetKnockDownResistance` | method (override) | Overrides the base member. Takes 2 arguments: `Agent agent`, `StrikeType strikeType`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetMaxCameraZoom` | method (override) | Overrides the base member. Takes 1 argument: `Agent agent`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetMissionDebugInfoForAgent` | method (override) | Overrides the base member. Takes 1 argument: `Agent agent`. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `GetSneakAttackMultiplier` | method (override) | Overrides the base member. Takes 2 arguments: `Agent agent`, `WeaponComponentData weapon`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetWeaponDamageMultiplier` | method (override) | Overrides the base member. Takes 2 arguments: `Agent agent`, `WeaponComponentData weapon`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetWeaponInaccuracy` | method (override) | Overrides the base member. Takes 3 arguments: `Agent agent`, `WeaponComponentData weapon`, `int weaponSkill`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `InitializeAgentStats` | method (override) | Overrides the base member. Takes 4 arguments: `Agent agent`, `Equipment spawnEquipment`, `AgentDrivenProperties agentDrivenProperties`, `AgentBuildData agentBuildData`. |
| `InitializeMissionEquipment` | method (override) | Overrides the base member. Takes 1 argument: `Agent agent`. |
| `UpdateAgentStats` | method (override) | Overrides the base member. Takes 2 arguments: `Agent agent`, `AgentDrivenProperties agentDrivenProperties`. Called from the owner’s update loop — do not assume a frame boundary. |
| `GetPerksOfAgent` | method | Instance entry point. Takes 4 arguments: `CharacterObject agentCharacter`, `SkillObject skill`, `bool filterPartyRole`, `PartyRole partyRole`. Returns `List<PerkObject>`. Read path: prefer it over reaching for the backing store. |

## Usage Example

```csharp
SandboxAgentStatCalculateModel.CalculateMaximumSpeedMultiplier(athletics, baseWeight, totalEncumbrance);
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- 20 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox/GameComponents/SandboxAgentStatCalculateModel.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Extensions](../../engine/Extensions/) — `TaleWorlds.Engine.GauntletUI`.
- [DefaultPerks](../../campaign/DefaultPerks/) — `TaleWorlds.CampaignSystem.CharacterDevelopment`.
- [MobileParty](../../campaign/MobileParty/) — `TaleWorlds.CampaignSystem.Party`.
- [ExplainedNumber](../../campaign/ExplainedNumber/) — `TaleWorlds.CampaignSystem`.
- [Attributes](../../campaign/Attributes/) — `TaleWorlds.CampaignSystem.Extensions`.
- [Min](../../core-extra/Min/) — `TaleWorlds.LinQuick`.
- [BattleBannerBearersModel](../../mission-ext/BattleBannerBearersModel/) — `TaleWorlds.MountAndBlade.ComponentInterfaces`.
- [BannerHelper](../../core-extra/BannerHelper/) — `MBHelpers`.

Section: [api/sandbox/](../) — the other types in this bucket.
