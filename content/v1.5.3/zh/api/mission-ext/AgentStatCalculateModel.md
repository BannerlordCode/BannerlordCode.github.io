---
title: "AgentStatCalculateModel"
description: "AgentStatCalculateModel 的自动生成类参考。"
---
# AgentStatCalculateModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class AgentStatCalculateModel : MBGameModel<AgentStatCalculateModel> `
**Base:** MBGameModel<AgentStatCalculateModel>
**Source:** TaleWorlds.MountAndBlade/AgentStatCalculateModel.cs

## 概述

`AgentStatCalculateModel` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/AgentStatCalculateModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### InitializeAgentStats
`public abstract void InitializeAgentStats(Agent agent,Equipment spawnEquipment,AgentDrivenProperties agentDrivenProperties,AgentBuildData agentBuildData)`

### InitializeMissionEquipment
`public virtual void InitializeMissionEquipment(Agent agent) `

### InitializeAgentStatsAfterDeploymentFinished
`public virtual void InitializeAgentStatsAfterDeploymentFinished(Agent agent) `

### InitializeMissionEquipmentAfterDeploymentFinished
`public virtual void InitializeMissionEquipmentAfterDeploymentFinished(Agent agent) `

### UpdateAgentStats
`public abstract void UpdateAgentStats(Agent agent,AgentDrivenProperties agentDrivenProperties)`

### GetDifficultyModifier
`public abstract float GetDifficultyModifier()`

### CanAgentRideMount
`public abstract bool CanAgentRideMount(Agent agent,Agent targetMount)`

### HasHeavyArmor
`public virtual bool HasHeavyArmor(Agent agent) `

### GetEffectiveArmorEncumbrance
`public virtual float GetEffectiveArmorEncumbrance(Agent agent,Equipment equipment) `

### GetEffectiveMaxHealth
`public virtual float GetEffectiveMaxHealth(Agent agent) `

### GetEnvironmentSpeedFactor
`public virtual float GetEnvironmentSpeedFactor(Agent agent) `

### CalculateAIAttackOnDecideMaxValue
`public float CalculateAIAttackOnDecideMaxValue() `

### GetWeaponInaccuracy
`public virtual float GetWeaponInaccuracy(Agent agent,WeaponComponentData weapon,int weaponSkill) `

### GetDetachmentCostMultiplierOfAgent
`public virtual float GetDetachmentCostMultiplierOfAgent(Agent agent,IDetachment detachment) `

### GetInteractionDistance
`public virtual float GetInteractionDistance(Agent agent) `

### GetMaxCameraZoom
`public virtual float GetMaxCameraZoom(Agent agent) `

### GetEffectiveSkill
`public virtual int GetEffectiveSkill(Agent agent,SkillObject skill) `

### GetEffectiveSkillForWeapon
`public virtual int GetEffectiveSkillForWeapon(Agent agent,WeaponComponentData weapon) `

### GetWeaponDamageMultiplier
`public abstract float GetWeaponDamageMultiplier(Agent agent,WeaponComponentData weapon)`

### GetEquipmentStealthBonus
`public abstract float GetEquipmentStealthBonus(Agent agent)`

### GetSneakAttackMultiplier
`public abstract float GetSneakAttackMultiplier(Agent agent,WeaponComponentData weapon)`

### GetKnockBackResistance
`public abstract float GetKnockBackResistance(Agent agent)`

### GetKnockDownResistance
`public abstract float GetKnockDownResistance(Agent agent,StrikeType strikeType = StrikeType.Invalid)`

### GetDismountResistance
`public abstract float GetDismountResistance(Agent agent)`

### GetBreatheHoldMaxDuration
`public abstract float GetBreatheHoldMaxDuration(Agent agent,float baseBreatheHoldMaxDuration)`

### GetMissionDebugInfoForAgent
`public virtual string GetMissionDebugInfoForAgent(Agent agent) `

### ResetAILevelMultiplier
`public void ResetAILevelMultiplier() `

### SetAILevelMultiplier
`public void SetAILevelMultiplier(float multiplier) `

### GetMeleeSkill
`protected int GetMeleeSkill(Agent agent,WeaponComponentData equippedItem,WeaponComponentData secondaryItem) `

### CalculateAILevel
`protected float CalculateAILevel(Agent agent,int relevantSkillLevel) `

### SetAiRelatedProperties
`protected void SetAiRelatedProperties(Agent agent,AgentDrivenProperties agentDrivenProperties,WeaponComponentData equippedItem,WeaponComponentData secondaryItem) `

### SetAllWeaponInaccuracy
`protected void SetAllWeaponInaccuracy(Agent agent,AgentDrivenProperties agentDrivenProperties,int equippedIndex,WeaponComponentData equippedWeaponComponent) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
