---
title: "ReinforcementFormationData"
description: "Auto-generated class reference for ReinforcementFormationData."
---
# ReinforcementFormationData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ReinforcementFormationData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MissionReinforcementsHelper.cs`

## Overview

`ReinforcementFormationData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `ReinforcementFormationData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### Initialize
`public void Initialize(Formation formation, uint initTime)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of ReinforcementFormationData from the subsystem API first
ReinforcementFormationData reinforcementFormationData = ...;
reinforcementFormationData.Initialize(formation, 0);
```

### AddProspectiveTroop
`public void AddProspectiveTroop(FormationClass troopClass)`

**Purpose:** **Purpose:** Adds prospective troop to the current collection or state.

```csharp
// Obtain an instance of ReinforcementFormationData from the subsystem API first
ReinforcementFormationData reinforcementFormationData = ...;
reinforcementFormationData.AddProspectiveTroop(troopClass);
```

### IsInitialized
`public bool IsInitialized(uint initTime)`

**Purpose:** **Purpose:** Determines whether the this instance is in the initialized state or condition.

```csharp
// Obtain an instance of ReinforcementFormationData from the subsystem API first
ReinforcementFormationData reinforcementFormationData = ...;
var result = reinforcementFormationData.IsInitialized(0);
```

### GetPriority
`public MissionReinforcementsHelper.ReinforcementFormationPriority GetPriority(FormationClass troopClass)`

**Purpose:** **Purpose:** Reads and returns the priority value held by the this instance.

```csharp
// Obtain an instance of ReinforcementFormationData from the subsystem API first
ReinforcementFormationData reinforcementFormationData = ...;
var result = reinforcementFormationData.GetPriority(troopClass);
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
ReinforcementFormationData entry = ...;
```

## See Also

- [Area Index](../)