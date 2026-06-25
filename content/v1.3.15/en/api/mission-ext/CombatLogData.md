---
title: "CombatLogData"
description: "Auto-generated class reference for CombatLogData."
---
# CombatLogData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct CombatLogData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/CombatLogData.cs`

## Overview

`CombatLogData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `CombatLogData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `TotalDamage` | `public int TotalDamage { get; set; }` |
| `AttackProgress` | `public float AttackProgress { get; set; }` |

## Key Methods

### GetLogString
`public List<ValueTuple<string, uint>> GetLogString()`

**Purpose:** **Purpose:** Reads and returns the log string value held by the this instance.

```csharp
// Obtain an instance of CombatLogData from the subsystem API first
CombatLogData combatLogData = ...;
var result = combatLogData.GetLogString();
```

### SetVictimAgent
`public void SetVictimAgent(Agent victimAgent)`

**Purpose:** **Purpose:** Assigns a new value to victim agent and updates the object's internal state.

```csharp
// Obtain an instance of CombatLogData from the subsystem API first
CombatLogData combatLogData = ...;
combatLogData.SetVictimAgent(victimAgent);
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
CombatLogData entry = ...;
```

## See Also

- [Area Index](../)