<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerAgentStatCalculateModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerAgentStatCalculateModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerAgentStatCalculateModel : AgentStatCalculateModel`
**Base:** `AgentStatCalculateModel`
**File:** `TaleWorlds.MountAndBlade/MultiplayerAgentStatCalculateModel.cs`

## Overview

`MultiplayerAgentStatCalculateModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<MultiplayerAgentStatCalculateModel>(new MyMultiplayerAgentStatCalculateModel())` to change how it computes.

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

### GetWeaponInaccuracy
```csharp
public override float GetWeaponInaccuracy(Agent agent, WeaponComponentData weapon, int weaponSkill)
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

### UpdateAgentStats
```csharp
public override void UpdateAgentStats(Agent agent, AgentDrivenProperties agentDrivenProperties)
```

### GetEffectiveSkillForWeapon
```csharp
public override int GetEffectiveSkillForWeapon(Agent agent, WeaponComponentData weapon)
```

### CalculateMaximumSpeedMultiplier
```csharp
public static float CalculateMaximumSpeedMultiplier(Agent agent)
```

## Usage Example

```csharp
// Typical usage of MultiplayerAgentStatCalculateModel (Model)
Game.Current.ReplaceModel<MultiplayerAgentStatCalculateModel>(new MyMultiplayerAgentStatCalculateModel());
```

## See Also

- [Complete Class Catalog](../catalog)