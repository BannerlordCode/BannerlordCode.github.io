---
title: "CombatLogManager"
description: "Auto-generated class reference for CombatLogManager."
---
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

**Purpose:** Executes the PrintDebugLogForInfo logic.

```csharp
// Static call; no instance required
CombatLogManager.PrintDebugLogForInfo(attackerAgent, victimAgent, damageType, 0, 0, 0, 0, 0, 0);
```

### GenerateCombatLog
`public static void GenerateCombatLog(CombatLogData logData)`

**Purpose:** Generates an instance, data, or representation of combat log.

```csharp
// Static call; no instance required
CombatLogManager.GenerateCombatLog(logData);
```

### OnPrintCombatLogHandler
`public delegate void OnPrintCombatLogHandler(CombatLogData logData)`

**Purpose:** Invoked when the print combat log handler event is raised.

```csharp
// Obtain an instance of CombatLogManager from the subsystem API first
CombatLogManager combatLogManager = ...;
combatLogManager.OnPrintCombatLogHandler(logData);
```

## Usage Example

```csharp
var manager = CombatLogManager.Current;
```

## See Also

- [Area Index](../)