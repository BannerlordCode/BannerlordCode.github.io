<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AgentStatCalculateModel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AgentStatCalculateModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class AgentStatCalculateModel : MBGameModel<AgentStatCalculateModel>`
**Base:** `MBGameModel<AgentStatCalculateModel>`
**File:** `TaleWorlds.MountAndBlade/AgentStatCalculateModel.cs`

## 概述

`AgentStatCalculateModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `AgentStatCalculateModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### InitializeAgentStats
`public abstract void InitializeAgentStats(Agent agent, Equipment spawnEquipment, AgentDrivenProperties agentDrivenProperties, AgentBuildData agentBuildData)`

**用途 / Purpose:** 初始化 `agent stats` 的状态、资源或绑定。

### InitializeMissionEquipment
`public virtual void InitializeMissionEquipment(Agent agent)`

**用途 / Purpose:** 初始化 `mission equipment` 的状态、资源或绑定。

### InitializeAgentStatsAfterDeploymentFinished
`public virtual void InitializeAgentStatsAfterDeploymentFinished(Agent agent)`

**用途 / Purpose:** 初始化 `agent stats after deployment finished` 的状态、资源或绑定。

### InitializeMissionEquipmentAfterDeploymentFinished
`public virtual void InitializeMissionEquipmentAfterDeploymentFinished(Agent agent)`

**用途 / Purpose:** 初始化 `mission equipment after deployment finished` 的状态、资源或绑定。

### UpdateAgentStats
`public abstract void UpdateAgentStats(Agent agent, AgentDrivenProperties agentDrivenProperties)`

**用途 / Purpose:** 更新 `agent stats` 的状态或数据。

### GetDifficultyModifier
`public abstract float GetDifficultyModifier()`

**用途 / Purpose:** 获取 `difficulty modifier` 的当前值。

### CanAgentRideMount
`public abstract bool CanAgentRideMount(Agent agent, Agent targetMount)`

**用途 / Purpose:** 判断当前对象是否可以执行 `agent ride mount`。

### HasHeavyArmor
`public virtual bool HasHeavyArmor(Agent agent)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `heavy armor`。

### GetEffectiveArmorEncumbrance
`public virtual float GetEffectiveArmorEncumbrance(Agent agent, Equipment equipment)`

**用途 / Purpose:** 获取 `effective armor encumbrance` 的当前值。

### GetEffectiveMaxHealth
`public virtual float GetEffectiveMaxHealth(Agent agent)`

**用途 / Purpose:** 获取 `effective max health` 的当前值。

### GetEnvironmentSpeedFactor
`public virtual float GetEnvironmentSpeedFactor(Agent agent)`

**用途 / Purpose:** 获取 `environment speed factor` 的当前值。

### CalculateAIAttackOnDecideMaxValue
`public float CalculateAIAttackOnDecideMaxValue()`

**用途 / Purpose:** 处理 `calculate a i attack on decide max value` 相关逻辑。

### GetWeaponInaccuracy
`public virtual float GetWeaponInaccuracy(Agent agent, WeaponComponentData weapon, int weaponSkill)`

**用途 / Purpose:** 获取 `weapon inaccuracy` 的当前值。

### GetDetachmentCostMultiplierOfAgent
`public virtual float GetDetachmentCostMultiplierOfAgent(Agent agent, IDetachment detachment)`

**用途 / Purpose:** 获取 `detachment cost multiplier of agent` 的当前值。

### GetInteractionDistance
`public virtual float GetInteractionDistance(Agent agent)`

**用途 / Purpose:** 获取 `interaction distance` 的当前值。

### GetMaxCameraZoom
`public virtual float GetMaxCameraZoom(Agent agent)`

**用途 / Purpose:** 获取 `max camera zoom` 的当前值。

### GetEffectiveSkill
`public virtual int GetEffectiveSkill(Agent agent, SkillObject skill)`

**用途 / Purpose:** 获取 `effective skill` 的当前值。

### GetEffectiveSkillForWeapon
`public virtual int GetEffectiveSkillForWeapon(Agent agent, WeaponComponentData weapon)`

**用途 / Purpose:** 获取 `effective skill for weapon` 的当前值。

### GetWeaponDamageMultiplier
`public abstract float GetWeaponDamageMultiplier(Agent agent, WeaponComponentData weapon)`

**用途 / Purpose:** 获取 `weapon damage multiplier` 的当前值。

### GetEquipmentStealthBonus
`public abstract float GetEquipmentStealthBonus(Agent agent)`

**用途 / Purpose:** 获取 `equipment stealth bonus` 的当前值。

### GetSneakAttackMultiplier
`public abstract float GetSneakAttackMultiplier(Agent agent, WeaponComponentData weapon)`

**用途 / Purpose:** 获取 `sneak attack multiplier` 的当前值。

### GetKnockBackResistance
`public abstract float GetKnockBackResistance(Agent agent)`

**用途 / Purpose:** 获取 `knock back resistance` 的当前值。

### GetKnockDownResistance
`public abstract float GetKnockDownResistance(Agent agent, StrikeType strikeType = StrikeType.Invalid)`

**用途 / Purpose:** 获取 `knock down resistance` 的当前值。

### GetDismountResistance
`public abstract float GetDismountResistance(Agent agent)`

**用途 / Purpose:** 获取 `dismount resistance` 的当前值。

### GetBreatheHoldMaxDuration
`public abstract float GetBreatheHoldMaxDuration(Agent agent, float baseBreatheHoldMaxDuration)`

**用途 / Purpose:** 获取 `breathe hold max duration` 的当前值。

### GetMissionDebugInfoForAgent
`public virtual string GetMissionDebugInfoForAgent(Agent agent)`

**用途 / Purpose:** 获取 `mission debug info for agent` 的当前值。

### ResetAILevelMultiplier
`public void ResetAILevelMultiplier()`

**用途 / Purpose:** 将 `a i level multiplier` 重置为初始状态。

### SetAILevelMultiplier
`public void SetAILevelMultiplier(float multiplier)`

**用途 / Purpose:** 设置 `a i level multiplier` 的值或状态。

## 使用示例

```csharp
var implementation = new CustomAgentStatCalculateModel();
```

## 参见

- [完整类目录](../catalog)