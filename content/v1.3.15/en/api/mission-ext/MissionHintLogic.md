---
title: "MissionHintLogic"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionHintLogic`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionHintLogic

**Namespace:** TaleWorlds.MountAndBlade.Missions.MissionLogics
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionHintLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Missions/MissionLogics/MissionHintLogic.cs`

## Overview

`MissionHintLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `MissionHintLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ActiveHint` | `public MissionHint ActiveHint { get; }` |

## Key Methods

### SetActiveHint
`public void SetActiveHint(MissionHint hint)`

**Purpose:** Sets the value or state of `active hint`.

### Clear
`public void Clear()`

**Purpose:** Handles logic related to `clear`.

### MissionHintChangedDelegate
`public delegate void MissionHintChangedDelegate(MissionHint previousHint, MissionHint newHint)`

**Purpose:** Handles logic related to `mission hint changed delegate`.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new MissionHintLogic());
```

## See Also

- [Complete Class Catalog](../catalog)