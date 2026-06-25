---
title: "CombatLogData"
description: "Auto-generated class reference for CombatLogData."
---
# CombatLogData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct CombatLogData`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/CombatLogData.cs`

## Overview

`CombatLogData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `CombatLogData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `AttackProgress` | `public float AttackProgress { get; set; }` |

## Key Methods

### SetVictimAgent
`public void SetVictimAgent(Agent victimAgent)`

**Purpose:** Assigns a new value to victim agent and updates the object's internal state.

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