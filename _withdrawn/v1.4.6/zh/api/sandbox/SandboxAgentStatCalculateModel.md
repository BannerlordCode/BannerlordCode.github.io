---
title: "SandboxAgentStatCalculateModel"
description: "SandboxAgentStatCalculateModel：SandBox.GameComponents 的 public 类，继承 AgentStatCalculateModel；公开成员 22 个（方法 22、属性 0、字段 0）。canonical 桶 sandbox。源文件 SandBox/GameComponents/SandboxAgentStatCalculateModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SandboxAgentStatCalculateModel

**Namespace:** `SandBox.GameComponents`
**Module:** `SandBox`
**Type:** `public class SandboxAgentStatCalculateModel : AgentStatCalculateModel`
**File:** `SandBox/GameComponents/SandboxAgentStatCalculateModel.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

SandboxAgentStatCalculateModel 位于 SandBox 模块，源文件 SandBox/GameComponents/SandboxAgentStatCalculateModel.cs。它是一个 public 类，实现/继承 AgentStatCalculateModel，继承链为 SandboxAgentStatCalculateModel → AgentStatCalculateModel → MBGameModel → GameModel。public/protected 成员共 22 个：22 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SandboxAgentStatCalculateModel 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.GameComponents`，继承链 SandboxAgentStatCalculateModel → AgentStatCalculateModel → MBGameModel → GameModel。成员构成以方法为主（方法 22/22，属性 0/22），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/GameComponents/SandboxAgentStatCalculateModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetDifficultyModifier` | `public override float GetDifficultyModifier()` | 方法 |
| `CanAgentRideMount` | `public override bool CanAgentRideMount(Agent agent, Agent targetMount)` | 方法 |
| `InitializeAgentStats` | `public override void InitializeAgentStats(Agent agent, Equipment spawnEquipment, AgentDrivenProperties agentDrivenProperties, AgentBuildData agentBuildData)` | 方法 |
| `InitializeMissionEquipment` | `public override void InitializeMissionEquipment(Agent agent)` | 方法 |
| `UpdateAgentStats` | `public override void UpdateAgentStats(Agent agent, AgentDrivenProperties agentDrivenProperties)` | 方法 |
| `GetEffectiveSkill` | `public override int GetEffectiveSkill(Agent agent, SkillObject skill)` | 方法 |
| `GetWeaponDamageMultiplier` | `public override float GetWeaponDamageMultiplier(Agent agent, WeaponComponentData weapon)` | 方法 |
| `GetEquipmentStealthBonus` | `public override float GetEquipmentStealthBonus(Agent agent)` | 方法 |
| `GetSneakAttackMultiplier` | `public override float GetSneakAttackMultiplier(Agent agent, WeaponComponentData weapon)` | 方法 |
| `GetKnockBackResistance` | `public override float GetKnockBackResistance(Agent agent)` | 方法 |
| `GetKnockDownResistance` | `public override float GetKnockDownResistance(Agent agent, StrikeType strikeType = StrikeType.Invalid)` | 方法 |
| `GetDismountResistance` | `public override float GetDismountResistance(Agent agent)` | 方法 |
| `GetBreatheHoldMaxDuration` | `public override float GetBreatheHoldMaxDuration(Agent agent, float baseBreatheHoldMaxDuration)` | 方法 |
| `GetWeaponInaccuracy` | `public override float GetWeaponInaccuracy(Agent agent, WeaponComponentData weapon, int weaponSkill)` | 方法 |
| `GetInteractionDistance` | `public override float GetInteractionDistance(Agent agent)` | 方法 |
| `GetMaxCameraZoom` | `public override float GetMaxCameraZoom(Agent agent)` | 方法 |
| `List` | `public List<PerkObject>GetPerksOfAgent(CharacterObject agentCharacter, SkillObject skill = null, bool filterPartyRole = false, PartyRole partyRole = PartyRole.Personal)` | 方法 |
| `GetMissionDebugInfoForAgent` | `public override string GetMissionDebugInfoForAgent(Agent agent)` | 方法 |
| `GetEffectiveArmorEncumbrance` | `public override float GetEffectiveArmorEncumbrance(Agent agent, Equipment equipment)` | 方法 |
| `GetEffectiveMaxHealth` | `public override float GetEffectiveMaxHealth(Agent agent)` | 方法 |
| `GetEnvironmentSpeedFactor` | `public override float GetEnvironmentSpeedFactor(Agent agent)` | 方法 |
| `CalculateMaximumSpeedMultiplier` | `public static float CalculateMaximumSpeedMultiplier(int athletics, float baseWeight, float totalEncumbrance)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 AgentStatCalculateModel](../../mission-ext/AgentStatCalculateModel/)
- [同命名空间 IMissionPlayerFollowerHandler](../IMissionPlayerFollowerHandler/)
- [同命名空间 SandboxAgentApplyDamageModel](../SandboxAgentApplyDamageModel/)
- [同命名空间 SandboxAgentDecideKilledOrUnconsciousModel](../SandboxAgentDecideKilledOrUnconsciousModel/)
- [同命名空间 SandboxApplyWeatherEffectsModel](../SandboxApplyWeatherEffectsModel/)
