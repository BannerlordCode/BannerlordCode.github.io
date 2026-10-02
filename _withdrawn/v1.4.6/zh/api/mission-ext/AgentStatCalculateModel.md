---
title: "AgentStatCalculateModel"
description: "AgentStatCalculateModel：TaleWorlds.MountAndBlade 的 public 类，继承 MBGameModel<AgentStatCalculateModel>；公开成员 33 个（方法 32、属性 0、字段 1）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/AgentStatCalculateModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AgentStatCalculateModel

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class AgentStatCalculateModel : MBGameModel<AgentStatCalculateModel>`
**File:** `TaleWorlds.MountAndBlade/AgentStatCalculateModel.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

AgentStatCalculateModel 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/AgentStatCalculateModel.cs。它是一个 public 类（abstract），实现/继承 MBGameModel<AgentStatCalculateModel>，继承链为 AgentStatCalculateModel → MBGameModel → GameModel。public/protected 成员共 33 个：32 方法、1 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：AgentStatCalculateModel 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 AgentStatCalculateModel → MBGameModel → GameModel。成员构成以方法为主（方法 32/33，属性 0/33），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/AgentStatCalculateModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `InitializeAgentStats` | `public abstract void InitializeAgentStats(Agent agent, Equipment spawnEquipment, AgentDrivenProperties agentDrivenProperties, AgentBuildData agentBuildData);` | 方法 |
| `InitializeMissionEquipment` | `public virtual void InitializeMissionEquipment(Agent agent)` | 方法 |
| `InitializeAgentStatsAfterDeploymentFinished` | `public virtual void InitializeAgentStatsAfterDeploymentFinished(Agent agent)` | 方法 |
| `InitializeMissionEquipmentAfterDeploymentFinished` | `public virtual void InitializeMissionEquipmentAfterDeploymentFinished(Agent agent)` | 方法 |
| `UpdateAgentStats` | `public abstract void UpdateAgentStats(Agent agent, AgentDrivenProperties agentDrivenProperties);` | 方法 |
| `GetDifficultyModifier` | `public abstract float GetDifficultyModifier();` | 方法 |
| `CanAgentRideMount` | `public abstract bool CanAgentRideMount(Agent agent, Agent targetMount);` | 方法 |
| `HasHeavyArmor` | `public virtual bool HasHeavyArmor(Agent agent)` | 方法 |
| `GetEffectiveArmorEncumbrance` | `public virtual float GetEffectiveArmorEncumbrance(Agent agent, Equipment equipment)` | 方法 |
| `GetEffectiveMaxHealth` | `public virtual float GetEffectiveMaxHealth(Agent agent)` | 方法 |
| `GetEnvironmentSpeedFactor` | `public virtual float GetEnvironmentSpeedFactor(Agent agent)` | 方法 |
| `CalculateAIAttackOnDecideMaxValue` | `public float CalculateAIAttackOnDecideMaxValue()` | 方法 |
| `GetWeaponInaccuracy` | `public virtual float GetWeaponInaccuracy(Agent agent, WeaponComponentData weapon, int weaponSkill)` | 方法 |
| `GetDetachmentCostMultiplierOfAgent` | `public virtual float GetDetachmentCostMultiplierOfAgent(Agent agent, IDetachment detachment)` | 方法 |
| `GetInteractionDistance` | `public virtual float GetInteractionDistance(Agent agent)` | 方法 |
| `GetMaxCameraZoom` | `public virtual float GetMaxCameraZoom(Agent agent)` | 方法 |
| `GetEffectiveSkill` | `public virtual int GetEffectiveSkill(Agent agent, SkillObject skill)` | 方法 |
| `GetEffectiveSkillForWeapon` | `public virtual int GetEffectiveSkillForWeapon(Agent agent, WeaponComponentData weapon)` | 方法 |
| `GetWeaponDamageMultiplier` | `public abstract float GetWeaponDamageMultiplier(Agent agent, WeaponComponentData weapon);` | 方法 |
| `GetEquipmentStealthBonus` | `public abstract float GetEquipmentStealthBonus(Agent agent);` | 方法 |
| `GetSneakAttackMultiplier` | `public abstract float GetSneakAttackMultiplier(Agent agent, WeaponComponentData weapon);` | 方法 |
| `GetKnockBackResistance` | `public abstract float GetKnockBackResistance(Agent agent);` | 方法 |
| `GetKnockDownResistance` | `public abstract float GetKnockDownResistance(Agent agent, StrikeType strikeType = StrikeType.Invalid);` | 方法 |
| `GetDismountResistance` | `public abstract float GetDismountResistance(Agent agent);` | 方法 |
| `GetBreatheHoldMaxDuration` | `public abstract float GetBreatheHoldMaxDuration(Agent agent, float baseBreatheHoldMaxDuration);` | 方法 |
| `GetMissionDebugInfoForAgent` | `public virtual string GetMissionDebugInfoForAgent(Agent agent)` | 方法 |
| `ResetAILevelMultiplier` | `public void ResetAILevelMultiplier()` | 方法 |
| `SetAILevelMultiplier` | `public void SetAILevelMultiplier(float multiplier)` | 方法 |
| `GetMeleeSkill` | `protected int GetMeleeSkill(Agent agent, WeaponComponentData equippedItem, WeaponComponentData secondaryItem)` | 方法 |
| `CalculateAILevel` | `protected float CalculateAILevel(Agent agent, int relevantSkillLevel)` | 方法 |
| `SetAiRelatedProperties` | `protected void SetAiRelatedProperties(Agent agent, AgentDrivenProperties agentDrivenProperties, WeaponComponentData equippedItem, WeaponComponentData secondaryItem)` | 方法 |
| `SetAllWeaponInaccuracy` | `protected void SetAllWeaponInaccuracy(Agent agent, AgentDrivenProperties agentDrivenProperties, int equippedIndex, WeaponComponentData equippedWeaponComponent)` | 方法 |
| `MaxHorizontalErrorRadian` | `protected const float MaxHorizontalErrorRadian` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MBGameModel](../../core-extra/MBGameModel__1/)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
