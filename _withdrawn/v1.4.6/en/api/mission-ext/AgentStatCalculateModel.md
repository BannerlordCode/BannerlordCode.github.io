---
title: "AgentStatCalculateModel"
description: "AgentStatCalculateModel: a public class in TaleWorlds.MountAndBlade, inheriting MBGameModel<AgentStatCalculateModel>; 33 exposed members (32 methods, 0 properties, 1 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/AgentStatCalculateModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AgentStatCalculateModel

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class AgentStatCalculateModel : MBGameModel<AgentStatCalculateModel>`
**File:** `TaleWorlds.MountAndBlade/AgentStatCalculateModel.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

AgentStatCalculateModel lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/AgentStatCalculateModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<AgentStatCalculateModel>; the inheritance chain is AgentStatCalculateModel → MBGameModel → GameModel. It exposes 33 public/protected members: 32 methods, 1 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AgentStatCalculateModel lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain AgentStatCalculateModel → MBGameModel → GameModel. The surface is method-led (methods 32/33, properties 0/33), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/AgentStatCalculateModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `InitializeAgentStats` | `public abstract void InitializeAgentStats(Agent agent, Equipment spawnEquipment, AgentDrivenProperties agentDrivenProperties, AgentBuildData agentBuildData);` | method |
| `InitializeMissionEquipment` | `public virtual void InitializeMissionEquipment(Agent agent)` | method |
| `InitializeAgentStatsAfterDeploymentFinished` | `public virtual void InitializeAgentStatsAfterDeploymentFinished(Agent agent)` | method |
| `InitializeMissionEquipmentAfterDeploymentFinished` | `public virtual void InitializeMissionEquipmentAfterDeploymentFinished(Agent agent)` | method |
| `UpdateAgentStats` | `public abstract void UpdateAgentStats(Agent agent, AgentDrivenProperties agentDrivenProperties);` | method |
| `GetDifficultyModifier` | `public abstract float GetDifficultyModifier();` | method |
| `CanAgentRideMount` | `public abstract bool CanAgentRideMount(Agent agent, Agent targetMount);` | method |
| `HasHeavyArmor` | `public virtual bool HasHeavyArmor(Agent agent)` | method |
| `GetEffectiveArmorEncumbrance` | `public virtual float GetEffectiveArmorEncumbrance(Agent agent, Equipment equipment)` | method |
| `GetEffectiveMaxHealth` | `public virtual float GetEffectiveMaxHealth(Agent agent)` | method |
| `GetEnvironmentSpeedFactor` | `public virtual float GetEnvironmentSpeedFactor(Agent agent)` | method |
| `CalculateAIAttackOnDecideMaxValue` | `public float CalculateAIAttackOnDecideMaxValue()` | method |
| `GetWeaponInaccuracy` | `public virtual float GetWeaponInaccuracy(Agent agent, WeaponComponentData weapon, int weaponSkill)` | method |
| `GetDetachmentCostMultiplierOfAgent` | `public virtual float GetDetachmentCostMultiplierOfAgent(Agent agent, IDetachment detachment)` | method |
| `GetInteractionDistance` | `public virtual float GetInteractionDistance(Agent agent)` | method |
| `GetMaxCameraZoom` | `public virtual float GetMaxCameraZoom(Agent agent)` | method |
| `GetEffectiveSkill` | `public virtual int GetEffectiveSkill(Agent agent, SkillObject skill)` | method |
| `GetEffectiveSkillForWeapon` | `public virtual int GetEffectiveSkillForWeapon(Agent agent, WeaponComponentData weapon)` | method |
| `GetWeaponDamageMultiplier` | `public abstract float GetWeaponDamageMultiplier(Agent agent, WeaponComponentData weapon);` | method |
| `GetEquipmentStealthBonus` | `public abstract float GetEquipmentStealthBonus(Agent agent);` | method |
| `GetSneakAttackMultiplier` | `public abstract float GetSneakAttackMultiplier(Agent agent, WeaponComponentData weapon);` | method |
| `GetKnockBackResistance` | `public abstract float GetKnockBackResistance(Agent agent);` | method |
| `GetKnockDownResistance` | `public abstract float GetKnockDownResistance(Agent agent, StrikeType strikeType = StrikeType.Invalid);` | method |
| `GetDismountResistance` | `public abstract float GetDismountResistance(Agent agent);` | method |
| `GetBreatheHoldMaxDuration` | `public abstract float GetBreatheHoldMaxDuration(Agent agent, float baseBreatheHoldMaxDuration);` | method |
| `GetMissionDebugInfoForAgent` | `public virtual string GetMissionDebugInfoForAgent(Agent agent)` | method |
| `ResetAILevelMultiplier` | `public void ResetAILevelMultiplier()` | method |
| `SetAILevelMultiplier` | `public void SetAILevelMultiplier(float multiplier)` | method |
| `GetMeleeSkill` | `protected int GetMeleeSkill(Agent agent, WeaponComponentData equippedItem, WeaponComponentData secondaryItem)` | method |
| `CalculateAILevel` | `protected float CalculateAILevel(Agent agent, int relevantSkillLevel)` | method |
| `SetAiRelatedProperties` | `protected void SetAiRelatedProperties(Agent agent, AgentDrivenProperties agentDrivenProperties, WeaponComponentData equippedItem, WeaponComponentData secondaryItem)` | method |
| `SetAllWeaponInaccuracy` | `protected void SetAllWeaponInaccuracy(Agent agent, AgentDrivenProperties agentDrivenProperties, int equippedIndex, WeaponComponentData equippedWeaponComponent)` | method |
| `MaxHorizontalErrorRadian` | `protected const float MaxHorizontalErrorRadian` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
