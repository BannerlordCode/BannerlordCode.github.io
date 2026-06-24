<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CombatLogManager`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CombatLogManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class CombatLogManager`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/CombatLogManager.cs`

## Overview

`CombatLogManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `CombatLogManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### PrintDebugLogForInfo
`public static void PrintDebugLogForInfo(Agent attackerAgent, Agent victimAgent, DamageTypes damageType, int speedBonus, int armorAmount, int inflictedDamage, int absorbedByArmor, sbyte collisionBone, float lostHpPercentage)`

**Purpose:** Handles logic related to `print debug log for info`.

### GenerateCombatLog
`public static void GenerateCombatLog(CombatLogData logData)`

**Purpose:** Handles logic related to `generate combat log`.

### OnPrintCombatLogHandler
`public delegate void OnPrintCombatLogHandler(CombatLogData logData)`

**Purpose:** Called when the `print combat log handler` event is raised.

## Usage Example

```csharp
var manager = CombatLogManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)