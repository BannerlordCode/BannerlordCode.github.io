---
title: "TeamAISiegeComponent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TeamAISiegeComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TeamAISiegeComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class TeamAISiegeComponent : TeamAIComponent`
**Base:** `TeamAIComponent`
**File:** `TaleWorlds.MountAndBlade/TeamAISiegeComponent.cs`

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
| `Ladders` | `public MBReadOnlyList<SiegeLadder> Ladders { get; }` |
| `AreLaddersReady` | `public bool AreLaddersReady { get; }` |
| `DifficultNavmeshIDs` | `public List<int> DifficultNavmeshIDs { get; }` |

## Key Methods

### OnMissionFinalize
`public static void OnMissionFinalize()`

**Purpose:** Called when the `mission finalize` event is raised.

### CalculateIsChargePastWallsApplicable
`public bool CalculateIsChargePastWallsApplicable(FormationAI.BehaviorSide side)`

**Purpose:** Handles logic related to `calculate is charge past walls applicable`.

### SetAreLaddersReady
`public void SetAreLaddersReady(bool areLaddersReady)`

**Purpose:** Sets the value or state of `are ladders ready`.

### CalculateIsAnyLaneOpenToGetInside
`public bool CalculateIsAnyLaneOpenToGetInside()`

**Purpose:** Handles logic related to `calculate is any lane open to get inside`.

### CalculateIsAnyLaneOpenToGoOutside
`public bool CalculateIsAnyLaneOpenToGoOutside()`

**Purpose:** Handles logic related to `calculate is any lane open to go outside`.

### IsPrimarySiegeWeaponNavmeshFaceId
`public bool IsPrimarySiegeWeaponNavmeshFaceId(int id)`

**Purpose:** Handles logic related to `is primary siege weapon navmesh face id`.

### IsFormationGroupInsideCastle
`public static bool IsFormationGroupInsideCastle(MBList<Formation> formationGroup, bool includeOnlyPositionedUnits, float thresholdPercentage = 0.4f)`

**Purpose:** Handles logic related to `is formation group inside castle`.

### IsFormationInsideCastle
`public static bool IsFormationInsideCastle(Formation formation, bool includeOnlyPositionedUnits, float thresholdPercentage = 0.4f)`

**Purpose:** Handles logic related to `is formation inside castle`.

### IsCastleBreached
`public bool IsCastleBreached()`

**Purpose:** Handles logic related to `is castle breached`.

### OnDeploymentFinished
`public override void OnDeploymentFinished()`

**Purpose:** Called when the `deployment finished` event is raised.

## Usage Example

```csharp
var implementation = new CustomTeamAISiegeComponent();
```

## See Also

- [Complete Class Catalog](../catalog)