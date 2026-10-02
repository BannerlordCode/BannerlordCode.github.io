---
title: "SandboxAgentStatCalculateModel"
description: "Auto-generated class reference for SandboxAgentStatCalculateModel."
---
# SandboxAgentStatCalculateModel

**Namespace:** SandBox.GameComponents
**Module:** SandBox
**Type:** `public class SandboxAgentStatCalculateModel : AgentStatCalculateModel `
**Base:** AgentStatCalculateModel
**Source:** SandBox/GameComponents/SandboxAgentStatCalculateModel.cs

## Overview

Auto-generated stub for `SandboxAgentStatCalculateModel`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### GetDifficultyModifier
`public override float GetDifficultyModifier()`

### CanAgentRideMount
`public override bool CanAgentRideMount(Agent agent,Agent targetMount)`

### InitializeAgentStats
`public override void InitializeAgentStats(Agent agent,Equipment spawnEquipment,AgentDrivenProperties agentDrivenProperties,AgentBuildData agentBuildData)`

### InitializeMissionEquipment
`public override void InitializeMissionEquipment(Agent agent)`

### UpdateAgentStats
`public override void UpdateAgentStats(Agent agent,AgentDrivenProperties agentDrivenProperties)`

### GetEffectiveSkill
`public override int GetEffectiveSkill(Agent agent,SkillObject skill)`

### GetWeaponDamageMultiplier
`public override float GetWeaponDamageMultiplier(Agent agent,WeaponComponentData weapon)`

### GetEquipmentStealthBonus
`public override float GetEquipmentStealthBonus(Agent agent)`

### GetSneakAttackMultiplier
`public override float GetSneakAttackMultiplier(Agent agent,WeaponComponentData weapon)`

### GetKnockBackResistance
`public override float GetKnockBackResistance(Agent agent)`

### GetKnockDownResistance
`public override float GetKnockDownResistance(Agent agent,StrikeType strikeType = StrikeType.Invalid)`

### GetDismountResistance
`public override float GetDismountResistance(Agent agent)`

### GetBreatheHoldMaxDuration
`public override float GetBreatheHoldMaxDuration(Agent agent,float baseBreatheHoldMaxDuration)`

### GetWeaponInaccuracy
`public override float GetWeaponInaccuracy(Agent agent,WeaponComponentData weapon,int weaponSkill)`

### GetInteractionDistance
`public override float GetInteractionDistance(Agent agent)`

### GetMaxCameraZoom
`public override float GetMaxCameraZoom(Agent agent)`

### GetPerksOfAgent
`public List<PerkObject> GetPerksOfAgent(CharacterObject agentCharacter,SkillObject skill = null,bool filterPartyRole = false,PartyRole partyRole = PartyRole.Personal)`

### GetMissionDebugInfoForAgent
`public override string GetMissionDebugInfoForAgent(Agent agent)`

### GetEffectiveArmorEncumbrance
`public override float GetEffectiveArmorEncumbrance(Agent agent,Equipment equipment)`

### GetEffectiveMaxHealth
`public override float GetEffectiveMaxHealth(Agent agent)`

### GetEnvironmentSpeedFactor
`public override float GetEnvironmentSpeedFactor(Agent agent)`

### CalculateMaximumSpeedMultiplier
`public static float CalculateMaximumSpeedMultiplier(int athletics,float baseWeight,float totalEncumbrance)`

## See Also

- [Section index](../)
