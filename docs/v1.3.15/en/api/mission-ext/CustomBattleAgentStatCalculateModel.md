<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomBattleAgentStatCalculateModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CustomBattleAgentStatCalculateModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleAgentStatCalculateModel : AgentStatCalculateModel`
**Base:** `AgentStatCalculateModel`
**File:** `TaleWorlds.MountAndBlade/CustomBattleAgentStatCalculateModel.cs`

## Overview

`CustomBattleAgentStatCalculateModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<CustomBattleAgentStatCalculateModel>(new MyCustomBattleAgentStatCalculateModel())` to change how it computes.

## Key Methods

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

## Usage Example

```csharp
// Typical usage of CustomBattleAgentStatCalculateModel (Model)
Game.Current.ReplaceModel<CustomBattleAgentStatCalculateModel>(new MyCustomBattleAgentStatCalculateModel());
```

## See Also

- [Complete Class Catalog](../catalog)