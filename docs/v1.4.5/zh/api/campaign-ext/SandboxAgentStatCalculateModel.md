<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SandboxAgentStatCalculateModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SandboxAgentStatCalculateModel

**Namespace:** SandBox.GameComponents
**Module:** SandBox.GameComponents
**Type:** `public class SandboxAgentStatCalculateModel : AgentStatCalculateModel`
**Base:** `AgentStatCalculateModel`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.GameComponents/SandboxAgentStatCalculateModel.cs`

## 概述

`SandboxAgentStatCalculateModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `SandboxAgentStatCalculateModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetDifficultyModifier
`public override float GetDifficultyModifier()`

**用途 / Purpose:** 获取 `difficulty modifier` 的当前值。

### CanAgentRideMount
`public override bool CanAgentRideMount(Agent agent, Agent targetMount)`

**用途 / Purpose:** 判断当前对象是否可以执行 `agent ride mount`。

### InitializeAgentStats
`public override void InitializeAgentStats(Agent agent, Equipment spawnEquipment, AgentDrivenProperties agentDrivenProperties, AgentBuildData agentBuildData)`

**用途 / Purpose:** 初始化 `agent stats` 的状态、资源或绑定。

### InitializeMissionEquipment
`public override void InitializeMissionEquipment(Agent agent)`

**用途 / Purpose:** 初始化 `mission equipment` 的状态、资源或绑定。

### UpdateAgentStats
`public override void UpdateAgentStats(Agent agent, AgentDrivenProperties agentDrivenProperties)`

**用途 / Purpose:** 更新 `agent stats` 的状态或数据。

### GetEffectiveSkill
`public override int GetEffectiveSkill(Agent agent, SkillObject skill)`

**用途 / Purpose:** 获取 `effective skill` 的当前值。

### GetWeaponDamageMultiplier
`public override float GetWeaponDamageMultiplier(Agent agent, WeaponComponentData weapon)`

**用途 / Purpose:** 获取 `weapon damage multiplier` 的当前值。

### GetEquipmentStealthBonus
`public override float GetEquipmentStealthBonus(Agent agent)`

**用途 / Purpose:** 获取 `equipment stealth bonus` 的当前值。

### GetSneakAttackMultiplier
`public override float GetSneakAttackMultiplier(Agent agent, WeaponComponentData weapon)`

**用途 / Purpose:** 获取 `sneak attack multiplier` 的当前值。

### GetKnockBackResistance
`public override float GetKnockBackResistance(Agent agent)`

**用途 / Purpose:** 获取 `knock back resistance` 的当前值。

### GetKnockDownResistance
`public override float GetKnockDownResistance(Agent agent, StrikeType strikeType = (StrikeType)(-1))`

**用途 / Purpose:** 获取 `knock down resistance` 的当前值。

### GetDismountResistance
`public override float GetDismountResistance(Agent agent)`

**用途 / Purpose:** 获取 `dismount resistance` 的当前值。

### GetBreatheHoldMaxDuration
`public override float GetBreatheHoldMaxDuration(Agent agent, float baseBreatheHoldMaxDuration)`

**用途 / Purpose:** 获取 `breathe hold max duration` 的当前值。

### GetWeaponInaccuracy
`public override float GetWeaponInaccuracy(Agent agent, WeaponComponentData weapon, int weaponSkill)`

**用途 / Purpose:** 获取 `weapon inaccuracy` 的当前值。

### GetInteractionDistance
`public override float GetInteractionDistance(Agent agent)`

**用途 / Purpose:** 获取 `interaction distance` 的当前值。

### GetMaxCameraZoom
`public override float GetMaxCameraZoom(Agent agent)`

**用途 / Purpose:** 获取 `max camera zoom` 的当前值。

### GetPerksOfAgent
`public List<PerkObject> GetPerksOfAgent(CharacterObject agentCharacter, SkillObject skill = null, bool filterPartyRole = false, PartyRole partyRole = (PartyRole)12)`

**用途 / Purpose:** 获取 `perks of agent` 的当前值。

### GetMissionDebugInfoForAgent
`public override string GetMissionDebugInfoForAgent(Agent agent)`

**用途 / Purpose:** 获取 `mission debug info for agent` 的当前值。

### GetEffectiveArmorEncumbrance
`public override float GetEffectiveArmorEncumbrance(Agent agent, Equipment equipment)`

**用途 / Purpose:** 获取 `effective armor encumbrance` 的当前值。

### GetEffectiveMaxHealth
`public override float GetEffectiveMaxHealth(Agent agent)`

**用途 / Purpose:** 获取 `effective max health` 的当前值。

### GetEnvironmentSpeedFactor
`public override float GetEnvironmentSpeedFactor(Agent agent)`

**用途 / Purpose:** 获取 `environment speed factor` 的当前值。

### CalculateMaximumSpeedMultiplier
`public static float CalculateMaximumSpeedMultiplier(int athletics, float baseWeight, float totalEncumbrance)`

**用途 / Purpose:** 处理 `calculate maximum speed multiplier` 相关逻辑。

## 使用示例

```csharp
Game.Current.ReplaceModel<SandboxAgentStatCalculateModel>(new MySandboxAgentStatCalculateModel());
```

## 参见

- [完整类目录](../catalog)