<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CustomBattleAgentStatCalculateModel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CustomBattleAgentStatCalculateModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleAgentStatCalculateModel : AgentStatCalculateModel`
**Base:** `AgentStatCalculateModel`
**File:** `TaleWorlds.MountAndBlade/CustomBattleAgentStatCalculateModel.cs`

## 概述

`CustomBattleAgentStatCalculateModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<CustomBattleAgentStatCalculateModel>(new MyCustomBattleAgentStatCalculateModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetDifficultyModifier
```csharp
public override float GetDifficultyModifier()
```

### CanAgentRideMount
```csharp
public override bool CanAgentRideMount(Agent agent, Agent targetMount)
```

### InitializeAgentStats
```csharp
public override void InitializeAgentStats(Agent agent, Equipment spawnEquipment, AgentDrivenProperties agentDrivenProperties, AgentBuildData agentBuildData)
```

### UpdateAgentStats
```csharp
public override void UpdateAgentStats(Agent agent, AgentDrivenProperties agentDrivenProperties)
```

### GetWeaponDamageMultiplier
```csharp
public override float GetWeaponDamageMultiplier(Agent agent, WeaponComponentData weapon)
```

### GetEquipmentStealthBonus
```csharp
public override float GetEquipmentStealthBonus(Agent agent)
```

### GetSneakAttackMultiplier
```csharp
public override float GetSneakAttackMultiplier(Agent agent, WeaponComponentData weapon)
```

### GetKnockBackResistance
```csharp
public override float GetKnockBackResistance(Agent agent)
```

### GetKnockDownResistance
```csharp
public override float GetKnockDownResistance(Agent agent, StrikeType strikeType = StrikeType.Invalid)
```

### GetDismountResistance
```csharp
public override float GetDismountResistance(Agent agent)
```

### GetBreatheHoldMaxDuration
```csharp
public override float GetBreatheHoldMaxDuration(Agent agent, float baseBreatheHoldMaxDuration)
```

## 使用示例

```csharp
// CustomBattleAgentStatCalculateModel (Model) 的典型用法
Game.Current.ReplaceModel<CustomBattleAgentStatCalculateModel>(new MyCustomBattleAgentStatCalculateModel());
```

## 参见

- [完整类目录](../catalog)