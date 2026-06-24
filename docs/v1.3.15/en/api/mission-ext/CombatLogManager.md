
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CombatLogManager`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CombatLogManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** public static class CombatLogManager
**Base:** none
**File:** `TaleWorlds.MountAndBlade/CombatLogManager.cs`

## Overview

`CombatLogManager` produces combat log entries — the kill/damage feed shown in-mission. Mods call `GenerateCombatLog` to emit custom notifications and subscribe to `OnPrintCombatLogHandler` to react to or transform log output. Use `PrintDebugLogForInfo` for diagnostics.

## Mental Model

Treat `CombatLogManager` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

## Key Methods

### PrintDebugLogForInfo
```csharp
public static void PrintDebugLogForInfo(Agent attackerAgent, Agent victimAgent, DamageTypes damageType, int speedBonus, int armorAmount, int inflictedDamage, int absorbedByArmor, sbyte collisionBone, float lostHpPercentage)
```

### GenerateCombatLog
```csharp
public static void GenerateCombatLog(CombatLogData logData)
```

### OnPrintCombatLogHandler
```csharp
public delegate void OnPrintCombatLogHandler(CombatLogData logData)
```

## Usage Example

```csharp
// Emit a custom combat-log line when your scripted event triggers
CombatLogManager.GenerateCombatLog(
    new CombatLogData
    {
        AttackerName = attacker.Name,
        VictimName = victim.Name,
        DamageType = DamageType.Blunt,
        InflictedDamage = 50,
        IsVictimAgentDead = false
    });

// React to any printed log
CombatLogManager.OnPrintCombatLogHandler += data =>
{
    // record, filter, or rewrite the entry
};
```

## See Also

- [Complete Class Catalog](../catalog)