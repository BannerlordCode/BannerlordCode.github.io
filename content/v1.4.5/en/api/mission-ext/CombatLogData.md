---
title: "CombatLogData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CombatLogData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CombatLogData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct CombatLogData`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/CombatLogData.cs`

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

**Purpose:** Sets the value or state of `victim agent`.

## Usage Example

```csharp
var value = new CombatLogData();
```

## See Also

- [Complete Class Catalog](../catalog)