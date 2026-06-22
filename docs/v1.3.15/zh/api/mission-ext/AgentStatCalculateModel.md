<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AgentStatCalculateModel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AgentStatCalculateModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class AgentStatCalculateModel : MBGameModel<AgentStatCalculateModel>`
**Base:** `MBGameModel<AgentStatCalculateModel>`
**File:** `TaleWorlds.MountAndBlade/AgentStatCalculateModel.cs`

## 概述

> TODO: 从开发者角度补充本类的职责与典型用例。

## 主要方法

### InitializeAgentStats
```csharp
public abstract void InitializeAgentStats(Agent agent, Equipment spawnEquipment, AgentDrivenProperties agentDrivenProperties, AgentBuildData agentBuildData)
```

### InitializeMissionEquipment
```csharp
public virtual void InitializeMissionEquipment(Agent agent)
```

### InitializeAgentStatsAfterDeploymentFinished
```csharp
public virtual void InitializeAgentStatsAfterDeploymentFinished(Agent agent)
```

### InitializeMissionEquipmentAfterDeploymentFinished
```csharp
public virtual void InitializeMissionEquipmentAfterDeploymentFinished(Agent agent)
```

### UpdateAgentStats
```csharp
public abstract void UpdateAgentStats(Agent agent, AgentDrivenProperties agentDrivenProperties)
```

### GetDifficultyModifier
```csharp
public abstract float GetDifficultyModifier()
```

### CanAgentRideMount
```csharp
public abstract bool CanAgentRideMount(Agent agent, Agent targetMount)
```

### HasHeavyArmor
```csharp
public virtual bool HasHeavyArmor(Agent agent)
```

### GetEffectiveArmorEncumbrance
```csharp
public virtual float GetEffectiveArmorEncumbrance(Agent agent, Equipment equipment)
```

### GetEffectiveMaxHealth
```csharp
public virtual float GetEffectiveMaxHealth(Agent agent)
```

### GetEnvironmentSpeedFactor
```csharp
public virtual float GetEnvironmentSpeedFactor(Agent agent)
```

### CalculateAIAttackOnDecideMaxValue
```csharp
public float CalculateAIAttackOnDecideMaxValue()
```

### GetWeaponInaccuracy
```csharp
public virtual float GetWeaponInaccuracy(Agent agent, WeaponComponentData weapon, int weaponSkill)
```

### GetDetachmentCostMultiplierOfAgent
```csharp
public virtual float GetDetachmentCostMultiplierOfAgent(Agent agent, IDetachment detachment)
```

### GetInteractionDistance
```csharp
public virtual float GetInteractionDistance(Agent agent)
```

### GetMaxCameraZoom
```csharp
public virtual float GetMaxCameraZoom(Agent agent)
```

### GetEffectiveSkill
```csharp
public virtual int GetEffectiveSkill(Agent agent, SkillObject skill)
```

### GetEffectiveSkillForWeapon
```csharp
public virtual int GetEffectiveSkillForWeapon(Agent agent, WeaponComponentData weapon)
```

### GetWeaponDamageMultiplier
```csharp
public abstract float GetWeaponDamageMultiplier(Agent agent, WeaponComponentData weapon)
```

### GetEquipmentStealthBonus
```csharp
public abstract float GetEquipmentStealthBonus(Agent agent)
```

### GetSneakAttackMultiplier
```csharp
public abstract float GetSneakAttackMultiplier(Agent agent, WeaponComponentData weapon)
```

### GetKnockBackResistance
```csharp
public abstract float GetKnockBackResistance(Agent agent)
```

### GetKnockDownResistance
```csharp
public abstract float GetKnockDownResistance(Agent agent, StrikeType strikeType = StrikeType.Invalid)
```

### GetDismountResistance
```csharp
public abstract float GetDismountResistance(Agent agent)
```

### GetBreatheHoldMaxDuration
```csharp
public abstract float GetBreatheHoldMaxDuration(Agent agent, float baseBreatheHoldMaxDuration)
```

### GetMissionDebugInfoForAgent
```csharp
public virtual string GetMissionDebugInfoForAgent(Agent agent)
```

### ResetAILevelMultiplier
```csharp
public void ResetAILevelMultiplier()
```

### SetAILevelMultiplier
```csharp
public void SetAILevelMultiplier(float multiplier)
```

## 使用示例

```csharp
// TODO: 补充典型用例
```

## 参见

- [完整类目录](../catalog)