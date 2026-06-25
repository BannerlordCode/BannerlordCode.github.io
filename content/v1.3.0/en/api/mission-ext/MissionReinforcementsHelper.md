---
title: "MissionReinforcementsHelper"
description: "Auto-generated class reference for MissionReinforcementsHelper."
---
# MissionReinforcementsHelper

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MissionReinforcementsHelper`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MissionReinforcementsHelper.cs`

## Overview

`MissionReinforcementsHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `MissionReinforcementsHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnMissionStart
`public static void OnMissionStart()`

**Purpose:** **Purpose:** Invoked when the mission start event is raised.

```csharp
// Static call; no instance required
MissionReinforcementsHelper.OnMissionStart();
```

### GetReinforcementAssignments
`public unsafe static List<ValueTuple<IAgentOriginBase, int>> GetReinforcementAssignments(BattleSideEnum battleSide, List<IAgentOriginBase> troopOrigins)`

**Purpose:** **Purpose:** Reads and returns the reinforcement assignments value held by the this instance.

```csharp
// Static call; no instance required
MissionReinforcementsHelper.GetReinforcementAssignments(battleSide, troopOrigins);
```

### OnMissionEnd
`public static void OnMissionEnd()`

**Purpose:** **Purpose:** Invoked when the mission end event is raised.

```csharp
// Static call; no instance required
MissionReinforcementsHelper.OnMissionEnd();
```

### Compare
`public int Compare(MissionReinforcementsHelper.ReinforcementFormationPriority left, MissionReinforcementsHelper.ReinforcementFormationPriority right)`

**Purpose:** **Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of MissionReinforcementsHelper from the subsystem API first
MissionReinforcementsHelper missionReinforcementsHelper = ...;
var result = missionReinforcementsHelper.Compare(left, right);
```

### Initialize
`public void Initialize(Formation formation, uint initTime)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of MissionReinforcementsHelper from the subsystem API first
MissionReinforcementsHelper missionReinforcementsHelper = ...;
missionReinforcementsHelper.Initialize(formation, 0);
```

### AddProspectiveTroop
`public void AddProspectiveTroop(FormationClass troopClass)`

**Purpose:** **Purpose:** Adds prospective troop to the current collection or state.

```csharp
// Obtain an instance of MissionReinforcementsHelper from the subsystem API first
MissionReinforcementsHelper missionReinforcementsHelper = ...;
missionReinforcementsHelper.AddProspectiveTroop(troopClass);
```

### IsInitialized
`public bool IsInitialized(uint initTime)`

**Purpose:** **Purpose:** Determines whether the this instance is in the initialized state or condition.

```csharp
// Obtain an instance of MissionReinforcementsHelper from the subsystem API first
MissionReinforcementsHelper missionReinforcementsHelper = ...;
var result = missionReinforcementsHelper.IsInitialized(0);
```

### GetPriority
`public MissionReinforcementsHelper.ReinforcementFormationPriority GetPriority(FormationClass troopClass)`

**Purpose:** **Purpose:** Reads and returns the priority value held by the this instance.

```csharp
// Obtain an instance of MissionReinforcementsHelper from the subsystem API first
MissionReinforcementsHelper missionReinforcementsHelper = ...;
var result = missionReinforcementsHelper.GetPriority(troopClass);
```

## Usage Example

```csharp
MissionReinforcementsHelper.Initialize();
```

## See Also

- [Area Index](../)