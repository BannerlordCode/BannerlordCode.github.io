---
title: "TeamAISiegeComponent"
description: "Auto-generated class reference for TeamAISiegeComponent."
---
# TeamAISiegeComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class TeamAISiegeComponent : TeamAIComponent`
**Base:** `TeamAIComponent`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/TeamAISiegeComponent.cs`

## Overview

`TeamAISiegeComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `TeamAISiegeComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `SiegeLanes` | `public static List<SiegeLane> SiegeLanes { get; }` |
| `QuerySystem` | `public static SiegeQuerySystem QuerySystem { get; set; }` |
| `OuterGate` | `public CastleGate OuterGate { get; }` |
| `PrimarySiegeWeapons` | `public List<IPrimarySiegeWeapon> PrimarySiegeWeapons { get; }` |
| `InnerGate` | `public CastleGate InnerGate { get; }` |
| `AreLaddersReady` | `public bool AreLaddersReady { get; }` |
| `DifficultNavmeshIDs` | `public List<int> DifficultNavmeshIDs { get; }` |

## Key Methods

### OnMissionFinalize
`public static void OnMissionFinalize()`

**Purpose:** Invoked when the mission finalize event is raised.

```csharp
// Static call; no instance required
TeamAISiegeComponent.OnMissionFinalize();
```

### CalculateIsChargePastWallsApplicable
`public bool CalculateIsChargePastWallsApplicable(FormationAI.BehaviorSide side)`

**Purpose:** Calculates the current value or result of is charge past walls applicable.

```csharp
// Obtain an instance of TeamAISiegeComponent from the subsystem API first
TeamAISiegeComponent teamAISiegeComponent = ...;
var result = teamAISiegeComponent.CalculateIsChargePastWallsApplicable(side);
```

### SetAreLaddersReady
`public void SetAreLaddersReady(bool areLaddersReady)`

**Purpose:** Assigns a new value to are ladders ready and updates the object's internal state.

```csharp
// Obtain an instance of TeamAISiegeComponent from the subsystem API first
TeamAISiegeComponent teamAISiegeComponent = ...;
teamAISiegeComponent.SetAreLaddersReady(false);
```

### CalculateIsAnyLaneOpenToGetInside
`public bool CalculateIsAnyLaneOpenToGetInside()`

**Purpose:** Calculates the current value or result of is any lane open to get inside.

```csharp
// Obtain an instance of TeamAISiegeComponent from the subsystem API first
TeamAISiegeComponent teamAISiegeComponent = ...;
var result = teamAISiegeComponent.CalculateIsAnyLaneOpenToGetInside();
```

### CalculateIsAnyLaneOpenToGoOutside
`public bool CalculateIsAnyLaneOpenToGoOutside()`

**Purpose:** Calculates the current value or result of is any lane open to go outside.

```csharp
// Obtain an instance of TeamAISiegeComponent from the subsystem API first
TeamAISiegeComponent teamAISiegeComponent = ...;
var result = teamAISiegeComponent.CalculateIsAnyLaneOpenToGoOutside();
```

### IsPrimarySiegeWeaponNavmeshFaceId
`public bool IsPrimarySiegeWeaponNavmeshFaceId(int id)`

**Purpose:** Determines whether the this instance is in the primary siege weapon navmesh face id state or condition.

```csharp
// Obtain an instance of TeamAISiegeComponent from the subsystem API first
TeamAISiegeComponent teamAISiegeComponent = ...;
var result = teamAISiegeComponent.IsPrimarySiegeWeaponNavmeshFaceId(0);
```

### IsFormationGroupInsideCastle
`public static bool IsFormationGroupInsideCastle(MBList<Formation> formationGroup, bool includeOnlyPositionedUnits, float thresholdPercentage = 0.4f)`

**Purpose:** Determines whether the this instance is in the formation group inside castle state or condition.

```csharp
// Static call; no instance required
TeamAISiegeComponent.IsFormationGroupInsideCastle(formationGroup, false, 0);
```

### IsFormationInsideCastle
`public static bool IsFormationInsideCastle(Formation formation, bool includeOnlyPositionedUnits, float thresholdPercentage = 0.4f)`

**Purpose:** Determines whether the this instance is in the formation inside castle state or condition.

```csharp
// Static call; no instance required
TeamAISiegeComponent.IsFormationInsideCastle(formation, false, 0);
```

### IsCastleBreached
`public bool IsCastleBreached()`

**Purpose:** Determines whether the this instance is in the castle breached state or condition.

```csharp
// Obtain an instance of TeamAISiegeComponent from the subsystem API first
TeamAISiegeComponent teamAISiegeComponent = ...;
var result = teamAISiegeComponent.IsCastleBreached();
```

### OnDeploymentFinished
`public override void OnDeploymentFinished()`

**Purpose:** Invoked when the deployment finished event is raised.

```csharp
// Obtain an instance of TeamAISiegeComponent from the subsystem API first
TeamAISiegeComponent teamAISiegeComponent = ...;
teamAISiegeComponent.OnDeploymentFinished();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
TeamAISiegeComponent instance = ...;
```

## See Also

- [Area Index](../)